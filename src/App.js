import "./App.css";
import pokemons from "./data.json";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="CardWrapper">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            images={pokemon.images}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
