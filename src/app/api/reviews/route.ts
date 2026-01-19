import { NextResponse } from "next/server";
import {
  fetchGoogleReviews,
  convertGoogleReviewsToTestimonials,
  getAggregateRating,
} from "@/lib/api/google-reviews";

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const placeDetails = await fetchGoogleReviews();

    if (!placeDetails) {
      return NextResponse.json(
        { error: "Could not fetch reviews", reviews: [], aggregate: null },
        { status: 500 }
      );
    }

    const reviews = convertGoogleReviewsToTestimonials(placeDetails.reviews || []);
    const aggregate = getAggregateRating(placeDetails);

    return NextResponse.json({
      reviews,
      aggregate,
      totalReviews: placeDetails.user_ratings_total,
      averageRating: placeDetails.rating,
      googleMapsUrl: placeDetails.url,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error", reviews: [], aggregate: null },
      { status: 500 }
    );
  }
}
