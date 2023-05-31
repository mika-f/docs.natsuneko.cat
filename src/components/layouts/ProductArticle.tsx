import { getTableOfContents } from "@/lib/toc";
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumb";
import { Markdown } from "../Markdown";
import { TableOfContents } from "../TableOfContents";
import { Heading } from "../Typography";
import { useArticleContext } from "../contexts/ArticleContext";
import { useRouteContext } from "../contexts/RouteContext";
import { BaseLayout } from "./BaseLayout";

const ProductArticle = () => {
  const ctx = useArticleContext();
  const route = useRouteContext();

  const { article, product } = ctx;
  const body = article!.body;
  const toc = getTableOfContents(body.raw);
  const items: BreadcrumbItem[] = product
    ? [
        { label: product, href: route.build({ rest: [] }) },
        { label: article!.shortTitle! },
      ]
    : [];

  return (
    <BaseLayout>
      <div className="flex flex-row">
        <div>
          {items.length > 1 && (
            <div className="mb-4">
              <Breadcrumb items={items} />
            </div>
          )}
          <Heading level={1}>{article!.shortTitle}</Heading>
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
