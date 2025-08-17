import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FALLBACK_LANGUAGE } from "@/configurations/i18n";

type Props = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang ?? FALLBACK_LANGUAGE} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
