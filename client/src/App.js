import "./App.css";
import { Routes ,Route } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/home"  element={<Home/>}/>
        <Route
          path="/pokemon/:id" element={<PokemonDetail/>} />
        <Route exact path="/pokemon/create" element={<CreatePokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;
