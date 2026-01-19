"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

type CategoryFilterProps<T> = {
  items: T[];
  categories: string[];
  getCategory: (item: T) => string;
  onFilterChange: (filteredItems: T[]) => void;
  allLabel?: string;
};

export function CategoryFilter<T>({
  items,
  categories,
  getCategory,
  onFilterChange,
  allLabel = "Alle",
}: CategoryFilterProps<T>) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleFilter = (category: string | null) => {
    setActiveCategory(category);
    if (category === null) {
      onFilterChange(items);
    } else {
      const filtered = items.filter(
        (item) => getCategory(item) === category
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
        {allLabel}
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
}
