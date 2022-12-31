import "./PokemonButton.css";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

function PokemonButton({ text }) {
  const { activarContador } = useContext(PokemonContext);

  const handleClick = () => {
    activarContador();
  };

  return (
    <>
      <div className="container">
        <button className="pokemon-btn" onClick={handleClick}>
          {text}
        </button>
      </div>
    </>
  );
}

export default PokemonButton;
