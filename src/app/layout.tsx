import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const noto = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="ja" className="scroll-pt-16">
      <body
        className={`${noto.variable} grid min-h-[100dvh] grid-cols-1 grid-rows-[auto_1fr_auto] antialiased`}
      >
        {children}
        <Script
          src="https://kit.fontawesome.com/c291a616a9.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
