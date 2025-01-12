document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("home");

    // Función para crear un copo de nieve
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.textContent = "❄"; // Símbolo del copo de nieve
        snowflake.classList.add("snowflake");

        // Posición aleatoria y tamaño del copo
        snowflake.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        snowflake.style.fontSize = `${Math.random() * 10 + 5}px`; // Tamaño aleatorio entre 5px y 15px
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Velocidad de caída aleatoria
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio antes de comenzar a caer

        // Agregar el copo al header
        header.appendChild(snowflake);

        // Eliminar el copo después de que haya caído
        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }

    // Crear copos de nieve cada 100ms
    setInterval(createSnowflake, 320);
});
