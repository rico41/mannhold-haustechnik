"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials as fallbackTestimonials } from "@/lib/data";
import { useGoogleReviews } from "@/lib/hooks/useGoogleReviews";

export const Testimonials = () => {
  const { data, loading } = useGoogleReviews();

  // Verwende Live-Daten von Google oder Fallback
  const testimonials = data?.reviews?.length 
    ? data.reviews.slice(0, 6) 
    : fallbackTestimonials;
  
  const isLive = !!data?.reviews?.length;
  const averageRating = data?.averageRating || 5.0;
  const totalReviews = data?.totalReviews || 100;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#0089CF] uppercase tracking-wider mb-4"
          >
            Kundenstimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading"
          >
            Was unsere Kunden{" "}
            <span className="text-gradient">sagen</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Zufriedene Kunden sind unser bester Beweis. Lesen Sie, was andere
            über ihre Erfahrung mit uns berichten.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading ? (
            // Loading Skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md animate-pulse">
                  <CardContent className="p-6 lg:p-8">
                    <div className="h-10 w-10 bg-gray-200 rounded mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-5 w-5 bg-gray-200 rounded" />
                      ))}
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gray-200 rounded-full" />
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                        <div className="h-3 w-20 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 lg:p-8">
                    {/* Quote Icon */}
                    <Quote className="h-10 w-10 text-[#F7941D]/20 mb-4" />

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "fill-[#F7941D] text-[#F7941D]"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground leading-relaxed mb-6 line-clamp-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7941D]/20 to-[#0089CF]/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-[#0089CF]">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    {/* Service Badge */}
                    <div className="mt-4 pt-4 border-t">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-muted-foreground">
                        {testimonial.service}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            {/* Live-Badge */}
            {isLive && (
              <>
                <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Live von Google
                </span>
                <div className="h-6 w-px bg-border" />
              </>
            )}
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(averageRating)
                        ? "fill-[#F7941D] text-[#F7941D]"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {averageRating.toFixed(1)} Bewertung auf Google
              </span>
            </div>
            
            <div className="h-6 w-px bg-border" />
            
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{totalReviews}+</span>{" "}
              zufriedene Kunden
            </div>
            
            <div className="h-6 w-px bg-border hidden sm:block" />
            
            <div className="text-sm text-muted-foreground">
              Seit <span className="font-semibold text-foreground">2020</span>{" "}
              in Berlin
            </div>

            {/* Google Link */}
            {data?.googleMapsUrl && (
              <>
                <div className="h-6 w-px bg-border hidden sm:block" />
                <a
                  href={data.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Alle Bewertungen
                  <ExternalLink className="h-3 w-3" />
                </a>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
