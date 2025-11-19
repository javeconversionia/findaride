import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find the Best Ride, Fast.</h1>
        <p className="text-lg text-gray-600 mb-8">
          Compare ride options, pricing, and availability in seconds.
        </p>
        <Link
          href="/ride"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Start Searching
        </Link>
      </main>
      <Footer />
    </>
  );
}
