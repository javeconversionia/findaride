export default function RideCard({ ride }: { ride: any }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-lg font-semibold">{ride.service}</h2>
      <p className="text-gray-600 text-sm">ETA: {ride.eta} min</p>
      <p className="font-medium mt-2">${ride.price.toFixed(2)}</p>
    </div>
  );
}
