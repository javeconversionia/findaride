export interface Ride {
  id: string;
  driver: string;
  from: string;
  to: string;
  date: string; // YYYY-MM-DD
  price: number;
  seats: number;
}

export const mockRides: Ride[] = [
  {
    id: "1",
    driver: "Alex Johnson",
    from: "New York",
    to: "Boston",
    date: "2024-02-10",
    price: 45,
    seats: 3,
  },
  {
    id: "2",
    driver: "Maria Lee",
    from: "San Francisco",
    to: "Los Angeles",
    date: "2024-02-10",
    price: 70,
    seats: 2,
  },
  {
    id: "3",
    driver: "James Carter",
    from: "Chicago",
    to: "Detroit",
    date: "2024-02-11",
    price: 38,
    seats: 4,
  },
  {
    id: "4",
    driver: "Sarah Martinez",
    from: "Dallas",
    to: "Austin",
    date: "2024-02-10",
    price: 25,
    seats: 3,
  }
];
