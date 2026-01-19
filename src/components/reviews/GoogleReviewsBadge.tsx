"use client";

import { Star, ExternalLink } from "lucide-react";
import { useGoogleReviews } from "@/lib/hooks/useGoogleReviews";

type Props = {
  className?: string;
  showLink?: boolean;
};

export const GoogleReviewsBadge = ({ className = "", showLink = true }: Props) => {
  const { data, loading } = useGoogleReviews();

  if (loading) {
    return (
      <div className={`animate-pulse flex items-center gap-2 ${className}`}>
        <div className="h-5 w-20 bg-gray-200 rounded" />
        <div className="h-5 w-16 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!data || !data.aggregate) {
    // Fallback wenn keine API-Daten
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#F7941D] text-[#F7941D]"
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          Bewertungen auf Google
        </span>
      </div>
    );
  }

  const { averageRating, totalReviews, googleMapsUrl } = data;
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating - fullStars >= 0.5;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Sterne */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < fullStars
                ? "fill-[#F7941D] text-[#F7941D]"
                : i === fullStars && hasHalfStar
                ? "fill-[#F7941D]/50 text-[#F7941D]"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Rating & Count */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">{averageRating.toFixed(1)}</span>
        <span className="text-sm text-muted-foreground">
          ({totalReviews} Bewertungen)
        </span>
      </div>

      {/* Google Link */}
      {showLink && googleMapsUrl && (
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          <span>Google</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
};
