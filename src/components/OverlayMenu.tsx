"use client";

import { useLockedBody } from "@/hooks/useLockedBody";
import { merge } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Portal } from "./Portal";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const OverlayMenu: React.FC<Props> = ({ title, children }) => {
  const [state, setState] = useState(false);
  const [locked, setLocked] = useLockedBody(false, "body");
  const pathname = usePathname();

  useEffect(() => {
    setState(false);
    setLocked(false);
  }, [pathname, setLocked]);

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
        <span>{title}</span>
      </div>
      {state && (
        <Portal>
          <div className="fixed inset-0 top-28 z-10 bg-neutral-800 px-4">
            <div className="z-10 overflow-y-auto pt-2">{children}</div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export { OverlayMenu };
