import { Card, CardMedia } from '@mui/material';
import { ICarouselProps } from '../../interfaces';

export const Item = (props: ICarouselProps) => {
  return (
      <Card >
        <CardMedia component="img" image={props.item.image} />
      </Card>
  );
};
