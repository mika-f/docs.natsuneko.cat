import React from "react";

import { merge } from "@/lib/utils";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<Props> = ({ level, children, className, ...props }) => {
  switch (level) {
    case 1:
      return (
        <h1 className={merge("mb-4 text-3xl font-bold", className)} {...props}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2
          className={merge(
            "border-b border-neutral-600 pb-2 text-2xl font-bold [&:not(:first-child)]:mt-12",
            className
          )}
          {...props}
        >
          {children}
        </h2>
      );

    case 3:
      return (
        <h3
          className={merge(
            "border-b border-neutral-600 pb-2 text-xl font-bold [&:not(:first-child)]:mt-12",
            className
          )}
          {...props}
        >
          {children}
        </h3>
      );

    case 4:
      return (
        <h4 className={merge("text-md pb-2 font-bold", className)} {...props}>
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 className={merge("", className)} {...props}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6 className={merge("text-sm font-bold", className)} {...props}>
          {children}
        </h6>
      );

    default:
      throw new Error("");
  }
};

export { Heading };
