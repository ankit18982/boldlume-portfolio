import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boldlume — Bright ideas. Boldly built.",
  description: "A global software development agency building mobile apps, web platforms, SaaS products, custom software, and AI integrations.",
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Boldlume — Bright ideas. Boldly built.",
    description: "Mobile, web, SaaS, custom software, and AI solutions for ambitious teams.",
    images: [{ url: "/boldlume-logo-tagline.png", width: 1719, height: 915, alt: "Boldlume — Bright ideas. Boldly built." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boldlume — Bright ideas. Boldly built.",
    description: "Mobile, web, SaaS, custom software, and AI solutions for ambitious teams.",
    images: ["/boldlume-logo-tagline.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
