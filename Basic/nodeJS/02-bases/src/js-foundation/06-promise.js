
const httpC = require('../plugins');
const getPokemonbyId =  async (id,) => {
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpC.httpC.get(url)
    //throw new Error('Error al obtener el pokemon');
    return (pokemon.name);
};




 module.exports = {getPokemonbyId};