import React from "react";

const Pokecard = ({ id, name, type, base_experience }) => {
  let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div>
      <h4>{name}</h4>
      <img src={imgURL} alt={name} />
      <ul>
        <li>Type: {type}</li>
        <li>EXP: {base_experience}</li>
      </ul>
    </div>
  );
};

export default Pokecard;
