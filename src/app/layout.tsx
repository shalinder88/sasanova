import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShortlistProvider } from "@/components/ShortlistProvider";
import CompareDrawer from "@/components/CompareDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sasanova.com"),
  title: {
    default: "Sasanova — Software Discovery & Comparison",
    template: "%s | Sasanova",
  },
  description:
    "Compare software tools with normalized pricing, honest scoring, and evidence-backed reviews. Find the right tool for your team.",
  alternates: {
    canonical: "https://sasanova.com",
  },
  verification: {
    google: "oAg4V1kr8vtFDgiCxEwVZRkPYc1XCkPmjUctdicUqM0",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sasanova",
    title: "Sasanova — Software Discovery & Comparison",
    description:
      "Compare software tools with normalized pricing, honest scoring, and evidence-backed reviews.",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Sasanova — Software Changes & Updates" href="/feed" />
        <link rel="alternate" type="application/rss+xml" title="Sasanova — Software Guides" href="/feed/guides" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BJWD8CZ1XT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BJWD8CZ1XT');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ShortlistProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <CompareDrawer />
          <Footer />
        </ShortlistProvider>
      </body>
    </html>
  );
}
