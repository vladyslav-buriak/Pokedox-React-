import { Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <div className="about" style={{ paddingTop: "5rem" }}>
      <Container maxWidth="md">
        <Typography variant="h2"> About</Typography>
        <Typography variant="h6" paragraph>
          {" "}
          This website provides a RESTful API interface to highly detailed
          objects built from thousands of lines of data related to Pokémon. We
          specifically cover the video game franchise. Using this website, you
          can consume information on Pokémon, their moves, abilities, types, egg
          groups and much, much more.
        </Typography>

        <Grid container justifyContent="center">
          <Typography style={{ textAlign: "center" }} variant="body1">
            We currently have tens of thousands of individual items in our
            database, including:
          </Typography>
          <Grid item xs={4}>
            <ul className="list" style={{ textAlign: "left" }}>
              <li>Moves</li>
              <li>Abilities</li>
              <li>Pokémon (including various forms)</li>
              <li>Types</li>
              <li>Egg Groups</li>
              <li>Game Versions</li>
              <li>Items</li>
            </ul>
          </Grid>
          <Grid item xs={4}>
            <ul className="list" style={{ textAlign: "left" }}>
              <li>Pokémon Evolution Chains</li>
              <li>Pokédexes</li>
              <li>Items</li>
              <li>Types</li>
              <li>Egg Groups</li>
              <li>Game Versions</li>
              <li>Items</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
