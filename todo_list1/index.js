function crearPagina() {
  const root = document.getElementById("root");

  const titulo = document.createElement("h1");
  titulo.textContent = "¡Bienvenido a mi página!";
  root.appendChild(titulo);
}

crearPagina();
