// Función para mostrar héroes y activar el carrusel para una categoría específica
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
 // Agregar un evento clic al icono de información
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