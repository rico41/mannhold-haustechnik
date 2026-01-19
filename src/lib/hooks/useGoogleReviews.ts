"use client";

import { useState, useEffect } from "react";
import type { Testimonial } from "@/lib/data/testimonials";

type ReviewsResponse = {
  reviews: Testimonial[];
  aggregate: {
    ratingValue: string;
    reviewCount: number;
    bestRating: string;
    worstRating: string;
  } | null;
  totalReviews: number;
  averageRating: number;
  googleMapsUrl: string;
};

export const useGoogleReviews = () => {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { data, loading, error };
};
