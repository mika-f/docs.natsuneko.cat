"use client";

import { Ghost } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";

const NotFound = () => {
  const pathname = usePathname();
  const [, lang] = pathname.split("/");

  return (
    <>
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
    </>
  );
};

export default NotFound;
