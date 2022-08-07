import Image from 'material-ui-image';
import IMAGES from '../../Images.json';
import {
  Box,
  Typography,
  Container,
  Avatar,
  CardHeader,
  Paper,
  Grid,
  Grow,
} from '@mui/material';
export const Home = () =>  {
  return (
    <>
      <Container>
        <Grow in timeout={2000}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box mt={20}>
              <CardHeader
                sx={{ minWidth: '70vw' }}
                avatar={
                  <Avatar
                    sx={{ width: 200, height: 200 }}
                    src='https://media-exp1.licdn.com/dms/image/D4D35AQEPf7lVV5Y6qw/profile-framedphoto-shrink_200_200/0/1651234212692?e=1660482000&v=beta&t=1ziVwfdqyw57oIuDNZo11llSKPJx-u2MmmEnHbCWc2I'
                  />
                }
                title={
                  <Container maxWidth="md" sx={{ marginRight: 0 }}>
                    <Typography variant="h3">Um pouco sobre mim</Typography>
                    <Typography>
                      Estou em busca de um emprego na área de Desenvolvedor e,
                      através disso, complementar o que venho aprendendo e
                      evoluir na empresa em que estiver atuando e contribuir o
                      máximo possível. Sou desenvolvedor Fullstack formado pela
                      Kenzie Academy Brasil.
                    </Typography>
                  </Container>
                }
              />
            </Box>
          </Box>
        </Grow>

        <Box alignItems="center" m={10} justifyContent="center" display="flex">
          <Typography alignItems="center" variant="h3">
            Tecnologias
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {IMAGES &&
            IMAGES.map(
              (images) => (
                <Grid  key={images.id as number} item md={1} xs={2}>
                  <Paper >
                    <Image src={images.image as string} />
                  </Paper>
                </Grid>
              ),
              0
            )}
        </Grid>
      </Container>
    </>
  );
};
