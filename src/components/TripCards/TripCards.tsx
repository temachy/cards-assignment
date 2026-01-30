import styles from './TripCards.module.scss'
import { Card } from '../UI'
import { useQuery } from '@tanstack/react-query';
import { fetchTrips } from '../../api/api';
import type { Trip } from '../../types/trip.types';

const TripCards = () => {

    const { data: trips = [] } = useQuery<Trip[]>({ queryKey: ['trips'], queryFn: fetchTrips });

    return (
        <div className={styles.container}>
            {trips.map((trip) => (
                <Card
                    key={trip.id}
                    title={trip.name}
                    description={trip.description}
                    rating={trip.rating}
                    image={trip.image}
                />
            ))}
        </div>
    )
}

export default TripCards
