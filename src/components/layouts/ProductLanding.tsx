import { Heading } from "../Typography";
import { useArticleContext } from "../contexts/ArticleContext";
import { BaseLayout } from "./BaseLayout";

const ProductLanding = () => {
  const ctx = useArticleContext();
  const { article } = ctx;

  return (
    <BaseLayout>
      <Heading level={1}>{article!.shortTitle}</Heading>
      {article!.intro && (
        <p className="text-lg text-neutral-400">{article!.intro}</p>
      )}
    </BaseLayout>
  );
};

export { ProductLanding };
