import comprasUsuarioApi from "../api/comprasUsuarios.api.js";
import pokeCard from "../api/pokeCard.js";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

let comprasUsuario = await comprasUsuarioApi.obtenerComprasUsuario() || []; 

const validarPokemon= async (name) => {

    let pokemon = await pokeCard.obtenerPokemonPorNombre(name);

    if (!pokemon) {
        return false;
    }
    if (pokemon.name !== name) {
        return false;
    }
};
const agregarCompraUsuario = async (idPokemon, compraUsuario) => {
    // Valido si existe la compra del pokemon
    if (comprasUsuario.filter((compraUsuario) => compraUsuario.idPokemon !== idPokemon)){
        let compraUsuarioNueva = crearCompra(compraUsuario); // new Tarea(htmlElements.inputTarea.value);
        await comprasUsuarioApi.registrarComprasUsuario( compraUsuarioNueva);
        Toastify({
            text: `Se agrego la compra ${compraUsuario}`,
            position: "left",
            gravity: "bottom",
        }).showToast();
    }
    else{
        Swal.fire({
            title: "ya tiene este persona en su lista de cartas.",
        }); 
    }
};

export default {
    agregarCompraUsuario,
    validarPokemon
};