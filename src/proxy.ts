import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";
export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

//? RECOMMENDED APPROACH
//? this only checks cookie exits, auth control will be done in the relevant page.
