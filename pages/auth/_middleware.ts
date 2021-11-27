import { NextResponse } from "next/server";

export default async function middleware(req, event) {
  return NextResponse.next()
}
