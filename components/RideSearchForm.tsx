"use client";
import { useRouter } from "next/navigation";

export default function RideSearchForm() {
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    router.push("/ride/results");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Pickup location"
        className="w-full border rounded-md px-3 py-2"
      />
      <input
        placeholder="Destination"
        className="w-full border rounded-md px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
      >
        Search
      </button>
    </form>
  );
}
