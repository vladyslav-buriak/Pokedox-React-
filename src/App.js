import "./App.css";
import About from "./components/About/Index";
import Main from "./components/Main";
import PokemonPage from "./components/PokemonPage";
import Leftbar from "./components/Leftbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
        }}
      >
        <Leftbar />
        <Routes>
          <Route exact path="/pokemons" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/pokemons/:name" element={<PokemonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
