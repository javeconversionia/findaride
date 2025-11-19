import RideCard from "../../components/RideCard";
import { getRides } from "../../lib/rides";

export default async function RidePage() {
  const rides = await getRides();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Rides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rides.map((ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
}
