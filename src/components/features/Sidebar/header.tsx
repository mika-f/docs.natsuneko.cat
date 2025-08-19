"use client";

import * as Portal from "@radix-ui/react-portal";
import type { Article } from "contentlayer2/generated";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { SidebarContent } from "./content";

type Props = {
  document: Article;
  lang: string;
  rest: string[];
};

export const HeaderSidebar = ({ document, lang, rest }: Props) => {
  const [state, setState] = useState(false);
  const toggleValue = useCallback(() => {
    setState((prev) => {
      return !prev;
    });
  }, []);

  return (
    <div className="flex md:hidden h-12 items-center sticky top-16 z-20 border-b border-border bg-background">
      <button
        className="flex mx-4 lg:mx-0 w-full"
        type="button"
        onClick={toggleValue}
      >
        {state ? <ChevronDown /> : <ChevronRight />} Menu
      </button>
      {state && (
        <Portal.Root className="z-20 fixed bg-background w-full top-26 min-h-[calc(100dvh-6.5rem)] px-4 lg:px-0">
          <SidebarContent
            document={document}
            lang={lang}
            rest={rest}
            className="pt-4 pb-4"
          />
        </Portal.Root>
      )}
    </div>
  );
};
