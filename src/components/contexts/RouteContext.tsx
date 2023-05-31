import { createServerContext, useContext } from "react";

type RouteContextProps = {
  language: string;
  product: string | null;
  version: string | null;
  rest: string[];
};

type RouteContextT = RouteContextProps & {
  build: (ctx: Partial<RouteContextProps> & { relative?: string }) => string;
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
    build: (ctx) => {
      const { language, product, version, rest, relative } = {
        ...context,
        ...ctx,
      };
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

      const path = `/${url.join("/")}`;
      if (relative) {
        return new URL(relative, `https://docs.natsuneko.cat${path}`).pathname;
      }

      return path;
    },
  };
};

export { RouteContext, useRouteContext };
export type { RouteContextT, RouteContextProps };
