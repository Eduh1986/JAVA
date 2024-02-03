import comprasUsuarioApi from "../api/comprasUsuarios.api.js";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

let comprasUsuario = await comprasUsuarioApi.obtenerComprasUsuario() || []; //me falta colocar el usuario


const agregarCompraUsuario = async (idPelicula, compraUsuario) => {
    // Valido si existe la compra de la película 
    if (comprasUsuario.filter((compraUsuario) => compraUsuario.idPelicula === idPelicula)){
        let compraUsuarioNueva = crearCompra(compraUsuario); // new Tarea(htmlElements.inputTarea.value);
        await comprasUsuarioApi.registrarComprasUsuario( compraUsuarioNueva);
        Toastify({
            text: `Se agrego la compra ${compraUsuario}`,
            position: "left",
            gravity: "bottom",
        }).showToast();
    }
};

export default {
    agregarCompraUsuario
};