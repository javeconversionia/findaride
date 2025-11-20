import { NextResponse } from "next/server";

// Mock DB
const rides = [
  {
    id: "1",
    from: "City A",
    to: "City B",
    date: "2025-11-20",
    seatsAvailable: 3,
    price: 25,
  },
  {
    id: "2",
    from: "City A",
    to: "City C",
    date: "2025-11-21",
    seatsAvailable: 2,
    price: 40,
  },
  {
    id: "3",
    from: "City B",
    to: "City A",
    date: "2025-11-20",
    seatsAvailable: 1,
    price: 30,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  if (id) {
    const ride = rides.find((r) => r.id === id);
    return NextResponse.json({ ride });
  }

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const passengers = parseInt(searchParams.get("passengers") || "1");

  // Filter mock rides
  const results = rides.filter(
    (r) =>
      r.from.toLowerCase() === from.toLowerCase() &&
      r.to.toLowerCase() === to.toLowerCase() &&
      r.date === date &&
      r.seatsAvailable >= passengers
  );

  return NextResponse.json({
    success: true,
    results,
  });
}
