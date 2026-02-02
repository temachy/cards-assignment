import styles from "./TripCards.module.scss";
import { useTripCards } from "./useTripCards";
import { Card, Modal, Rating } from "../UI";

const TripCards = () => {
  const {
    trips,
    openModal,
    closeModal,
    selectedTrip,
    searchValue,
    isRatingSortEnabled,
    onRatingSort,
    onSearch,
  } = useTripCards();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <input
          type="search"
          value={searchValue}
          onChange={onSearch}
          placeholder="Search trips..."
          className={styles.sidebar__search}
        />

        <div className={styles.sidebar__rating}>
          <span>Sort by rating</span>
          <label className={styles.toggle}>
            <input
              checked={isRatingSortEnabled}
              type="checkbox"
              onChange={onRatingSort}
            />
            <span className={styles.slider} />
          </label>
        </div>
      </div>
      <div className={styles.cards}>
        {trips.map((trip) => (
          <Card
            key={trip.id}
            title={trip.name}
            description={trip.description}
            rating={trip.rating}
            image={trip.image}
            onClick={() => openModal(trip)}
          />
        ))}
      </div>
      {!trips.length && !!searchValue && (
        <p className={styles.noTripsFound}>No trips found</p>
      )}
      <Modal isOpen={!!selectedTrip} onClose={closeModal}>
        {selectedTrip && (
          <div className={styles.details}>
            <div className={styles.details__header}>
              <h2 className={styles.details__title}>{selectedTrip.name}</h2>
              <Rating rating={selectedTrip.rating} />
            </div>
            <img
              src={selectedTrip.image}
              alt={selectedTrip.name}
              className={styles.details__image}
            />

            <p className={styles.details__description}>
              {selectedTrip.long_description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TripCards;
