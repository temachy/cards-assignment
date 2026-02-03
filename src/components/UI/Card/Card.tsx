import { memo } from "react";
import styles from "./Card.module.scss";
import { Rating } from "../Rating";
import { Image } from "../Image";

type CardProps = {
  title: string;
  description: string;
  rating: number;
  image: string;
  onClick?: () => void;
};

const Card = ({ title, description, rating, image, onClick }: CardProps) => (
  <div className={styles.card}>
    <Image src={image} alt={title} className={styles.image} />

    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rating_wrap}>
        <Rating rating={rating} />
        <button type="button" onClick={onClick} className={styles.button}>
          More Info
        </button>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default memo(Card);
