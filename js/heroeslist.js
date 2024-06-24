function displayAndRotateHeroes(attribute) {
    const heroesContainer = document.getElementById('heroes-container');
    const heroItems = Array.from(heroesContainer.children);

    // Quitar la clase fade-out para mostrar los héroes gradualmente
    heroItems.forEach(item => item.classList.remove('fade-out'));

    // Esperar un breve tiempo antes de agregar la clase fade-in
    setTimeout(() => {
        let filteredHeroes = attribute === '*' ? heroes : heroes.filter(hero => hero.atributo === attribute);

        if (attribute === '*') {
            filteredHeroes = shuffleArray(filteredHeroes);
        }

        heroesContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar héroes

        filteredHeroes.forEach(hero => {
            const heroItem = document.createElement('div');
            heroItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'item', 'fade-in'); // Añadir la clase fade-in
            heroItem.innerHTML = `
                <div class="card">
                    <figure>
                        <img src="${hero.img}" alt="${hero.name}">
                        <figcaption>
                            <h3>${hero.name}</h3>
                            <p>${hero.rol}</p>
                            <span class="info-icon" data-hero='${JSON.stringify(hero)}'>ℹ️</span>
                        </figcaption>
                    </figure>
                </div>
            `;
            heroesContainer.appendChild(heroItem);

            // Agregar evento de hover para reproducir el audio con volumen reducido
            const audio = new Audio(hero.spawn);
            audio.volume = 0.1; // Reducir el volumen al 20%
            heroItem.addEventListener('mouseenter', () => {
                audio.play();
            });
        });

        // Activar el carrusel solo para la categoría seleccionada
        setInterval(() => {
            displayHeroes(attribute);
        }, 5000); // Rotar cada 5 segundos
    }, 100); // Esperar un breve tiempo antes de agregar la clase fade-in
}

// Llamar a la función para mostrar y rotar héroes por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    displayAndRotateHeroes('*');

    const filterButtons = document.querySelectorAll('#role-filter li');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const attribute = button.getAttribute('data-filter');
            displayAndRotateHeroes(attribute); // Llamar a la función para mostrar y rotar héroes
        });
    });
});

const infoIcons = document.querySelectorAll('.info-icon');
infoIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        const heroData = JSON.parse(icon.getAttribute('data-hero'));
        console.log(heroData);
        // Aquí podrías mostrar más detalles sobre el héroe
    });

    // Agregar interacción de hover al icono
    icon.addEventListener('mouseenter', () => {
        icon.style.color = 'red';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.color = '';
    });
});

// Resto del código...