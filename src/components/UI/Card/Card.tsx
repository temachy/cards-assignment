import styles from './Card.module.scss'
import { Rating } from '../Rating'

type CardProps = {
    title: string
    description: string
    rating: number
    image: string
    onClick?: () => void
}

const Card = ({ title, description, rating, image, onClick }: CardProps) =>
    <div
        className={styles.card}
        onClick={onClick}
    >

        <img
            src={image}
            alt={title}
            className={styles.image}
        />

        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <Rating rating={rating} />
            <p className={styles.description}>{description}</p>
        </div>

    </div>

export default Card;