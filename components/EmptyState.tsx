export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-10 text-gray-600">
      <p>{message || "Nothing to display."}</p>
    </div>
  );
}
