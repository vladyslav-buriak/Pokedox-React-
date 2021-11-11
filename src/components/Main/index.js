import Container from "@mui/material/Container";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import Loader from "../../UI/Loader";
import useFetching from "../../hooks/fetchingPokemons";
import { useEffect, useState } from "react";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [fetchingPokemons, isLoading] = useFetching(async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=6"
    );
    const data = await response.data;

    data.results.map(async (p) => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${p.name}`
      );
      setPokemons((pokemonsList) => [...pokemonsList, response.data]);
    });
  });

  useEffect(() => {
    fetchingPokemons();
  }, []);
  return (
    <Container sx={{ pt: "4rem", display: "flex" }}>
      {isLoading ? <Loader /> : <PokemonCard pokemons={pokemons} />}
    </Container>
  );
};

export default Pokemons;
