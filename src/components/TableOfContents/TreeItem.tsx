import React from "react";

import type { Items } from "@/lib/toc";

type Props = {
  items: Items["items"];
};

const TreeItem: React.FC<Props> = ({ items }) => {
  return (
    <ul className="text-base">
      {items.map((w) => {
        return (
          <li
            key={w.title}
            className="my-2 text-sm text-gray-400 hover:text-gray-300"
          >
            <a className="hover:underline" href={w.url}>
              {w.title}
            </a>

            <div className="pl-3">
              {w.items && w.items.length > 0 && <TreeItem items={w.items} />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { TreeItem };
