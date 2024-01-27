// Obtener tarea por las compras del usuario por el idUsuario
const obtenerComprasUsuario = async (idUsuario) => {
    const resp = await fetch(`http://localhost:3000/comprasUsuarios/${id}`);
    const data = await resp.json();
    console.log(data);
    return data;    
}

// Agregar Compra al Usuario
const registrarComprasUsuario = async (CompraUsuario) => {
    const resp = await fetch("http://localhost:3000/comprasUsuarios", {
        method: "POST",  // Indicamos que va a hacer una petición http POST
        body: JSON.stringify(CompraUsuario), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

export default {
    obtenerComprasUsuario,
    registrarComprasUsuario
}