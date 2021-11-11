import React from "react";
import axios from "axios";

class Service extends React.Component {
  static async showPokemonInfo(name) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const data = await response.data;
    return data;
  }
}

export default Service;
