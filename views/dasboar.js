import { crearFooter } from "../components/footer/footer.js";
import { header } from "../components/header/headerComponent.js";

export function dashboard() {
  const seccion = document.createElement('section');
  seccion.appendChild(header());
  seccion.appendChild(crearFooter());
  document.body.appendChild(seccion);
}

dashboard();
