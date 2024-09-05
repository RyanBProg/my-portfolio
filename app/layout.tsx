import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio - Ryan Bowler",
  description:
    "I am a Javascript Full-Stack developer, welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1100px] mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
