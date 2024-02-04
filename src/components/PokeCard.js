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


     
        const status = CompraManager.validarPokemon(inputPokerCard.value)  

        console.log(status)

        let resultadoCard = document.getElementById("resultadoCard");
    
        // Crea el bloque de código HTML que deseas insertar
        let cardHTML = `
            <main class="flex">
                <article class="card">
                    <img src="https://pokeapi.co/api/v2/pokemon/${inputPokerCard.value}" alt="imagen header card" class="card-header">
                    <div class="card-body">
                        <img src="https://pokeapi.co/api/v2/pokemon/${inputPokerCard.value}" alt="imagen de vitoko" class="card-body-img">
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



        const pintarCard = (pokemon) => {
            const template = document.querySelector('.flex').content
            const fragment = document.createDocumentFragment()

            template.querySelector('card-body-img').setAtribute()
        }

    }

};
