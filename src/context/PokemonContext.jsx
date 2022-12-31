import { createContext, useState, useEffect } from "react";
import data from "../pokemons.json";

export const PokemonContext = createContext();

export function PokemonContextProvider(props) {
  const [pokemons, setPokemons] = useState([]);
  const [temporizador, setTemporizador] = useState([]);
  const [contador, setContador] = useState([]);
  const [comenzado, setComenzado] = useState(false);

  const dataFormateado = data.map((pokemon) => {
    if (pokemon.id.toString().length === 1) {
      pokemon.id = `00${pokemon.id}`;
    } else if (pokemon.id.toString().length === 2) {
      pokemon.id = `0${pokemon.id}`;
    } else {
      pokemon.id = pokemon.id.toString();
    }

    pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    pokemon.types = pokemon.types.map((type) => {
      return type[0].toUpperCase() + type.slice(1);
    });

    pokemon.habilitado = false;
    return pokemon;
  });

  const habilitarPokemon = (inputValue) => {
    let esValido = false;
    const pokemonsAux = pokemons.map((pokemon) => {
      const name = normalizarTexto(pokemon.name);
      inputValue = normalizarTexto(inputValue);

      if (name === inputValue && !pokemon.habilitado) {
        esValido = true;
        return {
          ...pokemon,
          habilitado: true,
        };
      }
      return pokemon;
    });

    setPokemons(pokemonsAux);
    return esValido;
  };

  const normalizarTexto = (texto) => {
    texto = texto.toLowerCase().replace(" ", "");
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Temporizador de 10 minutos para adivinar pokemon
  const activarTemporizador = () => {
    let minutos = temporizador[0];
    let segundos = temporizador[1];
    const contadorInterval = setInterval(() => {
      if (segundos !== 0) {
        segundos--;
        setTemporizador([minutos, segundos]);
      } else {
        minutos--;
        segundos = 59;
        setTemporizador([minutos, segundos]);
      }

      if (minutos === 0 && segundos === 0) {
        setComenzado(false);
        setTemporizador([12, 0]);
        clearInterval(contadorInterval);
      }
      //modificar intervalo en app final
    }, 1000);
  };

  // Contador inicial (que va desde 5 hasta 1)
  const activarContador = () => {
    sessionStorage.setItem("intentado", true)
    const pokemonsAux = pokemons.map(pokemon => {
      pokemon.habilitado = false
      return pokemon
    })
    setPokemons(pokemonsAux)
    document.body.classList.add("bg-shadow");
    let number = 5;
    setContador(number);
    const contador = setInterval(() => {
      number--;
      setContador(number);
      if (number === 0) {
        clearInterval(contador);
        setComenzado(true);
        document.body.classList.remove("bg-shadow");
        activarTemporizador();
        setContador("");
      }
    }, 1000);
  };

  useEffect(() => {
    setPokemons(dataFormateado);
    setTemporizador([12, 0]);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        habilitarPokemon,
        temporizador,
        activarTemporizador,
        activarContador,
        contador,
        comenzado,
        setComenzado,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}
