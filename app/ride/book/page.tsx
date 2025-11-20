"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function BookRidePage() {
  const params = useSearchParams();
  const router = useRouter();
  const rideId = params.get("id");

  const [ride, setRide] = useState<any>(null);

  useEffect(() => {
    if (!rideId) return;

    fetch(`/api/rides?id=${rideId}`)
      .then((res) => res.json())
      .then((data) => setRide(data.ride));
  }, [rideId]);

  const handleConfirmBooking = async () => {
    const res = await fetch("/api/rides/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rideId }),
    });

    const data = await res.json();
    router.push(`/ride/confirmation?id=${data.bookingId}`);
  };

  if (!ride) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow border space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Confirm Your Booking</h1>

      <div className="text-lg font-medium">{ride.from} → {ride.to}</div>
      <div className="text-gray-600">Date: {ride.date}</div>
      <div className="text-gray-600">Price: ${ride.price}</div>

      <button
        onClick={handleConfirmBooking}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Confirm Booking
      </button>
    </div>
  );
}
