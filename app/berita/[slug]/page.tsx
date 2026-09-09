import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import MaterialIcon from "@/components/icons/MaterialIcon";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Berita Tidak Ditemukan" };
  return {
    title: `${article.title} — Desa Milangasri`,
    description: article.description,
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <article className="max-w-[800px] mx-auto px-4 md:px-6 py-12 md:py-20">
          {/* Back link */}
          <Link
            href="/#berita"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors mb-8"
          >
            <MaterialIcon name="arrow_back" className="text-[18px]" />
            <span>Kembali ke Beranda</span>
          </Link>

          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full bg-surface-container text-xs ${article.categoryColor} font-bold`}
            >
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-on-surface-variant text-xs">
              <MaterialIcon name="calendar_month" className="text-[16px]" />
              <span>{article.date}</span>
            </div>
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
              <p className="text-on-surface-variant/70 text-sm mt-1 text-justify">
                {article.description}
              </p>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
