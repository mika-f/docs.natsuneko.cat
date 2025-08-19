import type { Article } from "contentlayer2/generated";
import { SidebarContent } from "./content";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
};

export const Sidebar = ({ document, lang, rest }: Props) => {
  return (
    <div className="hidden md:block shrink-0 w-64 xl:w-72 2xl:w-80 border-r border-border">
      <SidebarContent document={document} lang={lang} rest={rest} />
    </div>
  );
};
