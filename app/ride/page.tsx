import NavBar from "@/components/NavBar";
import RideSearchForm from "@/components/RideSearchForm";

export default function RideSearchPage() {
  return (
    <>
      <NavBar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold mb-6">Search for a Ride</h1>
        <RideSearchForm />
      </div>
    </>
  );
}
