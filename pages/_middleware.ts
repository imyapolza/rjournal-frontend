import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

export function middleware(req: NextRequest) {
  const { accessToken } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  if (accessToken && !pathname.startsWith("/auth") && req.page.name) {
    try {
      const decodedToken: { exp: number } = jwtDecode(accessToken);

      if (decodedToken.exp >= dayjs().unix()) {
        return NextResponse.redirect(`${origin}/auth`);
      }
    } catch (error) {
      return;
    }
    return;
  }
}
