import { type NextRequest, NextResponse } from "next/server";

type Middleware = (req: NextRequest) => Promise<NextResponse | undefined>;

export const chain = (...middlewares: Middleware[]) => {
  return async (req: NextRequest) => {
    for (const middleware of middlewares) {
      const res = await middleware(req);
      if (res) return res;
    }

    return NextResponse.next();
  };
};
