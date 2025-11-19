import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    rides: [
      { id: 1, service: "QuickRide", price: 12.5, eta: 4 },
      { id: 2, service: "EcoGo", price: 9.8, eta: 7 },
      { id: 3, service: "LuxCar", price: 22.0, eta: 5 },
    ],
  });
}
