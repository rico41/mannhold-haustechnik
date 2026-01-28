import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getRelatedArticles,
  blogArticles,
} from "@/lib/data/blog";
import { company } from "@/lib/data";
import { seoServices } from "@/lib/data/programmatic";
import { CTASection } from "@/components/sections";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generiere alle Blog-Seiten zur Build-Zeit
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamische Metadaten
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel nicht gefunden" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.lastUpdated,
      authors: [article.author],
      locale: "de_DE",
      images: [
        {
          url: article.featuredImage,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
    alternates: {
      canonical: `https://mannhold-haustechnik.de/ratgeber/${slug}`,
    },
  };
}

// Markdown-ähnliches Rendering für Content
const renderContent = (content: string) => {
  const lines = content.split("\n");
  const elements: React.ReactElement[] = [];
  let currentTable: string[][] = [];
  let inTable = false;
  let tableKey = 0;

  const processInlineFormatting = (text: string): React.ReactElement[] => {
    const parts: React.ReactElement[] = [];
    let remaining = text;
    let partKey = 0;

    // Process bold text
    while (remaining.includes("**")) {
      const startIdx = remaining.indexOf("**");
      const endIdx = remaining.indexOf("**", startIdx + 2);
      
      if (endIdx === -1) break;
      
      if (startIdx > 0) {
        parts.push(<span key={partKey++}>{remaining.slice(0, startIdx)}</span>);
      }
      parts.push(
        <strong key={partKey++} className="font-semibold">
          {remaining.slice(startIdx + 2, endIdx)}
        </strong>
      );
      remaining = remaining.slice(endIdx + 2);
    }
    
    if (remaining) {
      parts.push(<span key={partKey++}>{remaining}</span>);
    }
    
    return parts.length > 0 ? parts : [<span key="0">{text}</span>];
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Table handling
    if (trimmedLine.startsWith("|") && trimmedLine.endsWith("|")) {
      if (!inTable) {
        inTable = true;
        currentTable = [];
      }
      // Skip separator lines
      if (!trimmedLine.includes("---")) {
        const cells = trimmedLine
          .split("|")
          .filter((cell) => cell.trim() !== "")
          .map((cell) => cell.trim());
        currentTable.push(cells);
      }
      return;
    } else if (inTable) {
      // End of table
      inTable = false;
      if (currentTable.length > 0) {
        elements.push(
          <div key={`table-${tableKey++}`} className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {currentTable[0].map((cell, cellIdx) => (
                    <th
                      key={cellIdx}
                      className="border border-gray-200 px-4 py-3 text-left font-semibold"
                    >
                      {processInlineFormatting(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTable.slice(1).map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-gray-200 px-4 py-3">
                        {processInlineFormatting(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        currentTable = [];
      }
    }

    // Headers
    if (trimmedLine.startsWith("## ")) {
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-bold font-heading mt-10 mb-4">
          {trimmedLine.slice(3)}
        </h2>
      );
      return;
    }

    if (trimmedLine.startsWith("### ")) {
      elements.push(
        <h3 key={index} className="text-xl md:text-2xl font-bold font-heading mt-8 mb-3">
          {trimmedLine.slice(4)}
        </h3>
      );
      return;
    }

    // Blockquotes
    if (trimmedLine.startsWith("> ")) {
      elements.push(
        <blockquote
          key={index}
          className="border-l-4 border-[#F7941D] bg-[#F7941D]/5 pl-6 py-4 my-6 italic text-lg"
        >
          {processInlineFormatting(trimmedLine.slice(2))}
        </blockquote>
      );
      return;
    }

    // List items
    if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
      const content = trimmedLine.slice(2);
      elements.push(
        <li key={index} className="ml-6 mb-2 list-disc">
          {processInlineFormatting(content)}
        </li>
      );
      return;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmedLine)) {
      const content = trimmedLine.replace(/^\d+\.\s/, "");
      elements.push(
        <li key={index} className="ml-6 mb-2 list-decimal">
          {processInlineFormatting(content)}
        </li>
      );
      return;
    }

    // Checkmarks / Icons
    if (trimmedLine.startsWith("✅") || trimmedLine.startsWith("❌") || trimmedLine.startsWith("⚠️")) {
      elements.push(
        <p key={index} className="flex items-start gap-2 mb-2">
          <span className="text-lg">{trimmedLine.slice(0, 2)}</span>
          <span>{processInlineFormatting(trimmedLine.slice(2).trim())}</span>
        </p>
      );
      return;
    }

    // Empty lines
    if (trimmedLine === "") {
      return;
    }

    // Regular paragraphs
    elements.push(
      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
        {processInlineFormatting(trimmedLine)}
      </p>
    );
  });

  return elements;
};

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);
  
  // Find related services
  const relatedServiceData = seoServices.filter((service) =>
    article.relatedServices.includes(service.slug)
  );

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.featuredImage,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: "https://mannhold-haustechnik.de/logo.png",
      },
    },
    datePublished: article.publishDate,
    dateModified: article.lastUpdated,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mannhold-haustechnik.de/ratgeber/${slug}`,
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mannhold-haustechnik.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ratgeber",
        item: "https://mannhold-haustechnik.de/ratgeber",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://mannhold-haustechnik.de/ratgeber/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/ratgeber" className="hover:text-primary">
                Ratgeber
              </Link>
              <span>/</span>
              <span className="text-foreground truncate">{article.title}</span>
            </nav>

            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="bg-[#0089CF]">{article.category}</Badge>
              {article.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishDate}>
                  {formatDate(article.publishDate)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} Min. Lesezeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 rounded-2xl mb-10 flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-[#0089CF] mx-auto mb-4" />
                <p className="text-muted-foreground">{article.featuredImageAlt}</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(article.content)}
            </div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-heading mb-4">
                Sie möchten mehr erfahren?
              </h3>
              <p className="text-muted-foreground mb-6">
                Unsere Experten beraten Sie gerne persönlich und kostenlos zu Ihrer
                individuellen Situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/kontakt">
                    Kostenlose Beratung anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${company.contact.phone}`}>
                    {company.contact.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t">
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="h-5 w-5 text-muted-foreground" />
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Passende Leistungen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedServiceData.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/leistungen/${service.slug}`}
                      className="group"
                    >
                      <Card className="h-full hover:shadow-lg transition-all">
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-[#0089CF]" />
                          </div>
                          <div>
                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Mehr erfahren →
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Das könnte Sie auch interessieren
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/ratgeber/${relatedArticle.slug}`}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-lg transition-all">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 rounded-t-lg" />
                        <div className="p-5">
                          <Badge variant="secondary" className="mb-3">
                            {relatedArticle.category}
                          </Badge>
                          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Overview */}
      <div className="py-8 bg-gray-50 border-t">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Ratgeber-Übersicht
            </Link>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
