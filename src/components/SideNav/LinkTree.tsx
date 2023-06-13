"use client";

import type {
  SideBarItem,
  SideBarNestItem,
} from "@/components/contexts/ArticleContext";
import { merge } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { LinkItem } from "./LinkItem";

type Props = {
  item: SideBarNestItem;
};

const LinkTree: React.FC<Props> = ({ item }) => {
  const pathname = usePathname();
  const isItemActive = (item: SideBarItem): boolean => {
    if ("href" in item) {
      return (
        `${item.href}/` === pathname ||
        item.href === pathname ||
        item.href === `${pathname}/`
      );
    }

    return item.items.some((w) => isItemActive(w));
  };

  const isActive = isItemActive(item);
  const [state, setState] = useState(isActive);
  const toggleState = useCallback(() => setState((w) => !w), []);

  return (
    <li className={merge("my-2 text-sm text-neutral-500")}>
      <div
        onClick={toggleState}
        className="-ml-5 cursor-pointer whitespace-break-spaces break-words hover:text-neutral-400"
      >
        <span className={merge("mr-0.5", state ? "inline" : "hidden")}>
          <i className="fa-regular fa-chevron-down fa-fw" />
        </span>
        <span className={merge("mr-0.5", state ? "hidden" : "inline")}>
          <i className="fa-regular fa-chevron-right fa-fw" />
        </span>
        {item.title}
      </div>
      {state && (
        <ul className="pl-2">
          {item.items.map((w, i) => {
            if ("href" in w) {
              return <LinkItem key={w.href} item={w} />;
            }

            return <LinkTree key={`${w.title}-${i}`} item={w} />;
          })}
        </ul>
      )}
    </li>
  );
};

export { LinkTree };
