import Link from "next/link";
import { Suspense } from "react";
import { Changelog } from "../Changelog";
import { LinkButton } from "../LinkButton";
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
      {intro && <p className="text-lg text-neutral-400">{intro}</p>}

      {introLinks && (
        <div className="my-8 flex gap-x-4 text-lg">
          {introLinks?.map((w, i) => {
            return (
              <LinkButton
                primary={i === 0}
                key={w._id}
                href={route.build({ relative: w.link })}
              >
                {w.title}
              </LinkButton>
            );
          })}
        </div>
      )}

      <div className="my-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredLinks &&
          featuredLinks.map((w) => {
            return (
              <div key={w._id}>
                <div className="border-b border-neutral-600 pb-4 text-lg font-bold">
                  {w.title}
                </div>

                {w.items.map((v) => {
                  const ref = ctx.findRelative(route.build({ relative: v }));

                  return ref ? (
                    <Link
                      key={v}
                      className="block border-neutral-600 px-2 py-4 hover:bg-neutral-700 [&:not(:last-child)]:border-b"
                      href={route.build({ relative: ref.path })}
                    >
                      <p className="text-sky-300">{ref.shortTitle}</p>
                      {ref.intro && (
                        <p className="my-2 text-neutral-400">{ref.intro}</p>
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
              Changelog
            </div>
            <Suspense fallback={<p className="px-2 py-4">Fetching......</p>}>
              {/* @ts-expect-error Async Server Component */}
              <Changelog repo={changelog.repository} />
            </Suspense>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export { ProductLanding };
