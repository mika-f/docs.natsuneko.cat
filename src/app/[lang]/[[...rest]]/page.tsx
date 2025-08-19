import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { LandingLayout } from "@/components/layout/LandingLayout";
import { OverviewLayout } from "@/components/layout/OverviewLayout";
import { find, isFallback } from "@/services/docs";

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
    const fallback = isFallback(document, lang);

    switch (document.layout) {
      case "landing":
        return (
          <>
            <div className="container mx-auto h-full">
              <LandingLayout
                document={document}
                lang={lang}
                rest={rest ?? []}
              />
            </div>
          </>
        );

      case "overview":
        return (
          <div className="flex flex-col h-full">
            {fallback && (
              <div className="border-b border-border min-h-12 px-2 py-2 flex items-center justify-center bg-info">
                This topic is not available in your language. Therefore, the
                original version ({document.lang}) is displayed.
              </div>
            )}
            <div className="container mx-auto h-full">
              <OverviewLayout
                document={document}
                lang={lang}
                rest={rest ?? []}
              />
            </div>
          </div>
        );

      case "article":
        return (
          <div className="flex flex-col h-full">
            {fallback && (
              <div className="border-b border-border min-h-12 px-2 py-2 flex items-center justify-center bg-info">
                This topic is not available in your language. Therefore, the
                original version ({document.lang}) is displayed.
              </div>
            )}
            <div className="container mx-auto h-full">
              <ArticleLayout
                document={document}
                lang={lang}
                rest={rest ?? []}
              />
            </div>
          </div>
        );
    }
  } else {
    notFound();
  }
}
