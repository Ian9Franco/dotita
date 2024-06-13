let generationInProgress = false; // Variable para controlar si ya hay una generación en curso

document.getElementById('generateTeamButton').addEventListener('click', async () => {
    if (generationInProgress) {
        return; // Si ya hay una generación en curso, no hacer nada
    }

    generationInProgress = true; // Marcar que hay una generación en curso

    const teamDisplay = document.getElementById('teamDisplay');
    const heroesToRemove = Array.from(teamDisplay.querySelectorAll('.hero'));

    await removeHeroes(heroesToRemove);

    const selectedHeroes = new Set();

    const roles = [
        { name: "Offlane", criteria: ["Tanque", "Tanque, Iniciador"] },
        { name: "Apoyo Secundario", criteria: ["Support", "Support, Iniciador", "Support, Pusher"] },
        { name: "Apoyo Primario", criteria: ["Support"], exclusive: true }, // criterio exclusivo
        { name: "Mid", criteria: ["Mid"] },
        { name: "Carry", criteria: ["Carry"] },
    ];

    for (let i = 0; i < 5; i++) {
        const roleName = roles[i % roles.length].name;
        const criteria = getCriteriaForRole(roleName);
        
        const hero = await getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, roleName === 'Apoyo Primario');
        selectedHeroes.add(hero.name);
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo
        
        displayHero(hero);
    }

    generationInProgress = false; // Marcar que la generación ha terminado
});

async function removeHeroes(heroesToRemove) {
    const fadeOutDuration = 500; // Duración del fade-out en milisegundos

    for (let heroElement of heroesToRemove) {
        heroElement.querySelector('img').classList.add('fade-out');

        await new Promise(resolve => {
            setTimeout(() => {
                heroElement.remove();
                resolve();
            }, fadeOutDuration); // Esperar el tiempo de fade-out antes de eliminar el héroe
        });
    }
}

function getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, exclusive = false) {
    return new Promise(resolve => {
        const allHeroes = Object.values(heroes).flat();
        const availableHeroes = allHeroes.filter(hero => {
            const heroRoles = hero.rol.split(', ');
            return criteria.some(role => heroRoles.includes(role)) && !selectedHeroes.has(hero.name) && (!exclusive || heroRoles.length === 1);
        });

        if (availableHeroes.length === 0) {
            throw new Error(`No hay suficientes héroes para cumplir con el rol requerido: ${roleName}.`);
        }

        const hero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)];
        selectedHeroes.add(hero.name);

        const selectedRole = criteria.find(role => hero.rol.split(', ').includes(role));

        resolve({ ...hero, selectedRole: roleName });
    });
}

function displayHero(hero) {
    const teamDisplay = document.getElementById('teamDisplay');
    const heroElement = document.createElement('div');
    heroElement.classList.add('hero');
    heroElement.innerHTML = `
        <img src="${hero.img}" alt="${hero.name}" class="fade-in">
        <div class="complexity">Complejidad: ${hero.complejidad}</div>
        <p>${hero.name}</p>
        <p class="role">${hero.selectedRole}</p>
    `;
    teamDisplay.appendChild(heroElement);

    // Forzar un reflow antes de añadir la clase fade-in para asegurar que la animación se active
    heroElement.offsetHeight;

    heroElement.querySelector('img').classList.add('fade-in');

    heroElement.addEventListener('dblclick', () => changeHero(hero, heroElement));
}

function changeHero(oldHero, heroElement) {
    const selectedHeroes = new Set(Array.from(document.querySelectorAll('.team-display .hero p'))
        .map(p => p.innerText)
        .filter(name => name !== oldHero.name));

    const roleName = oldHero.selectedRole;
    const criteria = getCriteriaForRole(roleName);

    const heroImg = heroElement.querySelector('img');
    
    // Añadir clase de fade-out
    heroImg.classList.add('fade-out');

    setTimeout(async () => {
        heroImg.classList.remove('fade-out'); // Remover fade-out para reiniciar la animación
        const newHero = await getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, roleName === 'Apoyo Primario');

        // Actualizar contenido del héroe final
        heroElement.innerHTML = `
            <img src="${newHero.img}" alt="${newHero.name}" class="fade-in">
            <div class="complexity">Complejidad: ${newHero.complejidad}</div>
            <p>${newHero.name}</p>
            <p class="role">${newHero.selectedRole}</p>
        `;

        const finalHeroImg = heroElement.querySelector('img');
        finalHeroImg.classList.add('fade-in');

        finalHeroImg.addEventListener('dblclick', () => changeHero(newHero, heroElement));
    }, 500); // Duración de la animación de fade-out
}

function getCriteriaForRole(roleName) {
    switch (roleName) {
        case "Offlane":
            return ["Tanque", "Tanque, Iniciador"];
        case "Apoyo Secundario":
            return ["Support", "Support, Iniciador", "Support, Pusher"];
        case "Apoyo Primario":
            return ["Support"];
        case "Mid":
            return ["Mid"];
        case "Carry":
            return ["Carry"];
        default:
            throw new Error(`Rol no reconocido: ${roleName}`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.header-main ul li a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove 'active' and 'clicked' classes from all links
            links.forEach(function (link) {
                link.classList.remove('active');
                link.classList.remove('clicked');
            });

            // Add 'active' and 'clicked' classes to the clicked link
            this.classList.add('active');
            this.classList.add('clicked');

            // Remove 'clicked' class after animation ends
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300); // The duration of the animation
        });
    });
});



//seccion boton generador
const generateTeamButton = document.getElementById('generateTeamButton');
let isGenerating = false;

// Función para reproducir el audio con volumen reducido
function playAudio() {
    const audio = new Audio('audio/announcer_battle_prepare_01.mp3');
    audio.volume = 0.5; // Volumen reducido a la mitad
    audio.play();
}

function generateTeam() {
    isGenerating = true;
    generateTeamButton.textContent = 'Generar de nuevo';

    setTimeout(() => {
        const selectedHeroes = new Set();
        const roles = [
            { name: "Offlane", criteria: ["Tanque", "Tanque, Iniciador"] },
            { name: "Apoyo Secundario", criteria: ["Support", "Support, Iniciador", "Support, Pusher"] },
            { name: "Apoyo Primario", criteria: ["Support"], exclusive: true },
            { name: "Mid", criteria: ["Mid"] },
            { name: "Carry", criteria: ["Carry"] },
        ];

        const team = roles.map(role => getRandomUniqueHeroByCriteria(role.criteria, selectedHeroes, role.name, role.exclusive));
        
        // Reproducir audio al generar equipo nuevo
        playAudio();
        
        displayTeam(team);

        setTimeout(() => {
            isGenerating = false;
            generateTeamButton.textContent = 'Generar de nuevo';
        }, 1500); // Tiempo ajustado para coincidir con el fade-out en displayTeam()
    }, 1000); // Tiempo ajustado para simular la generación del equipo
}

generateTeamButton.addEventListener('click', () => {
    if (!isGenerating) {
        generateTeam();
    } else {
        // Si se está generando, se podría agregar una lógica para cancelar la generación actual si es necesario
        // Por ejemplo, clearTimeout() o eliminar setTimeouts pendientes
    }
});

// También añadir la reproducción de audio al hacer clic en "Generar de nuevo"
generateTeamButton.addEventListener('click', () => {
    if (!isGenerating) {
        generateTeam();
    } else {
        // Si se está generando, se podría agregar una lógica para cancelar la generación actual si es necesario
        // Por ejemplo, clearTimeout() o eliminar setTimeouts pendientes
    }
});

