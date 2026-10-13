import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shiv CCTV & Security | Smart CCTV Camera Installation & Solutions",
  description:
    "Professional CCTV camera installation & security systems for homes, shops, offices, and factories. Color night vision, live phone viewing, 2 years warranty & free site inspection. Call/WhatsApp +91 832 056 1064.",
  keywords: [
    "Shiv CCTV",
    "CCTV camera installation",
    "Security camera for home",
    "CCTV packages",
    "Hikvision CCTV",
    "CP Plus camera setup",
    "Best CCTV dealer",
    "Color night vision camera",
    "Wireless CCTV camera",
  ],
  authors: [{ name: "Shiv CCTV & Security" }],
  openGraph: {
    title: "Shiv CCTV & Security - Protect What Matters Most",
    description:
      "Get complete HD & 4K CCTV camera setup with mobile live view & free installation. Contact on WhatsApp: +91 832 056 1064.",
    url: "https://pratik-mandani.github.io/shivcctv/",
    siteName: "Shiv CCTV & Security",
    images: [
      {
        url: "https://pratik-mandani.github.io/shivcctv/images/hero-banner.jpg",
        width: 1200,
        height: 675,
        alt: "Shiv CCTV & Security Installation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/shivcctv/favicon.png",
    apple: "/shivcctv/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18495754208"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18495754208');
            `,
          }}
        />

        {/* Meta Pixel Placeholder (User can insert their ID here) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              // fbq('init', 'YOUR_PIXEL_ID'); // Replace with your Meta Pixel ID
              // fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
