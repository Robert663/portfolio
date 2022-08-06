import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Slide,
} from '@mui/material';
import projects from '../../projects.json';

export const Projects = () => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h3" mb={4}>
        Principais projetos
      </Typography>
      
      <Slide direction='right' in timeout={1000}>
        <Grid width="65%" container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Card
                sx={{
                  minWidth: 150,
                  minHeight: 250,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'end' }}>
                  <Button
                    variant="contained"
                    href={project.site}
                    target="blank"
                    size="small"
                  >
                    SITE
                  </Button>
                  <Button
                    variant="contained"
                    href={project.git}
                    target="blank"
                    size="small"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Slide>
    </Box>
  );
};
