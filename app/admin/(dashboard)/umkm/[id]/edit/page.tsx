import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import UmkmForm from "../../UmkmForm";
import { updateUmkmAction } from "../../actions";

export const metadata: Metadata = {
  title: "Edit UMKM — Admin Desa Milangasri",
};

export default async function EditUmkmPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: umkm } = await supabase
    .from("umkm")
    .select("*")
    .eq("id", id)
    .single();

  if (!umkm) notFound();

  const boundAction = updateUmkmAction.bind(null, id);

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/umkm"
          className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">
            arrow_back
          </span>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
            Edit UMKM
          </h1>
          <p className="text-on-surface-variant text-sm mt-0.5 truncate max-w-sm">
            {umkm.nama}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high p-6 lg:p-8">
        <UmkmForm
          action={boundAction}
          defaultValues={umkm}
          submitLabel="Simpan Perubahan"
        />
      </div>
    </div>
  );
}
