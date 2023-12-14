document.addEventListener('DOMContentLoaded', function () {
    fetch('data/stacks.json')
        .then(response => response.json())
        .then(data => {
            const stackCarousel = document.getElementById('stackCarousel');
            const carouselInner = stackCarousel.querySelector('.carousel-inner');

            const screenWidth = window.innerWidth;

            let numberOfImages;
            if (screenWidth >= 1200) {
                numberOfImages = 7; // Desktop
            } else if (screenWidth >= 768) {
                numberOfImages = 5; // Tablet
            } else {
                numberOfImages = 3; // Celular
            }

            let currentIndex = 0;
            for (let i = 0; i < data.length; i += numberOfImages) {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (currentIndex === 0) {
                    carouselItem.classList.add('active');
                }

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('d-flex', 'justify-content-center');

                for (let j = 0; j < numberOfImages && currentIndex < data.length; j++) {
                    const img = document.createElement('img');
                    img.classList.add('stack-image', 'img-fluid');
                    img.src = data[currentIndex].image;
                    img.alt = data[currentIndex].language;
                    imageContainer.appendChild(img);
                    currentIndex++;
                }

                carouselItem.appendChild(imageContainer);
                carouselInner.appendChild(carouselItem);
            }
        })
        .catch(error => console.error('Erro ao carregar dados do JSON:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById('projects');

            data.forEach(project => {
                const cardCol = document.createElement('div');
                cardCol.classList.add('col');

                const card = document.createElement('div');
                card.classList.add('card', 'h-100');

                const img = document.createElement('img');
                img.classList.add('card-img-top', 'image-card');
                img.src = project.image;
                img.alt = project.title;

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                
                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = project.title;
                
                const description = document.createElement('p');
                description.classList.add('card-text');
                description.textContent = project.description;
                
                const cardFooter = document.createElement('div');
                cardFooter.classList.add('card-footer', 'd-flex', 'align-items-center');

                const githubLink = document.createElement('a');
                githubLink.classList.add('me-3', 'py-2', 'link-body-emphasis', 'text-decoration-none');
                githubLink.href = project.githubLink;
                githubLink.target = '_blank'

                const githubImg = document.createElement('img');
                githubImg.classList.add('card-github-image');
                githubImg.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';

                const viewCodeLink = document.createElement('a');
                viewCodeLink.classList.add('card-github-link');
                viewCodeLink.href = project.githubLink;
                viewCodeLink.textContent = 'View Code';
                viewCodeLink.target = '_blank'

                githubLink.appendChild(githubImg);
                cardFooter.appendChild(githubLink);
                cardFooter.appendChild(viewCodeLink);
                cardBody.appendChild(title);
                cardBody.appendChild(description);
                card.appendChild(img);
                card.appendChild(cardBody);
                card.appendChild(cardFooter);
                cardCol.appendChild(card);

                projectsSection.querySelector('.row').appendChild(cardCol);
            });
        })
        .catch(error => console.error('Erro ao carregar dados do JSON:', error));
});
