// src/app/layout.tsx など
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "IPアドレス確認 | あなたのIPアドレスを簡単表示",
  description:
    "あなたのIPアドレスを簡単に確認できるツールです。現在のIPアドレスをすぐに表示します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/*
          1) まず、このbeforeInteractiveスクリプトだけで
             → js?client=… のクエリパラメータ付き
             → HTMLヘッドに“静的”に入ります
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          id="adsense-init"
          strategy="beforeInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-8623190863216628"
          crossOrigin="anonymous"
        />
        <Script src="https://adm.shinobi.jp/s/de0e7c214988b14417c37aafb1bf51fa"/>
      </body>
    </html>
  );
}
