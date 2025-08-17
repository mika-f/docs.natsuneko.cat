import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/features/Theme";

import "./globals.css";

const noto = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

const SITE_NAME = "Natsuneko Laboratory Docs";

export const metadata: Metadata = {
  // globals
  generator: "Next.js",
  applicationName: SITE_NAME,
  keywords: ["Natsuneko Laboratory", "Natsuneko"],
  authors: [{ name: "Natsuneko", url: "https://natsuneko.com" }],
  creator: "Natsuneko",
  publisher: "Natsuneko",
  robots: { index: true, follow: true },

  // per page
  title: {
    template: `%s / ${SITE_NAME}`,
    default: SITE_NAME,
  },

  // ogp
  openGraph: {
    title: {
      template: `%s / ${SITE_NAME}`,
      default: SITE_NAME,
    },
    siteName: SITE_NAME,
    type: "website",
  },

  // twitter
  twitter: {
    card: "summary_large_image",
    title: {
      template: `%s / ${SITE_NAME}`,
      default: SITE_NAME,
    },
    creator: "@6jz",
    site: "@6jz",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }: Props) {
  return (
    <html lang="ja" className="scroll-pt-16" suppressHydrationWarning>
      <body
        className={`${noto.className} grid min-h-[100dvh] grid-cols-1 grid-rows-[auto_1fr_auto] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://kit.fontawesome.com/c291a616a9.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
