import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import "./PokemonInput.css";

function PokemonInput() {
  const { habilitarPokemon } = useContext(PokemonContext);

  const handleChange = (e) => {
    if(habilitarPokemon(e.target.value)){
      e.target.value = ""
      e.target.style.borderColor = "green";
      setTimeout(() => {
        e.target.style.borderColor = "black";
      }, 1000)
    }
  };

  return (
    <div className="container sticky">
      <input type="text" id="pokemon_input" onChange={handleChange} autoFocus />
    </div>
  );
}

export default PokemonInput;
