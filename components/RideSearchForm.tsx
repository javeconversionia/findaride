"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RideSearchForm() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams({
      from,
      to,
      date,
      passengers: String(passengers),
    });

    router.push(`/ride/results?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border rounded-lg p-6 shadow-sm bg-white"
    >
      <div>
        <label className="block text-sm font-medium mb-1">From</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full border rounded-md p-2"
          placeholder="City A"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">To</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full border rounded-md p-2"
          placeholder="City B"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-md p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Passengers</label>
        <input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(Number(e.target.value))}
          min={1}
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
      >
        Search Rides
      </button>
    </form>
  );
}
