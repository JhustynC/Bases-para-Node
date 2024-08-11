import { http } from '../plugins/index';

export const getPokemonByID = async (id: number | string) : Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon = await http.get(url);

    // throw new Error('Pokemon Undefined')
    
    return pokemon.name;
    
    // return fetch(url)
    //     .then((response) => response.json())
    //     // .then(() => {throw new Error('Pokemon Undefined')})
    //     .then((pokemon) => pokemon.name);
}

