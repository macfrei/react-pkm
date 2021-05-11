import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import getPokemonDetails from "./services/getPokemonDetails";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    fetch(pokeUrl)
      .then((res) => res.json())
      .then((res) => {
        Promise.all(
          res.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        ).then((res) => {
          const pokemons = res.map(getPokemonDetails);
          setPokemons(pokemons);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="CardWrapper">
        {pokemons.map(({ id, name, types, images }) => (
          <Card key={id} name={name} types={types} images={images} />
        ))}
      </div>
    </div>
  );
}

export default App;
