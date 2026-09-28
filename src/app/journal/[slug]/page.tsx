import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/sections";
import { Icon, Photo, Section } from "@/components/ui";
import { articles } from "@/data/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const more = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="w-full px-5 sm:px-6 lg:px-12 pt-12 md:pt-16 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            data-anim="fade"
            href="/journal"
            className="inline-flex items-center gap-1 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-secondary mb-8"
          >
            <Icon name="arrow_back" className="text-[16px]" /> The Journal
          </Link>
          <span data-anim="fade" className="block font-label-sm text-label-sm uppercase tracking-widest text-outline mb-3">
            {article.category} • {article.readTime} • {article.volume}
          </span>
          <h1 data-anim="chars" className="font-display text-display-mobile md:text-display text-primary tracking-tight mb-6">{article.title}</h1>
          <p data-anim="fade" data-delay="0.5" className="font-headline-sm text-headline-sm italic text-secondary font-normal mb-10">{article.excerpt}</p>
        </div>
        <div data-anim="image" data-parallax="8" data-delay="0.3" className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-surface-container-high mb-12">
          <Photo src={article.image} alt={article.title} preload sizes="(min-width: 1024px) 64rem, 100vw" />
        </div>
        <div data-anim="stagger" className="max-w-3xl mx-auto space-y-6">
          {article.body.map((p, i) => (
            <p key={i} className="font-body-lg text-body-lg text-on-surface-variant md:text-[18px] md:leading-[30px]">
              {p}
            </p>
          ))}
        </div>
      </article>
      <Section className="bg-surface-container-low">
        <h2 data-anim="chars" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-10">
          MORE FROM THE EARTH
        </h2>
        <div data-anim="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {more.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
