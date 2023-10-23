import { FALLBACK_LANGUAGE } from "@/configurations/internationalization";
import { BANNER } from "@/configurations/notification";
import { merge } from "@/lib/utils";
import { Banner } from "../Banner";
import { FallbackContent } from "../FallbackContent";
import { OverlayNav } from "../OverlayNav";
import { SideNav } from "../SideNav";
import { useArticleContext } from "../contexts/ArticleContext";
import { useRouteContext } from "../contexts/RouteContext";

type Props = {
  children?: React.ReactNode;
};

const BaseLayout: React.FC<Props> = ({ children }) => {
  const ctx = useArticleContext();
  const route = useRouteContext();
  const { article, isFallbackContent, product, sidebar } = ctx;
  const { content } = BANNER;

  return (
    <div className="flex h-full w-full max-w-full flex-col">
      {sidebar && (
        <div className="sticky top-16 z-10 border-b border-neutral-700 lg:hidden">
          <OverlayNav title={product ?? undefined} items={sidebar} />
        </div>
      )}
      {isFallbackContent ? (
        <>
          <FallbackContent originalLang={article!.lang} lang={route.language} />
        </>
      ) : null}
      {content ? (
        <>
          <Banner
            content={content[route.language ?? content[FALLBACK_LANGUAGE]]}
          />
        </>
      ) : null}
      <div className="container mx-auto flex h-full">
        {sidebar && (
          <div className="hidden grow-0 overflow-hidden py-8 md:w-64 lg:block lg:w-72 xl:w-80 2xl:w-96">
            <SideNav title={product ?? undefined} items={sidebar} />
          </div>
        )}
        <div className="w-full max-w-full ">
          <article
            className={merge(
              "mx-4 h-full flex-1 py-6 md:border-neutral-600 lg:mx-0",
              sidebar && "lg:border-l lg:pl-16 xl:pl-20"
            )}
          >
            {children}
          </article>
        </div>
      </div>
    </div>
  );
};

export { BaseLayout };
