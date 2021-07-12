import ApiService from "./ApiService";

export const getKantoPokemon = async () => {
  try {
    let response = await ApiService.get(`https://pokeapi.co/api/v2/pokemon`, {
      limit: 151,
    });
    return response.results;
  } catch (err) {
    throw err;
  }
};

export const getPokemonData = async (url) => {
  try {
    let response = await ApiService.get(url);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getPokemonKantoData = async () => {
  try {
    //muestra la lista de pokemon
    let pokemons = await getKantoPokemon();

    //obtener promesas para obtener datos para todos los pokémon de la lista
    let pokemonPromises = pokemons.map((p) => getPokemonData(p.url));
    
    //retornan todos los pokemon de la data
    return await Promise.all(pokemonPromises);
  } catch (err) {
    throw err;
  }
};
