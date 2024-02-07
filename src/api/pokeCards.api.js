import Swal from "sweetalert2";
import { rootPokeCard } from "../../main";
import todoAppPage from "../pages/pokeCard.html?raw";

const obtenerPokemonPorNombre = async (nombre) => {
try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);


    if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await resp.json();
    mostrarHtml(data);
    return data.id; 
} catch (error) {
    // Mostrar el mensaje de error usando SweetAlert
    Swal.fire({
        icon: 'error',
        title: 'no existe el personaje',
        text: error.message,
    });
}
}

const mostrarHtml = ( personajes ) => {

    rootPokeCard.innerHTML = "";
    rootPokeCard.innerHTML = todoAppPage;



    let resultadoCard = document.getElementById("resultadoCard");

    let cardHTML = `
        <main class="flex">
            <article class="card">
                <div class="card-body">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${personajes.id}.svg" alt="imagen de vitoko" class="card-body-img"style="width: 100px;">
                    <h1 class="card-body-title">
                    ${personajes.name}
                    </h1>
                </div>
                <div class="card-footer">
                    <div class="card-footer-social">
                    <h3>${personajes.stats[1].base_stat}</h3>
                    <p>Ataque</p>
                    </div>
                    <div class="card-footer-social">
                    <h3>${personajes.stats[2].base_stat}</h3>
                    <p>Especial</p>
                    </div>
                    <div class="card-footer-social">
                    <h3>${personajes.stats[3].base_stat}</h3>
                    <p>Defensa</p>
                    </div>
                </div>
            </article>
        </main>
    `;

        resultadoCard.innerHTML = cardHTML;

}

export default {
    obtenerPokemonPorNombre,
    mostrarHtml
}