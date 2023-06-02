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
  const { shortTitle, intro } = article!;
  const toc = getTableOfContents(body.raw);
  const items: BreadcrumbItem[] = product
    ? [
        { label: product, href: route.build({ rest: [] }) },
        { label: article!.shortTitle! },
      ]
    : [];

  return (
    <BaseLayout>
      <div className="flex items-start">
        <div className="flex-1">
          {items.length > 1 && (
            <div className="mb-4">
              <Breadcrumb items={items} />
            </div>
          )}
          <Heading level={1}>{shortTitle}</Heading>
          {intro && <p className="text-lg text-neutral-400">{intro}</p>}
          <Markdown markdown={body.code} />
        </div>

        {toc.items.length > 0 && (
          <div className="sticky top-24 ml-16 hidden flex-shrink-0 2xl:block 2xl:w-64">
            <TableOfContents toc={toc} />
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export { ProductArticle };
