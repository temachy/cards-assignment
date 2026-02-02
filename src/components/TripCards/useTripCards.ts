import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "../../api/api";
import type { Trip } from "../../types/trip.types";
import { sortAndFilterTrips } from "./utils";

export const useTripCards = () => {
  const { data: trips = [] } = useQuery<Trip[]>({
    queryKey: ["trips"],
    queryFn: fetchTrips,
  });

  const [searchValue, setSearchValue] = useState("");
  const [isRatingSortEnabled, setIsRatingSortEnabled] = useState(false);

  const sortedAndFilteredTrips = useMemo(
    () => sortAndFilterTrips({ trips, searchValue, isRatingSortEnabled }),
    [trips, searchValue, isRatingSortEnabled],
  );

  const onRatingSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRatingSortEnabled(e.target.checked);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const openModal = (trip: Trip) => {
    setSelectedTrip(trip);
  };

  const closeModal = () => {
    setSelectedTrip(null);
  };

  return {
    trips: sortedAndFilteredTrips,
    openModal,
    closeModal,
    selectedTrip,
    searchValue,
    onSearch,
    isRatingSortEnabled,
    onRatingSort,
  };
};
