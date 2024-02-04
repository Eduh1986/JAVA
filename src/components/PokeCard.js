import { rootPokeCard } from "../../main";
import tareasManager from "../managers/comprasUsuario.manager";
import todoAppPage from "../pages/pokeCard.html?raw";

export const TodoApp = () => {
    rootPokeCard.innerHTML = "";
    rootPokeCard.innerHTML = todoAppPage;

};
