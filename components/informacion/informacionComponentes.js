 export function informacion() {
  let contenedor = document.createElement('div');
  contenedor.className = "contenedor-principal";

  let contenedorBotones = document.createElement('div');
  contenedorBotones.className = "contenedor-botones";

  let btnTarea = document.createElement('button');
  btnTarea.textContent = "+ tarea";
  btnTarea.className = "btn-tarea";

  let btnArchivados = document.createElement('button');
  btnArchivados.textContent = "Archivados";
  btnArchivados.className = "btn-archivados";

  contenedorBotones.appendChild(btnTarea);
  contenedorBotones.appendChild(btnArchivados);

  let tarjeta = document.createElement('div');
  tarjeta.className = "tarjeta";

  let estado = document.createElement('div');
  estado.className = "estado";
  estado.textContent = "completado";

  let titulo = document.createElement('h3');
  titulo.textContent = "Título de la asignación";

  let descripcion = document.createElement('p');
  descripcion.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";

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

  contenedor.appendChild(contenedorBotones);
  contenedor.appendChild(tarjeta);

  return contenedor;
}
