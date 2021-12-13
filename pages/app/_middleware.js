import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req, event) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log(session);

  // You could also check for any property on the session object,
  // like role === "admin" or name === "John Doe", etc.
  if (session) return NextResponse.next();
  // If user is authenticated, continue.
  return new Response("Auth required", {
    status: 403,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
