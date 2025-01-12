document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("transition-overlay");

    // Asegúrate de que el contenido sea accesible desde el principio
    document.body.style.overflow = "auto"; // Permite el desplazamiento desde el principio

    // Después de que la página haya cargado, hacer desaparecer la capa
    setTimeout(function() {
        // Agregar la clase 'hidden' para hacer desaparecer la capa de transición
        overlay.classList.add("hidden");

        // Después de que la capa se haya desvanecido, podemos eliminar la capa del DOM
        setTimeout(function() {
            overlay.remove();  // Elimina la capa negra del DOM
        }, 1000); // El tiempo debe coincidir con la duración de la transición (1 segundo)
    }, 0); // Ejecutamos esto inmediatamente después de cargar la página
});
