-- =============================================================
-- Migration: Buat tabel berita & umkm untuk Website Desa Milangasri
-- Jalankan script ini di Supabase Dashboard > SQL Editor
-- =============================================================

-- ── Tabel Berita ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS berita (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         TEXT UNIQUE NOT NULL,
  title        TEXT NOT NULL,
  description  TEXT,
  category     TEXT,
  date         TEXT,
  image_url    TEXT,
  alt          TEXT,
  content      TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE berita ENABLE ROW LEVEL SECURITY;

-- Public read (berita boleh dibaca semua orang via anon key)
CREATE POLICY "berita_public_read"
  ON berita FOR SELECT
  TO anon, authenticated
  USING (true);

-- Hanya authenticated (admin) yang bisa insert/update/delete
CREATE POLICY "berita_admin_insert"
  ON berita FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "berita_admin_update"
  ON berita FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "berita_admin_delete"
  ON berita FOR DELETE
  TO authenticated
  USING (true);

-- ── Tabel UMKM ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS umkm (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nama        TEXT NOT NULL,
  pemilik     TEXT,
  kategori    TEXT,
  deskripsi   TEXT,
  produk      TEXT,
  kontak      TEXT,
  alamat      TEXT,
  image_url   TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE umkm ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "umkm_public_read"
  ON umkm FOR SELECT
  TO anon, authenticated
  USING (true);

-- Hanya authenticated (admin) yang bisa insert/update/delete
CREATE POLICY "umkm_admin_insert"
  ON umkm FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "umkm_admin_update"
  ON umkm FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "umkm_admin_delete"
  ON umkm FOR DELETE
  TO authenticated
  USING (true);

-- ── Grant akses ke anon & authenticated ────────────────────────
GRANT SELECT ON berita TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON berita TO authenticated;

GRANT SELECT ON umkm TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON umkm TO authenticated;
