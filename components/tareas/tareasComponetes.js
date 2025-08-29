import { tarea } from "../../modules/intemTareas/itemTareas.js";
import { obtenerTareas } from "../../services/api.js";

export function tareas() {
  let div = document.createElement("div");
  div.className = "div-tareas";

  // Consultar al backend
  obtenerTareas(1).then((lista) => {
    if (lista.length === 0) {
      div.appendChild(tarea("No hay tareas disponibles"));
    } else {
      lista.forEach((e) => {
        // Asegúrate que el backend devuelva "titulo"
        div.appendChild(tarea(e.titulo));
      });
    }
  });

  return div;
}
