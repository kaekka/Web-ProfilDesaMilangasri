"use client";

import { useState, useRef, useCallback } from "react";
import { loginAction } from "./actions";
import Image from "next/image";
import MathCaptcha from "@/components/ui/MathCaptcha";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaExpected, setCaptchaExpected] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Called by MathCaptcha when answer is correct or reset
  const handleCaptchaVerified = useCallback((verified: boolean, expected?: number) => {
    setCaptchaVerified(verified);
    if (verified && expected !== undefined) {
      setCaptchaExpected(expected);
    } else {
      setCaptchaExpected(null);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaVerified) {
      setError("Selesaikan verifikasi keamanan terlebih dahulu.");
      return;
    }
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    // Inject the expected answer for server-side verification
    if (captchaExpected !== null) {
      formData.set("captcha-expected", String(captchaExpected));
    }

    const result = await loginAction(formData);

    if (result?.error) {
      setError(
        result.error.includes("Invalid login")
          ? "Email atau password salah. Silakan coba lagi."
          : result.error
      );
      setLoading(false);
      // Reset captcha after failed attempt
      setCaptchaVerified(false);
      setCaptchaExpected(null);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-container to-tertiary-container p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-white/3 blur-2xl" />
      </div>

      <div className="w-full max-w-md relative">
        {/* Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/logo-magetan.svg"
                alt="Logo Desa Milangasri"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-extrabold text-on-surface text-center leading-tight">
              Admin Panel
            </h1>
            <p className="text-on-surface-variant text-sm mt-1 text-center">
              Website Resmi Desa Milangasri
            </p>

            {/* Security badge */}
            <div className="mt-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="material-symbols-outlined text-[14px] text-green-600">
                shield
              </span>
              <span className="text-xs text-green-700 font-semibold">
                Koneksi Aman & Terproteksi
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            id="admin-login-form"
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Error alert */}
            {error && (
              <div className="flex items-start gap-3 bg-error-container text-on-error-container rounded-xl px-4 py-3 text-sm font-medium">
                <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0">
                  error
                </span>
                <span>{error}</span>
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="admin-email"
                className="block text-sm font-semibold text-on-surface mb-1.5"
              >
                Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  mail
                </span>
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="admin@milangasri.desa.id"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-sm font-semibold text-on-surface mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  lock
                </span>
                <input
                  id="admin-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Math CAPTCHA */}
            <div className="pt-1">
              <MathCaptcha onVerified={handleCaptchaVerified} />
            </div>

            {/* Submit */}
            <button
              id="admin-login-submit"
              type="submit"
              disabled={loading || !captchaVerified}
              className="w-full py-3 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-sm transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                  Masuk...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">
                    login
                  </span>
                  Masuk ke Panel Admin
                </>
              )}
            </button>

            {!captchaVerified && !loading && (
              <p className="text-center text-xs text-on-surface-variant">
                Selesaikan verifikasi di atas untuk mengaktifkan tombol masuk
              </p>
            )}
          </form>

          <p className="mt-6 text-center text-xs text-on-surface-variant">
            Halaman ini khusus untuk administrator desa.{" "}
            <a
              href="/"
              className="text-primary font-semibold hover:underline"
            >
              Kembali ke beranda
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
