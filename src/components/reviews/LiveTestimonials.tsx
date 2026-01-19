"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useGoogleReviews } from "@/lib/hooks/useGoogleReviews";
import { testimonials as fallbackTestimonials } from "@/lib/data/testimonials";

type Props = {
  limit?: number;
  showGoogleLink?: boolean;
  className?: string;
};

export const LiveTestimonials = ({
  limit = 6,
  showGoogleLink = true,
  className = "",
}: Props) => {
  const { data, loading, error } = useGoogleReviews();

  // Verwende Live-Daten oder Fallback
  const reviews = data?.reviews?.slice(0, limit) || fallbackTestimonials.slice(0, limit);
  const isLive = !!data?.reviews?.length;

  if (loading) {
    return (
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {Array.from({ length: limit }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
              <div className="space-y-2 mb-4">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-2/3 bg-gray-200 rounded" />
              </div>
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="group relative overflow-hidden">
            <CardContent className="p-6">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-100 group-hover:text-gray-200 transition-colors" />

              {/* Sterne */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-[#F7941D] text-[#F7941D]"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t">
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7941D]/20 to-[#0089CF]/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#0089CF]">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.location} • {review.service}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Google Link & Live Badge */}
      {showGoogleLink && (
        <div className="mt-8 flex items-center justify-center gap-4">
          {isLive && (
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
              ● Live von Google
            </span>
          )}
          {data?.googleMapsUrl && (
            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Alle {data.totalReviews} Bewertungen auf Google ansehen
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
