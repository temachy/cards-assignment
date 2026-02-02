import styles from "./Rating.module.scss";

const MAX_RATING = 5;

type RatingProps = {
  rating?: number;
};

const Rating = ({ rating = 0 }: RatingProps) => (
  <div className={styles.rating}>
    {Array.from({ length: MAX_RATING }).map((_, index) => (
      <span
        key={index}
        className={`${styles.star} ${index < rating ? styles.filled : styles.empty}`}
      >
        ★
      </span>
    ))}
    <span className={styles.ratingText}>
      ({rating}/{MAX_RATING})
    </span>
  </div>
);

export default Rating;
