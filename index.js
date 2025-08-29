function crearPagina() {
  const root = document.getElementById("root");

  const titulo = document.createElement("h1");
  
  let enlace = document.createElement("a");
  enlace.textContent = "¡Bienvenido a mi página!";
  enlace.href = "https://macalderas.github.io/todo_list1/pages/dasboar.html"; // aquí pones el link que quieras
  enlace.target = "_blank"; // opcional, abre en otra pestaña

  titulo.appendChild(enlace);
  root.appendChild(titulo);
}

crearPagina();
