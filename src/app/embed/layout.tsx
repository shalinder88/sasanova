import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sasanova Embed Widgets",
  description: "Embeddable pricing widgets powered by Sasanova.",
  robots: { index: false, follow: false },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="bg-transparent text-foreground font-sans m-0 p-0">
        {children}
      </body>
    </html>
  );
}
