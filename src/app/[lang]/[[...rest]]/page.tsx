import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { LandingLayout } from "@/components/layout/LandingLayout";
import { find } from "@/services/docs";

type Props = {
  params: Promise<{
    lang: string;
    rest?: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { lang, rest } = await params;
  const document = find((rest ?? []).join("/"), lang);

  if (document) {
    switch (document.layout) {
      case "landing":
        return (
          <div className="container mx-auto h-full">
            <LandingLayout document={document} lang={lang} rest={rest ?? []} />
          </div>
        );

      case "overview":
        return <div />;

      case "article":
        return (
          <div className="container mx-auto h-full">
            <ArticleLayout document={document} lang={lang} rest={rest ?? []} />
          </div>
        );
    }
  } else {
    notFound();
  }
}
