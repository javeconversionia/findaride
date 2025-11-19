import NavBar from "@/components/NavBar";
import RideCard from "@/components/RideCard";
import EmptyState from "@/components/EmptyState";

export default async function ResultsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rides`, {
    cache: "no-store",
  });
  const { rides } = await res.json();

  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Available Rides</h1>

        {rides.length === 0 ? (
          <EmptyState message="No rides found. Try adjusting your search." />
        ) : rides.map((ride: any) => <RideCard key={ride.id} ride={ride} />)}
      </div>
    </>
  );
}
