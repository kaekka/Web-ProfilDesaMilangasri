import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BeritaForm from "../../BeritaForm";
import { updateBeritaAction } from "../../actions";

export const metadata: Metadata = {
  title: "Edit Berita — Admin Desa Milangasri",
};

export default async function EditBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: berita } = await supabase
    .from("berita")
    .select("*")
    .eq("id", id)
    .single();

  if (!berita) notFound();

  // Bind id to the update action
  const boundAction = updateBeritaAction.bind(null, id);

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/berita"
          className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">
            arrow_back
          </span>
        </Link>
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-on-surface">
            Edit Berita
          </h1>
          <p className="text-on-surface-variant text-sm mt-0.5 truncate max-w-sm">
            {berita.title}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-surface-container-high p-6 lg:p-8">
        <BeritaForm
          action={boundAction}
          defaultValues={berita}
          submitLabel="Simpan Perubahan"
        />
      </div>
    </div>
  );
}
