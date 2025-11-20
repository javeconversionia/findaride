import StatusBadge from "@components/StatusBadge";
import EmptyState from "@components/EmptyState";

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
        <div className="grid gap-6">
          {rides.map((ride: any) => (
            <div
              key={ride.id}
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
                Passengers:{" "}
                <span className="font-medium">{ride.passengers}</span>
              </div>

              <div className="text-blue-600 font-bold text-lg mt-3">
                ${ride.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
