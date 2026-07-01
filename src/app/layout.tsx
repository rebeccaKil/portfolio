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
  title: "Rebecca K. · Product Owner",
  description:
    "Travel & Commerce PO — 결제·예약·전시·AI 자동화 경험. 고객 행동 데이터로 문제를 찾고 서비스 구조를 바꿔 숫자로 증명합니다.",
  openGraph: {
    title: "Rebecca K. · Product Owner",
    description: "Travel & Commerce PO — 결제·예약·전시·AI 자동화",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink">{children}</body>
    </html>
  );
}
