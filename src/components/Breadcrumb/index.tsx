import React from "react";
import { ActiveItem, BreadcrumbActiveItem } from "./ActiveItem";
import { BreadcrumbLinkItem, LinkItem } from "./LinkItem";

type BreadcrumbItem = BreadcrumbLinkItem | BreadcrumbActiveItem;

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-x-2 gap-y-2 text-sm text-neutral-300">
        {items.map((w, i) => {
          const isNotLast = i !== items.length - 1;
          return (
            <React.Fragment key={w.label}>
              {"href" in w ? (
                <LinkItem label={w.label} href={w.href} />
              ) : (
                <ActiveItem label={w.label} />
              )}
              {isNotLast && (
                <li className="text-neutral-500">
                  <i className="fa-regular fa-chevron-right" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export { Breadcrumb };
export type { BreadcrumbItem };
