import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardMedia, Dialog, List } from '@mui/material';
import { IPopupProps } from '../../interfaces';
import IMAGES from '../../certificates.json';
import { Item } from '../Carousel';
export const PopupCertificates = (props: IPopupProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog fullWidth  maxWidth="md" onClose={handleClose} open={open}>
              <Carousel animation='slide'>
                {IMAGES.map((item, i) => (
                  <Item key={i} item={item}/>
                ))}
              </Carousel>
      </Dialog>
  );
};
