function crearPagina() {
  const root = document.getElementById("root");

  // --- Mensaje de anuncio ---
  const anuncio = document.createElement("h2");
  anuncio.textContent = "🚧 Estamos trabajando 🚧";
  anuncio.style.textAlign = "center";
  anuncio.style.color = "#d32f2f";
  anuncio.style.fontFamily = "Arial, sans-serif";
  anuncio.style.marginBottom = "20px";
  root.appendChild(anuncio);

  // --- Título con enlace ---
  const titulo = document.createElement("h1");
  
  let enlace = document.createElement("a");
  enlace.textContent = "¡Bienvenido a mi página!";
  enlace.href = "https://macalderas.github.io/todo_list1/pages/dasboar.html";
  enlace.target = "_blank"; // abre en otra pestaña

  titulo.appendChild(enlace);
  root.appendChild(titulo);
}

crearPagina();
