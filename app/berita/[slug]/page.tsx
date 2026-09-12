import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import type { Metadata } from "next";

// Unified article shape from either DB or static
interface ArticleData {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  categoryColor: string;
  date?: string;
  image: string;
  alt: string;
  content?: string;
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  // 1. Try Supabase DB first
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("berita")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (data) {
      return {
        slug: data.slug,
        title: data.title,
        description: data.description ?? "",
        category: data.category ?? "",
        categoryColor: "text-primary",
        date: data.date ?? "",
        image: data.image_url ?? "/images/berita/bantuan-digitalisasi.jpg",
        alt: data.alt ?? data.title,
        content: data.content ?? "",
      };
    }
  } catch {
    console.error("Supabase unavailable");
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Berita Tidak Ditemukan" };
  return {
    title: `${article.title} — Desa Milangasri`,
    description: article.description,
  };
}

export const dynamicParams = true; // allow unknown slugs (from DB) at runtime

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <article className="max-w-[800px] mx-auto px-4 md:px-6 py-12 md:py-20">
          {/* Back links */}
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <Link
              href="/#berita"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
            >
              <MaterialIcon name="arrow_back" className="text-[18px]" />
              <span>Beranda</span>
            </Link>
            <span className="text-on-surface-variant/40">|</span>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
            >
              <MaterialIcon name="newspaper" className="text-[18px]" />
              <span>Arsip Berita</span>
            </Link>
          </div>

          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {article.category && (
              <span
                className={`px-3 py-1 rounded-full bg-surface-container text-xs ${article.categoryColor} font-bold`}
              >
                {article.category}
              </span>
            )}
            {article.date && (
              <div className="flex items-center gap-1.5 text-on-surface-variant text-xs">
                <MaterialIcon name="calendar_month" className="text-[16px]" />
                <span>{article.date}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-on-surface leading-tight mb-6">
            {article.title}
          </h1>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-[420px] rounded-3xl overflow-hidden mb-8 bg-slate-100">
            <Image
              alt={article.alt}
              src={article.image}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
              priority
            />
          </div>

          {/* Content */}
          {article.content ? (
            <div className="prose prose-lg max-w-none text-on-surface-variant leading-relaxed">
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-5 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <div className="bg-surface-container rounded-2xl p-8 text-center">
              <MaterialIcon
                name="article"
                className="text-[48px] text-on-surface-variant/50 mb-3"
              />
              <p className="text-on-surface-variant text-base">
                Konten lengkap berita ini belum tersedia.
              </p>
              {article.description && (
                <p className="text-on-surface-variant/70 text-sm mt-1 text-justify">
                  {article.description}
                </p>
              )}
            </div>
          )}

          {/* Footer CTA */}
          <div className="mt-12 pt-8 border-t border-surface-container-high flex flex-col sm:flex-row gap-3">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-container transition-colors"
            >
              <MaterialIcon name="newspaper" className="text-[18px]" />
              Berita Lainnya
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors"
            >
              <MaterialIcon name="home" className="text-[18px]" />
              Kembali ke Beranda
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
