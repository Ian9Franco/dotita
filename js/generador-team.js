document.getElementById('generateTeamButton').addEventListener('click', () => {
    const selectedHeroes = new Set();

    const roles = [
        { name: "Offlane", criteria: ["Tanque", "Tanque, Iniciador"] },
        { name: "Apoyo Secundario", criteria: ["Support", "Support, Iniciador", "Support, Pusher"] },
        { name: "Apoyo Primario", criteria: ["Support"], exclusive: true }, // criterio exclusivo
        { name: "Mid", criteria: ["Mid"] },
        { name: "Carry", criteria: ["Carry"] },
    ];

    const team = roles.map(role => getRandomUniqueHeroByCriteria(role.criteria, selectedHeroes, role.name, role.exclusive));

    displayTeam(team);
});

function getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, exclusive = false) {
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

    return { ...hero, selectedRole: roleName };
}

function displayTeam(team) {
    const teamDisplay = document.getElementById('teamDisplay');
    teamDisplay.innerHTML = "";
    team.forEach((hero, index) => {
        const heroElement = document.createElement('div');
        heroElement.classList.add('hero');
        heroElement.innerHTML = `
            <img src="${hero.img}" alt="${hero.name}">
            <div class="complexity">Complejidad: ${hero.complejidad}</div>
            <p>${hero.name}</p>
            <p class="role">${hero.selectedRole}</p>
        `;
        heroElement.addEventListener('click', () => changeHero(hero, index));
        teamDisplay.appendChild(heroElement);
    });
}

function changeHero(oldHero, index) {
    const selectedHeroes = new Set(Array.from(document.querySelectorAll('.team-display .hero p'))
        .map(p => p.innerText)
        .filter(name => name !== oldHero.name));
        
    const roleName = oldHero.selectedRole;
    const criteria = getCriteriaForRole(roleName);

    const newHero = getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, roleName === 'Apoyo Primario');

    const team = Array.from(document.querySelectorAll('.team-display .hero')).map((heroElement, i) => {
        if (i === index) return newHero;
        const name = heroElement.querySelector('p').innerText;
        const role = heroElement.querySelector('.role').innerText;
        const img = heroElement.querySelector('img').src;
        const complexity = heroElement.querySelector('.complexity').innerText.split(': ')[1];
        return { name, img, rol: role, complejidad: complexity, selectedRole: role };
    });

    displayTeam(team);
}

function getCriteriaForRole(roleName) {
    switch(roleName) {
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

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove 'active' and 'clicked' classes from all links
            links.forEach(function(link) {
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



