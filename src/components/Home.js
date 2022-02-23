import React, { useState, useEffect } from "react";
// CSS
import "../App.css";

function randomNumber() {
  return Math.floor(Math.random() * 875) + 1;
}

function Home() {
  const [pokemon, setPokemon] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [id]);

  const handleClick = () => {
    setId(randomNumber());
  };

  return pokemon ? (
    <div className="App">
      <h1>Home</h1>
      <p>Name: {pokemon.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {pokemon.types ? <p>Type: {pokemon?.types[0]?.type?.name}</p> : null}
      <button onClick={handleClick}>Get random Pokemon</button>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Home;
