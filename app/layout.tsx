import "./globals.css";

export const metadata = {
  title: "Find-A-Ride",
  description: "Quickly find the best ride options nearby.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
