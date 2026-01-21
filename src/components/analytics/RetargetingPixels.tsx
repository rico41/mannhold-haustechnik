"use client";

import Script from "next/script";

/**
 * Retargeting Pixels für Facebook und Google Ads
 * 
 * Diese Komponente lädt die Tracking-Pixel nur wenn die entsprechenden
 * Environment Variables gesetzt sind.
 * 
 * Setup:
 * - Facebook Pixel: NEXT_PUBLIC_FACEBOOK_PIXEL_ID
 * - Google Ads: NEXT_PUBLIC_GOOGLE_ADS_ID
 */

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export const RetargetingPixels = () => {
  return (
    <>
      {/* Facebook Pixel */}
      {FACEBOOK_PIXEL_ID && (
        <>
          <Script id="facebook-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Google Ads Conversion Tracking */}
      {GOOGLE_ADS_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="lazyOnload"
        />
      )}
      {GOOGLE_ADS_ID && (
        <Script id="google-ads" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      )}
    </>
  );
};

/**
 * Facebook Pixel Event Tracking
 */
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, parameters);
  }
};

/**
 * Google Ads Conversion Event
 */
export const trackGoogleAdsConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag && GOOGLE_ADS_ID) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value || 1,
      currency: "EUR",
    });
  }
};

declare global {
  interface Window {
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}
