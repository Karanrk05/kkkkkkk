import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Glitters Cafe | Premium Coffee Experience in Pune",
  description:
    "Discover The Glitters Cafe — a premium coffee destination in Mohammed Wadi, Pune. Enjoy artisan coffee, delightful cuisine, and a shimmering ambiance. Rated 4.5 stars.",
  keywords: [
    "The Glitters Cafe",
    "cafe Pune",
    "coffee shop",
    "Mohammed Wadi",
    "artisan coffee",
    "premium cafe",
  ],
  icons: {
    icon: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwqYP3ogafwFdDSZBhR-n0Dj4OnYfio1T_RYAlaingUdzZIQ8SJ-j7f-JKJ5OuQyxKV7aw0jcYjRn-Xiggfw-tnd8NTpMvKaVZonlZx3twOc3xmKKewC_4MpCa8IBgelti2T_H39gpUtj3=w114-h86-k-no",
  },
  openGraph: {
    title: "The Glitters Cafe",
    description: "Premium coffee experience in Pune",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} antialiased`}
        style={{ background: "#0a0a0a", color: "#f5f0e8" }}
      >
        {children}
      </body>
    </html>
  );
}
