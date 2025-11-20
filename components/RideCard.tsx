"use client";

import { useRouter } from "next/navigation";

export default function RideCard({ ride }: any) {
  const router = useRouter();

  const handleBook = () => {
    router.push(`/ride/book?id=${ride.id}`);
  };

  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm">
      <div className="text-xl font-semibold mb-2">
        {ride.from} → {ride.to}
      </div>

      <div className="text-gray-600">Date: {ride.date}</div>
      <div className="text-gray-600">Seats Available: {ride.seatsAvailable}</div>

      <div className="text-blue-600 font-bold text-lg mt-3">${ride.price}</div>

      <button
        onClick={handleBook}
        className="w-full bg-blue-600 mt-4 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Book Ride
      </button>
    </div>
  );
}
