import RideCard from "@components/RideCard";
import EmptyState from "@components/EmptyState";
import Link from "next/link";

// Helper to call the API
async function getRides(query: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${base}/api/rides?${query}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return { error: "Failed to fetch rides." };
  }

  return res.json();
}

export default async function ResultsPage({ searchParams }: any) {
  const query = new URLSearchParams(searchParams).toString();
  const data = await getRides(query);

  const from = searchParams.from;
  const to = searchParams.to;
  const date = searchParams.date;
  const passengers = searchParams.passengers || 1;

  const rides = data?.results ?? [];
  const hasError = data?.error;

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 space-y-8">

      {/* Header / Summary */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Ride Results</h1>
        <p className="text-gray-600">
          Showing rides from <span className="font-medium">{from}</span> →{" "}
          <span className="font-medium">{to}</span> on{" "}
          <span className="font-medium">{date}</span> for{" "}
          <span className="font-medium">{passengers}</span>{" "}
          {passengers === "1" ? "passenger" : "passengers"}.
        </p>

        <Link
          href="/ride"
          className="inline-block mt-2 text-blue-600 hover:underline text-sm"
        >
          ← Modify search
        </Link>
      </div>

      {/* Error UI */}
      {hasError && (
        <div className="border border-red-300 bg-red-50 p-4 rounded-md text-red-700">
          <p className="font-medium">An error occurred while loading results.</p>
          <p className="text-sm">Please try again later.</p>
        </div>
      )}

      {/* Empty state */}
      {!hasError && rides.length === 0 && (
        <EmptyState
          title="No rides found"
          message="Try changing your search filters or choosing a different date."
        />
      )}

      {/* Results list */}
      {!hasError && rides.length > 0 && (
        <div className="grid gap-4">
          {rides.map((ride) => (
            <RideCard
              key={ride.id}
              driver={ride.driver}
              from={ride.from}
              to={ride.to}
              date={ride.date}
              price={ride.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}
