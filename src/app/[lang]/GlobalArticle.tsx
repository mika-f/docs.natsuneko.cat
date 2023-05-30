import { notFound } from "next/navigation";

import {
  ArticleContext,
  getArticleContext,
} from "@/components/contexts/ArticleContext";
import { useRouteContext } from "@/components/contexts/RouteContext";
import { ProductArticle } from "@/components/layouts/ProductArticle";
import { ProductLanding } from "@/components/layouts/ProductLanding";
import { ProductOverview } from "@/components/layouts/ProductOverview";

const GlobalArticle = () => {
  const route = useRouteContext();
  const ctx = getArticleContext(route);

  if (!ctx.article) {
    notFound();
  }

  const { article } = ctx;
  const { layout } = article;

  const withLayout = () => {
    switch (layout) {
      case "product-article":
        return <ProductArticle />;

      case "product-landing":
        return <ProductLanding />;

      case "product-overview":
        return <ProductOverview />;
    }
  };

  return (
    <ArticleContext.Provider value={ctx}>
      {withLayout()}
    </ArticleContext.Provider>
  );
};

export { GlobalArticle };
