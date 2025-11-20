export function validateRideSearch(params: {
  from?: string;
  to?: string;
  date?: string;
  passengers?: string;
}) {
  const errors: string[] = [];

  if (!params.from) errors.push("Missing 'from'.");
  if (!params.to) errors.push("Missing 'to'.");
  if (!params.date) errors.push("Missing 'date'.");
  if (params.passengers && Number(params.passengers) <= 0)
    errors.push("Passengers must be at least 1.");

  return errors;
}
