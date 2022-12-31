import "./PokemonCard.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import data from "../colorstypes.json";
import { useRef, memo } from "react";

const PokemonCard = memo(({ pokemon }) => {
  const nodeRef = useRef(null);
  const imgStyles = {};
  let cardStyles = {};

  if (pokemon.habilitado) {
    const colorsTypes = [];
    imgStyles.backgroundImage = `url(img/${pokemon.id}.png)`;

    for (const element of data) {
      if (pokemon.types[1]) {
        if (pokemon.types[0].toLowerCase() === element.type) {
          colorsTypes.push(element.rgb);
        }

        if (pokemon.types[1].toLowerCase() === element.type) {
          colorsTypes.push(element.rgb);
        }
      } else {
        if (pokemon.types[0].toLowerCase() === element.type) {
          colorsTypes.push(element.rgb);
          colorsTypes.push(element.rgb);
        }
      }

      if (colorsTypes.length === 2) {
        break;
      }
    }

    cardStyles = {
      borderColor: "green",
      boxShadow: "0 0 2px greenyellow",
      background: `linear-gradient(rgba(${colorsTypes[0][0]}, ${colorsTypes[0][1]}, ${colorsTypes[0][2]}, 0.7), rgba(${colorsTypes[1][0]}, ${colorsTypes[1][1]}, ${colorsTypes[1][2]}, 0.7))`,
    };
  } else {
    imgStyles.backgroundImage = `url(img/question_mark.png)`;
  }

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        key={pokemon.habilitado}
        timeout={300}
        nodeRef={nodeRef}
      >
        <div className="card" style={cardStyles} ref={nodeRef}>
          <div className="card-left">
            <div className="card-img" style={imgStyles}></div>
          </div>
          <div>
            <ul className="card-list">
              <li>{pokemon.habilitado ? pokemon.id : "???"}</li>
              <li>{pokemon.habilitado ? pokemon.name : "???"}</li>
              <li>
                {pokemon.habilitado
                  ? pokemon.types.length === 2
                    ? pokemon.types[0] + " - " + pokemon.types[1]
                    : pokemon.types
                  : "???"}
              </li>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
})

export default PokemonCard;
