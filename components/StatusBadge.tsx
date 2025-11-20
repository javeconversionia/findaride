export default function StatusBadge({ status }: { status: string }) {
  const colors: any = {
    confirmed: "bg-green-100 text-green-700 border-green-300",
    pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
    cancelled: "bg-red-100 text-red-700 border-red-300",
  };

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full border font-medium ${
        colors[status] || "bg-gray-100 text-gray-700 border-gray-300"
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
