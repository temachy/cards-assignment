import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "../../api/api";
import type { Trip } from "../../types/trip.types";

export const useTripCards = () => {
  const { data: trips = [] } = useQuery<Trip[]>({
    queryKey: ["trips"],
    queryFn: fetchTrips,
  });

  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const openModal = (trip: Trip) => {
    setSelectedTrip(trip);
  };

  const closeModal = () => {
    setSelectedTrip(null);
  };

  return {
    trips,
    openModal,
    closeModal,
    selectedTrip,
  };
};
