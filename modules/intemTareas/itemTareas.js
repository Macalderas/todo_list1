export function tarea(titulo) {
  const fila = document.createElement("div");
  fila.className = "tarea-item";

  // Ícono / número
  const icono = document.createElement("div");
  icono.className = "tarea-icono";
  icono.textContent = "i";

  // Título
  const tituloElem = document.createElement("span");
  tituloElem.className = "tarea-titulo";
  tituloElem.textContent = titulo;

  // Estado
  const estado = document.createElement("div");
  estado.className = "tarea-estado";
  estado.textContent = "completado";

  // Fechas
  const fechaInicio = document.createElement("span");
  fechaInicio.className = "tarea-fecha";
  fechaInicio.textContent = "17/05/2025";

  const fechaFin = document.createElement("span");
  fechaFin.className = "tarea-fecha";
  fechaFin.textContent = "30/07/2025";

  // Emojis
  const emojis = document.createElement("div");
  emojis.className = "tarea-emojis";
  ["😀", "😎", "🤓", ].forEach((e) => {
    const span = document.createElement("span");
    span.className = "emoji";
    span.textContent = e;
    emojis.appendChild(span);
  });

  // Botón eliminar
  const eliminar = document.createElement("button");
  eliminar.className = "tarea-eliminar";
  eliminar.textContent = "❌";

  // Ensamblar
  fila.appendChild(icono);
  fila.appendChild(tituloElem);
  fila.appendChild(estado);
  fila.appendChild(fechaInicio);
  fila.appendChild(fechaFin);
  fila.appendChild(emojis);
  fila.appendChild(eliminar);

  return fila;
}
