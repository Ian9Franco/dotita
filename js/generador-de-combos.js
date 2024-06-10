document.getElementById('combo-size').addEventListener('change', updateCombos);
document.getElementById('combo-type').addEventListener('change', updateCombos);

function updateCombos() {
    const comboSize = parseInt(document.getElementById('combo-size').value);
    const comboType = document.getElementById('combo-type').value;
    const combos = generateCombos(comboSize, comboType);
    displayCombos(combos);
}
function generateCombos(size, type) {
    const combos = {
        team_fight: {
            2: [
                ["Crystal Maiden", "Juggernaut", "Un combo clásico: Crystal Maiden asegura la sostenibilidad con su aura de maná, y Juggernaut ofrece tanto defensa como ofensiva con Blade Fury y Healing Ward. Nova y Freeze junto a Blade Fury son mortales.", "Safelane"],
                ["Terrorblade", "Dazzle", "Cuando TB tiene poca vida, Dazzle lo salva con Grave, dándole tiempo para hacer Sunder. Buen balance entre un carry duro y un support duro.", "Safelane"],
                /* ["Tiny", "IO", "IO enlaza a Tiny para aumentar su velocidad de movimiento, velocidad de ataque y regeneración. Usan teleport para kills instantáneos.", "Safelane o Offlane"],
                ["Void", "Ancient Apparition", "Cuando Void usa su ulti, Ancient Apparition añade su ultimate. Con buena comunicación, pueden hacer wipes de equipo con solo dos jugadores.", "Safelane o Split"],
                 */["Viper", "Venomancer", "Máximo daño por veneno y ralentización. Los enemigos tendrán dificultades para moverse. Ambos atacan y usan hechizos para hacer que el enemigo casi no pueda moverse.", "Safelane o Offlane"],
                ["Axe", "Skywrath Mage", "Axe usa Berserker's Call para agrupar a los enemigos, permitiendo a Skywrath Mage infligir un gran daño con Mystic Flare.", "Offlane"],
                ["Faceless Void", "Witch Doctor", "Faceless Void atrapa a los enemigos en su Chronosphere, mientras Witch Doctor coloca su Death Ward para causar daño continuo.", "Safelane"],
            ],
            3: [
                ["Enigma", "Sven", "Warlock", "Enigma usa Black Hole para atrapar a los enemigos, Warlock lanza Chaotic Offering para aturdirlos y Sven inflige daño masivo con God's Strength.", "Offlane/Safelane"],
                ["Tidehunter", "Disruptor", "Kunkka", "Tidehunter aturde a los enemigos con Ravage, Disruptor silencia con Static Storm y Kunkka remata con Ghostship.", "Offlane/Safelane"],
            ],
        },
        aura: {
            2: [
                ["Undying", "Weaver", "Undying y Weaver causan problemas constantes; Tombstone y Swarm junto con Decay hacen que los enemigos lo pasen mal. Weaver puede farmear y escapar fácilmente.", "Offlane"],
                ["Undying", "Slark", "Undying y Slark roban todas las estadísticas del enemigo. Con Decay de Undying y los ataques de Slark, el enemigo pierde mucha fuerza y se convierte en un objetivo fácil.", "Offlane o Split"],
                ["Dazzle", "Beastmaster", "Dazzle usa Weave para reducir la armadura de los enemigos, mientras Beastmaster proporciona auras y control con su Primal Roar.", "Safelane"],
                ["Vengeful Spirit", "Wraith King", "Vengeful Spirit reduce la armadura con Wave of Terror y proporciona auras, mientras Wraith King es una amenaza constante con Reincarnation.", "Safelane"],
            ],
            3: [
                ["Vengeful Spirit", "Beastmaster", "Underlord", "Vengeful Spirit y Beastmaster proporcionan auras, y Underlord asegura el control del área con Pit of Malice y su ultimate.", "Safelane"],
                ["Dazzle", "Omniknight", "Wraith King", "Dazzle y Omniknight proporcionan curaciones y auras defensivas, mientras Wraith King actúa como un tanque duradero.", "Safelane"],
            ],
        },
        pick_up: {
            2: [
                /* ["Marci", "Crystal Maiden", "Marci y Crystal Maiden logran kills tempranos fácilmente, aprovechando el control de Marci y el daño mágico de Crystal Maiden.", "Offlane"],
                ["Shadow Shaman", "Juggernaut", "Shadow Shaman atrapa al enemigo con Shackle, permitiendo a Juggernaut infligir un gran daño con Blade Fury.", "Safelane"],
                 */["Shadow Shaman", "Ursa", "Shadow Shaman atrapa al enemigo con Shackle, permitiendo que Ursa acumule daño rápidamente.", "Safelane"],
                ["Shadow Shaman", "Lifestealer", "Shadow Shaman atrapa al enemigo con Shackle, permitiendo que Lifestealer lo golpee. Luego, Lifestealer ralentiza al enemigo con Open Wounds.", "Safelane"],
                ["Witch Doctor", "Juggernaut", "Witch Doctor aturde al enemigo y aplica Maledict, incrementando el daño cuando Juggernaut usa Blade Fury.", "Safelane"],
                ["Mirana", "Bane", "Bane duerme al enemigo y Mirana le pega con una flecha de larga distancia para kills fáciles. Mirana puede semi-carry para tener impacto suficiente.", "Offlane"],
                ["Zeus", "Bloodseeker", "Bloodseeker encuentra enemigos con poca vida y Zeus los remata con su ultimate. Abusa del daño del ulti en el early y mid game.", "No la misma línea"],
                ["Bane", "Razor", "Razor roba el daño del enemigo y Bane duerme al enemigo, manteniendo el link activo y permitiendo que Razor aumente su daño.", "Cualquier línea"],
                ["Pudge", "Techies", "Techies planta minas secretamente y Pudge atrae al enemigo para kills instantáneos.", "Cualquier línea o roaming"],
                ["Bounty Hunter", "Queen of Pain", "Bounty Hunter rastrea a los enemigos, facilitando a Queen of Pain cazarlos con su alto daño.", "Safelane"],
                ["Nyx Assassin", "Invoker", "Nyx Assassin inicia el combo con su aturdimiento, permitiendo a Invoker realizar una combinación devastadora de habilidades.", "Safelane"],
            ],
            3: [
                ["Mirana", "Shadow Demon", "Leshrac", "Shadow Demon inicia con Disruption, Mirana sigue con Sacred Arrow y Leshrac asegura el kill con su daño de área.", "Safelane"],
                ["Riki", "Lion", "Storm Spirit", "Riki se oculta y ralentiza, Lion aturde y remata con Finger of Death, mientras Storm Spirit salta para asegurar la eliminación.", "Safelane"],
            ],
        }
    };

    // Verifica que 'type' y 'size' existan en 'combos'
    if (!combos[type] || !combos[type][size]) {
        console.error('Tipo o tamaño de combo no válido');
        return [];
    }

    return combos[type][size].map(combo => {
        if (combo.length < size + 2) {
            console.error('Combo mal formateado:', combo);
            return null;
        }
        const comboHeroes = combo.slice(0, size).map(heroName => heroes.find(hero => hero.name === heroName));
        const comboExplanation = combo[size]; // La explicación es el penúltimo elemento
        const comboLine = combo[size + 1]; // La línea es el último elemento
        return { heroes: comboHeroes, explanation: comboExplanation, line: comboLine };
    }).filter(combo => combo !== null);
}

function createHeroCard(hero, comboExplanation, comboLane) {
    // Crear el contenedor del héroe
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');

    // Crear el contenedor para la información de la línea
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('line-container');
    lineContainer.innerHTML = `<p><strong>Línea:</strong> ${comboLane}</p>`;


    // Agregar el contenedor de la línea antes de la imagen del héroe
    heroDiv.appendChild(lineContainer);

    // Agregar la imagen del héroe al contenedor
    heroDiv.innerHTML += `
        <img src="${hero.img}" alt="${hero.name}" class="combo-hero-img">
        <p><strong>Rol:</strong> ${hero.rol}</p> <!-- Aquí se muestra el rol -->
    `;

    // Crear el contenedor de los detalles de sinergia
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('hero-details');
    detailsDiv.innerHTML = `
        <div class="hero-details-content">
            <h2>${hero.name}</h2>
            <p><strong>Atributo:</strong> ${hero.atributo}</p>
            <div><strong>Habilidades:</strong></div>
            <ul>
                <li>${hero.habilidades.primera.nombre} - ${hero.habilidades.primera.tipo}</li>
                <li>${hero.habilidades.segunda.nombre} - ${hero.habilidades.segunda.tipo}</li>
                <li>${hero.habilidades.pasiva.nombre} - ${hero.habilidades.pasiva.tipo}</li>
                <li>${hero.habilidades.ulti.nombre} - ${hero.habilidades.ulti.tipo}</li>
            </ul>
        </div>
    `;
    // Ocultar los detalles por defecto
    detailsDiv.style.display = 'none';

    // Evento de mouseover para mostrar los detalles al pasar el cursor sobre el héroe
    heroDiv.addEventListener('mouseover', () => {
        detailsDiv.style.display = 'block';
    });

    // Evento de mouseout para ocultar los detalles al retirar el cursor del héroe
    heroDiv.addEventListener('mouseout', () => {
        detailsDiv.style.display = 'none';
    });

    // Agregar los detalles al contenedor del héroe
    heroDiv.appendChild(detailsDiv);

    // Retornar el contenedor del héroe
    return heroDiv;
}




function displayCombos(combos) {
    const comboDisplay = document.querySelector('.combo-display');
    comboDisplay.innerHTML = ''; // Limpiar contenido previo

    combos.forEach(combo => {
        // Crear un div para cada combo
        const comboDiv = document.createElement('div');
        comboDiv.classList.add('combo'); // Agregar clase para estilo de combo

        // Crear el botón para explicar el combo
        const explainButton = document.createElement('button');
        explainButton.textContent = 'Explicar';
        comboDiv.appendChild(explainButton);

        // Crear el div para la explicación del combo
        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.innerHTML = `<p><strong>Sinergia:</strong> ${combo.explanation}</p>`;
        comboDiv.appendChild(explanationDiv);
        // Ocultar la explicación por defecto
        explanationDiv.style.display = 'none';

        // Evento de clic para mostrar u ocultar la explicación del combo
        explainButton.addEventListener('click', () => {
            if (explanationDiv.style.display === 'none') {
                explanationDiv.style.display = 'block';
            } else {
                explanationDiv.style.display = 'none';
            }
        });

        // Crear los elementos de los héroes y agregarlos al comboDiv
        combo.heroes.forEach(hero => {
            const heroCard = createHeroCard(hero, combo.explanation, combo.lane); // Pasar la explicación del combo y la línea
            comboDiv.appendChild(heroCard);
        });
        

        // Agregar el comboDiv al comboDisplay
        comboDisplay.appendChild(comboDiv);
    });
}






// Llamar a updateCombos para mostrar combos por defecto al cargar la página
updateCombos();