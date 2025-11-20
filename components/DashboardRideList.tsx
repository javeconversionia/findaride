"use client";

import { useState } from "react";
import StatusBadge from "./StatusBadge";

export default function DashboardRideList({
  initialRides,
}: {
  initialRides: any[];
}) {
  const [rides, setRides] = useState(initialRides);

  const handleCancel = async (bookingId: string) => {
    await fetch("/api/rides/book", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId }),
    });

    setRides((prev) =>
      prev.map((ride: any) =>
        ride.bookingId === bookingId
          ? { ...ride, status: "cancelled" }
          : ride
      )
    );
  };

  return (
    <div className="grid gap-6">
      {rides.map((ride) => (
        <div
          key={ride.bookingId}
          className="bg-white p-6 rounded-xl shadow-md border"
        >
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              {ride.from} → {ride.to}
            </div>

            <StatusBadge status={ride.status} />
          </div>

          <div className="text-gray-600 mt-2">
            Date: <span className="font-medium">{ride.date}</span>
          </div>

          <div className="text-gray-600">
            Passengers: <span className="font-medium">{ride.passengers}</span>
          </div>

          <div className="text-blue-600 font-bold text-lg mt-3">
            ${ride.price}
          </div>

          {ride.status === "confirmed" && (
            <button
              onClick={() => handleCancel(ride.bookingId)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Cancel Booking
            </button>
          )}

          {ride.status === "cancelled" && (
            <p className="mt-4 text-red-600 font-semibold">Booking Cancelled</p>
          )}
        </div>
      ))}
    </div>
  );
}
