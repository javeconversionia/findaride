export default function RideCard({ ride }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="font-semibold text-lg">
        {ride.from} → {ride.to}
      </div>

      <div className="text-gray-600 mt-1">
        Date: {ride.date}
      </div>

      <div className="text-gray-600">
        Seats: {ride.seatsAvailable}
      </div>

      <div className="text-blue-600 font-bold mt-2">${ride.price}</div>
    </div>
  );
}
