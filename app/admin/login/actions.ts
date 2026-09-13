"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import {
  checkRateLimit,
  recordFailedAttempt,
  resetAttempts,
} from "@/lib/rateLimit";

export async function loginAction(formData: FormData) {
  // ── 1. Rate Limit check ──────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return {
      error: `Terlalu banyak percobaan login. Coba lagi dalam ${rateCheck.waitMinutes} menit.`,
    };
  }

  // ── 2. Server-side CAPTCHA verification ─────────────────────
  const captchaAnswer = parseInt(formData.get("captcha-answer") as string, 10);
  const captchaExpected = parseInt(
    formData.get("captcha-expected") as string,
    10
  );

  if (
    isNaN(captchaAnswer) ||
    isNaN(captchaExpected) ||
    captchaAnswer !== captchaExpected
  ) {
    recordFailedAttempt(ip);
    return { error: "Jawaban verifikasi keamanan salah." };
  }

  // ── 3. Supabase Auth ─────────────────────────────────────────
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    recordFailedAttempt(ip);
    return { error: error.message };
  }

  // Login sukses — reset attempt counter
  resetAttempts(ip);
  redirect("/admin");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
