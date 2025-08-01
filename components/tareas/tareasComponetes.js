import { tarea } from "../../modules/intemTareas/itemTareas.js";

let tareasDb = [
  { titulo: "Título de la asignación" },
  { titulo: "Título de la asignación" },
  { titulo: "Título de la asignación" },
  { titulo: "Título de la asignación" },

  

];

export function tareas() {
  let div = document.createElement("div");
  div.className = "div-tareas";

  tareasDb.forEach((e) => {
    div.appendChild(tarea(e.titulo));
  });

  return div;
}
