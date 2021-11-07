import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [pokemons,setPokemons]= useState([]);
  
  const getAllPokemos = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = await response.data;

    const createPokemon = (result) => {
      result.map(async (p) => {
       const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`);
       setPokemons( (pokemonsList)=>  [...pokemonsList, response.data])
      });
    };
    createPokemon(data.results);
  };
  useEffect(()=>{
    getAllPokemos();
    console.log(pokemons)

  },[])
  return (
    <div className="App">
     <Header/>
      {pokemons.map(p=>{
        return <h3>{p.name}</h3>
      })}
    </div>
  );
}

export default App;
