export default function ConfirmationPage({ searchParams }: any) {
  const bookingId = searchParams.id;

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-green-600">Booking Confirmed!</h1>

      <p className="text-gray-700">
        Your ride has been successfully booked.
      </p>

      <div className="p-4 bg-gray-100 rounded-lg border">
        <div className="font-medium">Confirmation Number:</div>
        <div className="text-lg font-bold">{bookingId}</div>
      </div>

      <a
        href="/dashboard"
        className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Go to Dashboard
      </a>
    </div>
  );
}
