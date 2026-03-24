import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShortlistProvider } from "@/components/ShortlistProvider";
import CompareDrawer from "@/components/CompareDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    google: "PLACEHOLDER_GOOGLE_SITE_VERIFICATION",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sasanova",
    title: "Sasanova — Software Discovery & Comparison",
    description:
      "Compare software tools with normalized pricing, honest scoring, and evidence-backed reviews.",
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
