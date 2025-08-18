import type { Article } from "contentlayer2/generated";
import Link from "next/link";
import { find } from "@/services/docs";
import { Changelog } from "../features/Changelog";
import { Sidebar } from "../features/Sidebar";
import { HeaderSidebar } from "../features/Sidebar/header";
import { Heading1 } from "../markdown/Headings";
import { Lead } from "../markdown/Lead";
import { Button } from "../ui/button";
import { Markdown } from "../markdown";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
};

export const OverviewLayout = ({ document, lang, rest }: Props) => {
  const { repository, featuredLinks, introLinks } = document;
  return (
    <>
      <HeaderSidebar document={document} lang={lang} rest={rest} />
      <div className="flex gap-x-8 h-full w-full">
        <Sidebar document={document} lang={lang} rest={rest} />
        <div className="pt-10 pb-20 mx-4 lg:mx-0 w-full">
          <Heading1>{document.title}</Heading1>
          {document.description && (
            <Lead className="pt-2 pb-4">{document.description}</Lead>
          )}

          <div>
            <Markdown markdown={document.body.code} />
          </div>

          <div>
            {introLinks && introLinks.length > 0 && (
              <div className="my-8 flex gap-x-4 text-lg">
                {introLinks.map((link, index) => {
                  return (
                    <Button
                      key={link.title}
                      size="lg"
                      className="rounded-none text-foreground py-2 h-auto text-lg"
                      variant={index === 0 ? "default" : "secondary"}
                      asChild
                    >
                      <Link href={link.item}>{link.title}</Link>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="my-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {featuredLinks?.map((w) => {
              return (
                <div key={w.title}>
                  <div className="border-b border-border pb-4 text-lg font-semibold">
                    {w.title}
                  </div>

                  {w.items.map((item) => {
                    const article = find(item, lang);

                    if (article === null) {
                      return null;
                    }

                    return (
                      <Link
                        key={item}
                        href={`/${lang}/${item}`}
                        className="block border-border px-2 py-4 hover:bg-muted [(:last-child)]:border-b-0"
                      >
                        <p>{article.title}</p>
                        {article.description && (
                          <div className="my-2 text-muted-foreground">
                            {article.description}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
            {repository && (
              <div>
                <div className="border-b border-border pb-4 text-lg font-semibold">
                  Changelog
                </div>
                <Changelog repository={repository} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
