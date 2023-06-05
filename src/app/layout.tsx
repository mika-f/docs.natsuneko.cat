import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { FALLBACK } from "@/lib/i18n";
import { merge } from "@/lib/utils";
import "@/styles/globals.css";
import { dir } from "i18next";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  // globals
  generator: "Next.js",
  applicationName: "Natsuneko Docs",
  keywords: ["Natsuneko", "Natsuneko Laboratory"],
  authors: [{ name: "Natsuneko", url: "https://natsuneko.cat" }],
  colorScheme: "dark",
  creator: "Natsuneko",
  publisher: "Natsuneko",

  // per page
  title: {
    template: "%s | Natsuneko Docs",
    default: "Natsuneko Docs",
  },
  description: "Generated by create next app",

  // ogp
  openGraph: {
    title: {
      template: "%s | Natsuneko Docs",
      default: "Natsuneko Docs",
    },
    siteName: "Natsuneko Docs",
    type: "website",
  },

  // twitter
  twitter: {
    card: "summary",
    title: {
      template: "%s | Natsuneko Docs",
      default: "Natsuneko Docs",
    },
    creator: "@6jz",
  },

  // viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang?: string };
}) {
  return (
    <html lang="en" className="scroll-pt-20" dir={dir(params.lang ?? FALLBACK)}>
      <body
        className={merge(
          "grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-neutral-800 text-neutral-300",
          noto.className
        )}
      >
        <Header />
        <main>{children}</main>
        <div id="portal" />
        <Footer />

        <Script
          src="https://kit.fontawesome.com/c291a616a9.js"
          crossOrigin="anonymous"
        />

        <Analytics />
      </body>
    </html>
  );
}
