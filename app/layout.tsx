import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ForgeSys — Software & Systems Engineering Studio",
  description:
    "A two-engineer software team led by Ayush and Saad. Production-grade web platforms, distributed backends, AI systems, and workflow automation.",
  keywords: [
    "ForgeSys",
    "Product Engineering",
    "Software Studio",
    ".NET",
    "React",
    "Next.js",
    "AI Systems",
    "Workflow Automation",
    "Distributed Systems"
  ],
  authors: [{ name: "ForgeSys" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/brand/forgesys-mark-transparent.png",
  },
  openGraph: {
    title: "ForgeSys — Software & Systems Engineering Studio",
    description:
      "A two-engineer software team led by Ayush and Saad. Production-grade web platforms, distributed backends, AI systems, and workflow automation.",
    url: "https://forgesys.dev",
    siteName: "ForgeSys",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeSys — Software & Systems Engineering Studio",
    description:
      "A two-engineer software team led by Ayush and Saad. Production-grade web platforms, distributed backends, AI systems, and workflow automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[#F7F7F4] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#F7F7F4]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
