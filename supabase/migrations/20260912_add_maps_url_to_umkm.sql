-- Tambah kolom maps_url ke tabel umkm
-- Jalankan di Supabase Dashboard > SQL Editor

ALTER TABLE umkm ADD COLUMN IF NOT EXISTS maps_url TEXT;
