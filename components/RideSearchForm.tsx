"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RideSearchForm() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = new URLSearchParams({
      from,
      to,
      date,
      passengers: passengers.toString(),
    });

    router.push(`/ride/results?${query.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium">From</label>
        <input
          className="w-full mt-1 border px-3 py-2 rounded-lg"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="City A"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">To</label>
        <input
          className="w-full mt-1 border px-3 py-2 rounded-lg"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="City B"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          className="w-full mt-1 border px-3 py-2 rounded-lg"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Passengers</label>
        <input
          type="number"
          min={1}
          className="w-full mt-1 border px-3 py-2 rounded-lg"
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value))}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Search Rides
      </button>
    </form>
  );
}
