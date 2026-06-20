import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Om Textiles | Premium Fabric Solutions",
  description:
    "Om Textiles – Leading textile company based in Surat, India, specializing in premium fabric solutions for Bag Manufacturing, Automotive Seat Covers, and Furnishing Applications.",
  keywords:
    "textiles, fabric, Surat, bag fabric, automotive seat cover fabric, furnishing fabric, Om Textiles, Jagdish Korat",
  openGraph: {
    title: "Om Textiles | Premium Fabric Solutions",
    description:
      "Quality · Innovation · Reliability · Trust — Premium fabric solutions since 2018.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-stone-50 text-stone-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
