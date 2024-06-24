document.addEventListener('DOMContentLoaded', function () {
    const generateCounterButton = document.getElementById('generateCounterButton');
    const showHeroesButton = document.getElementById('showHeroesButton');
    const selectHeroButton = document.getElementById('selectHeroButton');
    const heroesListContainer = document.getElementById('heroesListContainer');
    const heroesList = document.getElementById('heroesList');
    const selectedHeroDisplay = document.getElementById('selectedHeroDisplay');
    const counterDisplay = document.getElementById('counterDisplay');
    const counterDescContainer = document.getElementById('counterDescContainer');
    let selectedHero = null;

    // Mostrar la lista de héroes al hacer clic en el botón "Mostrar Héroes"
    showHeroesButton.addEventListener('click', () => {
        populateHeroesList();
        heroesListContainer.style.display = 'block';
    });

    // Guardar el héroe seleccionado y mostrarlo en el display
    selectHeroButton.addEventListener('click', () => {
        selectedHero = heroesList.value;
        heroesListContainer.style.display = 'none';
        displaySelectedHero();
    });

    // Generar counters del héroe seleccionado al hacer clic en el botón "Generar counter"
    generateCounterButton.addEventListener('click', async () => {
        if (!selectedHero) {
            alert("Por favor, selecciona un héroe primero.");
            return;
        }

        const counters = getCounterHeroes(selectedHero);
        await displayCounterHeroes(counters);
    });

    // Función para llenar la lista de héroes
    function populateHeroesList() {
        heroesList.innerHTML = ''; // Limpiar la lista actual
        heroes.forEach(hero => {
            const option = document.createElement('option');
            option.value = hero.name;
            option.textContent = hero.name;
            heroesList.appendChild(option);
        });
    }

    // Función para eliminar héroes mostrados anteriormente
    async function removeHeroes(heroesToRemove) {
        for (let heroElement of heroesToRemove) {
            heroElement.classList.add('fade-out');
            await new Promise(resolve => setTimeout(resolve, 500)); // Espera a que el fade-out termine
            heroElement.remove();
        }
    }

    // Función para obtener los counters del héroe seleccionado
    function getCounterHeroes(heroName) {
        const hero = heroes.find(h => h.name === heroName);
        if (hero && hero.Counters) {
            return hero.Counters.map(counter => {
                return heroes.find(h => h.name === counter.name);
            }).filter(Boolean); // Elimina los elementos undefined si no se encuentra el héroe en la lista
        }
        return [];
    }

    // Función para mostrar el héroe seleccionado
    function displaySelectedHero() {
        selectedHeroDisplay.innerHTML = ''; // Limpiar el display actual
        const hero = heroes.find(h => h.name === selectedHero);
        if (hero) {
            const heroElement = document.createElement('div');
            heroElement.classList.add('hero');
            heroElement.innerHTML = `
                <img src="${hero.img}" alt="${hero.name}">
                <p>${hero.name}</p>
            `;
            selectedHeroDisplay.appendChild(heroElement);

            if (hero.spawn) {
                playHeroAudio(hero.spawn);
            }
        }
    }

    // Función para mostrar los héroes counter en el display
    async function displayCounterHeroes(counterHeroes) {
        await removeHeroes(Array.from(counterDisplay.querySelectorAll('.counter-hero')));
        for (let i = 0; i < counterHeroes.length; i++) {
            await displayCounterHero(counterHeroes[i], i * 100);
        }
    }

    // Función para mostrar un héroe counter en el display
    function displayCounterHero(hero, delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                const counterElement = document.createElement('div');
                counterElement.classList.add('counter-hero');
                counterElement.innerHTML = `
                    <img src="${hero.img}" alt="${hero.name}">
                    <p>${hero.name}</p>
                `;
                counterElement.addEventListener('click', () => showCounterDesc(hero));
                counterDisplay.appendChild(counterElement);

                setTimeout(() => {
                    counterElement.classList.add('fade-in');
                    resolve();
                }, 10);
            }, delay);
        });
    }

    // Función para mostrar la descripción del counter en el contenedor dedicado
    function showCounterDesc(hero) {
        const selectedHeroObj = heroes.find(h => h.name === selectedHero);
        if (selectedHeroObj && selectedHeroObj.Counters) {
            const counter = selectedHeroObj.Counters.find(c => c.name === hero.name);
            if (counter) {
                counterDescContainer.innerHTML = `<div class="counter-desc">${counter.CounterDesc}</div>`;
            }
        }
    }

    // Función para cerrar la descripción del counter
    function closeCounterDesc() {
        counterDescContainer.innerHTML = ''; // Limpiar el contenedor
    }

    // Función para reproducir el audio del héroe seleccionado
    function playHeroAudio(audioSrc) {
        const audio = new Audio(audioSrc);
        audio.volume = 0.5;
        audio.play();
    }

});


