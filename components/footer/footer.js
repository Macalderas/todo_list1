export function crearFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const boton = document.createElement('button');
  boton.textContent = 'github';
  boton.classList.add('footer-button');

  boton.onclick = () => {
    window.open('https://github.com/Macalderas/todo_list1?tab=readme-ov-file', '_blank');
  };

  footer.appendChild(boton);
  return footer;
}
