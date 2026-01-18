import {
  Hero,
  Services,
  Benefits,
  Partners,
  Testimonials,
  LocationsPreview,
  BlogPreview,
  FAQPreview,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <Benefits />
      <Testimonials />
      <LocationsPreview />
      <BlogPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
