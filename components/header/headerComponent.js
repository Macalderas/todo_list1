export function header() {
    let header = document.createElement('header');

    // Título a la izquierda
    let h1 = document.createElement('h1');
    h1.innerText = "✏️ Todo List";
    header.appendChild(h1);

    // Centro: Texto + contador
    let divComponentes = document.createElement('div');
    divComponentes.className = "div-componentes";

    let texto = document.createElement('span');
    texto.innerText = "Pendientes";

    let cuadrito = document.createElement('div');
    cuadrito.className = "cuadro";
    cuadrito.innerText = "8"; // Puedes hacerlo dinámico si quieres

    divComponentes.appendChild(texto);
    divComponentes.appendChild(cuadrito);
    header.appendChild(divComponentes);

    // Icono de usuario a la derecha
    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo";

    let imgLogo = document.createElement('img');
    imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVLgx4zioWkzCg4rpgkIqzjPEb5ogrLv9fQ&s"; 
    imgLogo.alt = "Usuario";
    imgLogo.className = "logo-img";

    divLogoUsuario.appendChild(imgLogo);
    header.appendChild(divLogoUsuario);

    return header;
}
