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
        <h1
          className={merge("mb-4 break-words text-3xl font-bold", className)}
          {...props}
        >
          {children}
        </h1>
      );

    case 2:
      return (
        <h2
          className={merge(
            "mb-4 break-words border-b border-neutral-300 pb-2 text-2xl font-bold dark:border-neutral-700 [&:not(:first-child)]:mt-12",
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
            "mb-4 break-words border-b border-neutral-300  pb-2 text-xl font-bold dark:border-neutral-700 [&:not(:first-child)]:mt-12",
            className
          )}
          {...props}
        >
          {children}
        </h3>
      );

    case 4:
      return (
        <h4
          className={merge("text-md break-words pb-2 font-bold", className)}
          {...props}
        >
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 className={merge("break-words", className)} {...props}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6
          className={merge("break-words text-sm font-bold", className)}
          {...props}
        >
          {children}
        </h6>
      );

    default:
      throw new Error("");
  }
};

export { Heading };
