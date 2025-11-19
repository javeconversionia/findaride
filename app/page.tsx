import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Find-A-Ride</h1>
      <p className="text-gray-600 mt-2">
        Your hub for ride listings, availability, and quick booking.
      </p>
      <SearchBar />
    </div>
  );
}
