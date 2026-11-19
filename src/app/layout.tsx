import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { HypocratesSplashLoader } from "@/components/HypocratesSplashLoader";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hypocrates | AI Healthcare Management System",
  description:
    "The AI Management System for Modern Healthcare Clinics — operate smarter, faster, and more efficiently through AI-powered tools and specialized workflows.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-[#1d1d1d] overflow-x-clip selection:bg-[#3b82f6]/15 selection:text-[#1d1d1d]">
        <HypocratesSplashLoader />
        {children}
      </body>
    </html>
  );
}
