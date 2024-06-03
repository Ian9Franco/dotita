function displayHeroes(role) {
    const heroesContainer = document.getElementById('heroes-container');
    heroesContainer.innerHTML = ''; // Limpiar el contenedor de héroes

    let heroesList = [];

    if (role === '*') {
        // Si se selecciona "Todos", mostrar todos los héroes
        for (const category in heroes) {
            heroesList = heroesList.concat(heroes[category]);
        }
    } else {
        // Si se selecciona un rol específico, mostrar solo los héroes de ese rol
        heroesList = heroes[role];
    }

    // Crear elementos HTML para cada héroe y agregarlos al contenedor
    heroesList.forEach(hero => {
        const heroElement = document.createElement('div');
        heroElement.classList.add('col-lg-3', 'col-sm-6', 'hero');
        heroElement.innerHTML = `
            <div class="card">
                <img src="${hero.img}" class="card-img-top" alt="${hero.name}">
                <div class="card-body">
                    <h5 class="card-title">${hero.name}</h5>
                    <p class="card-text">${hero.rol}</p>
                    <p class="card-text">Complejidad: ${hero.complejidad}</p>
                </div>
            </div>
        `;
        heroesContainer.appendChild(heroElement);
    });
}

// Event listener para los filtros
document.getElementById('role-filter').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const filter = e.target.getAttribute('data-filter');
        document.querySelectorAll('#role-filter li').forEach(li => li.classList.remove('active'));
        e.target.classList.add('active');
        displayHeroes(filter);
    }
});

// Mostrar todos los héroes al cargar la página
displayHeroes('*');