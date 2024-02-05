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
         const status = CompraManager.buscarPokemonPorNombre(inputPokerCard.value)   
    
    }
};
