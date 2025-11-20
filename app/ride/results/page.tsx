import RideCard from "@/components/RideCard";
import EmptyState from "@/components/EmptyState";

export default async function ResultsPage({ searchParams }: any) {

  // Build full query string safely (cross-platform)
  const query = new URLSearchParams();

  if (searchParams) {
    Object.keys(searchParams).forEach((key) => {
      const value = searchParams[key];
      if (typeof value === "string") {
        query.append(key, value);
      }
    });
  }

  // Build absolute URL (Windows-friendly)
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    `http://localhost:3000`;  // dev fallback, safe on Windows

  const res = await fetch(`${baseUrl}/api/rides?${query.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("API error:", await res.text());
    return <div>Error fetching rides.</div>;
  }

  const data = await res.json();
  const results = data.results || [];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Available Rides</h1>

      {results.length === 0 ? (
        <EmptyState message="No rides found for your search." />
      ) : (
        <div className="grid gap-4">
          {results.map((ride: any) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      )}
    </div>
  );
}
