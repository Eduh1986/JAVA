import { rootPokeCard } from "../../main";
import todoAppPage from "../pages/pokeCard.html?raw";

const obtenerPokemonPorNombre = async (nombre) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await resp.json();
    mostrarHtml(data);
    return data.id; 
}

const mostrarHtml = ( personajes ) => {

    rootPokeCard.innerHTML = "";
rootPokeCard.innerHTML = todoAppPage;

let resultadoCard = document.getElementById("resultadoCard");

    let cardHTML = `
        <main class="flex">
            <article class="card">
                <div class="card-body">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${personajes.id}.svg" alt="imagen de vitoko" class="card-body-img"style="width: 150px;">
                    <h1 class="card-body-title">
                    </h1>
                </div>
                <div class="card-footer">
                    <div class="card-footer-social">
                    </div>
                    <div class="card-footer-social">
                    </div>
                    <div class="card-footer-social">
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