import { rootPeli } from "../../main";
import tareasManager from "../managers/comprasUsuario.manager";
import todoAppPage from "../pages/peliSale.html?raw";

export const TodoApp = () => {
    rootPeli.innerHTML = "";

    let todoApp = document.createElement("div");
    todoApp.innerHTML = todoAppPage;
    rootPeli.appendChild(todoApp);

    let formTarea = document.querySelector("#formTarea");
    let inputTarea = document.querySelector("#inputTarea");
    let tareasContenedor = document.querySelector("#tareasContenedor");
    let filtroTareas = document.querySelector("#filtroTareas");

    formTarea.onsubmit = (event) => {
        event.preventDefault();
        tareasManager.agregarTarea(inputTarea.value, tareasContenedor)
    }

    filtroTareas.onchange = () => {
        console.log(filtroTareas.value);
        tareasManager.filtrarTareas(filtroTareas.value, tareasContenedor)
    }

};