import { isValidVersion } from "@/lib/versions";
import { createServerContext, useContext } from "react";

type RouteContextProps = {
  language: string;
  product: string | null;
  version: string | null;
  rest: string[];
};

type PathParams = {
  absolute?: string;
  relative?: string;
};

type ModifiedPathParams = Partial<RouteContextProps> & PathParams;

type RouteContextT = RouteContextProps & {
  assign: (ctx: ModifiedPathParams) => RouteContextT;
  build: (ctx: ModifiedPathParams) => string;
};

const RouteContext = createServerContext<RouteContextProps | null>(
  "route",
  null
);

const build = (context: RouteContextProps, ctx: ModifiedPathParams): string => {
  const { language, product, version, rest, absolute, relative } = {
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

  const path = `/${url.join("/")}/`;
  const assign =
    absolute ?? (relative?.startsWith("/") ? `.${relative}` : relative);
  if (assign) {
    return new URL(assign, `https://docs.natsuneko.com${path}`).pathname;
  }

  return path;
};

const assign = (
  defaults: RouteContextProps,
  ctx: ModifiedPathParams
): RouteContextT => {
  const url = build(defaults, ctx);
  const paths = url.split("/").filter((w) => !!w);
  const context: RouteContextProps = {
    language: paths[0],
    product: paths[1] ?? null,
    version: paths.length >= 3 && isValidVersion(paths[2]) ? paths[2] : null,
    rest:
      paths.length >= 3 && isValidVersion(paths[2])
        ? paths.slice(3)
        : paths.slice(2),
  };

  return {
    ...context,
    assign: (ctx) => assign(context, ctx),
    build: (ctx) => build(context, { ...ctx, absolute: url }),
  };
};

const useRouteContext = (): RouteContextT => {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error(
      "useRouteContext must be used within a RouteContext.Provider"
    );
  }

  return {
    ...context,
    assign: (ctx: ModifiedPathParams) => assign(context, ctx),
    build: (ctx: ModifiedPathParams) => build(context, ctx),
  };
};

const buildRouteContext = (context: RouteContextProps): RouteContextT => {
  return {
    ...context,
    assign: (ctx: ModifiedPathParams) => assign(context, ctx),
    build: (ctx: ModifiedPathParams) => build(context, ctx),
  };
};

export { RouteContext, buildRouteContext, useRouteContext };
export type { RouteContextProps, RouteContextT };
