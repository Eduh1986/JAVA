const obtenerPokemones = async () => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await resp.json();
    console.log(data);
    return data; 
}

const obtenerPokemonPorNombre = async (nombre) => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await resp.json();
    console.log(data);
    return data; 
}

export default {
    obtenerPokemones
}