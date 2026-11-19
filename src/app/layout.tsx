import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FintechX – AI Finance & Investment Platform",
  description:
    "Optimize your investments with AI-driven analysis, real-time tracking, and intelligent recommendations.",
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
    <html lang="en" className={`${bricolage.variable} scroll-smooth antialiased`}>
      <body className="bg-white text-[#1d1d1d] overflow-x-hidden selection:bg-[#3b82f6]/15 selection:text-[#1d1d1d]">
        {children}
      </body>
    </html>
  );
}
