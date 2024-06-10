document.getElementById('generate-combo').addEventListener('click', function() {
    const comboSize = parseInt(document.getElementById('combo-size').value);
    const combo = generateCombo(comboSize);
    displayCombo(combo);
});

function generateCombo(size) {
    // Definir combinaciones con sinergia
    const combos = {
        2: [
            ["Axe", "Skywrath Mage", "Axe usa Berserker's Call para agrupar a los enemigos, permitiendo a Skywrath Mage infligir un gran daño con Mystic Flare."],
            ["Faceless Void", "Witch Doctor", "Faceless Void atrapa a los enemigos en su Chronosphere, mientras Witch Doctor coloca su Death Ward para causar daño continuo."],
            ["Magnus", "Phantom Assassin", "Magnus agrupa y aturde a los enemigos con Reverse Polarity, permitiendo que Phantom Assassin los ataque con golpes críticos."],
            ["Shadow Demon", "Luna", "Shadow Demon usa Disruption para crear copias de Luna, las cuales pueden infligir gran daño gracias a Glaives."],
            ["Slardar", "Lifestealer", "Slardar aplica Amplify Damage, permitiendo a Lifestealer infligir daño masivo con su Feast y ataques físicos."],
            ["Enigma", "Lion", "Enigma usa Black Hole para atrapar a los enemigos, mientras Lion lanza su Finger of Death para eliminar a los enemigos atrapados."],
            ["Crystal Maiden", "Juggernaut", "Crystal Maiden congela a los enemigos con Frostbite, permitiendo a Juggernaut usar Omnislash sin interrupciones."],
            ["Tidehunter", "Gyrocopter", "Tidehunter aturde a los enemigos con Ravage, mientras Gyrocopter usa Call Down para infligir daño masivo en el área."],
            ["Sven", "Dark Willow", "Sven aturde a los enemigos con Storm Hammer, permitiendo a Dark Willow usar Bedlam para infligir daño masivo."]
            ["Pudge", "Dazzle", "Pudge usa Meat Hook para atraer a los enemigos, permitiendo a Dazzle usar Poison Touch y Shadow Wave para infligir daño y curar."],
            ["Legion Commander", "Skywrath Mage", "Legion Commander usa Duel para inmovilizar a un enemigo, permitiendo a Skywrath Mage infligir daño masivo con Mystic Flare."],
            ["Bane", "Mirana", "Bane usa Nightmare para inmovilizar a un enemigo, permitiendo a Mirana acertar fácilmente su Sacred Arrow."],
            ["Venomancer", "Warlock", "Venomancer aplica daño de veneno continuo, mientras Warlock lanza su Chaotic Offering para aturdir y aumentar el daño."],
            ["Clockwerk", "Skywrath Mage", "Clockwerk atrapa a los enemigos con Power Cogs, permitiendo a Skywrath Mage lanzar Mystic Flare dentro del área atrapada."],
            ["Earthshaker", "Lina", "Earthshaker utiliza Fissure para aturdir a los enemigos, permitiendo a Lina infligir daño con su habilidad Lighstrike Array."],
            ["Sand King", "Leshrac", "Sand King inicia con Burrowstrike, mientras Leshrac sigue con Split Earth para aturdir a los enemigos y causar daño masivo."],
            ["Mirana", "Shadow Demon", "Mirana dispara su Sacred Arrow, mientras Shadow Demon usa Disruption para crear ilusiones que pueden infligir daño adicional."],
            ["Bloodseeker", "Ogre Magi", "Bloodseeker usa Rupture para forzar al enemigo a moverse, mientras Ogre Magi aumenta el daño con Bloodlust."],
            ["Windranger", "Jakiro", "Windranger aturde a los enemigos con Shackleshot, permitiendo que Jakiro use Ice Path para mantenerlos en su lugar."]
        ],
        3: [
            ["Enigma", "Sven", "Warlock", "Enigma usa Black Hole para atrapar a los enemigos, Warlock lanza Chaotic Offering para aturdirlos y Sven inflige daño masivo con God's Strength."],
            ["Tidehunter", "Disruptor", "Kunkka", "Tidehunter aturde a los enemigos con Ravage, Disruptor silencia con Static Storm y Kunkka remata con Ghostship."],
            ["Earthshaker", "Sand King", "Dark Willow", "Earthshaker usa Echo Slam, Sand King añade más daño con Epicenter y Dark Willow dispersa a los enemigos con Terrorize."],
            ["Faceless Void", "Drow Ranger", "Snapfire", "Faceless Void usa Chronosphere, Drow Ranger inflige daño desde fuera y Snapfire usa Mortimer Kisses dentro del área."],
            ["Phoenix", "Mars", "Void Spirit", "Mars usa Arena of Blood, Phoenix usa Supernova y Void Spirit controla el campo con su Astral Step."],
            ["Elder Titan", "Medusa", "Dark Seer", "Dark Seer agrupa con Vacuum, Elder Titan añade Earth Splitter y Medusa usa Stone Gaze para finalizar."],
            ["Batrider", "Grimstroke", "Queen of Pain", "Batrider usa Flaming Lasso, Grimstroke enlaza a los enemigos con Soulbind y Queen of Pain elimina con Sonic Wave."],
            ["Centaur Warrunner", "Jakiro", "Riki", "Centaur aturde con Hoof Stomp, Jakiro usa Macropyre y Riki elimina con Tricks of the Trade."],
            ["Bane", "Mirana", "Shadow Fiend", "Bane aturde con Fiend's Grip, Mirana añade daño con Sacred Arrow y Shadow Fiend usa Requiem of Souls para finalizar."],
            ["Lina", "Shadow Shaman", "Terrorblade", "Lina y Shadow Shaman utilizan sus habilidades de control para inmovilizar a los enemigos, permitiendo a Terrorblade infligir gran daño con Metamorphosis."],
            ["Vengeful Spirit", "Drow Ranger", "Sniper", "Vengeful Spirit reduce la armadura enemiga con Wave of Terror, permitiendo a Drow Ranger y Sniper infligir gran daño a larga distancia."],
            ["Beastmaster", "Grimstroke", "Doom", "Beastmaster usa Primal Roar para iniciar, Grimstroke enlaza a los enemigos con Soulbind y Doom aplica su habilidad definitiva para silenciar a dos héroes enemigos."],
            ["Lich", "Winter Wyvern", "Crystal Maiden", "Lich usa Chain Frost para dañar y ralentizar a los enemigos, mientras Winter Wyvern usa Winter's Curse para mantenerlos en su lugar y Crystal Maiden aprovecha con Freezing Field."],
            ["Bounty Hunter", "Nyx Assassin", "Riki", "Bounty Hunter rastrea a los enemigos, Nyx Assassin los inicia con Vendetta y Riki ataca desde la invisibilidad con Backstab."],
            ["Dazzle", "Oracle", "Shadow Demon", "Dazzle proporciona protección con Shallow Grave, Oracle usa False Promise para prolongar la supervivencia y Shadow Demon interfiere con Disruption."],
            ["Underlord", "Earth Spirit", "Elder Titan", "Underlord atrapa a los enemigos con Pit of Malice, mientras Earth Spirit lanza Rolling Boulder para iniciar y Elder Titan usa Earth Splitter para infligir daño masivo."],
            ["Treant Protector", "Venomancer", "Zeus", "Treant Protector proporciona invisibilidad con Nature's Guise, Venomancer atrapa a los enemigos con Poison Nova y Zeus finaliza con Thundergod's Wrath."],
            ["Tusk", "Crystal Maiden", "Lich", "Tusk usa Snowball para iniciar, llevando a Crystal Maiden y Lich, quienes lanzan Freezing Field y Chain Frost para un combo devastador."],
        ]
    };

    // Seleccionar un combo aleatorio del tamaño seleccionado
    const selectedCombos = combos[size];
    const randomIndex = Math.floor(Math.random() * selectedCombos.length);
    const selectedCombo = selectedCombos[randomIndex];

    // Obtener los detalles de los héroes seleccionados
    const comboHeroes = selectedCombo.slice(0, size).map(heroName => heroes.find(hero => hero.name === heroName));
    const comboExplanation = selectedCombo[size]; // La explicación es el último elemento

    return { heroes: comboHeroes, explanation: comboExplanation };
}

function displayCombo(combo) {
    const comboDisplay = document.querySelector('.combo-display');
    comboDisplay.innerHTML = ''; // Limpiar contenido previo

    const explanationDiv = document.createElement('div');
    explanationDiv.classList.add('explanation');
    explanationDiv.innerHTML = `<p><strong>Sinergia:</strong> ${combo.explanation}</p>`;
    comboDisplay.appendChild(explanationDiv);

    combo.heroes.forEach(hero => {
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');
        heroDiv.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.img}" alt="${hero.name}">
        `;
        heroDiv.addEventListener('click', () => showHeroDetails(hero));
        comboDisplay.appendChild(heroDiv);
    });
}
function createHeroCard(hero) {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');
    heroDiv.innerHTML = `
        <img src="${hero.img}" alt="${hero.name}" class="combo-hero-img">
    `;

    // Crear el contenedor de los detalles
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('hero-details');
    detailsDiv.innerHTML = `
        <div class="hero-details-content">
            <h2>${hero.name}</h2>
            <p><strong>Rol:</strong> ${hero.rol}</p>
            <p><strong>Complejidad:</strong> ${hero.complejidad}</p>
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

    heroDiv.appendChild(detailsDiv);
    return heroDiv;
}

function displayCombo(combo) {
    const comboDisplay = document.querySelector('.combo-display');
    comboDisplay.innerHTML = ''; // Limpiar contenido previo

    const explanationDiv = document.createElement('div');
    explanationDiv.classList.add('explanation');
    explanationDiv.innerHTML = `<p><strong>Sinergia:</strong> ${combo.explanation}</p>`;
    comboDisplay.appendChild(explanationDiv);

    combo.heroes.forEach(hero => {
        const heroCard = createHeroCard(hero);
        comboDisplay.appendChild(heroCard);
    });
}

