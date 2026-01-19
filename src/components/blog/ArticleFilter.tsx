"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { BlogArticle } from "@/lib/data/blog/articles";

type ArticleFilterProps = {
  articles: BlogArticle[];
  categories: string[];
  onFilterChange: (filteredArticles: BlogArticle[]) => void;
};

export const ArticleFilter = ({
  articles,
  categories,
  onFilterChange,
}: ArticleFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleFilter = (category: string | null) => {
    setActiveCategory(category);
    if (category === null) {
      onFilterChange(articles);
    } else {
      const filtered = articles.filter(
        (article) => article.category === category
      );
      onFilterChange(filtered);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={activeCategory === null ? "default" : "secondary"}
        className={`cursor-pointer transition-colors ${
          activeCategory === null
            ? "bg-primary text-white"
            : "hover:bg-primary hover:text-white"
        }`}
        onClick={() => handleFilter(null)}
      >
        Alle
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={`cursor-pointer transition-colors ${
            activeCategory === category
              ? "bg-primary text-white border-primary"
              : "hover:bg-primary hover:text-white hover:border-primary"
          }`}
          onClick={() => handleFilter(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};
