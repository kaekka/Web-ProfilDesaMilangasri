import { createClient } from "@/utils/supabase/server";

export async function uploadImage(file: File, bucket: string = "public_images"): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const supabase = await createClient();
  
  const fileExt = file.name.split(".").pop() || "jpeg";
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return publicUrlData.publicUrl;
}

export async function deleteImage(imageUrl: string, bucket: string = "public_images") {
  if (!imageUrl) return;
  
  // Only attempt to delete if it's a Supabase storage URL from our bucket
  if (!imageUrl.includes(`/storage/v1/object/public/${bucket}/`)) return;

  const supabase = await createClient();
  
  // Extract filename from URL
  const parts = imageUrl.split(`/storage/v1/object/public/${bucket}/`);
  if (parts.length < 2) return;
  
  const fileName = parts[1];
  
  const { error } = await supabase.storage
    .from(bucket)
    .remove([fileName]);
    
  if (error) {
    console.error("Error deleting image:", error);
  }
}
