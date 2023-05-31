import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticleContext,
  ArticleContextT,
  getArticleContext,
} from "@/components/contexts/ArticleContext";
import {
  RouteContextProps,
  useRouteContext,
} from "@/components/contexts/RouteContext";
import { ProductArticle } from "@/components/layouts/ProductArticle";
import { ProductLanding } from "@/components/layouts/ProductLanding";
import { ProductOverview } from "@/components/layouts/ProductOverview";

const getTitle = (ctx: ArticleContextT) => {
  const { article, product } = ctx;

  if (product && article?.path) {
    return `${article?.title} - ${product}`;
  }

  return article?.title;
};

const getMetadata = async (
  route: RouteContextProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const ctx = getArticleContext({ ...route, build: () => "" });
  const { article } = ctx;
  const title = getTitle(ctx);

  return {
    title,
    description: article?.intro,
    openGraph: {
      title,
      description: article?.intro,
    },
    twitter: {
      title,
    },
  };
};

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

export { GlobalArticle, getMetadata };
