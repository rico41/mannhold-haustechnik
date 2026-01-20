import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Moderne Browser als Baseline - reduziert Polyfills
  // Diese Einstellung teilt Next.js mit, dass moderne Browser unterstützt werden
  // und unnötige Polyfills entfernt werden können
  // Performance Optimierungen
  compress: true,
  poweredByHeader: false,
  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Optimierung für Render-Blocking Resources
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
    optimizeCss: true,
    // CSS-Inlining für kritische Styles
    optimizeServerReact: true,
    // CSS-Module-Optimierung
    cssChunking: "strict",
  },
  // SWC Compiler für moderne Browser - reduziert Polyfills
  // swcMinify ist in Next.js 16 standardmäßig aktiviert
  compiler: {
    // Entfernt unnötige Polyfills für moderne Browser
    // Unterstützt: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"], // Behalte error und warn für Debugging
    } : false,
  },
  // Turbopack Konfiguration (leer = Webpack wird verwendet)
  // Next.js 16 verwendet standardmäßig Turbopack, aber wir nutzen Webpack für Code Splitting
  turbopack: {},
  // Webpack Optimierungen
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      // Code Splitting optimieren
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 20,
          minSize: 15000,
          maxSize: 100000,
          cacheGroups: {
            default: false,
            vendors: false,
            // React & React DOM separate
            react: {
              name: "react",
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              chunks: "all",
              priority: 40,
              reuseExistingChunk: true,
            },
            // Framer Motion separate (große Library)
            framerMotion: {
              name: "framer-motion",
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              chunks: "async", // Nur async laden
              priority: 35,
              reuseExistingChunk: true,
            },
            // Radix UI separate
            radixUI: {
              name: "radix-ui",
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              chunks: "all",
              priority: 30,
              reuseExistingChunk: true,
            },
            // Lucide React separate (Icon Library)
            lucideReact: {
              name: "lucide-react",
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              chunks: "all",
              priority: 25,
              reuseExistingChunk: true,
            },
            // Vendor chunks (restliche node_modules)
            vendor: {
              name: "vendor",
              chunks: "all",
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
              minChunks: 1,
            },
            // Common chunks (mehrfach verwendeter Code)
            common: {
              name: "common",
              minChunks: 2,
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
              minSize: 10000,
            },
            // CSS separate für besseres Caching
            styles: {
              name: "styles",
              test: /\.(css|scss|sass)$/,
              chunks: "all",
              enforce: true,
              priority: 50,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
