-- =============================================================
-- Migration: Tambah kolom updated_at ke tabel berita & umkm
-- Jalankan script ini di Supabase Dashboard > SQL Editor
-- =============================================================

-- Tambah kolom updated_at ke tabel berita
ALTER TABLE berita
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL;

-- Set nilai awal updated_at sama dengan created_at untuk data lama
UPDATE berita SET updated_at = created_at WHERE updated_at IS NOT NULL;

-- Tambah kolom updated_at ke tabel umkm
ALTER TABLE umkm
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL;

-- Set nilai awal updated_at sama dengan created_at untuk data lama
UPDATE umkm SET updated_at = created_at WHERE updated_at IS NOT NULL;

-- Fungsi trigger yang reusable
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger untuk tabel berita
DROP TRIGGER IF EXISTS berita_set_updated_at ON berita;
CREATE TRIGGER berita_set_updated_at
  BEFORE UPDATE ON berita
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();

-- Trigger untuk tabel umkm
DROP TRIGGER IF EXISTS umkm_set_updated_at ON umkm;
CREATE TRIGGER umkm_set_updated_at
  BEFORE UPDATE ON umkm
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();
