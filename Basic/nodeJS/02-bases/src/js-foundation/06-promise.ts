import { promises } from "dns";

const httpC = require('../plugins');
export const getPokemonbyId =  async (id:string|number):Promise<string> => {
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpC.httpC.get(url)
    //throw new Error('Error al obtener el pokemon');
    return (pokemon.name);
};




