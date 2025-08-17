import type { Article } from "contentlayer2/generated";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { find } from "@/services/docs";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
  className?: string;
};

export const SidebarContent = ({ document, lang, rest, className }: Props) => {
  const navigations = (document.navigation ?? [])
    .map((w) => find(w, lang))
    .filter((w) => w !== null);

  return (
    <div className={cn("flex flex-col pt-10 pb-20", className)}>
      <div className="text-xl font-semibold tracking-tight w-full pb-2 border-b border-border">
        {document.title}
      </div>
      <ScrollArea className="pt-4">
        <ul className="flex flex-col gap-y-2">
          {navigations.map((item) => {
            if (item.path === rest.join("/")) {
              return <li key={item._id}>{item.title}</li>;
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
