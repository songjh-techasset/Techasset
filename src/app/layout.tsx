import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "주식회사 한국기술자산",
  description: "주식회사 한국기술자산",
  openGraph: {
    title: "주식회사 한국기술자산",
    description: "주식회사 한국기술자산",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://techasset.co.kr",
    type: "website",
    images: [
      {
        url: (process.env.NEXT_PUBLIC_BASE_URL || "https://techasset.co.kr") + "/og-default.png",
        width: 1200,
        height: 630,
        alt: "줍줍 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "주식회사 한국기술자산",
    description: "주식회사 한국기술자산",
    images: [
      (process.env.NEXT_PUBLIC_BASE_URL || "https://techasset.co.kr") + "/og-default.png"
    ],
  },
  other: {
    "naver-site-verification": "65b3740c4f59722100f6df5816f3cb4c00e507ee",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          async
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
          integrity={"!!!integridy!!!"}
          crossOrigin='anonymous'
        ></Script>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
