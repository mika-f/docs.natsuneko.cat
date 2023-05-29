import { createServerContext, useContext } from "react";

type RouteContextT = {
  language: string;
  product: string;
  version: string;
  rest: string[];
};

const RouteContext = createServerContext<RouteContextT | null>("route", null);

const useRouteContext = () => {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error(
      "useRouteContext must be used within a RouteContext.Provider"
    );
  }

  return context;
};

export { RouteContext, useRouteContext };
export type { RouteContextT };
