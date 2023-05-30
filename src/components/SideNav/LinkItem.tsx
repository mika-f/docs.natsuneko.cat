import Link from "next/link";

import type { SideBarLinkItem } from "@/components/contexts/ArticleContext";
import { useRouteContext } from "@/components/contexts/RouteContext";
import { merge } from "@/lib/utils";

type Props = {
  item: SideBarLinkItem;
};

const LinkItem: React.FC<Props> = ({ item }) => {
  const route = useRouteContext();
  const isActive = item.href === route.build({});

  return (
    <li
      className={merge(
        "my-2 ml-4 text-sm text-gray-400 hover:text-gray-300",
        isActive && "text-gray-300"
      )}
    >
      <Link href={item.href}>{item.title}</Link>
    </li>
  );
};

export { LinkItem };
