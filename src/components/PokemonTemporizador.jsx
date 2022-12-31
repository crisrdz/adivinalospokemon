import "./PokemonTemporizador.css";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

function PokemonTemporizador() {
  const { temporizador } = useContext(PokemonContext);
  return (
    <div className="card pokemon-temporizador">
      {temporizador[0]}:
      {temporizador[1].toString().length === 1
        ? "0" + temporizador[1].toString()
        : temporizador[1]}
    </div>
  );
}

export default PokemonTemporizador;
