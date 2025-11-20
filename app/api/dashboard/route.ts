import { NextResponse } from "next/server";

const bookedRides = [
  {
    id: "1",
    from: "City A",
    to: "City B",
    date: "2025-11-20",
    passengers: 1,
    price: 25,
    status: "confirmed",
  },
  {
    id: "2",
    from: "City A",
    to: "City C",
    date: "2025-11-18",
    passengers: 2,
    price: 40,
    status: "pending",
  },
  {
    id: "3",
    from: "City B",
    to: "City A",
    date: "2025-11-15",
    passengers: 1,
    price: 30,
    status: "cancelled",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    rides: bookedRides,
  });
}
