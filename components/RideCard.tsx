interface RideCardProps {
  driver: string;
  from: string;
  to: string;
  date: string;
  price: number;
}

export default function RideCard({
  driver,
  from,
  to,
  date,
  price,
}: RideCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{from} → {to}</h3>
        <span className="text-blue-600 font-bold">${price}</span>
      </div>

      <p className="text-sm text-gray-500 mb-1">Driver: {driver}</p>
      <p className="text-sm text-gray-500">Date: {date}</p>
    </div>
  );
}
