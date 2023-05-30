import { getTableOfContents } from "@/lib/toc";
import { Markdown } from "../Markdown";
import { useArticleContext } from "../contexts/ArticleContext";
import { BaseLayout } from "./BaseLayout";

const ProductArticle = () => {
  const ctx = useArticleContext();
  const { article } = ctx;
  const body = article!.body;
  const toc = getTableOfContents(body.raw);

  console.log({ toc });

  return (
    <BaseLayout>
      <div>
        <Markdown markdown={body.code} />
      </div>
    </BaseLayout>
  );
};

export { ProductArticle };
