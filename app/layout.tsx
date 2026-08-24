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
  title: "Northstar Labs — Software that moves",
  description: "An independent software studio building web platforms and mobile apps for ambitious teams.",
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Northstar Labs — Software that moves",
    description: "Strategy, design, and engineering for ambitious teams.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Northstar Labs — We build digital products that move." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northstar Labs — Software that moves",
    description: "Strategy, design, and engineering for ambitious teams.",
    images: ["/og.png"],
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
