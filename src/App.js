import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./UI/Loader";
import useFetching from "./hooks/fetchingPokemons";
import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      <Header />
      {isLoading ? <Loader /> : <Main pokemons={pokemons} />}
    </div>
  );
}

export default App;
