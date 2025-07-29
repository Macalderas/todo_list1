import { header } from "../components/header/headerComponent.js";

export function dasboar() {
    let seccion = document.createElement('section');
    seccion.appendChild(header());
    document.body.appendChild(seccion); 
}

dasboar(); 

