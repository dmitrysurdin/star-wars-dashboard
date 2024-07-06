import { CardActionArea, Card as CardMUI, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DEFAULT_CARD_NAME } from './const';
import styles from './Card.module.scss';

interface CardProps {
  name?: string;
  id: string;
}

export const Card = ({ name = DEFAULT_CARD_NAME, id }: CardProps) => (
  <Link to={`/character/${id}`}>
    <CardMUI className={styles.card}>
      <CardActionArea className={styles.cardActionWrapper}>
        <CardContent className={styles.content}>
          <Typography className={styles.text} variant="h5" component="p">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardMUI>
  </Link>
);
