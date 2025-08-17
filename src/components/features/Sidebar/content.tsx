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
  const navigations = paths.map((w) => find(w, lang)).filter((w) => w !== null);

  return (
    <div className={cn("flex flex-col pt-10 pb-20", className)}>
      <Link href={`/${lang}/${root}`} className="block">
        <div className="text-xl font-semibold tracking-tight w-full pb-2 border-b border-border">
          {article?.title}
        </div>
      </Link>
      <ScrollArea className="pt-4">
        <ul className="flex flex-col gap-y-2">
          {navigations.map((item) => {
            if (item.path === rest.join("/")) {
              return (
                <li
                  key={item._id}
                  className="block px-2 py-1 mr-2 font-semibold"
                >
                  {item.title}
                </li>
              );
            }

            return (
              <li key={item._id}>
                <Link
                  href={`/${lang}/${item.path}`}
                  className="block hover:bg-muted px-2 py-1 mr-2 rounded-sm"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
