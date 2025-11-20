import { NextResponse } from "next/server";

let bookings: any[] = [];

export async function POST(req: Request) {
  const { rideId } = await req.json();

  const bookingId = Math.random().toString(36).substr(2, 9);

  const booking = {
    bookingId,
    rideId,
    status: "confirmed",
    date: new Date().toISOString(),
  };

  bookings.push(booking);

  return NextResponse.json({ success: true, bookingId });
}
