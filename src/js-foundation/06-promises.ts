import { http } from "../plugins/index";

export const getPokemonByID = async (id: number | string): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
  } catch (error) {
    throw new Error(`Pokemon not found with id ${id}`);
  }

  // return fetch(url)
  //     .then((response) => response.json())
  //     // .then(() => {throw new Error('Pokemon Undefined')})
  //     .then((pokemon) => pokemon.name);
};
