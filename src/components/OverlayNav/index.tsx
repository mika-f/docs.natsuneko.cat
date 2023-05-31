"use client";

import { merge } from "@/lib/utils";
import { useState } from "react";
import { useLockedBody } from "usehooks-ts";
import { Portal } from "../Portal";
import { SideNav } from "../SideNav";
import { SideBar } from "../contexts/ArticleContext";

type Props = {
  title?: string;
  items: SideBar;
};

const OverlayNav: React.FC<Props> = ({ title, items }) => {
  const [state, setState] = useState(false);
  const [locked, setLocked] = useLockedBody(false, "body");

  const toggleState = () => {
    setState(!state);
    setLocked(!locked);
  };

  return (
    <div className="bg-neutral-800">
      <div
        className="flex h-12 items-center px-4 text-sm"
        onClick={toggleState}
      >
        <span className={merge("mr-2", state ? "inline" : "hidden")}>
          <i className="fa-regular fa-chevron-down fa-fw" />
        </span>
        <span className={merge("mr-2", state ? "hidden" : "inline")}>
          <i className="fa-regular fa-chevron-right fa-fw" />
        </span>
        <span>Menu</span>
      </div>
      {state && (
        <Portal>
          <div className="fixed inset-0 top-28 z-10 bg-neutral-800 px-4">
            <div className="z-10 overflow-y-auto pt-2">
              <SideNav title={title} items={items} />
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export { OverlayNav };
