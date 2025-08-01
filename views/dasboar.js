import { crearFooter } from "../components/footer/footer.js";
import { header } from "../components/header/headerComponent.js";
import { informacion } from "../components/informacion/informacionComponentes.js";
import { tareas } from "../components/tareas/tareasComponetes.js";

export function dashboard() {
  const dashboard = document.createElement("section");
  dashboard.className = "section-1";

  dashboard.appendChild(header());

  // Contenedor para los dos cuadros
  const seccion1 = document.createElement("div");
  seccion1.className = "contenedor-cuadros";
  
  // Añadir los cuadros al contenedor
  seccion1.appendChild(tareas());       // lado izquierdo (grande)
  seccion1.appendChild(informacion());  // lado derecho (pequeño)

  dashboard.appendChild(seccion1);
  dashboard.appendChild(crearFooter());

  document.body.appendChild(dashboard);
  return dashboard;
}

dashboard();
