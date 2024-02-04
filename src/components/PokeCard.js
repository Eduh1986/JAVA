import { rootPokeCard } from "../../main";
import CompraManager from "../managers/comprasUsuario.manager";
import todoAppPage from "../pages/pokeCard.html?raw";

export const TodoApp = () => {


    rootPokeCard.innerHTML = "";
    rootPokeCard.innerHTML = todoAppPage;

    let formBuscador = document.querySelector("#formBuscador");
    let inputPokerCard = document.querySelector('#inputPokerCard')
    formBuscador.onsubmit = (event) => {
        event.preventDefault();
       

    // Crea el bloque de código HTML que deseas insertar
        const pokemon = CompraManager.buscarPokemonPorNombre(inputPokerCard.value) 
     
   
        console.log(pokemon.idPokemon)

        let resultadoCard = document.getElementById("resultadoCard");
    
    
        let cardHTML = `
            <main class="flex">
                <article class="card">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg" alt="imagen header card" class="card-header">
                    <div class="card-body">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg" alt="imagen de vitoko" class="card-body-img">
                        <h1 class="card-body-title">
                            Victor charst
                            <span>26</span>
                        </h1>
                        <p class="card-body-text">London</p>
                    </div>
                    <div class="card-footer">
                        <div class="card-footer-social">
                            <h3>80K</h3>
                            <p>Followers</p>
                        </div>
                        <div class="card-footer-social">
                            <h3>803K</h3>
                            <p>Likes</p>
                        </div>
                        <div class="card-footer-social">
                            <h3>1.4K</h3>
                            <p>Photos</p>
                        </div>
                    </div>
                </article>
            </main>
        `;

        resultadoCard.innerHTML = cardHTML;



    }

};
