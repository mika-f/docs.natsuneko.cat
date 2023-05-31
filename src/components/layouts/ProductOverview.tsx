import { Markdown } from "../Markdown";
import { Heading } from "../Typography";
import { useArticleContext } from "../contexts/ArticleContext";
import { BaseLayout } from "./BaseLayout";

const ProductOverview = () => {
  const ctx = useArticleContext();
  const { article, product } = ctx;
  const body = article!.body;

  return (
    <BaseLayout>
      <div className="flex flex-row">
        <div>
          <Heading level={1}>{article!.shortTitle}</Heading>
          {article!.intro && (
            <p className="text-xl text-neutral-400">{article!.intro}</p>
          )}
          <Markdown markdown={body.code} />
        </div>
      </div>
    </BaseLayout>
  );
};

export { ProductOverview };
