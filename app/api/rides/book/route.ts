import { NextResponse } from "next/server";
import { addBooking, cancelBooking } from "@lib/mockDB";

export async function POST(req: Request) {
  const { rideId } = await req.json();

  const bookingId = Math.random().toString(36).substring(2, 9);

  const booking = {
    bookingId,
    rideId,
    status: "confirmed",
    date: new Date().toISOString(),
  };

  addBooking(booking);

  return NextResponse.json({ success: true, bookingId });
}

export async function DELETE(req: Request) {
  const { bookingId } = await req.json();

  cancelBooking(bookingId);

  return NextResponse.json({
    success: true,
    message: "Booking canceled",
    bookingId,
  });
}