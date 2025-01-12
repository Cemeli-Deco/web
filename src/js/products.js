document.addEventListener("DOMContentLoaded", function () {
    // Carrusel de imágenes
    let carouselIndex = 0;
    const carouselImages = document.querySelectorAll('.carousel img');
    const totalImages = carouselImages.length;

    function showNextImage() {
        carouselImages[carouselIndex].style.opacity = 0;
        carouselIndex = (carouselIndex + 1) % totalImages;
        carouselImages[carouselIndex].style.opacity = 1;
    }

    setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos

    // Mostrar imagen en el modal
    const galleryImages = document.querySelectorAll('.gallery-img');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Mostrar productos según categoría
    const navLinks = document.querySelectorAll('.nav_topics a');
    const gallery = document.querySelector('.gallery .grid');

    const products = {
        lamparas: ['img_1.png'],
        utensilios: ['img_2.png', 'img_3.png'],
        adornos: ['img_3.png', 'img_1.png', 'img_2.png']
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.textContent.toLowerCase();
            updateGallery(products[category]);
        });
    });

    function updateGallery(images) {
        gallery.innerHTML = ''; // Limpiar la galería actual
        images.forEach(imageSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = `../img/${imageSrc}`;
            imgElement.alt = 'Producto';
            imgElement.classList.add('gallery-img');
            gallery.appendChild(imgElement);
        });

        // Vuelve a agregar el evento de clic a las nuevas imágenes
        const newGalleryImages = document.querySelectorAll('.gallery-img');
        newGalleryImages.forEach(image => {
            image.addEventListener('click', function () {
                modal.style.display = 'flex';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            });
        });
    }

    // Inicializar con productos de "lamparas"
    updateGallery(products.lamparas);
});
