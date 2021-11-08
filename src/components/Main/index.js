import Container from "@mui/material/Container";
import PokemonCard from "./PokemonCard";

const Main = ({ pokemons }) => {
  return (
    <Container sx={{ pt: "4rem", display: "flex" }}>
      <PokemonCard pokemons={pokemons} />
    </Container>
  );
};

export default Main;
