"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  const image_url = (formData.get("image_url") as string)?.trim();
  const alt = (formData.get("alt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();

  if (!title) return { error: "Judul berita wajib diisi." };

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
  const image_url = (formData.get("image_url") as string)?.trim();
  const alt = (formData.get("alt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();

  if (!title) return { error: "Judul berita wajib diisi." };

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
  const { error } = await supabase.from("berita").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
}
