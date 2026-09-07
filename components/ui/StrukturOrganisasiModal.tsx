"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";

interface StrukturOrganisasiModalProps {
  open: boolean;
  onClose: () => void;
}

export default function StrukturOrganisasiModal({
  open,
  onClose,
}: StrukturOrganisasiModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, handleEsc]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[900px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-high bg-surface-container-low shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <MaterialIcon
                name="account_tree"
                className="text-[20px] text-primary"
              />
            </div>
            <h2 className="text-base font-extrabold text-on-surface">
              Struktur Organisasi Desa Milangasri
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-on-surface-variant"
            aria-label="Tutup"
            type="button"
          >
            <MaterialIcon name="close" className="text-[20px]" />
          </button>
        </div>

        {/* Image */}
        <div className="overflow-auto p-4 flex items-center justify-center">
          <Image
            src="/StrukturOrganisasiDesa.jpeg"
            alt="Struktur Organisasi Desa Milangasri"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
