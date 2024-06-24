document.addEventListener('DOMContentLoaded', () => {
    // Limpiar los valores de los select al cargar la página
    document.getElementById('combo-size').selectedIndex = -1;
    document.getElementById('combo-type').selectedIndex = -1;
    document.getElementById('combo-line').selectedIndex = -1;
});

document.getElementById('combo-size').addEventListener('change', updateCombos);
document.getElementById('combo-type').addEventListener('change', updateCombos);
document.getElementById('combo-line').addEventListener('change', updateCombos);

function updateCombos() {
    const comboSize = document.getElementById('combo-size').value;
    const comboType = document.getElementById('combo-type').value;
    const comboLine = document.getElementById('combo-line').value;

    // Verifica si se ha seleccionado algún parámetro
    if (!comboSize || !comboType || !comboLine) {
        clearCombos();
        return;
    }

    const combos = generateCombos(parseInt(comboSize), comboType, comboLine);
    displayCombos(combos);
}

function clearCombos() {
    const comboDisplay = document.querySelector('.combo-display');
    comboDisplay.innerHTML = '';
}

function generateCombos(size, type, line) {
    const combos = {
        team_fight: {
            2: [
                ["Crystal Maiden", "Juggernaut", "Un combo clásico: Crystal Maiden asegura la sostenibilidad con su aura de maná, y Juggernaut ofrece tanto defensa como ofensiva con Blade Fury y Healing Ward. Nova y Freeze junto a Blade Fury son mortales.", "Safelane"],
                ["Terrorblade", "Dazzle", "Cuando TB tiene poca vida, Dazzle lo salva con Grave, dándole tiempo para hacer Sunder. Buen balance entre un carry duro y un support duro.", "Safelane"],
                ["Tiny", "Io", "Io enlaza a Tiny para aumentar su velocidad de movimiento, velocidad de ataque y regeneración. Usan teleport para kills instantáneos.", "Safelane o Offlane"],
                ["Void Spirit", "Ancient Apparition", "Cuando Void usa su ulti, Ancient Apparition añade su ultimate. Con buena comunicación, pueden hacer wipes de equipo con solo dos jugadores.", "Mid o Safelane"],
                ["Viper", "Venomancer", "Máximo daño por veneno y ralentización. Los enemigos tendrán dificultades para moverse. Ambos atacan y usan hechizos para hacer que el enemigo casi no pueda moverse.", "Safelane o Offlane"],
                ["Axe", "Skywrath Mage", "Axe usa Berserker's Call para agrupar a los enemigos, permitiendo a Skywrath Mage infligir un gran daño con Mystic Flare.", "Offlane"],
                ["Faceless Void", "Invoker", "Faceless Void atrapa a los enemigos en su Chronosphere, mientras Invoker utiliza Cataclysm.", "Safelane, Safelane y Mid"],
                ["Enigma", "Lich", "Enigma atrapa a los enemigos con Black Hole, y Lich lanza Chain Frost para causar daño masivo a los enemigos atrapados.", "Safelane o Offlane"],
                ["Axe", "Dark Seer", "Axe agrupa a los enemigos con Berserker's Call mientras Dark Seer usa Vacuum para mantenerlos juntos, seguido de Wall of Replica para máximo daño.", "Offlane"],
                ["Lina", "Lion", "Lina y Lion tienen múltiples habilidades de aturdimiento y alta capacidad de daño, lo que les permite eliminar rápidamente a los enemigos.", "Safelane o Mid"],
                ["Terrorblade", "Necrophos", "Necrophos mantiene a Terrorblade vivo con su curación, mientras que Terrorblade causa un gran daño con sus ilusiones.", "Safelane"],
                ["Zeus", "Spectre", "Zeus usa su ultimate para bajar la vida de los enemigos, permitiendo a Spectre saltar sobre ellos con Haunt y terminar el trabajo.", "Safelane"],
                ["Gyrocopter", "Dark Seer", "Dark Seer agrupa a los enemigos con Vacuum, permitiendo que Gyrocopter use Call Down y Flak Cannon para infligir daño masivo.", "Safelane"],
                ["Chen", "Witch Doctor", "Chen proporciona curación y control con sus creeps, mientras que Witch Doctor usa Maledict y Death Ward para causar daño sostenido.", "Safelane"],
                ["Lycan", "Beastmaster", "Beastmaster proporciona control con su Primal Roar y auras, mientras que Lycan usa su ultimate para maximizar el daño físico.", "Offlane"],
                ["Earthshaker", "Dark Seer", "Dark Seer agrupa a los enemigos con Vacuum, permitiendo a Earthshaker usar Echo Slam para infligir un gran daño en área.", "Offlane"],
                ["Earthshaker", "Enigma", "Enigma atrapa a los enemigos con Black Hole, permitiendo a Earthshaker usar Echo Slam para infligir un gran daño en área.", "Offlane"],
                ["Earthshaker", "Magnus", "Magnus agrupa a los enemigos con Reverse Polarity, permitiendo a Earthshaker usar Echo Slam para infligir un gran daño en área.", "Offlane"],
                ["Earthshaker", "Sven", "Earthshaker aturde y agrupa a los enemigos, permitiendo a Sven usar God's Strength y Cleave para infligir un gran daño en área.", "Offlane"],
                ["Earthshaker", "Tidehunter", "Tidehunter aturde a los enemigos con Ravage, permitiendo a Earthshaker usar Echo Slam para infligir un gran daño en área.", "Offlane"],
                ["Axe", "Lifestealer", "Axe inicia con Berserker's Call, permitiendo a Lifestealer infligir gran daño con Rage y Feast.", "Offlane"],
                ["Phoenix", "Enigma", "Enigma atrapa a los enemigos con Black Hole, permitiendo a Phoenix usar Supernova para infligir un gran daño en área.", "Offlane"],
                ["Phoenix", "Tidehunter", "Tidehunter aturde a los enemigos con Ravage, permitiendo a Phoenix usar Supernova para infligir un gran daño en área.", "Offlane"],
            ],
            3: [
                ["Enigma", "Sven", "Warlock", "Enigma usa Black Hole para atrapar a los enemigos, Warlock lanza Chaotic Offering para aturdirlos y Sven inflige daño masivo con God's Strength.", "Offlane/Safelane"],
                ["Tidehunter", "Disruptor", "Kunkka", "Tidehunter aturde a los enemigos con Ravage, Disruptor silencia con Static Storm y Kunkka remata con Ghostship.", "Offlane/Safelane"],
                ["Zeus", "Spectre", "Bloodseeker", "Zeus baja la vida de los enemigos, Bloodseeker los rastrea con Thirst y Spectre los remata con Haunt.", "Cualquier línea"],
                ["Zeus", "Spectre", "Nature Prophet", "Zeus baja la vida de los enemigos, Spectre los remata con Haunt, y Nature Prophet aporta daño adicional y control global.", "Cualquier línea"],
                ["Invoker", "Dark Seer", "Tidehunter", "Dark Seer agrupa a los enemigos con Vacuum, Tidehunter los aturde con Ravage, e Invoker usa sus habilidades para causar gran daño.", "Offlane/Safelane"],
                ["Invoker", "Tidehunter", "Magnus", "Tidehunter y Magnus agrupan y aturden a los enemigos, permitiendo a Invoker usar sus habilidades para causar gran daño.", "Offlane/Safelane"],
                ["Invoker", "Magnus", "Enigma", "Magnus agrupa a los enemigos con Reverse Polarity, Enigma los atrapa con Black Hole, e Invoker usa sus habilidades para causar gran daño.", "Offlane/Safelane"],
                ["Phoenix", "Enigma", "Tidehunter", "Enigma atrapa a los enemigos con Black Hole, Tidehunter los aturde con Ravage, y Phoenix usa Supernova para infligir gran daño en área.", "Offlane/Safelane"],
                ["Phoenix", "Enigma", "Invoker", "Enigma atrapa a los enemigos con Black Hole, e Invoker y Phoenix usan sus habilidades de área para infligir gran daño.", "Offlane/Safelane"],
                ["Phoenix", "Tidehunter", "Invoker", "Tidehunter aturde a los enemigos con Ravage, e Invoker y Phoenix usan sus habilidades de área para infligir gran daño.", "Offlane/Safelane"],
                ["Phoenix", "Invoker", "Magnus", "Magnus agrupa a los enemigos con Reverse Polarity, e Invoker y Phoenix usan sus habilidades de área para infligir gran daño.", "Offlane/Safelane"],
            ],
        },
        aura: {
            2: [
                ["Undying", "Weaver", "Undying y Weaver causan problemas constantes; Tombstone y Swarm junto con Decay hacen que los enemigos lo pasen mal. Weaver puede farmear y escapar fácilmente.", "Offlane"],
                ["Undying", "Slark", "Undying y Slark roban todas las estadísticas del enemigo. Con Decay de Undying y los ataques de Slark, el enemigo pierde mucha fuerza y se convierte en un objetivo fácil.", "Offlane o Split"],
                ["Dazzle", "Beastmaster", "Dazzle usa Weave para reducir la armadura de los enemigos, mientras Beastmaster proporciona auras y control con su Primal Roar.", "Safelane"],
                ["Vengeful Spirit", "Wraith King", "Vengeful Spirit reduce la armadura con Wave of Terror y proporciona auras, mientras Wraith King es una amenaza constante con Reincarnation.", "Safelane"],
                ["Drow Ranger", "Vengeful Spirit", "Vengeful Spirit reduce la armadura del enemigo, mientras Drow Ranger inflige un gran daño con sus ataques a distancia.", "Safelane"],
                ["Phoenix", "Magnus", "Magnus agrupa a los enemigos con Reverse Polarity, permitiendo a Phoenix usar Supernova para infligir gran daño en área.", "Offlane"],
            ],
            3: [
                ["Vengeful Spirit", "Beastmaster", "Underlord", "Vengeful Spirit y Beastmaster proporcionan auras, y Underlord asegura el control del área con Pit of Malice y su ultimate.", "Safelane"],
                ["Dazzle", "Omniknight", "Wraith King", "Dazzle y Omniknight proporcionan curaciones y auras defensivas, mientras Wraith King actúa como un tanque duradero.", "Safelane"],
            ],
        },
        pick_up: {
            2: [
                ["Shadow Shaman", "Juggernaut", "Shadow Shaman atrapa al enemigo con Shackle, permitiendo a Juggernaut infligir un gran daño con Blade Fury.", "Safelane"],
                ["Shadow Shaman", "Ursa", "Shadow Shaman atrapa al enemigo con Shackle, permitiendo que Ursa acumule daño rápidamente.", "Safelane"],
                ["Spirit Breaker", "Lifestealer", "Este es uno de los combos de héroes de Dota más conocidos. Es bastante obvio cuál es la combinación: Lifestealer infesta, Spirit Breaker, Charge of Darkness a un enemigo, Lifestealer Rages. En niveles posteriores, puedes emboscar a varios objetivos. Ambos héroes se llevan bien y, como resultado, comenzarás a crecer como una bola de nieve fuera de control.", "Safelane, Roamer"],
                ["Witch Doctor", "Juggernaut", "Witch Doctor aturde al enemigo y aplica Maledict, incrementando el daño cuando Juggernaut usa Blade Fury.", "Safelane"],
                ["Mirana", "Bane", "Bane duerme al enemigo y Mirana le pega con una flecha de larga distancia para kills fáciles. Mirana puede semi-carry para tener impacto suficiente.", "Offlane"],
                ["Zeus", "Bloodseeker", "Bloodseeker encuentra enemigos con poca vida y Zeus los remata con su ultimate. Abusa del daño del ulti en el early y mid game.", "No la misma línea"],
                ["Bane", "Razor", "Razor roba el daño del enemigo y Bane duerme al enemigo, manteniendo el link activo y permitiendo que Razor aumente su daño.", "Cualquier línea"],
                ["Pudge", "Techies", "Techies planta minas secretamente y Pudge atrae al enemigo para kills instantáneos.", "Cualquier línea o roaming"],
                ["Bounty Hunter", "Queen of Pain", "Bounty Hunter rastrea a los enemigos, facilitando a Queen of Pain cazarlos con su alto daño.", "Safelane"],
                ["Nyx Assassin", "Invoker", "Nyx Assassin inicia el combo con su aturdimiento, permitiendo a Invoker realizar una combinación devastadora de habilidades.", "Safelane"],
                ["Marci", "Crystal Maiden", "Marci y Crystal Maiden logran kills tempranos fácilmente, aprovechando el control de Marci y el daño mágico de Crystal Maiden.", "Offlane"],
                ["Legion Commander", "Grimstroke", "Legion Commander usa Duel para fijar a un enemigo, mientras Grimstroke usa Phantom's Embrace y Soulbind para infligir daño adicional y silenciar.", "Offlane"],
                ["Grimstroke", "Tinker", "Grimstroke usa Soulbind para conectar a dos enemigos, permitiendo que Tinker los ataque simultáneamente con sus habilidades.", "Cualquier línea"],
                ["Grimstroke", "Necrophos", "Grimstroke usa Soulbind para conectar a dos enemigos, permitiendo que Necrophos use Reaper's Scythe para un doble kill potencial.", "Cualquier línea"],
                ["Grimstroke", "Phantom Assassin", "Grimstroke usa Phantom's Embrace y Soulbind para silenciar y conectar a dos enemigos, permitiendo que Phantom Assassin los elimine rápidamente con su alto daño crítico.", "Cualquier línea"],
            ],
            3: [
                ["Mirana", "Shadow Demon", "Leshrac", "Shadow Demon inicia con Disruption, Mirana sigue con Sacred Arrow y Leshrac asegura el kill con su daño de área.", "Safelane"],
                ["Riki", "Lion", "Storm Spirit", "Riki se oculta y ralentiza, Lion aturde y remata con Finger of Death, mientras Storm Spirit salta para asegurar la eliminación.", "Safelane"],
                ["Spirit Breaker", "Lifestealer", "Riki", "Spirit Breaker inicia con Charge of Darkness, Lifestealer salta con Infest y Rage, mientras Riki asegura el kill con su invisibilidad y daño.", "Cualquier línea"],
            ],
        }
    };

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
        if (comboHeroes.includes(undefined)) {
            console.error('Héroe no encontrado en el combo:', combo);
            return null;
        }
        const comboExplanation = combo[size]; // La explicación es el penúltimo elemento
        const comboLine = combo[size + 1]; // La línea es el último elemento
        return { heroes: comboHeroes, explanation: comboExplanation, line: comboLine };
    }).filter(combo => combo !== null && combo.line.includes(line));
}

function createHeroCard(hero, comboExplanation, comboLane) {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');

    const lineContainer = document.createElement('div');
    lineContainer.classList.add('line-container');
    lineContainer.innerHTML = `<p><strong>Línea:</strong> ${comboLane}</p>`;

    heroDiv.innerHTML = `
        <img src="${hero.img}" alt="${hero.name}" class="combo-hero-img">
        <p><strong>Rol:</strong> ${hero.rol}</p>
    `;

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
    detailsDiv.style.display = 'none';

    heroDiv.addEventListener('mouseover', () => {
        detailsDiv.style.display = 'block';
    });

    heroDiv.addEventListener('mouseout', () => {
        detailsDiv.style.display = 'none';
    });

    heroDiv.appendChild(detailsDiv);
    heroDiv.appendChild(lineContainer);

    return heroDiv;
}



function displayCombos(combos) {
    const comboDisplay = document.querySelector('.combo-display');
    comboDisplay.innerHTML = ''; // Limpiar el contenido anterior

    if (combos.length === 0) {
        return; // No mostrar nada si no hay combos
    }

    combos.forEach(combo => {
        // Crear un div para cada combo
        const comboDiv = document.createElement('div');
        comboDiv.classList.add('combo');

        // Crear el contenedor para la información de la línea (en la parte superior del combo)
        const lineContainer = document.createElement('div');
        lineContainer.classList.add('line-container');
        lineContainer.innerHTML = `<p><strong>Línea:</strong> ${combo.line}</p>`;
        comboDiv.appendChild(lineContainer);

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
            const heroCard = createHeroCard(hero, combo.explanation, combo.line);
            comboDiv.appendChild(heroCard);
        });

        // Agregar el comboDiv al comboDisplay
        comboDisplay.appendChild(comboDiv);
    });
}

// No llamar a updateCombos al cargar la página para no mostrar combos por defecto
