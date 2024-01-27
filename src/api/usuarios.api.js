 
const obtenerComprasUsuario = async (idUsuario) => {
    const resp = await fetch(`http://localhost:3000/usuarios/${id}`);
    const data = await resp.json();
    console.log(data);
    return data;    
}
// Registrar un usuario
const registrarUsuario = async (usuario) => {
    const resp = await fetch("http://localhost:3000/usuarios", {
        method: "POST",  // Indicamos que va a hacer una petición http POST
        body: JSON.stringify(usuario), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    return data;
}

// Eliminar un usuario
const eliminarTareaPorId = async (id) => {
    const resp = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE",  // Indicamos que va a hacer una petición http DELETE
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
    
}

export default {
    obtenerUsuarios,
    registrarUsuario
}