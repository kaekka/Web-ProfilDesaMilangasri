"use client";

import { useState, useRef } from "react";
import MaterialIcon from "@/components/icons/MaterialIcon";

// ── Kontak desa — ubah sesuai data asli ──────────────────────────────────────
const KONTAK = {
  namaKepala: "Bpk. Anggit Ardiyanto, S.H.",
  jabatan: "Kepala Desa Milangasri",
  alamat: "Jl. Desa Milangasri, Kec. Panekan, Kab. Magetan, Jawa Timur 63381",
  telepon: "+6285804512345",
  whatsapp: "+6285804512345",
  email: "desamilangasri@gmail.com",
  jamLayanan: "Senin – Jumat, 08.00 – 15.00 WIB",
};
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_CARDS = [
  {
    icon: "location_on",
    label: "Alamat Kantor Desa",
    value: KONTAK.alamat,
    color: "text-tertiary",
    bg: "bg-tertiary-fixed/30",
    href: undefined as string | undefined,
  },
  {
    icon: "schedule",
    label: "Jam Pelayanan",
    value: KONTAK.jamLayanan,
    color: "text-primary",
    bg: "bg-primary-fixed/30",
    href: undefined as string | undefined,
  },
  {
    icon: "email",
    label: "Surel",
    value: KONTAK.email,
    color: "text-secondary",
    bg: "bg-secondary-fixed/30",
    href: `mailto:${KONTAK.email}`,
  },
];

export default function KontakSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Dari: ${fields.nama}\nEmail: ${fields.email}\n\n${fields.pesan}`
    );
    const subject = encodeURIComponent(
      `[Web Desa] ${fields.subjek || "Pesan dari " + fields.nama}`
    );
    window.location.href = `mailto:${KONTAK.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFields({ nama: "", email: "", subjek: "", pesan: "" });
    }, 5000);
  }

  const waMessage = encodeURIComponent(
    "Halo, saya ingin bertanya tentang Desa Milangasri..."
  );

  return (
    <section
      id="kontak"
      className="w-full bg-surface-container py-16 md:py-24 relative overflow-hidden"
    >
      {/* Subtle background radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 60%, #33450d 0%, transparent 55%), radial-gradient(circle at 85% 15%, #904d00 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
            <MaterialIcon name="contact_support" className="text-[18px]" />
            <span>Layanan Warga</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Hubungi Kami
          </h2>
          <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
            Sampaikan pertanyaan, masukan, atau saran Anda kepada pemerintah
            Desa Milangasri. Kami siap melayani.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* ── Kiri: Info kontak ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Kepala Desa card */}
            <div className="rounded-3xl bg-primary text-white p-6 flex items-center gap-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <MaterialIcon
                  name="account_circle"
                  className="text-[36px] text-white"
                />
              </div>
              <div>
                <p className="text-white/70 text-xs font-medium">
                  {KONTAK.jabatan}
                </p>
                <p className="font-bold text-lg text-white leading-tight">
                  {KONTAK.namaKepala}
                </p>
              </div>
            </div>

            {/* Info cards */}
            {CONTACT_CARDS.map((card) =>
              card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className="rounded-2xl bg-white border border-surface-container-high p-4 flex items-start gap-4 hover:shadow-md transition-shadow group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <MaterialIcon
                      name={card.icon}
                      className={`text-[20px] ${card.color}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-on-surface-variant font-medium mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-on-surface break-all group-hover:text-primary transition-colors">
                      {card.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={card.label}
                  className="rounded-2xl bg-white border border-surface-container-high p-4 flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <MaterialIcon
                      name={card.icon}
                      className={`text-[20px] ${card.color}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-on-surface-variant font-medium mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-on-surface">
                      {card.value}
                    </p>
                  </div>
                </div>
              )
            )}

            {/* WhatsApp + Telepon */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${KONTAK.whatsapp.replace(/\+/g, "")}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-bold text-sm text-white transition-all shadow-md active:scale-95"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${KONTAK.telepon}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-primary-container text-on-primary-container font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-md active:scale-95"
              >
                <MaterialIcon name="phone_in_talk" className="text-[20px]" />
                <span>Telepon</span>
              </a>
            </div>

            {/* Slogan pengisi — flex-1 agar selaras dengan bawah form */}
            <div className="flex-1 rounded-2xl bg-gradient-to-br from-primary-fixed/40 to-tertiary-fixed/30 border border-primary-fixed/50 p-5 flex flex-col justify-center gap-2">
              <MaterialIcon name="format_quote" className="text-[28px] text-primary/50" />
              <p className="text-on-surface font-semibold text-sm leading-relaxed">
                Bersama membangun desa yang maju, mandiri, dan sejahtera untuk
                generasi Milangasri yang lebih baik.
              </p>
              <p className="text-xs text-on-surface-variant font-medium mt-1">
                — Pemerintah Desa Milangasri
              </p>
            </div>
          </div>

          {/* ── Kanan: Form masukan ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-surface-container-high shadow-sm px-6 pt-5 pb-6 md:px-8 md:pt-6 md:pb-8 h-full">
              <h2 className="font-bold text-2xl text-on-surface mb-1">
                Kirim Masukan &amp; Saran
              </h2>
              <p className="text-sm text-on-surface-variant mb-6">
                Pesan Anda akan dikirim langsung ke email kantor desa.
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center">
                    <MaterialIcon
                      name="check_circle"
                      className="text-[40px] text-primary"
                    />
                  </div>
                  <p className="font-bold text-on-surface text-lg">
                    Pesan Terkirim!
                  </p>
                  <p className="text-sm text-on-surface-variant max-w-xs">
                    Terima kasih atas masukan Anda. Pesan Anda akan segera
                    ditindaklanjuti oleh staf desa.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="kontak-nama"
                        className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide"
                      >
                        Nama Lengkap{" "}
                        <span className="text-secondary normal-case tracking-normal font-normal">
                          *
                        </span>
                      </label>
                      <input
                        id="kontak-nama"
                        name="nama"
                        type="text"
                        required
                        value={fields.nama}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="px-4 py-3 rounded-xl border border-surface-container-highest bg-surface-container-low text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="kontak-email"
                        className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        id="kontak-email"
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="email@anda.com"
                        className="px-4 py-3 rounded-xl border border-surface-container-highest bg-surface-container-low text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="kontak-subjek"
                      className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide"
                    >
                      Topik{" "}
                      <span className="text-secondary normal-case tracking-normal font-normal">
                        *
                      </span>
                    </label>
                    <select
                      id="kontak-subjek"
                      name="subjek"
                      required
                      value={fields.subjek}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-surface-container-highest bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
                    >
                      <option value="" disabled>
                        Pilih topik pesan...
                      </option>
                      <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                      <option value="Layanan Administrasi">
                        Layanan Administrasi
                      </option>
                      <option value="Informasi UMKM">Informasi UMKM</option>
                      <option value="Saran Pembangunan">
                        Saran Pembangunan
                      </option>
                      <option value="Pengaduan">Pengaduan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="kontak-pesan"
                      className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide"
                    >
                      Pesan{" "}
                      <span className="text-secondary normal-case tracking-normal font-normal">
                        *
                      </span>
                    </label>
                    <textarea
                      id="kontak-pesan"
                      name="pesan"
                      required
                      rows={5}
                      value={fields.pesan}
                      onChange={handleChange}
                      placeholder="Tuliskan pesan, masukan, atau saran Anda di sini..."
                      className="px-4 py-3 rounded-xl border border-surface-container-highest bg-surface-container-low text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    id="kontak-submit-btn"
                    className="mt-1 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-[0.98] cursor-pointer"
                  >
                    <MaterialIcon name="send" className="text-[20px]" />
                    <span>Kirim Pesan</span>
                  </button>

                  <p className="text-center text-[11px] text-on-surface-variant/60">
                    Aplikasi email Anda akan terbuka untuk konfirmasi pengiriman.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
