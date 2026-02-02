import type { Trip } from "../../types/trip.types";

export const sortAndFilterTrips = ({
  trips,
  searchValue,
  isRatingSortEnabled,
}: {
  trips: Trip[];
  searchValue: string;
  isRatingSortEnabled: boolean;
}) => {
  let updatedTrips = [...trips];

  if (searchValue) {
    updatedTrips = updatedTrips.filter((trip) =>
      trip.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  if (isRatingSortEnabled) {
    return updatedTrips.sort((a, b) => b.rating - a.rating);
  }

  return updatedTrips;
};
