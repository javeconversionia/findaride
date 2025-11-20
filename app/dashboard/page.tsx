import StatusBadge from "@components/StatusBadge";
import EmptyState from "@components/EmptyState";
import DashboardRideList from "@components/DashboardRideList";

async function getDashboardRides() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/dashboard`, {
    cache: "no-store",
  });

  if (!res.ok) return { rides: [] };

  const data = await res.json();
  return data;
}

export default async function DashboardPage() {
  const { rides } = await getDashboardRides();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Rides</h1>

      {rides.length === 0 ? (
        <EmptyState message="You have no booked rides yet." />
      ) : (
        <DashboardRideList initialRides={rides} />
      )}
    </div>
  );
}
