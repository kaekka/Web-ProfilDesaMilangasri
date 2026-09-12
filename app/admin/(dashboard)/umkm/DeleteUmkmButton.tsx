"use client";

import { useState } from "react";
import { deleteUmkmAction } from "./actions";

interface Props {
  id: string;
  nama: string;
}

export default function DeleteUmkmButton({ id, nama }: Props) {
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteUmkmAction(id);
    } catch {
      setLoading(false);
      setConfirming(false);
      alert("Gagal menghapus data UMKM. Coba lagi.");
    }
  };

  if (confirming) {
    return (
      <div className="flex items-center gap-1">
        <button
          id={`umkm-delete-confirm-${id}`}
          onClick={handleDelete}
          disabled={loading}
          className="px-2 py-1 rounded-lg bg-error text-white text-xs font-bold hover:bg-error/80 transition-colors disabled:opacity-50"
        >
          {loading ? "..." : "Hapus"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-2 py-1 rounded-lg bg-surface-container-high text-on-surface text-xs font-semibold hover:bg-surface-container-highest transition-colors"
        >
          Batal
        </button>
      </div>
    );
  }

  return (
    <button
      id={`umkm-delete-${id}`}
      onClick={() => setConfirming(true)}
      className="p-2 rounded-lg text-error hover:bg-error/10 transition-colors"
      title={`Hapus: ${nama}`}
    >
      <span className="material-symbols-outlined text-[18px]">delete</span>
    </button>
  );
}
