document.addEventListener('DOMContentLoaded', function () {
    fetch('data/stacks.json')
        .then(response => response.json())
        .then(data => {
            const stackCarousel = document.getElementById('stackCarousel');

            data.forEach((stack, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('d-flex', 'justify-content-center');

                stack.forEach(stackItem => {
                    const img = document.createElement('img');
                    img.classList.add('stack-image', 'img-fluid');
                    img.src = stackItem.image;
                    img.alt = stackItem.language;
                    imageContainer.appendChild(img);
                });

                carouselItem.appendChild(imageContainer);
                stackCarousel.querySelector('.carousel-inner').appendChild(carouselItem);
            });
        })
        .catch(error => console.error('Erro ao carregar dados do JSON:', error));
});
