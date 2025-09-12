import type { Article } from "contentlayer2/generated";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { find, navigation } from "@/services/docs";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
  className?: string;
};

export const SidebarContent = ({ document, lang, rest, className }: Props) => {
  const { root, paths } = navigation(document, lang);
  const article = find(root, lang);
  const navigations = paths
    .map((w) => {
      if ("children" in w) {
        return {
          type: "nested",
          entry: find(w.href, lang),
          children: w.children.map((child) => find(child.href, lang)),
        };
      }

      return {
        type: "item",
        entry: find(w.href, lang),
        children: [],
      };
    })
    .filter((w) => w.entry !== null);

  return (
    <div className={cn("flex flex-col pt-10 pb-20", className)}>
      <Link href={`/${lang}/${root}`} className="block">
        <div className="text-xl font-semibold tracking-tight w-full pb-2 border-b border-border">
          {article?.title}
        </div>
      </Link>
      <ScrollArea className="pt-4 [&>div>div]:block!">
        <ul className="flex flex-col gap-y-2 overflow-hidden">
          {navigations.map((item) => {
            if (item.type === "item") {
              if (item.entry?.path === rest.join("/")) {
                return (
                  <li
                    key={item.entry._id}
                    className="block px-3 py-2 mr-2 font-semibold"
                  >
                    {item.entry.title}
                  </li>
                );
              }

              return (
                <li key={item.entry?._id}>
                  <Link
                    href={`/${lang}/${item.entry?.path}`}
                    className="block hover:bg-muted px-3 py-2 mr-2 rounded-sm"
                  >
                    {item.entry?.title}
                  </Link>
                </li>
              );
            }

            if (item.type === "nested") {
              return (
                <li
                  key={item.entry?._id}
                  className="overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <Link
                    href={`/${lang}/${item.entry?.path}`}
                    className="block hover:bg-muted px-3 py-2 mr-2 rounded-sm overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    {item.entry?.title}
                  </Link>
                  <ul className="pl-4">
                    {item.children.map((child) => (
                      <li key={child?._id}>
                        <Link
                          href={`/${lang}/${child?.path}`}
                          className="block hover:bg-muted px-3 py-2 mr-2 rounded-sm overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                          {child?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
