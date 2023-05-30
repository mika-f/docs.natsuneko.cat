import React from "react";

import type { Items } from "@/lib/toc";

import { TreeItem } from "./TreeItem";

type Props = {
  toc: Items;
};

const TableOfContents: React.FC<Props> = ({ toc }) => {
  return (
    <nav className="flex max-h-[inherit] flex-col">
      <div className="border-b border-neutral-600">
        <div className="px-4 py-2 text-sm font-bold">On this page</div>
      </div>
      <div className="overflow-y-auto px-4 py-2">
        <TreeItem items={toc.items} />
      </div>
    </nav>
  );
};

export { TableOfContents };
