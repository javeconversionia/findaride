import { NextResponse } from "next/server";
import { mockRides } from "@lib/mockRides";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const from = searchParams.get("from")?.trim().toLowerCase();
    const to = searchParams.get("to")?.trim().toLowerCase();
    const date = searchParams.get("date");
    const passengers = Number(searchParams.get("passengers") ?? 1);

    // Basic parameter validation
    if (!from || !to || !date) {
      return NextResponse.json(
        { error: "Missing required parameters: from, to, date." },
        { status: 400 }
      );
    }

    // Filter rides based on search params
    const results = mockRides.filter((ride) => {
      return (
        ride.from.toLowerCase() === from &&
        ride.to.toLowerCase() === to &&
        ride.date === date &&
        ride.seats >= passengers
      );
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Ride Search API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
