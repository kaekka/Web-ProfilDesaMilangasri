"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage, deleteImage } from "@/utils/supabase/storage";

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
  let image_url = (formData.get("image_url") as string)?.trim() || null;
  const image = formData.get("image") as File | null;
  const maps_url = (formData.get("maps_url") as string)?.trim();

  if (!nama) return { error: "Nama UMKM wajib diisi." };

  if (image && image.size > 0) {
    const uploadedUrl = await uploadImage(image);
    if (uploadedUrl) {
      image_url = uploadedUrl;
    }
  }

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
  let image_url = (formData.get("image_url") as string)?.trim() || null;
  const image = formData.get("image") as File | null;
  const maps_url = (formData.get("maps_url") as string)?.trim();

  if (!nama) return { error: "Nama UMKM wajib diisi." };

  // Get current UMKM to find old image
  const { data: currentUmkm } = await supabase
    .from("umkm")
    .select("image_url")
    .eq("id", id)
    .single();

  if (image && image.size > 0) {
    const uploadedUrl = await uploadImage(image);
    if (uploadedUrl) {
      image_url = uploadedUrl;
      // If new image uploaded successfully and there was an old image, delete old image
      if (currentUmkm?.image_url) {
        await deleteImage(currentUmkm.image_url);
      }
    }
  } else if (!image_url && currentUmkm?.image_url) {
      image_url = currentUmkm.image_url;
  }

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
  
  // Get image_url before deleting
  const { data: umkm } = await supabase
    .from("umkm")
    .select("image_url")
    .eq("id", id)
    .single();
    
  const { error } = await supabase.from("umkm").delete().eq("id", id);
  if (error) throw new Error(error.message);

  // Delete image from storage
  if (umkm?.image_url) {
    await deleteImage(umkm.image_url);
  }

  revalidatePath("/admin/umkm");
}
