import { createServerContext, useContext } from "react";

type RouteContextProps = {
  language: string;
  product: string | null;
  version: string | null;
  rest: string[];
};

type RouteContextT = RouteContextProps & {
  build: (ctx: Partial<RouteContextProps>) => string;
};

const RouteContext = createServerContext<RouteContextProps | null>(
  "route",
  null
);

const useRouteContext = (): RouteContextT => {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error(
      "useRouteContext must be used within a RouteContext.Provider"
    );
  }

  return {
    ...context,
    build: (ctx: Partial<RouteContextProps>) => {
      const { language, product, version, rest } = { ...context, ...ctx };
      const url: string[] = [language];

      if (product) {
        url.push(product);
      }

      if (version) {
        url.push(version);
      }

      if (rest) {
        url.push(...rest);
      }

      return `/${url.join("/")}`;
    },
  };
};

export { RouteContext, useRouteContext };
export type { RouteContextT };
