"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useGoogleReviews } from "@/lib/hooks/useGoogleReviews";
import { Card, CardContent } from "@/components/ui/card";

export const FloatingReviewsBadge = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { data, loading } = useGoogleReviews();

  // Verstecke Badge wenn zu weit oben gescrollt
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading || !data || !data.aggregate) {
    return null;
  }

  const { averageRating, totalReviews, googleMapsUrl, reviews } = data;
  const topReviews = reviews?.slice(0, 3) || [];

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 hidden lg:block transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative">
        {!isExpanded ? (
          // Collapsed State - Badge
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-white rounded-xl shadow-2xl border-2 border-gray-100 p-4 hover:shadow-3xl transition-all duration-300 hover:scale-105"
            aria-label="Bewertungen anzeigen"
          >
            <div className="flex items-center gap-3">
              {/* Google Logo Placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-lg">G</span>
              </div>

              {/* Rating */}
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(averageRating)
                          ? "fill-[#F7941D] text-[#F7941D]"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-xs text-gray-600">
                  {totalReviews} Bewertungen
                </div>
              </div>

              {/* Expand Icon */}
              <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
            </div>
          </button>
        ) : (
          // Expanded State - Card with Reviews
          <Card className="w-80 shadow-2xl border-2 border-gray-100">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#4285F4] to-[#34A853] p-4 rounded-t-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">G</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Google</div>
                      <div className="text-white/80 text-xs">Bewertungen</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Schließen"
                  >
                    <ChevronUp className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Overall Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl font-bold text-white">
                    {averageRating.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.round(averageRating)
                            ? "fill-white text-white"
                            : "fill-white/30 text-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-white/80 text-sm">
                  {totalReviews} Bewertungen
                </div>
              </div>

              {/* Reviews List */}
              <div className="max-h-96 overflow-y-auto">
                {topReviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? "fill-[#F7941D] text-[#F7941D]"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3 mb-2">
                      {review.text}
                    </p>
                    <div className="text-xs font-semibold text-gray-900">
                      {review.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                {googleMapsUrl && (
                  <Link
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-primary hover:underline font-medium"
                  >
                    Alle Bewertungen ansehen
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
