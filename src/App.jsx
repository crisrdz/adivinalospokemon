import "./App.css";
import PokemonInput from "./components/PokemonInput";
import PokemonCard from "./components/PokemonCard";
import PokemonButton from "./components/PokemonButton";
import PokemonCounter from "./components/PokemonCounter";
import PokemonTemporizador from "./components/PokemonTemporizador";
import Footer from "./components/Footer";
import { PokemonContext } from "./context/PokemonContext";
import { useContext } from "react";

function App() {
  const { pokemons, comenzado, contador } = useContext(PokemonContext);

  const pokemonsHabilitados = pokemons.filter((pokemon) => pokemon.habilitado);
  let puntuacion = parseInt(localStorage.getItem("puntuacion"));
  let intentado = sessionStorage.getItem("intentado");

  if (pokemonsHabilitados.length > puntuacion) {
    localStorage.setItem("puntuacion", pokemonsHabilitados.length);
    puntuacion = parseInt(localStorage.getItem("puntuacion"));
  }

  if (isNaN(puntuacion)) {
    puntuacion = 0;
    localStorage.setItem("puntuacion", puntuacion);
  }

  intentado === "true" ? intentado = true : intentado = false

  if ((pokemonsHabilitados.length > 0 || intentado) && !comenzado) {
    if (contador > 0) {
      return (
        <>
          <main>
            <p className="puntuacion">Mejor puntuación: {puntuacion}</p>
            <h1 className="titulo">¡Adivina los 151 pokémon originales en 12 minutos!</h1>
            <PokemonCounter />
          </main>
          <Footer />
        </>
      );
    }
    return (
      <>
        <main>
          <p className="puntuacion">Mejor puntuación: {puntuacion}</p>
          <h1 className="titulo">¡Adivina los 151 pokémon originales en 12 minutos!</h1>
          {pokemonsHabilitados.length === 151 ? (
            <h2 className="titulo">
              ¡Enhorabuena! ¡Has adivinado los {pokemonsHabilitados.length}{" "}
              pokémon!
            </h2>
          ) : (
            <h2 className="titulo">
              ¡Felicidades! ¡Has adivinado un total de:{" "}
              {pokemonsHabilitados.length} pokémon!
            </h2>
          )}

          <PokemonButton text="Reintentar" />
          <div className="pokemon-grid">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
          <PokemonCounter />
        </main>
        <Footer />
      </>
    );
  }

  if (!comenzado) {
    return (
      <>
        <main>
          <p className="puntuacion">Mejor puntuación: {puntuacion}</p>
          <h1 className="titulo">¡Adivina los 151 pokémon originales en 12 minutos!</h1>
          {contador > 0 ? "" : <PokemonButton text="Comenzar" />}
          <PokemonCounter />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main>
        <p className="puntuacion">Mejor puntuación: {puntuacion}</p>
        <h1 className="titulo">¡Adivina los 151 pokémon originales en 12 minutos!</h1>
        <PokemonInput />
        <PokemonTemporizador />
        <div className="pokemon-grid">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
