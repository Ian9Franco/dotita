document.addEventListener('DOMContentLoaded', function () {
    const generateTeamButton = document.getElementById('generateTeamButton');
    let generationInProgress = false;

    generateTeamButton.addEventListener('click', async () => {
        if (generationInProgress) {
            return;
        }

        generationInProgress = true;
        playAudio();

        const teamDisplay = document.getElementById('teamDisplay');
        const heroesToRemove = Array.from(teamDisplay.querySelectorAll('.hero'));

        await removeHeroes(heroesToRemove);

        const selectedHeroes = new Set();
        const roles = [
            { name: "Offlane", criteria: ["Tanque", "Tanque, Iniciador"] },
            { name: "Apoyo Secundario", criteria: ["Support", "Support, Iniciador", "Support, Pusher"] },
            { name: "Apoyo Primario", criteria: ["Support"], exclusive: true },
            { name: "Mid", criteria: ["Mid"] },
            { name: "Carry", criteria: ["Carry"] }
        ];

        const team = [];
        for (const role of roles) {
            const hero = await getRandomUniqueHeroByCriteria(role.criteria, selectedHeroes, role.name, role.exclusive);
            selectedHeroes.add(hero.name);
            team.push(hero);
        }

        ensureSynergy(team);

        await displayTeam(team);

        generationInProgress = false;
    });

    async function removeHeroes(heroesToRemove) {
        for (let heroElement of heroesToRemove) {
            heroElement.classList.add('fade-out');
            await new Promise(resolve => setTimeout(resolve, 500)); // Espera a que el fade-out termine
            heroElement.remove();
        }
    }

    function getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, exclusive = false) {
        return new Promise(resolve => {
            const availableHeroes = heroes.filter(hero => {
                const heroRoles = hero.rol.split(', ');
                return criteria.some(role => heroRoles.includes(role)) && !selectedHeroes.has(hero.name) && (!exclusive || heroRoles.length === 1);
            });

            if (availableHeroes.length === 0) {
                throw new Error(`No hay suficientes héroes para cumplir con el rol requerido: ${roleName}.`);
            }

            const hero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)];
            resolve({ ...hero, assignedRole: roleName });
        });
    }

    function displayHero(hero, delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                const teamDisplay = document.getElementById('teamDisplay');
                const heroElement = document.createElement('div');
                heroElement.classList.add('hero');
                if (hero.synergy) {
                    heroElement.classList.add('synergy');
                }
                if (hero.trioSynergy) {
                    heroElement.classList.add('trio-synergy');
                }
                heroElement.innerHTML = `
                    <img src="${hero.img}" alt="${hero.name}">
                    <p>${hero.name}</p>
                    <p class="role">${hero.assignedRole}</p>
                    <div class="objective">${hero.objetivo}</div>
                `;
                teamDisplay.appendChild(heroElement);

                heroElement.addEventListener('click', () => playHeroAudio(hero.spawn));

                setTimeout(() => {
                    heroElement.classList.add('fade-in');
                    resolve();
                }, 10);

                heroElement.addEventListener('dblclick', () => changeHero(hero, heroElement));
            }, delay);
        });
    }

    async function displayTeam(team) {
        for (let i = 0; i < team.length; i++) {
            await displayHero(team[i], i * 100);
        }
    }

    async function changeHero(oldHero, heroElement) {
        heroElement.classList.remove('fade-in');
        heroElement.classList.add('fade-out');
        await new Promise(resolve => setTimeout(resolve, 500));

        const selectedHeroes = new Set(Array.from(document.querySelectorAll('.hero p'))
            .map(p => p.innerText)
            .filter(name => name !== oldHero.name));

        const roleName = oldHero.assignedRole;
        const criteria = getCriteriaForRole(roleName);

        const newHero = await getRandomUniqueHeroByCriteria(criteria, selectedHeroes, roleName, roleName === 'Apoyo Primario');

        heroElement.classList.remove('fade-out');
        heroElement.classList.add('fade-in');
        heroElement.innerHTML = `
            <img src="${newHero.img}" alt="${newHero.name}">
            <p>${newHero.name}</p>
            <p class="role">${newHero.assignedRole}</p>
            <div class="objective">${newHero.objetivo}</div>
        `;

        if (newHero.synergy) {
            heroElement.classList.add('synergy');
        } else {
            heroElement.classList.remove('synergy');
        }

        if (newHero.trioSynergy) {
            heroElement.classList.add('trio-synergy');
        } else {
            heroElement.classList.remove('trio-synergy');
        }

        heroElement.addEventListener('click', () => playHeroAudio(newHero.spawn));
        heroElement.addEventListener('dblclick', () => changeHero(newHero, heroElement));
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

    function ensureSynergy(team) {
        const synergyGroups = [];
        const synergyMap = new Map();

        team.forEach(hero => {
            synergyMap.set(hero.name, []);
        });

        team.forEach(hero => {
            if (hero.Sinergia) {
                hero.Sinergia.forEach(synergyHero => {
                    if (synergyMap.has(synergyHero.name)) {
                        synergyMap.get(hero.name).push(synergyHero.name);
                        synergyMap.get(synergyHero.name).push(hero.name);
                    }
                });
            }
        });

        team.forEach(hero => {
            const currentGroup = [hero];
            const queue = [hero];
            const visited = new Set([hero.name]);

            while (queue.length > 0) {
                const currentHero = queue.shift();
                const synergies = synergyMap.get(currentHero.name) || [];

                synergies.forEach(synergyName => {
                    if (!visited.has(synergyName)) {
                        const synergyHero = team.find(h => h.name === synergyName);
                        if (synergyHero) {
                            currentGroup.push(synergyHero);
                            queue.push(synergyHero);
                            visited.add(synergyName);
                        }
                    }
                });
            }

            if (currentGroup.length > 1) {
                synergyGroups.push(currentGroup);
            }
        });

        let selectedGroup = [];
        if (synergyGroups.length > 0) {
            selectedGroup = synergyGroups.reduce((maxGroup, group) => group.length > maxGroup.length ? group : maxGroup, []);
        }

        if (selectedGroup.length > 0) {
            selectedGroup.forEach(hero => {
                if (selectedGroup.length >= 3) {
                    hero.trioSynergy = true;
                } else {
                    hero.synergy = true;
                }
            });
        }
    }

    function playAudio() {
        const audio = new Audio('audio/announcer_battle_prepare_01.mp3');
        audio.volume = 0.5;
        audio.play();
    }

   /*  function playHeroAudio(audioSrc) {
        const audio = new Audio(audioSrc);
        audio.volume = 0.5;
        audio.play();
    } */
});