import { NextResponse } from "next/server";

export default function middleware(req, event) {
  return NextResponse.next()
}
