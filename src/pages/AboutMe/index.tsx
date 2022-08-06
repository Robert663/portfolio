import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  CardMedia,
  CardActions,
  Typography,
  Grow,
} from '@mui/material';
import { PopupDownload } from '../../components/Popup/index';
import { PopupCertificates } from '../../components/ModalCertificates';
import { useState } from 'react';
export function AboutMe() {
  const [open, setOpen] = useState(false);
  const [openCert, setOpenCert] = useState(false);

  const [selectedValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpenCert(true);
  };

  const handleCloseTeste = () => {
    setOpenCert(false);
  };

  return (
    <>
      <Box
        minHeight="85vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h2" mb={6}>
          Qualificações
        </Typography>
        <Grow in timeout={3500}>
          <Container>
            <Grid container alignItems="center" justifyContent="space-around">
              <Card>
                <CardMedia
                  component="img"
                  height="350"
                  image="./CV-Example.png"
                />
                <Divider />
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    fullWidth
                  >
                    Currículum-vitae
                  </Button>
                </CardActions>
              </Card>
              <Card>
                <CardMedia
                  component="img"
                  height="350"
                  image="./certificates/Kenzie.png"
                />
                <CardActions>
                  <Button variant="contained" fullWidth onClick={handleClick}>
                    Certificados
                  </Button>
                </CardActions>
              </Card>
              <PopupDownload
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
              <PopupCertificates
                selectedValue={selectedValue}
                open={openCert}
                onClose={handleCloseTeste}
              />
            </Grid>
          </Container>
        </Grow>
      </Box>
    </>
  );
}
