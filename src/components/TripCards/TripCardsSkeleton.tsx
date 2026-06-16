import styles from "./TripCards.module.scss";

const SKELETON_CARDS_COUNT = 6;
const skeletonCards = Array.from({ length: SKELETON_CARDS_COUNT }, (_, index) => index);

const TripCardsSkeleton = () => (
  <div className={styles.container} aria-label="Loading trips">
    <div className={styles.skeletonSidebar} />

    <div className={styles.cards}>
      {skeletonCards.map((card) => (
        <div key={card} className={styles.skeletonCard} />
      ))}
    </div>
  </div>
);

export default TripCardsSkeleton;
