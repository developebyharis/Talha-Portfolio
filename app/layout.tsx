import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import ClickSpark from "@/components/creativeDesign/ClickSpark";
import { SmoothCursor } from "@/components/creativeDesign/SmoothCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talha Khan - Embedded Systems Engineer",
  description:
    "Portfolio of Talha Khan, Embedded Systems Engineer specializing in microcontrollers, IoT, and firmware development",
  creator: "hariskhan.vercel.app",
  verification: {
    google: "google43b0631fa4160800.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="zKx6MraqC39daV8nc-sHZ4gasyT5s7EZaYtJTuwKHcM"
        />
      </head>
      <body className={`${inter.className} font-sans antialiased cursor-none`}>
        <SmoothCursor />

        <Navigation />
        <ClickSpark
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <main className="min-h-screen">{children}</main>
        </ClickSpark>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
