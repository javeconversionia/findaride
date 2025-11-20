export let bookings: any[] = [];

export function addBooking(booking: any) {
  bookings.push(booking);
}

export function cancelBooking(bookingId: string) {
  bookings = bookings.map((b) =>
    b.bookingId === bookingId ? { ...b, status: "cancelled" } : b
  );
}

export function getBookings() {
  return bookings;
}