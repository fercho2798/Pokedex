import React, { useEffect, useState } from "react";
import ListaPokemon from "./ListaPokemon";
import PokemonDetalles from "./PokemonDetalles";
import { getPokemonKantoData } from "../../api/PokemonService";

function HomeContainer() {
  useEffect(async () => {
    try {
      let pokemons = await getPokemonKantoData();
      console.log(pokemons);
      setFilteredPokeList(pokemons);
      setPokeList(pokemons);
    } catch (err) {
      alert("an error occurs");
      console.error(err);
    }
  }, []);

  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSelect = (pokemonId) => {
    setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]);
    setFilteredPokeList(
      filteredPokeList.map((p) =>
        p.id === pokemonId
          ? { ...p, selected: true }
          : { ...p, selected: false }
      )
    );
  };
  return (
    <div className="row pokemon-app-container">
      <div className="col-6">
        {pokemonSelected && <PokemonDetalles pokemon={pokemonSelected} />}
      </div>
      <div className="col-6 pokemon-list-container">
        <div style={{ height: "10%" }}>
  
        </div>
        <div style={{ height: "90%", overflowY: "auto" }}>
          <ListaPokemon
            pokemons={filteredPokeList}
            selectPokemon={handleSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
