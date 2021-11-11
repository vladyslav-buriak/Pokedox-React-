import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetching from "../../hooks/fetchingPokemons";
import Loader from "../../UI/Loader";
import Service from "../../API/Service";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState(" ");
  const queryParams = useParams();
  const [fetchingPokemons, isLoading] = useFetching(async () => {
    const response = await Service.showPokemonInfo(queryParams.name);
    setPokemon(response);
  });

  useEffect(() => {
    fetchingPokemons();
  }, [queryParams.name]);
  return (
    <>
      <h1>Pokemon Page</h1>
      {isLoading ? <Loader /> : <h2>{pokemon.name}</h2>}
    </>
  );
};

export default PokemonPage;
