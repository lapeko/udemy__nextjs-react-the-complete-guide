import { NextResponse } from "next/server";

export const middleware = (req: Request) => {
  console.log("Method:", req.method, "\nTimestamp:", new Date().toISOString());
  return NextResponse.next();
}