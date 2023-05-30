import { merge } from "@/lib/utils";
import { FallbackContent } from "../FallbackContent";
import { SideNav } from "../SideNav";
import { useArticleContext } from "../contexts/ArticleContext";

type Props = {
  children?: React.ReactNode;
};

const BaseLayout: React.FC<Props> = ({ children }) => {
  const ctx = useArticleContext();
  const { article, isFallbackContent, product, sidebar } = ctx;

  return (
    <div className="flex h-full flex-col">
      {isFallbackContent ? (
        <FallbackContent originalLang={article!.lang} />
      ) : null}
      <div className="flex h-full">
        {sidebar && (
          <div className="hidden flex-shrink-0 md:block md:w-64 lg:w-72 xl:w-80 2xl:w-96">
            <SideNav title={product ?? undefined} items={sidebar} />
          </div>
        )}
        <article
          className={merge(
            "container mx-auto h-full px-8 py-6 md:border-neutral-600",
            sidebar && "md:border-l lg:px-16 xl:px-20"
          )}
        >
          {children}
        </article>
      </div>
    </div>
  );
};

export { BaseLayout };
