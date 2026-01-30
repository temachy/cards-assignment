import type { Trip } from "../types/trip.types";

const apiBaseUrl = 'http://localhost:3000';

export const fetchTrips = async (): Promise<Trip[]> => {
    const response = await fetch(`${apiBaseUrl}/trips`);
    if (!response.ok) {
        throw new Error('Failed to fetch trips');
    }
    return response.json();
};

