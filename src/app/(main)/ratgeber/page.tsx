"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  blogArticles,
  upcomingArticles,
  getPublishedArticles,
} from "@/lib/data/blog";
import { ArticleFilter } from "@/components/blog/ArticleFilter";
import { CTASection } from "@/components/sections";

// Format date helper
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatShortDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export default function RatgeberPage() {
  const publishedArticles = getPublishedArticles();
  const featuredArticle = publishedArticles[0];
  
  // Categories for filter
  const categories = useMemo(
    () => [...new Set(blogArticles.map((a) => a.category))],
    []
  );

  // State for filtered articles
  const [filteredArticles, setFilteredArticles] = useState(blogArticles);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4">
              Wissen & Tipps
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Ratgeber für{" "}
              <span className="text-gradient">Heizung & Wärmepumpe</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Expertenwissen aus der Praxis: Erfahren Sie alles über Wärmepumpen,
              Förderung, Heizungsmodernisierung und wie Sie Energie sparen können.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-5 w-5 text-[#F7941D]" />
              <span className="font-semibold">Aktueller Artikel</span>
            </div>

            <Link href={`/ratgeber/${featuredArticle.slug}`} className="group">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-[#F7941D]/20 to-[#0089CF]/20 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-[#0089CF]/50" />
                </div>

                {/* Content */}
                <div className="p-8 lg:pr-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className="bg-[#F7941D]">Neu</Badge>
                    <Badge variant="secondary">{featuredArticle.category}</Badge>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-heading group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-4 text-muted-foreground line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredArticle.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.readingTime} Min.</span>
                    </div>
                  </div>

                  <Button className="mt-6 bg-primary hover:bg-primary/90">
                    Artikel lesen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Alle Artikel
            </h2>

            {/* Category Filter */}
            <ArticleFilter
              articles={blogArticles}
              categories={categories}
              onFilterChange={setFilteredArticles}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  Keine Artikel in dieser Kategorie gefunden.
                </p>
              </div>
            ) : (
              filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/ratgeber/${article.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-[#0089CF]/30" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatShortDate(article.publishDate)}
                        </span>
                      </div>

                      <h3 className="font-bold font-heading text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readingTime} Min.</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Articles / Redaktionsplan */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#0089CF]/10 text-[#0089CF] px-4 py-2 rounded-full mb-6">
              <Bell className="h-4 w-4" />
              <span className="font-medium">Redaktionsplan</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Demnächst im Ratgeber
            </h2>
            <p className="mt-4 text-muted-foreground">
              Diese Artikel erscheinen in den kommenden Wochen. Schauen Sie regelmäßig
              vorbei oder kontaktieren Sie uns für spezifische Fragen.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {upcomingArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-20 text-center shrink-0">
                    <div className="text-2xl font-bold text-[#F7941D]">
                      {new Date(article.plannedDate).getDate()}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">
                      {new Date(article.plannedDate).toLocaleDateString("de-DE", {
                        month: "short",
                      })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Keyword: {article.keyword}
                    </p>
                  </div>
                  <Badge variant="outline">Geplant</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-[#F7941D]/10 to-[#0089CF]/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Haben Sie eine Frage?
            </h2>
            <p className="text-muted-foreground mb-8">
              Unser Ratgeber beantwortet nicht alle Fragen? Kontaktieren Sie uns
              direkt – wir beraten Sie gerne persönlich und kostenlos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/kontakt">
                  Beratung anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/faq">Häufige Fragen ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
