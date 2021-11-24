import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon }) => {
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            key={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
