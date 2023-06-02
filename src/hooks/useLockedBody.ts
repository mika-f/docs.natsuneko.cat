"use client";

import { useEffect, useLayoutEffect, useState } from "react";

let globalCounter = 0;

const useLockedBody = (initialState: boolean, rootId: string) => {
  const [isLocked, setIsLocked] = useState(initialState);

  useLayoutEffect(() => {
    if (!isLocked) {
      return;
    }

    globalCounter += 1;

    const overflow = document.body.style.overflow;
    const padding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    const root = document.getElementById(rootId);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      globalCounter -= 1;
      document.body.style.overflow = overflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = padding;
      }

      if (globalCounter <= 0) {
        document.body.style.overflow = "";
      }
    };
  }, [rootId, isLocked]);

  useEffect(() => {
    if (isLocked !== initialState) {
      setIsLocked(!initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState]);

  return [isLocked, setIsLocked] as const;
};

export { useLockedBody };
