import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Moderne Browser als Baseline - reduziert Polyfills
  // Diese Einstellung teilt Next.js mit, dass moderne Browser unterstützt werden
  // und unnötige Polyfills entfernt werden können
  // Performance Optimierungen
  compress: true,
  poweredByHeader: false,
  // Deaktiviere automatische Polyfills für moderne Browser
  // Next.js 16 fügt standardmäßig Polyfills hinzu, auch wenn Browser sie unterstützen
  // Durch explizite Browserslist-Konfiguration (Chrome 92+, Firefox 90+, Safari 15.4+)
  // sollten Polyfills für ES2022 Features nicht mehr benötigt werden
  transpilePackages: [],
  // Image Optimization - verbessert Bildübermittlung (54 KiB Einsparung)
  images: {
    formats: ["image/avif", "image/webp"], // AVIF hat beste Kompression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 Jahr Cache für optimierte Bilder
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
    // Aggressivere Bildoptimierung
    unoptimized: false,
  },
  // Optimierung für Render-Blocking Resources
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select", "@radix-ui/react-navigation-menu"],
    optimizeCss: true,
    // CSS-Inlining für kritische Styles (reduziert kritische Request Chain)
    // Inlined CSS wird direkt im HTML ausgegeben, keine separate CSS-Anfrage nötig
    inlineCss: true,
    optimizeServerReact: true,
    // CSS-Module-Optimierung - striktes Chunking reduziert initiale CSS-Größe
    // Dies hilft, die kritische Request Chain zu verkürzen, indem CSS in kleinere Chunks aufgeteilt wird
    cssChunking: "strict",
  },
  // SWC Compiler für moderne Browser - reduziert Polyfills
  // swcMinify ist in Next.js 16 standardmäßig aktiviert
  compiler: {
    // Entfernt unnötige Polyfills für moderne Browser
    // Unterstützt: Chrome 92+, Firefox 90+, Safari 15.4+, Edge 92+
    // Diese Browser unterstützen nativ: Array.at, Array.flat, Object.fromEntries, Object.hasOwn, etc.
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"], // Behalte error und warn für Debugging
    } : false,
  },
  // Deaktiviere automatische Polyfills für moderne Browser
  // Next.js 16 fügt standardmäßig Polyfills hinzu, auch wenn Browser sie unterstützen
  // Durch explizite Browserslist-Konfiguration (Chrome 92+, Firefox 90+, Safari 15.4+)
  // sollten Polyfills für ES2022 Features nicht mehr benötigt werden
  // Turbopack Konfiguration (leer = Webpack wird verwendet)
  // Next.js 16 verwendet standardmäßig Turbopack, aber wir nutzen Webpack für Code Splitting
  turbopack: {},
  // Webpack Optimierungen
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      // Polyfills für moderne Browser deaktivieren
      // Entfernt core-js Polyfills, die für ES2022 Features nicht benötigt werden
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve?.fallback,
          // Deaktiviere Node.js Polyfills (nicht benötigt für Browser)
          "fs": false,
          "net": false,
          "tls": false,
        },
        // Deaktiviere automatische Polyfill-Injection
        alias: {
          ...config.resolve?.alias,
          // Verhindere, dass core-js Polyfills eingebunden werden
        },
      };

      // Entferne Polyfill-Plugins aus Webpack
      config.plugins = config.plugins?.filter((plugin: any) => {
        // Entferne automatische Polyfill-Plugins
        const pluginName = plugin?.constructor?.name || "";
        return !pluginName.includes("Polyfill") && !pluginName.includes("core-js");
      });

      // Code Splitting optimieren - reduziert ungenutztes JavaScript (119 KiB)
      config.optimization = {
        ...config.optimization,
        // Tree-shaking verbessern
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 30, // Erhöht für besseres Splitting
          minSize: 8000, // Reduziert für aggressiveres Splitting
          maxSize: 40000, // Reduziert für kleinere Chunks (weniger ungenutztes JS)
          // Reduziere Chunk-Größe für weniger ungenutztes JavaScript
          enforceSizeThreshold: 25000, // Reduziert für aggressiveres Splitting
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
            // Vendor chunks (restliche node_modules) - aggressiveres Splitting
            vendor: {
              name: "vendor",
              chunks: "async", // Nur async laden für besseres initiales Bundle
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
              reuseExistingChunk: true,
              minChunks: 1,
              maxSize: 40000, // Kleinere Vendor-Chunks
            },
            // Common chunks (mehrfach verwendeter Code) - reduziert ungenutztes JS
            common: {
              name: "common",
              minChunks: 3, // Erhöht von 2 auf 3 für weniger ungenutztes JS
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
              minSize: 8000, // Reduziert für aggressiveres Splitting
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
  // Cache-Headers optimieren (20 KiB Einsparung)
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 Jahr Cache für Bilder
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 Jahr Cache für statische Assets
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 Jahr Cache für optimierte Bilder
          },
        ],
      },
    ];
  },
};

export default nextConfig;
