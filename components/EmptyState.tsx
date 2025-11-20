interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({
  title = "No Results",
  message = "Try adjusting your search or check back later.",
}: EmptyStateProps) {
  return (
    <div className="text-center py-20 text-gray-600">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{message}</p>
    </div>
  );
}
