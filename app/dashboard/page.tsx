import NavBar from "@components/NavBar";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold mb-4">Your Dashboard</h1>
        <p className="text-gray-600">Recent searches and saved rides will appear here.</p>
      </div>
    </>
  );
}
