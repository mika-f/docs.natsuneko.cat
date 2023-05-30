import { Heading } from "../Typography";
import { useArticleContext } from "../contexts/ArticleContext";
import { BaseLayout } from "./BaseLayout";

const ProductOverview = () => {
  const ctx = useArticleContext();
  const { article } = ctx;

  return (
    <BaseLayout>
      <Heading level={1}>{article!.shortTitle}</Heading>
    </BaseLayout>
  );
};

export { ProductOverview };
