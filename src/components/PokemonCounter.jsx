import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import "./PokemonCounter.css"

function PokemonCounter() {
  const { contador } = useContext(PokemonContext);

  return (
    <div className="container-contador">
      <p className="contador">{contador}</p>
    </div>
  );
}

export default PokemonCounter;
