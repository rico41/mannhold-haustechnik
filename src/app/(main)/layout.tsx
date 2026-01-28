import dynamic from "next/dynamic";
import { StickyMobileCTA } from "@/components/common/StickyMobileCTA";
import { ExitIntentModal } from "@/components/common/ExitIntentModal";
import { FloatingReviewsBadge } from "@/components/common/FloatingReviewsBadge";
import { ScrollTriggeredCTA } from "@/components/common/ScrollTriggeredCTA";
import { MobileQuickActions } from "@/components/common/MobileQuickActions";

const Header = dynamic(() => import("@/components/layout/Header").then((mod) => mod.Header), {
  ssr: true,
  loading: () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-16 lg:h-28 border-b border-gray-100">
      <div className="container-custom h-full flex items-center justify-between">
        <div className="h-10 lg:h-12 w-40 bg-gray-100 rounded animate-pulse" />
        <div className="hidden lg:flex gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
        <div className="h-10 w-32 bg-gray-100 rounded animate-pulse hidden lg:block" />
      </div>
    </header>
  ),
});

const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer), {
  ssr: true,
  loading: () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="h-64 bg-gray-800 rounded animate-pulse" />
      </div>
    </footer>
  ),
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-16 lg:pt-28" role="main">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
      <ExitIntentModal />
      <FloatingReviewsBadge />
      <ScrollTriggeredCTA />
      <MobileQuickActions />
    </>
  );
}
