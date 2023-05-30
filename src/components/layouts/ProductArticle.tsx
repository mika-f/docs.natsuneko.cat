import { getTableOfContents } from "@/lib/toc";
import { Markdown } from "../Markdown";
import { TableOfContents } from "../TableOfContents";
import { useArticleContext } from "../contexts/ArticleContext";
import { BaseLayout } from "./BaseLayout";

const ProductArticle = () => {
  const ctx = useArticleContext();
  const { article } = ctx;
  const body = article!.body;
  const toc = getTableOfContents(body.raw);

  return (
    <BaseLayout>
      <div className="flex flex-row">
        <div>
          <Markdown markdown={body.code} />
        </div>

        <div className="ml-16 hidden flex-shrink-0 2xl:block 2xl:w-64">
          <TableOfContents toc={toc} />
        </div>
      </div>
    </BaseLayout>
  );
};

export { ProductArticle };
