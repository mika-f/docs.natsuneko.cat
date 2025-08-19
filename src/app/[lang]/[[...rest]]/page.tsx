import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { LandingLayout } from "@/components/layout/LandingLayout";
import { OverviewLayout } from "@/components/layout/OverviewLayout";
import { find } from "@/services/docs";

type Props = {
  params: Promise<{
    lang: string;
    rest?: string[];
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { lang, rest } = await params;
  const document = find((rest ?? []).join("/"), lang);

  if (document) {
    const root = find((rest?.splice(0, 1) ?? []).join("/"), lang);
    const isMyself = root?._id === document._id;
    const title =
      root && !isMyself ? `${document.title} / ${root.title}` : document.title;
    return {
      title,
      description: document.description,
      openGraph: {
        title,
        description: document.description,
      },
      twitter: { title },
    };
  }

  notFound();
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
        return (
          <div className="container mx-auto h-full">
            <OverviewLayout document={document} lang={lang} rest={rest ?? []} />
          </div>
        );

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
