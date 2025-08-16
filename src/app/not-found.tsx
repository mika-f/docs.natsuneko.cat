"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";
import { Ghost } from "lucide-react";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

import "./globals-404.css";

const noto = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const NotFound = () => {
  const pathname = usePathname();
  const [, lang] = pathname.split("/");

  return (
    <html lang="ja" className="scroll-pt-16">
      <body
        className={`${noto.variable} bg-background text-foreground grid min-h-[100dvh] grid-cols-1 grid-rows-[auto_1fr_auto] antialiased`}
      >
        <Header lang={lang ?? FALLBACK_LANGUAGE} />

        <div className="bg-background flex h-full w-full flex-col items-center justify-center py-16">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <Ghost className="text-muted-foreground mx-auto h-24 w-24 animate-bounce" />
              <h1 className="text-8xl font-bold tracking-tighter">404</h1>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                ページが見つかりませんでした
              </h2>
              <p className="text-muted-foreground mx-auto max-w-md px-2">
                お探しのページは移動または削除された可能性があります。
                URLをご確認いただくか、以下のボタンからホームにお戻りください。
              </p>
            </div>

            <Link href="/" passHref className="mt-8 block">
              ホームに戻る
            </Link>
          </div>
        </div>

        <Footer />
        <Script
          src="https://kit.fontawesome.com/c291a616a9.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
};

export default NotFound;
