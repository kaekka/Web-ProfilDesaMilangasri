"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage, deleteImage } from "@/utils/supabase/storage";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .slice(0, 80);
}

export async function createBeritaAction(
  _prevState: { error?: string } | null | void,
  formData: FormData
) {
  const supabase = await createClient();

  const title = (formData.get("title") as string)?.trim();
  const description = (formData.get("description") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();
  const date = (formData.get("date") as string)?.trim();
  let image_url = (formData.get("image_url") as string)?.trim() || null;
  const image = formData.get("image") as File | null;
  const alt = (formData.get("alt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();

  if (!title) return { error: "Judul berita wajib diisi." };

  if (image && image.size > 0) {
    const uploadedUrl = await uploadImage(image);
    if (uploadedUrl) {
      image_url = uploadedUrl;
    }
  }

  let slug = generateSlug(title);

  // Make slug unique if needed
  const { data: existing } = await supabase
    .from("berita")
    .select("slug")
    .eq("slug", slug)
    .maybeSingle();

  if (existing) {
    slug = `${slug}-${Date.now()}`;
  }

  const { error } = await supabase.from("berita").insert({
    slug,
    title,
    description,
    category,
    date,
    image_url,
    alt,
    content,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
  redirect("/admin/berita");
}

export async function updateBeritaAction(
  id: string,
  _prevState: { error?: string } | null | void,
  formData: FormData
) {
  const supabase = await createClient();

  const title = (formData.get("title") as string)?.trim();
  const description = (formData.get("description") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();
  const date = (formData.get("date") as string)?.trim();
  let image_url = (formData.get("image_url") as string)?.trim() || null;
  const image = formData.get("image") as File | null;
  const alt = (formData.get("alt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();

  if (!title) return { error: "Judul berita wajib diisi." };

  // Get current berita to find old image
  const { data: currentBerita } = await supabase
    .from("berita")
    .select("image_url")
    .eq("id", id)
    .single();

  if (image && image.size > 0) {
    const uploadedUrl = await uploadImage(image);
    if (uploadedUrl) {
      image_url = uploadedUrl;
      // If new image uploaded successfully and there was an old image, delete old image
      if (currentBerita?.image_url) {
        await deleteImage(currentBerita.image_url);
      }
    }
  } else if (!image_url && currentBerita?.image_url) {
      image_url = currentBerita.image_url;
  }

  const { error } = await supabase
    .from("berita")
    .update({ title, description, category, date, image_url, alt, content })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
  redirect("/admin/berita");
}

export async function deleteBeritaAction(id: string) {
  const supabase = await createClient();
  
  // Get image_url before deleting
  const { data: berita } = await supabase
    .from("berita")
    .select("image_url")
    .eq("id", id)
    .single();
    
  const { error } = await supabase.from("berita").delete().eq("id", id);
  if (error) throw new Error(error.message);

  // Delete image from storage
  if (berita?.image_url) {
    await deleteImage(berita.image_url);
  }

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
}
