import { formularioTareas } from "../formulario/formulario.js";

export function informacion() {
  let contenedor = document.createElement('div');
  contenedor.className = "contenedor-principal";

  // Botones (pestañas)
  let contenedorBotones = document.createElement('div');
  contenedorBotones.className = "contenedor-botones";

  let btnTarea = document.createElement('button');
  btnTarea.textContent = "+ tareas";
  btnTarea.className = "btn-tarea btn-tab activa";

  let btnArchivados = document.createElement('button');
  btnArchivados.textContent = "Archivados";
  btnArchivados.className = "btn-archivados btn-tab";

  contenedorBotones.appendChild(btnTarea);
  contenedorBotones.appendChild(btnArchivados);

  // Contenido de tareas
  let contenidoTarea = document.createElement('div');
  contenidoTarea.className = "contenido-tab activo";

  let tarjeta = document.createElement('div');
  tarjeta.className = "tarjeta";

  let estado = document.createElement('div');
  estado.className = "estado";
  estado.textContent = "completado";

  let titulo = document.createElement('h3');
  titulo.textContent = "Título de la asignación";

  let descripcion = document.createElement('p');
  descripcion.textContent = "Descripción de la tarea asignada.";

  let subtitulo = document.createElement('h4');
  subtitulo.textContent = "Integrantes";

  let contenedorAvatares = document.createElement('div');
  contenedorAvatares.className = "avatares";
  let emojis = ["😎", "😁", "😎"];
  emojis.forEach(e => {
    let avatar = document.createElement('div');
    avatar.className = "avatar";
    avatar.textContent = e;
    contenedorAvatares.appendChild(avatar);
  });

  tarjeta.appendChild(estado);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(descripcion);
  tarjeta.appendChild(subtitulo);
  tarjeta.appendChild(contenedorAvatares);

  // Agregar tarjeta y formulario
  contenidoTarea.appendChild(tarjeta);
  contenidoTarea.appendChild(formularioTareas()); // ⬅️ Aquí se agrega el formulario

  // Contenido archivado (oculto)
  let contenidoArchivados = document.createElement('div');
  contenidoArchivados.className = "contenido-tab";
  let mensaje = document.createElement('p');
  mensaje.textContent = "No hay tareas archivadas por ahora.";
  contenidoArchivados.appendChild(mensaje);

  // Alternar pestañas
  btnTarea.addEventListener('click', () => {
    btnTarea.classList.add('activa');
    btnArchivados.classList.remove('activa');
    contenidoTarea.classList.add('activo');
    contenidoArchivados.classList.remove('activo');
  });

  btnArchivados.addEventListener('click', () => {
    btnArchivados.classList.add('activa');
    btnTarea.classList.remove('activa');
    contenidoArchivados.classList.add('activo');
    contenidoTarea.classList.remove('activo');
  });

  contenedor.appendChild(contenedorBotones);
  contenedor.appendChild(contenidoTarea);
  contenedor.appendChild(contenidoArchivados);


  return contenedor;
}