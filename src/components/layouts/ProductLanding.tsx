import { LinkButton } from "@natsuneko-laboratory/ui/navigations/link-button/next";

import Link from "next/link";
import { Suspense } from "react";
import { Changelog } from "../Changelog";
import { Heading } from "../Typography";
import { useArticleContext } from "../contexts/ArticleContext";
import { useRouteContext } from "../contexts/RouteContext";
import { BaseLayout } from "./BaseLayout";

const ProductLanding = () => {
  const route = useRouteContext();
  const ctx = useArticleContext();
  const { article } = ctx;
  const { shortTitle, intro, introLinks, featuredLinks, changelog } = article!;

  return (
    <BaseLayout>
      <Heading level={1}>{shortTitle}</Heading>
      {intro && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {intro}
        </p>
      )}

      {introLinks && (
        <div className="my-8 flex gap-x-4 text-lg">
          {introLinks?.map((w, i) => {
            return (
              <LinkButton
                variant={i === 0 ? "primary" : "secondary"}
                key={w._id}
                href={route.build({ relative: w.link })}
              >
                {w.title}
              </LinkButton>
            );
          })}
        </div>
      )}

      <div className="my-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {featuredLinks &&
          featuredLinks.map((w) => {
            return (
              <div key={w._id}>
                <div className="border-b border-neutral-400 pb-4 text-lg font-bold dark:border-neutral-600">
                  {w.title}
                </div>

                {w.items.map((v) => {
                  const ref = ctx.findRelative(v);

                  return ref ? (
                    <Link
                      key={v}
                      className="block border-neutral-600 px-2 py-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 [&:not(:last-child)]:border-b"
                      href={route.build({ relative: v })}
                    >
                      <p className="text-sky-600 dark:text-sky-300">
                        {ref.shortTitle}
                      </p>
                      {ref.intro && (
                        <p className="my-2 text-neutral-600 dark:text-neutral-400">
                          {ref.intro}
                        </p>
                      )}
                    </Link>
                  ) : null;
                })}
              </div>
            );
          })}

        {changelog && (
          <div>
            <div className="border-b border-neutral-600 pb-4 text-lg font-bold">
              {route.language === "ja-jp" ? "更新履歴" : "Changelog"}
            </div>
            <Suspense fallback={<p className="px-2 py-4">Fetching......</p>}>
              <Changelog repo={changelog.repository} />
            </Suspense>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export { ProductLanding };
