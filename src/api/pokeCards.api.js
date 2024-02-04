const obtenerPokemonPorNombre = async (nombre) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await resp.json();
    console.log(data);
    return data; 
}

export default {
    obtenerPokemonPorNombre,
    idnonono
}