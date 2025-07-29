export function header() {
    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.innerText = "todo-list";
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";
    header.appendChild(divTareas);

    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo";

    let imgLogo = document.createElement('img');
    imgLogo.src = "https://es.digitaltrends.com/wp-content/uploads/2024/04/Logo-Apple.-.jpg?fit=720%2C480&p=1"; 
    imgLogo.className = "logo-img"; 

    divLogoUsuario.appendChild(imgLogo);
    header.appendChild(divLogoUsuario);

    // Sección nueva: Texto "Componentes" con un cuadrito
    let divComponentes = document.createElement('div');
    divComponentes.className = "div-componentes";

    let texto = document.createElement('span');
    texto.innerText = "Componentes";

    let cuadrito = document.createElement('div');
    cuadrito.className = "cuadro";
    cuadrito.innerText = "1"; // ← aquí agregamos el número


    divComponentes.appendChild(texto);
    divComponentes.appendChild(cuadrito);
    header.appendChild(divComponentes);

    return header;
}
