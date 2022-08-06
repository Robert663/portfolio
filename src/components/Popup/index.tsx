
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, List, Typography } from "@mui/material";
import { IPopupProps } from "../../interfaces";

export const PopupDownload = (props: IPopupProps)   => {
    const { onClose,selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const onDownload = () => {
      const link = document.createElement('a');
      link.download = `Curriculum-Vitae.pdf`;
      link.href = './Curriculum-Vitae.pdf';
      link.click();
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <List sx={{ paddingBottom: 0, paddingTop: 0 }}>
          <Card>
            <CardMedia
              component="img"
              image="./CV-Example.png"
              alt="Curriculum"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" textAlign="center">
                Curriculum
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
              <Button autoFocus onClick={onDownload} variant='contained' fullWidth sx={{height: 70}}>
                <Typography variant='subtitle2'>DOWNLOAD</Typography>
              </Button>
            </CardActions>
          </Card>
        </List>
      </Dialog>
    );
  }
  