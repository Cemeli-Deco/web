// Selección de elementos
const productImg = document.querySelector(".product-img");

// Lista de imágenes para rotar
const images = [
    "./src/img/img_1.png",
    "./src/img/img_2.png",
    "./src/img/img_3.png"
];

// Intervalo de cambio (en milisegundos)
const interval = 3000;

// Índice actual
let currentIndex = 0;

// Función para cambiar la imagen
function changeImage() {
    // Incrementa el índice o reinicia si llega al final
    currentIndex = (currentIndex + 1) % images.length;

    // Aplica el efecto de desvanecimiento
    productImg.style.opacity = 0;

    // Cambia la imagen después del desvanecimiento
    setTimeout(() => {
        productImg.src = images[currentIndex];
        productImg.style.opacity = 1; // Vuelve a mostrar la imagen
    }, 500); // Ajusta para sincronizar con la animación CSS
}

// Inicia el cambio automático
setInterval(changeImage, interval);
