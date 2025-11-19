import { NextResponse } from "next/server";
import { getRides } from "../../../lib/rides";

export async function GET() {
  return NextResponse.json(await getRides());
}