import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 h-14">
        <Link href="/" className="text-lg font-bold">Find-A-Ride</Link>
        <div className="space-x-4">
          <Link href="/ride" className="text-gray-700 hover:text-gray-900">Search</Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
