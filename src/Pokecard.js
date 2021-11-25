import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
  let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img src={imgURL} alt={name} className="Pokecard-img" />
      <div className="Pokecard-details">
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    </div>
  );
};

export default Pokecard;
