export default function RideCard({ ride }: { ride: any }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="font-semibold text-lg">{ride.title}</h3>
      <p className="text-gray-500 mt-1">{ride.description}</p>
      <button className="mt-3 bg-blue-600 text-white px-3 py-2 rounded">
        View Ride
      </button>
    </div>
  );
}
