import Link from "next/link";
import { useRouteContext } from "../contexts/RouteContext";
import { LinkItem } from "./LinkItem";

import type { SideBar } from "@/components/contexts/ArticleContext";
import React from "react";
import { LinkTree } from "./LinkTree";

type Props = {
  title?: string;
  items: SideBar;
  overlay?: boolean;
};

const SideNav: React.FC<Props> = ({ title, items }) => {
  const route = useRouteContext();
  const { product } = route;

  return (
    <nav className="text-sm">
      {product && (
        <div className="mr-2">
          <span className="mr-2">
            <i className="fa-regular fa-arrow-left" />
          </span>
          <Link href="/">All products</Link>
        </div>
      )}

      {title && (
        <div className="my-4 border-b border-neutral-600 pb-4 text-base font-bold">
          <div className="mr-2">
            <Link href={route.build({ product, rest: [] })}>{title}</Link>
          </div>
        </div>
      )}

      <ul className="ml-4 mr-2">
        {items.map((w) => {
          if ("href" in w) {
            return <LinkItem key={w.href} item={w} />;
          }

          return <LinkTree key={w.title} item={w} />;
        })}
      </ul>
    </nav>
  );
};

export { SideNav };
