function displayHeroes(attribute) {
    const heroesContainer = document.getElementById('heroes-container');
    heroesContainer.innerHTML = '';
    
    const filteredHeroes = attribute === '*' ? heroes : heroes.filter(hero => hero.atributo === attribute);
    
    filteredHeroes.forEach(hero => {
        const heroItem = document.createElement('div');
        heroItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'item');
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
    });
    
    // Agregar un evento clic al icono de información
    const infoIcons = document.querySelectorAll('.info-icon');
    infoIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const heroData = JSON.parse(icon.getAttribute('data-hero'));
            // Aquí podrías mostrar más detalles sobre el héroe
            // Esto podría ser un cuadro modal, una tarjeta emergente, etc.
            console.log(heroData);
            // Luego puedes utilizar heroData para mostrar los detalles en una ventana emergente
        });
    });
}

// Resto del código...

// Llamar a la función para mostrar los héroes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    displayHeroes('*');
    
    const filterButtons = document.querySelectorAll('#role-filter li');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const attribute = button.getAttribute('data-filter');
            displayHeroes(attribute);
        });
    });
});

infoIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        // Detener la propagación del evento para evitar que se active el clic en la figura
        event.stopPropagation();
        
        const heroData = JSON.parse(icon.getAttribute('data-hero'));
        const modal = document.getElementById('hero-details-modal');
        const nameElement = document.getElementById('hero-details-name');
        const roleElement = document.getElementById('hero-details-role');
        const comboElement = document.getElementById('hero-details-combo');
        
        nameElement.textContent = `Nombre: ${heroData.name}`;
        roleElement.textContent = `Rol: ${heroData.rol}`;
        comboElement.textContent = `Combo: ${heroData.combo || 'N/A'}`; // Mostrar "N/A" si no hay información de combo
        
        modal.style.display = 'block';
    });
    
    // Agregar interacción de hover al icono
    icon.addEventListener('mouseenter', () => {
        // Aquí puedes agregar estilos o cualquier otra interacción que desees
        // Por ejemplo, cambiar el color o el tamaño del icono cuando el usuario pasa el ratón sobre él
        icon.style.color = 'red';
    });
    
    icon.addEventListener('mouseleave', () => {
        // Restaurar los estilos cuando el usuario deja de pasar el ratón sobre el icono
        icon.style.color = ''; // Esto restablece el color a su valor predeterminado
    });
});
