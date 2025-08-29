export function tareasEliminadas() {
  const contenedor = document.createElement("div");
  contenedor.className = "tareas-eliminadas";

  const titulo = document.createElement("h2");
  titulo.textContent = "Tareas Eliminadas";
  contenedor.appendChild(titulo);

  const lista = document.createElement("ul");
  lista.className = "lista-tareas-eliminadas";
  contenedor.appendChild(lista);

 

  return contenedor;
}
