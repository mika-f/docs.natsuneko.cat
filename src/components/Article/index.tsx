import { ArticleContext, getArticleContext } from "../contexts/ArticleContext";
import { useRouteContext } from "../contexts/RouteContext";

const Article = () => {
  const route = useRouteContext();
  const article = getArticleContext(route);

  return <ArticleContext.Provider value={article}></ArticleContext.Provider>;
};

export { Article };
