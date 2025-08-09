export function formularioTareas() {
  let formulario = document.createElement('form');
formulario.className = "formulario-tareas"; // plural, igual que en el CSS

  let inputTitulo = document.createElement('input');
  inputTitulo.type = "text";
  inputTitulo.placeholder = "Título";

  let inputDescripcion = document.createElement('textarea');
  inputDescripcion.placeholder = "Descripción";

  let selectEstado = document.createElement('select');
  ["Pendiente", "Completado"].forEach(estado => {
    let option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    selectEstado.appendChild(option);
  });

  let inputFecha = document.createElement('input');
  inputFecha.type = "date";

  let btnEnviar = document.createElement('button');
  btnEnviar.type = "submit";
  btnEnviar.textContent = "Enviar";

  formulario.appendChild(inputTitulo);
  formulario.appendChild(inputDescripcion);
  formulario.appendChild(selectEstado);
  formulario.appendChild(inputFecha);
  formulario.appendChild(btnEnviar);

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Formulario enviado:");
    console.log("Título:", inputTitulo.value);
    console.log("Descripción:", inputDescripcion.value);
    console.log("Estado:", selectEstado.value);
    console.log("Fecha:", inputFecha.value);
    formulario.reset();
  });

  return formulario;
}
