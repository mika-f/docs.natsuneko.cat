import type { Article } from "contentlayer2/generated";
import Link from "next/link";
import { find } from "@/services/docs";
import { Sidebar } from "../features/Sidebar";
import { Heading1 } from "../markdown/Headings";
import { Lead } from "../markdown/Lead";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
};

export const LandingLayout = ({ document, lang, rest }: Props) => {
  const navigations = (document.navigation ?? [])
    .map((w) => find(w, lang))
    .filter((w) => w !== null);

  return (
    <div className="flex gap-x-8 h-full">
      <Sidebar document={document} lang={lang} rest={rest} />
      <div className="pt-10 pb-20 mx-4 lg:mx-0">
        <Heading1>{document.title}</Heading1>
        {document.description && (
          <Lead className="pt-2 pb-8">{document.description}</Lead>
        )}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
          {navigations.map((item) => (
            <li key={item._id}>
              <Link
                href={`/${lang}/${item.path}`}
                className="block hover:bg-muted px-4 py-3 rounded-sm"
              >
                <div className="flex flex-col gap-y-2">
                  <div className="font-semibold text-lg border-b border-border pb-2">
                    {item.title}
                  </div>
                  <div className="text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
