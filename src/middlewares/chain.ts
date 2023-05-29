import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

type Middleware = (req: NextRequest) => Promise<NextResponse | undefined>;

const chain = (...middlewares: Middleware[]) => {
  return async (req: NextRequest) => {
    for (const middleware of middlewares) {
      const res = await middleware(req);
      if (res) {
        return res;
      }
    }

    return NextResponse.next();
  };
};

export { chain };
