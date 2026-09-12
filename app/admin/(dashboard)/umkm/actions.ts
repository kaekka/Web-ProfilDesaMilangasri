"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUmkmAction(
  _prevState: { error?: string } | null | void,
  formData: FormData
) {
  const supabase = await createClient();

  const nama = (formData.get("nama") as string)?.trim();
  const pemilik = (formData.get("pemilik") as string)?.trim();
  const kategori = (formData.get("kategori") as string)?.trim();
  const deskripsi = (formData.get("deskripsi") as string)?.trim();
  const produk = (formData.get("produk") as string)?.trim();
  const kontak = (formData.get("kontak") as string)?.trim();
  const alamat = (formData.get("alamat") as string)?.trim();
  const image_url = (formData.get("image_url") as string)?.trim();
  const maps_url = (formData.get("maps_url") as string)?.trim();

  if (!nama) return { error: "Nama UMKM wajib diisi." };

  const { error } = await supabase.from("umkm").insert({
    nama,
    pemilik,
    kategori,
    deskripsi,
    produk,
    kontak,
    alamat,
    image_url,
    maps_url,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/umkm");
  redirect("/admin/umkm");
}

export async function updateUmkmAction(
  id: string,
  _prevState: { error?: string } | null | void,
  formData: FormData
) {
  const supabase = await createClient();

  const nama = (formData.get("nama") as string)?.trim();
  const pemilik = (formData.get("pemilik") as string)?.trim();
  const kategori = (formData.get("kategori") as string)?.trim();
  const deskripsi = (formData.get("deskripsi") as string)?.trim();
  const produk = (formData.get("produk") as string)?.trim();
  const kontak = (formData.get("kontak") as string)?.trim();
  const alamat = (formData.get("alamat") as string)?.trim();
  const image_url = (formData.get("image_url") as string)?.trim();
  const maps_url = (formData.get("maps_url") as string)?.trim();

  if (!nama) return { error: "Nama UMKM wajib diisi." };

  const { error } = await supabase
    .from("umkm")
    .update({ nama, pemilik, kategori, deskripsi, produk, kontak, alamat, image_url, maps_url })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/umkm");
  redirect("/admin/umkm");
}

export async function deleteUmkmAction(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("umkm").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/umkm");
}
