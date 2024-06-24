 const heroes = [
    {  name: "Alchemist",
        img: "/img/heroes/alchemist.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "fuerza",
        Counters: [
            { name: "Ancient Apparition", CounterDesc: "Su habilidad ultimate nega la regeneración de Alchemist, crucial para su supervivencia.", CounterScore: "90%" },
            { name: "Anti-Mage", CounterDesc: "Es efectivo rompiendo el maná de Alchemist y causando problemas en las peleas prolongadas.", CounterScore: "85%" },
            { name: "Tinker", CounterDesc: "Puede controlar y retrasar a Alchemist con sus habilidades de control y daño mágico.", CounterScore: "80%" },
            { name: "Invoker", CounterDesc: "Puede desactivar y controlar a Alchemist durante las peleas, además de proporcionar daño mágico.", CounterScore: "85%" },
            { name: "Ursa", CounterDesc: "Puede dañar rápidamente a Alchemist antes de que acumule suficiente tanqueidad.", CounterScore: "80%" },
            { name: "Lifestealer", CounterDesc: "Puede enfrentarse a Alchemist cara a cara y aprovechar su vida y resistencia.", CounterScore: "85%" },
            { name: "Venomancer", CounterDesc: "Su daño por tiempo y habilidades de área pueden debilitar rápidamente a Alchemist.", CounterScore: "75%" },
            { name: "Slark", CounterDesc: "Puede robar atributos y controlar a Alchemist con su habilidad para escapar y reentrar.", CounterScore: "80%" },
            { name: "Riki", CounterDesc: "Puede atrapar y silenciar a Alchemist, dificultando su escape y regeneración.", CounterScore: "75%" }
        ],
        Sinergia: [
            { name: "Io", SinergDesc: "Puede mantener a Alchemist vivo durante las peleas prolongadas y mejorar su movilidad.", SinergScore: "90%" },
            { name: "Grimstroke", SinergDesc: "Puede duplicar sus habilidades de control y daño, aumentando su impacto en las peleas.", SinergScore: "85%" },
            { name: "Invoker", SinergDesc: "Proporciona control adicional y daño, especialmente con Sun Strike para remates.", SinergScore: "85%" },
            { name: "Crystal Maiden", SinergDesc: "Puede proporcionar regeneración de maná y control adicional durante las peleas.", SinergScore: "80%" },
            { name: "Ogre Magi", SinergDesc: "Proporciona buffs adicionales y control para Alchemist, aumentando su efectividad.", SinergScore: "85%" },
            { name: "Tidehunter", SinergDesc: "Proporciona iniciación y control de área para proteger a Alchemist en peleas grupales.", SinergScore: "80%" },
            { name: "Dark Seer", SinergDesc: "Puede aumentar la movilidad y el daño de Alchemist con sus habilidades de área.", SinergScore: "75%" },
            { name: "Phantom Assassin", SinergDesc: "Puede distraer y dañar a los enemigos mientras Alchemist se concentra en objetivos prioritarios.", SinergScore: "80%" },
            { name: "Legion Commander", SinergDesc: "Puede proporcionar protección y daño adicional, especialmente con Duel para eliminar amenazas rápidamente.", SinergScore: "85%" }
        ],
        habilidades: {
            primera: { nombre: "Acid Spray", tipo: "Daño físico/Area" },
            segunda: { nombre: "Unstable Concoction", tipo: "Stun" },
            pasiva: { nombre: "Greevil's Greed", tipo: "Buff" },
            ulti: { nombre: "Chemical Rage", tipo: "Buff" }
        },
        objetivo: "Acumular oro rápidamente con Greevil's Greed y objetos de soporte temprano. Participar en peleas grupales con Chemical Rage para aprovechar su tanqueidad y control con Unstable Concoction."
    },
    {
        name: "Axe",
    img: "img/heroes/axe.png",
    rol: "Iniciador, Tanque",
    complejidad: 2,
    atributo: "fuerza",
    spawn: "audio/spawn/Vo_axe_axe_spawn_01.mp3",
    Counters: [
        { name: "Lifestealer", CounterDesc: "Puede dañar a Axe rápidamente antes de que pueda acumular daño de Counter Helix.", CounterScore: "85%" },
        { name: "Ursa", CounterDesc: "Puede enfrentarse a Axe con su daño rápido y mitigación de daño.", CounterScore: "80%" },
        { name: "Terrorblade", CounterDesc: "Puede dañar a Axe con ilusiones y mantenerlo bajo presión constante.", CounterScore: "75%" },
        { name: "Slark", CounterDesc: "Puede robar atributos y escapar fácilmente de las peleas con Axe.", CounterScore: "80%" },
        { name: "Juggernaut", CounterDesc: "Puede enfrentarse a Axe con su habilidad de curación y daño físico constante.", CounterScore: "75%" },
        { name: "Timbersaw", CounterDesc: "Puede dañar a Axe con daño mágico y escapar de su control.", CounterScore: "80%" },
        { name: "Enigma", CounterDesc: "Puede desactivar a Axe con Black Hole y controlar peleas clave.", CounterScore: "85%" },
        { name: "Doom", CounterDesc: "Puede desactivar las habilidades de Axe y reducir su impacto en las peleas.", CounterScore: "85%" },
        { name: "Faceless Void", CounterDesc: "Puede atrapar a Axe en Chronosphere y eliminarlo antes de que pueda hacer daño significativo.", CounterScore: "90%" }
    ],
    Sinergia: [
        { name: "Dazzle", SinergDesc: "Puede proporcionar curación y salvación para Axe durante las peleas prolongadas.", SinergScore: "80%" },
        { name: "Shadow Demon", SinergDesc: "Puede controlar a los enemigos y proteger a Axe con disruption.", SinergScore: "85%" },
        { name: "Winter Wyvern", SinergDesc: "Puede proteger a Axe con Cold Embrace y controlar a los enemigos con Winter's Curse.", SinergScore: "85%" },
        { name: "Witch Doctor", SinergDesc: "Puede proporcionar curación y control adicional para Axe durante las peleas grupales.", SinergScore: "80%" },
        { name: "Disruptor", SinergDesc: "Puede atrapar a los enemigos y proteger a Axe con Glimpse y Static Storm.", SinergScore: "85%" },
        { name: "Legion Commander", SinergDesc: "Puede proporcionar daño adicional y protección con Press the Attack y Duel.", SinergScore: "85%" },
        { name: "Earthshaker", SinergDesc: "Puede proporcionar control de área y proteger a Axe con Fissure y Echo Slam.", SinergScore: "80%" },
        { name: "Magnus", SinergDesc: "Puede aumentar el daño y la iniciación de Axe con Empower y Reverse Polarity.", SinergScore: "85%" },
        { name: "Invoker", SinergDesc: "Puede proporcionar control adicional y daño con habilidades como Tornado y Meteor.", SinergScore: "85%" }
    ],
    habilidades: {
        primera: { nombre: "Berserker's Call", tipo: "Control/Area" },
        segunda: { nombre: "Battle Hunger", tipo: "Daño magico" },
        pasiva: { nombre: "Counter Helix", tipo: "Daño Puro/Area" },
        ulti: { nombre: "Culling Blade", tipo: "Ejecución" }
    },
    objetivo: "Iniciar peleas con Berserker's Call para controlar a los enemigos. Construir tanqueidad con Counter Helix y participar en peleas grupales para asegurar eliminaciones con Culling Blade."
},
    {
        name: "Bristleback",
        img: "img/heroes/bristleback.png",
        rol: "Tanque",
        complejidad: 2,
        atributo: "fuerza",
        Counters: [
            { name: "Necrophos", CounterDesc: "Puede reducir la efectividad de Bristleback con su habilidad ultimate Reaper's Scythe.", CounterScore: "85%" },
            { name: "Viper", CounterDesc: "Puede reducir la efectividad de Bristleback con Nethertoxin, disminuyendo su regeneración de vida.", CounterScore: "80%" },
            { name: "Shadow Demon", CounterDesc: "Puede controlar y desactivar a Bristleback con habilidades como Disruption y Demonic Purge.", CounterScore: "85%" },
            { name: "Legion Commander", CounterDesc: "Puede desactivar las habilidades de Bristleback y hacer daño significativo con Duel.", CounterScore: "85%" },
            { name: "Doom", CounterDesc: "Puede desactivar las habilidades de Bristleback y limitar su impacto en las peleas.", CounterScore: "80%" },
            { name: "Ancient Apparition", CounterDesc: "Su habilidad ultimate Ice Blast puede negar la regeneración de Bristleback y hacer daño significativo.", CounterScore: "75%" },
            { name: "Venomancer", CounterDesc: "Puede hacer daño por tiempo a Bristleback y reducir su efectividad en peleas prolongadas.", CounterScore: "80%" },
            { name: "Bloodseeker", CounterDesc: "Puede detectar y hacer daño adicional a Bristleback con Rupture y Bloodrage.", CounterScore: "75%" },
            { name: "Timbersaw", CounterDesc: "Puede hacer daño mágico a Bristleback y escapar de su control con habilidades como Timber Chain.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Io", SinergDesc: "Puede mantener a Bristleback vivo con curación constante y mejora de movilidad.", SinergScore: "85%" },
            { name: "Crystal Maiden", SinergDesc: "Puede proporcionar regeneración de maná para Bristleback y control adicional en peleas.", SinergScore: "80%" },
            { name: "Omniknight", SinergDesc: "Puede proteger a Bristleback con Heavenly Grace y Purification durante las peleas.", SinergScore: "85%" },
            { name: "Warlock", SinergDesc: "Puede proteger a Bristleback con Shadow Word y utilizar Chaotic Offering para iniciar peleas.", SinergScore: "80%" },
            { name: "Treant Protector", SinergDesc: "Puede proporcionar armadura adicional con Living Armor y controlar enemigos con Overgrowth.", SinergScore: "85%" },
            { name: "Dazzle", SinergDesc: "Puede proporcionar salvación con Shallow Grave y reducir el daño recibido por Bristleback.", SinergScore: "80%" },
            { name: "Witch Doctor", SinergDesc: "Puede curar a Bristleback con Voodoo Restoration y proporcionar control adicional con Paralyzing Cask.", SinergScore: "85%" },
            { name: "Tusk", SinergDesc: "Puede proteger a Bristleback con Snowball y aumentar su supervivencia con Ice Shards.", SinergScore: "80%" },
            { name: "Oracle", SinergDesc: "Puede salvar a Bristleback con False Promise y proporcionar control adicional con Fortune's End.", SinergScore: "85%" }
        ],
        habilidades: {
            primera: { nombre: "Viscous Nasal Goo", tipo: "Debuff" },
            segunda: { nombre: "Quill Spray", tipo: "Daño físico/Area" },
            pasiva: { nombre: "Bristleback", tipo: "Reducción de daño" },
            ulti: { nombre: "Warpath", tipo: "Buff" }
        },
        objetivo: "Iniciar peleas y absorber daño con Bristleback mientras aplica Quill Spray y Viscous Nasal Goo. Mantenerse en el frente y permitir que aliados con sinergia proporcionen apoyo y protección."
    },
    {
        name: "Centaur Warrunner",
        img: "img/heroes/centaur.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        Counters: [
            { name: "Outworld Destroyer", CounterDesc: "Puede desactivar a Centaur Warrunner con Astral Imprisonment y evitar que inicie peleas.", CounterScore: "85%" },
            { name: "Necrophos", CounterDesc: "Puede reducir la efectividad de Centaur Warrunner con Reaper's Scythe, especialmente en peleas prolongadas.", CounterScore: "80%" },
            { name: "Timbersaw", CounterDesc: "Puede hacer daño mágico a Centaur Warrunner y escapar de su control con habilidades como Timber Chain.", CounterScore: "85%" },
            { name: "Doom", CounterDesc: "Puede desactivar las habilidades de Centaur Warrunner con Doom y limitar su impacto en las peleas.", CounterScore: "85%" },
            { name: "Lifestealer", CounterDesc: "Puede dañar a Centaur Warrunner rápidamente antes de que pueda acumular tanqueidad con Return.", CounterScore: "80%" },
            { name: "Invoker", CounterDesc: "Puede controlar a Centaur Warrunner y proporcionar daño adicional con habilidades como Tornado y Meteor.", CounterScore: "85%" },
            { name: "Venomancer", CounterDesc: "Puede dañar a Centaur Warrunner con habilidades de daño por tiempo y reducir su movilidad con Poison Nova.", CounterScore: "80%" },
            { name: "Ursa", CounterDesc: "Puede enfrentarse a Centaur Warrunner con su daño rápido y mitigación de daño.", CounterScore: "85%" },
            { name: "Enigma", CounterDesc: "Puede desactivar a Centaur Warrunner con Black Hole y evitar que inicie peleas clave.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Dazzle", SinergDesc: "Puede proporcionar curación y salvación para Centaur Warrunner durante las peleas prolongadas.", SinergScore: "85%" },
            { name: "Oracle", SinergDesc: "Puede salvar a Centaur Warrunner con False Promise y proporcionar control adicional con Fortune's End.", SinergScore: "85%" },
            { name: "Witch Doctor", SinergDesc: "Puede curar a Centaur Warrunner con Voodoo Restoration y proporcionar control adicional con Paralyzing Cask.", SinergScore: "80%" },
            { name: "Slardar", SinergDesc: "Puede aumentar la armadura de Centaur Warrunner y proporcionar control de área con Slithereen Crush.", SinergScore: "85%" },
            { name: "Abaddon", SinergDesc: "Puede proteger a Centaur Warrunner con Aphotic Shield y mejorar su capacidad de pelea con Mist Coil.", SinergScore: "80%" },
            { name: "Tidehunter", SinergDesc: "Puede proporcionar control de área y protección con Kraken Shell y Ravage para Centaur Warrunner.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Puede aumentar el daño y la iniciación de Centaur Warrunner con Empower y Reverse Polarity.", SinergScore: "85%" },
            { name: "Earthshaker", SinergDesc: "Puede proporcionar control de área y proteger a Centaur Warrunner con Fissure y Echo Slam.", SinergScore: "80%" },
            { name: "Invoker", SinergDesc: "Puede proporcionar control adicional y daño con habilidades como Tornado y Meteor.", SinergScore: "85%" }
        ],
        habilidades: {
            primera: { nombre: "Hoof Stomp", tipo: "Stun/Area" },
            segunda: { nombre: "Double Edge", tipo: "Daño mágico" },
            pasiva: { nombre: "Retaliate", tipo: "Daño de retorno" },
            ulti: { nombre: "Stampede", tipo: "Buff/Global" }
        },
        objetivo: "Iniciar peleas con Hoof Stomp y proporcionar control con Double Edge. Utilizar Stampede para permitir que aliados sigan o escapen de peleas."
    },
    {
        name: "Chaos Knight",
        img: "img/heroes/chaos_knight.png",
        rol: "Carry, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        Counters: [
            { name: "Lion", CounterDesc: "Puede desactivar a Chaos Knight y eliminar sus ilusiones rápidamente con Finger of Death.", CounterScore: "85%" },
            { name: "Lina", CounterDesc: "Puede dañar a Chaos Knight y eliminar ilusiones con Laguna Blade.", CounterScore: "80%" },
            { name: "Disruptor", CounterDesc: "Puede controlar a Chaos Knight y evitar que escape con Glimpse y Static Storm.", CounterScore: "85%" },
            { name: "Keeper of the Light", CounterDesc: "Puede eliminar ilusiones y controlar a Chaos Knight con Illuminate y Mana Leak.", CounterScore: "80%" },
            { name: "Ancient Apparition", CounterDesc: "Puede desactivar la regeneración de Chaos Knight con Ice Blast y eliminar ilusiones.", CounterScore: "75%" },
            { name: "Sven", CounterDesc: "Puede dañar rápidamente a Chaos Knight y eliminar ilusiones con cleave de Great Cleave.", CounterScore: "80%" },
            { name: "Medusa", CounterDesc: "Puede eliminar ilusiones de Chaos Knight rápidamente y controlar peleas con Stone Gaze.", CounterScore: "85%" },
            { name: "Ember Spirit", CounterDesc: "Puede dañar a Chaos Knight y escapar fácilmente de sus habilidades con Fire Remnant.", CounterScore: "80%" },
            { name: "Queen of Pain", CounterDesc: "Puede eliminar ilusiones y controlar a Chaos Knight con Sonic Wave y Shadow Strike.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Io", SinergDesc: "Puede mantener a Chaos Knight vivo y mejorar su movilidad con Tether y Relocate.", SinergScore: "90%" },
            { name: "KotL", SinergDesc: "Puede proporcionar regeneración de maná y control con Illuminate y Chakra Magic para Chaos Knight.", SinergScore: "85%" },
            { name: "Treant Protector", SinergDesc: "Puede proteger a Chaos Knight con Living Armor y controlar peleas con Overgrowth.", SinergScore: "85%" },
            { name: "Earthshaker", SinergDesc: "Puede proporcionar control de área y bloquear enemigos para Chaos Knight con Fissure y Echo Slam.", SinergScore: "85%" },
            { name: "Witch Doctor", SinergDesc: "Puede proporcionar curación y control con Voodoo Restoration y Paralyzing Cask para Chaos Knight.", SinergScore: "80%" },
            { name: "Phantom Lancer", SinergDesc: "Puede crear confusión con muchas ilusiones junto a Chaos Knight, abrumando al enemigo.", SinergScore: "85%" },
            { name: "Tidehunter", SinergDesc: "Puede proporcionar iniciación y control de área con Ravage, permitiendo que Chaos Knight entre con seguridad.", SinergScore: "80%" },
            { name: "Tiny", SinergDesc: "Puede proporcionar control y daño adicional para Chaos Knight con Avalanche y Toss.", SinergScore: "85%" },
            { name: "Gyrocopter", SinergDesc: "Puede proporcionar daño de área y control con Call Down y Homing Missile para Chaos Knight.", SinergScore: "80%" }
        ],
        habilidades: {
            primera: { nombre: "Chaos Bolt", tipo: "Stun" },
            segunda: { nombre: "Reality Rift", tipo: "Debuff" },
            pasiva: { nombre: "Chaos Strike", tipo: "Crítico" },
            ulti: { nombre: "Phantasm", tipo: "Invocación" }
        },
        objetivo: "Crear ilusiones con Phantasm para confundir y dañar a los enemigos. Iniciar peleas con Reality Rift y proporcionar control con Chaos Bolt. Aprovechar Chaos Strike para aumentar el daño y asegurar eliminaciones."
    },
    {
        "name": "Dawnbreaker",
        "img": "img/heroes/dawnbreaker.png",
        "rol": "Iniciador, Tanque",
        "complejidad": 2,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Starbreaker", "tipo": "Daño físico" },
            "segunda": { "nombre": "Celestial Hammer", "tipo": "Daño mágico/Area" },
            "pasiva": { "nombre": "Luminosity", "tipo": "Curación" },
            "ulti": { "nombre": "Solar Guardian", "tipo": "Curación/Area" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede evadir las habilidades de Dawnbreaker con Blink y ser difícil de atrapar con Starbreaker.", "CounterScore": "80%" },
            { "name": "Lion", "CounterDesc": "Puede desactivar a Dawnbreaker con sus habilidades de control y eliminarla con Finger of Death.", "CounterScore": "85%" },
            { "name": "Shadow Demon", "CounterDesc": "Puede interrumpir a Dawnbreaker y sus aliados con Disruption y Soul Catcher.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Puede mejorar la capacidad de supervivencia de Dawnbreaker con Shallow Grave y Shadow Wave.", "SinergScore": "80%" },
            { "name": "Omniknight", "SinergDesc": "Proporciona inmunidad mágica y aumenta la supervivencia de Dawnbreaker con Heavenly Grace y Guardian Angel.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Puede agrupar a los enemigos con Reverse Polarity, permitiendo a Dawnbreaker maximizar el impacto de Celestial Hammer y Starbreaker.", "SinergScore": "80%" }
        ],
        "objetivo": "Dawnbreaker es un iniciador y tanque que se destaca en el control de equipo y la curación. Utiliza Starbreaker para iniciar y causar daño físico, Celestial Hammer para controlar el área y dañar a múltiples enemigos, Luminosity para curarse a sí misma durante el combate, y Solar Guardian para curar a sus aliados y moverse rápidamente por el mapa. Su objetivo principal es iniciar peleas, absorber daño y mantener a su equipo vivo con su poderosa presencia y habilidades de curación."
    }
    ,
    {
        
    name: "Doom",
    img: "img/heroes/doom_bringer.png",
    rol: "Iniciador, Tanque",
    complejidad: 3,
    atributo: "fuerza",
    Counters: [
        { name: "Ancient Apparition", CounterDesc: "Puede negar la regeneración de Doom con Ice Blast y reducir su impacto en las peleas.", CounterScore: "85%" },
        { name: "Lifestealer", CounterDesc: "Puede evitar ser eliminado rápidamente por Doom con Rage y su vida robada.", CounterScore: "80%" },
        { name: "Oracle", CounterDesc: "Puede salvar a aliados de Doom con False Promise y reducir su eficacia con Fortune's End.", CounterScore: "85%" },
        { name: "Shadow Demon", CounterDesc: "Puede controlar a Doom y salvar aliados con Disruption y Shadow Poison.", CounterScore: "80%" },
        { name: "Witch Doctor", CounterDesc: "Puede controlar a Doom y reducir su impacto en peleas con Paralyzing Cask y Voodoo Restoration.", CounterScore: "85%" },
        { name: "Venomancer", CounterDesc: "Puede dañar a Doom con habilidades de daño por tiempo y reducir su capacidad de pelea.", CounterScore: "80%" },
        { name: "Nyx Assassin", CounterDesc: "Puede crear oportunidades para eliminar a Doom con Vendetta y controlar peleas con Impale.", CounterScore: "85%" },
        { name: "Invoker", CounterDesc: "Puede controlar a Doom y proporcionar daño adicional con habilidades como Tornado y Meteor.", CounterScore: "85%" },
        { name: "Chen", CounterDesc: "Puede salvar a aliados de Doom con Hand of God y proporcionar control con sus secuaces.", CounterScore: "80%" }
    ],
    Sinergia: [
        { name: "Lifestealer", SinergDesc: "Puede aprovechar la iniciación de Doom y proporcionar daño físico adicional con Open Wounds.", SinergScore: "85%" },
        { name: "Faceless Void", SinergDesc: "Puede aprovechar la iniciación de Doom con Chronosphere y proporcionar daño físico adicional.", SinergScore: "80%" },
        { name: "Magnus", SinergDesc: "Puede aumentar el impacto de Doom en peleas con Empower y proporcionar control con Reverse Polarity.", SinergScore: "85%" },
        { name: "Dark Seer", SinergDesc: "Puede aumentar la capacidad de iniciación de Doom con Vacuum y proporcionar sostenibilidad con Ion Shell.", SinergScore: "80%" },
        { name: "Invoker", SinergDesc: "Puede aumentar el daño y control de Doom con habilidades como Tornado y Alacrity.", SinergScore: "85%" },
        { name: "Alchemist", SinergDesc: "Puede aumentar la economía de Doom con Greed y proporcionar beneficios con Chemical Rage.", SinergScore: "85%" },
        { name: "Spirit", SinergDesc: "Puede aumentar la movilidad de Doom con Ember Remnant y proporcionar daño adicional con Sleight of Fist.", SinergScore: "80%" },
        { name: "Shadow Fiend", SinergDesc: "Puede aumentar el daño de Doom con Presence of the Dark Lord y proporcionar daño adicional con Requiem of Souls.", SinergScore: "85%" },
        { name: "Phoenix", SinergDesc: "Puede proporcionar control de área y sostenibilidad con Supernova para Doom.", SinergScore: "80%" }
    ],
    habilidades: {
        primera: { nombre: "Devour", tipo: "Buff" },
        segunda: { nombre: "Scorched Earth", tipo: "Daño mágico/Area" },
        pasiva: { nombre: "Infernal Blade", tipo: "Daño mágico" },
        ulti: { nombre: "Doom", tipo: "Silencio" }
    },
    objetivo: "Iniciar peleas con Doom y controlar al objetivo más peligroso con Doom. Utilizar Scorched Earth para mejorar la supervivencia y dañar enemigos."
},
    {
        
    name: "Dragon Knight",
    img: "img/heroes/dragon_knight.png",
    rol: "Tanque, Mid",
    complejidad: 1,
    atributo: "fuerza",
    Counters: [
        { name: "Ancient Apparition", CounterDesc: "Puede reducir la regeneración de Dragon Knight con Ice Blast y evitar su sostenibilidad.", CounterScore: "85%" },
        { name: "Timbersaw", CounterDesc: "Puede dañar a Dragon Knight rápidamente y evitar su capacidad de tanquear daño.", CounterScore: "80%" },
        { name: "Lifestealer", CounterDesc: "Puede enfrentarse a Dragon Knight con su daño rápido y mitigación de daño.", CounterScore: "85%" },
        { name: "Necrophos", CounterDesc: "Puede eliminar a Dragon Knight con Reaper's Scythe y reducir su impacto en las peleas prolongadas.", CounterScore: "80%" },
        { name: "Outworld Destroyer", CounterDesc: "Puede controlar a Dragon Knight con Astral Imprisonment y reducir su capacidad de daño.", CounterScore: "85%" },
        { name: "Shadow Demon", CounterDesc: "Puede controlar a Dragon Knight y salvar aliados con Disruption y Shadow Poison.", CounterScore: "80%" },
        { name: "Nyx Assassin", CounterDesc: "Puede crear oportunidades para eliminar a Dragon Knight con Vendetta y controlar peleas con Impale.", CounterScore: "85%" },
        { name: "Venomancer", CounterDesc: "Puede dañar a Dragon Knight con habilidades de daño por tiempo y reducir su capacidad de tanquear daño.", CounterScore: "80%" },
        { name: "Viper", CounterDesc: "Puede dañar a Dragon Knight y reducir su regeneración de vida con habilidades como Nethertoxin y Viper Strike.", CounterScore: "85%" }
    ],
    Sinergia: [
        { name: "Viper", SinergDesc: "Puede aumentar el daño de Dragon Knight y controlar peleas con Nethertoxin y Viper Strike.", SinergScore: "85%" },
        { name: "Dazzle", SinergDesc: "Puede proteger a Dragon Knight con Shadow Wave y proporcionar sostenibilidad con Shallow Grave.", SinergScore: "80%" },
        { name: "Io", SinergDesc: "Puede mejorar la movilidad de Dragon Knight y proporcionar curación con Tether y Overcharge.", SinergScore: "85%" },
        { name: "Omniknight", SinergDesc: "Puede proteger a Dragon Knight con Repel y proporcionar sostenibilidad con Purification.", SinergScore: "80%" },
        { name: "Bane", SinergDesc: "Puede controlar al enemigo más peligroso durante Dragon Knight's Dragon Tail con Nightmare y Fiend's Grip.", SinergScore: "85%" },
        { name: "Drow Ranger", SinergDesc: "Puede aumentar el daño de Dragon Knight con Marksmanship y proporcionar control con Frost Arrows.", SinergScore: "80%" },
        { name: "Puck", SinergDesc: "Puede proporcionar control de área y protección para Dragon Knight con Dream Coil y Phase Shift.", SinergScore: "85%" },
        { name: "Tidehunter", SinergDesc: "Puede proporcionar iniciación y control de área con Ravage, permitiendo que Dragon Knight entre con seguridad.", SinergScore: "80%" },
        { name: "Lich", SinergDesc: "Puede proporcionar daño de área y control con Frost Blast y Chain Frost para Dragon Knight.", SinergScore: "85%" }
    ],
    habilidades: {
        primera: { nombre: "Breathe Fire", tipo: "Daño mágico" },
        segunda: { nombre: "Dragon Tail", tipo: "Stun" },
        pasiva: { nombre: "Dragon Blood", tipo: "Regeneración" },
        ulti: { nombre: "Elder Dragon Form", tipo: "Transformación" }
    },
    objetivo: "Iniciar peleas con Dragon Tail para controlar a los enemigos y usar Elder Dragon Form para aumentar la presencia en peleas. Utilizar Breathe Fire para dañar a múltiples enemigos y Dragon Blood para mantenerse en el frente."
},
    {
        name: "Earth Spirit",
        img: "img/heroes/earth_spirit.png",
        rol: "Iniciador",
        complejidad: 3,
        atributo: "fuerza",
        Counters: [
            { name: "Silencer", CounterDesc: "Puede evitar las habilidades de control de Earth Spirit con Global Silence y negar su impacto en peleas.", CounterScore: "85%" },
            { name: "Oracle", CounterDesc: "Puede salvar a aliados de Earth Spirit con False Promise y reducir su capacidad de control.", CounterScore: "80%" },
            { name: "Puck", CounterDesc: "Puede evitar las habilidades de control de Earth Spirit con Phase Shift y controlar peleas con Dream Coil.", CounterScore: "85%" },
            { name: "Abaddon", CounterDesc: "Puede proteger a aliados de Earth Spirit con Aphotic Shield y reducir su capacidad de iniciación.", CounterScore: "80%" },
            { name: "Lifestealer", CounterDesc: "Puede evitar el control de Earth Spirit con Rage y su vida robada.", CounterScore: "85%" },
            { name: "Timbersaw", CounterDesc: "Puede dañar a Earth Spirit rápidamente y reducir su impacto en peleas prolongadas.", CounterScore: "80%" },
            { name: "Rubick", CounterDesc: "Puede robar las habilidades de control de Earth Spirit con Spell Steal y usarlas en su contra.", CounterScore: "85%" },
            { name: "Enigma", CounterDesc: "Puede negar el control de Earth Spirit con Black Hole y controlar peleas con Midnight Pulse.", CounterScore: "80%" },
            { name: "Chen", CounterDesc: "Puede salvar a aliados de Earth Spirit con Hand of God y controlar peleas con sus secuaces.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Ember Spirit", SinergDesc: "Puede aumentar el daño de Earth Spirit con Fire Remnant y proporcionar control con Chains.", SinergScore: "85%" },
            { name: "Storm Spirit", SinergDesc: "Puede proporcionar control de área y daño adicional con Ball Lightning y Electric Vortex.", SinergScore: "80%" },
            { name: "Phoenix", SinergDesc: "Puede proporcionar control de área y sostenibilidad con Supernova para Earth Spirit.", SinergScore: "85%" },
            { name: "Tusk", SinergDesc: "Puede mejorar la movilidad de Earth Spirit y proporcionar control con Snowball y Walrus Punch.", SinergScore: "80%" },
            { name: "Dark Seer", SinergDesc: "Puede proporcionar control de área y sostenibilidad con Vacuum e Ion Shell para Earth Spirit.", SinergScore: "85%" },
            { name: "Earthshaker", SinergDesc: "Puede proporcionar control de área y daño adicional con Fissure y Echo Slam para Earth Spirit.", SinergScore: "80%" },
            { name: "Faceless Void", SinergDesc: "Puede controlar peleas con Chronosphere y permitir que Earth Spirit utilice sus habilidades de control eficazmente.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Puede aumentar el impacto de Earth Spirit en peleas con Empower y proporcionar control con Reverse Polarity.", SinergScore: "80%" },
            { name: "Keeper of the Light", SinergDesc: "Puede proporcionar movilidad y sostenibilidad con Chakra Magic y Illuminate para Earth Spirit.", SinergScore: "85%" }
        ],
        habilidades: {
            primera: { nombre: "Boulder Smash", tipo: "Daño físico" },
            segunda: { nombre: "Rolling Boulder", tipo: "Daño físico" },
            pasiva: { nombre: "Geomagnetic Grip", tipo: "Silencio" },
            ulti: { nombre: "Magnetize", tipo: "Daño prolongado" }
        },
        objetivo: "Iniciar peleas con Boulder Smash y Rolling Boulder para controlar a los enemigos. Utilizar Magnetize para dañar y silenciar a múltiples enemigos durante peleas prolongadas."
    },
    {
        
    name: "Earthshaker",
    img: "img/heroes/earthshaker.png",
    rol: "Iniciador",
    complejidad: 2,
    atributo: "fuerza",
    Counters: [
        { name: "Anti-Mage", CounterDesc: "Puede evadir a Earthshaker con Blink y eliminarlo rápidamente con su daño físico.", CounterScore: "85%" },
        { name: "Lifestealer", CounterDesc: "Puede evitar el control de Earthshaker con Rage y eliminarlo con su daño físico.", CounterScore: "80%" },
        { name: "Phantom Lancer", CounterDesc: "Puede evadir a Earthshaker con Doppelganger y controlar peleas con su ilusión.", CounterScore: "85%" },
        { name: "Morphling", CounterDesc: "Puede evadir a Earthshaker con Waveform y controlar peleas con Adaptive Strike.", CounterScore: "80%" },
        { name: "Chaos Knight", CounterDesc: "Puede evadir a Earthshaker con Reality Rift y controlar peleas con su ilusión.", CounterScore: "85%" },
        { name: "Rubick", CounterDesc: "Puede robar las habilidades de control de Earthshaker con Spell Steal y usarlas en su contra.", CounterScore: "80%" },
        { name: "Silencer", CounterDesc: "Puede evitar las habilidades de control de Earthshaker con Global Silence y negar su impacto en peleas.", CounterScore: "85%" },
        { name: "Invoker", CounterDesc: "Puede evitar el control de Earthshaker con Ghost Walk y controlar peleas con sus habilidades mágicas.", CounterScore: "80%" },
        { name: "Doom", CounterDesc: "Puede silenciar y eliminar a Earthshaker con Doom, evitando que use sus habilidades de control.", CounterScore: "85%" }
    ],
    Sinergia: [
        { name: "Tidehunter", SinergDesc: "Puede proporcionar control de área adicional con Ravage para que Earthshaker use Echo Slam eficazmente.", SinergScore: "85%" },
        { name: "Magnus", SinergDesc: "Puede agrupar a los enemigos para que Earthshaker use Fissure y Echo Slam de manera efectiva con Reverse Polarity.", SinergScore: "80%" },
        { name: "Sand King", SinergDesc: "Puede proporcionar control de área adicional con Epicenter y permitir que Earthshaker use Fissure y Echo Slam eficazmente.", SinergScore: "85%" },
        { name: "Invoker", SinergDesc: "Puede controlar peleas con Invoker's abilities y permitir que Earthshaker use Fissure y Echo Slam de manera efectiva.", SinergScore: "80%" },
        { name: "Techies", SinergDesc: "Puede controlar peleas con Statis Trap y Mines, permitiendo a Earthshaker usar Fissure y Echo Slam de manera efectiva.", SinergScore: "85%" },
        { name: "Alchemist", SinergDesc: "Puede proporcionar sostenibilidad y daño adicional con Acid Spray y Unstable Concoction para Earthshaker.", SinergScore: "80%" },
        { name: "Elder Titan", SinergDesc: "Puede proporcionar control de área y daño adicional con Echo Stomp y Earth Splitter para Earthshaker.", SinergScore: "85%" },
        { name: "Lina", SinergDesc: "Puede proporcionar daño de área y control con Light Strike Array y Laguna Blade para Earthshaker.", SinergScore: "80%" },
        { name: "Legion Commander", SinergDesc: "Puede controlar peleas y proteger a Earthshaker con Press the Attack y Duel.", SinergScore: "85%" }
    ],
    habilidades: {
        primera: { nombre: "Fissure", tipo: "Stun" },
        segunda: { nombre: "Enchant Totem", tipo: "Daño físico" },
        pasiva: { nombre: "Aftershock", tipo: "Daño mágico" },
        ulti: { nombre: "Echo Slam", tipo: "Daño mágico" }
    },
    objetivo: "Iniciar peleas con Fissure para controlar a los enemigos y usar Echo Slam para dañar y deshabilitar a múltiples enemigos. Utilizar Enchant Totem para aumentar el daño y Aftershock para controlar peleas."
},
    {
        name: "Elder Titan",
        img: "img/heroes/elder_titan.png",
        rol: "Iniciador",
        complejidad: 3,
        atributo: "fuerza",
        Counters: [
            { name: "Juggernaut", CounterDesc: "Puede evitar el control de Elder Titan con Blade Fury y eliminarlo rápidamente con su daño físico.", CounterScore: "85%" },
            { name: "Phantom Lancer", CounterDesc: "Puede evadir a Elder Titan con Doppelganger y controlar peleas con su ilusión.", CounterScore: "80%" },
            { name: "Lifestealer", CounterDesc: "Puede evitar el control de Elder Titan con Rage y eliminarlo con su daño físico.", CounterScore: "85%" },
            { name: "Slark", CounterDesc: "Puede evadir a Elder Titan con Shadow Dance y controlar peleas con Essence Shift.", CounterScore: "80%" },
            { name: "Troll Warlord", CounterDesc: "Puede evadir el control de Elder Titan con Battle Trance y eliminarlo con su daño físico.", CounterScore: "85%" },
            { name: "Chen", CounterDesc: "Puede salvar a aliados de Elder Titan con Hand of God y controlar peleas con sus secuaces.", CounterScore: "80%" },
            { name: "Timbersaw", CounterDesc: "Puede evadir el control de Elder Titan con Timber Chain y controlar peleas con su daño mágico.", CounterScore: "85%" },
            { name: "Shadow Demon", CounterDesc: "Puede controlar peleas y salvar aliados de Elder Titan con Disruption y Shadow Poison.", CounterScore: "80%" },
            { name: "Venomancer", CounterDesc: "Puede dañar a Elder Titan con sus habilidades de daño por tiempo y reducir su capacidad de tanquear daño.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Faceless Void", SinergDesc: "Puede agrupar a los enemigos para que Elder Titan use Echo Stomp y Earth Splitter de manera efectiva con Chronosphere.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Puede agrupar a los enemigos para que Elder Titan use Echo Stomp y Earth Splitter de manera efectiva con Reverse Polarity.", SinergScore: "80%" },
            { name: "Dazzle", SinergDesc: "Puede proporcionar sostenibilidad con Shadow Wave y proteger a Elder Titan con Shallow Grave.", SinergScore: "85%" },
            { name: "Earthshaker", SinergDesc: "Puede proporcionar control de área y daño adicional con Fissure y Echo Slam para Elder Titan.", SinergScore: "80%" },
            { name: "Kunkka", SinergDesc: "Puede agrupar a los enemigos para que Elder Titan use Echo Stomp y Earth Splitter de manera efectiva con Ghostship.", SinergScore: "85%" },
            { name: "Keeper of the Light", SinergDesc: "Puede proporcionar movilidad y sostenibilidad con Chakra Magic y Illuminate para Elder Titan.", SinergScore: "80%" },
            { name: "Disruptor", SinergDesc: "Puede controlar peleas y salvar a Elder Titan con Glimpse y Static Storm.", SinergScore: "85%" },
            { name: "Lina", SinergDesc: "Puede proporcionar daño de área y control con Dragon Slave y Laguna Blade para Elder Titan.", SinergScore: "80%" },
            { name: "Invoker", SinergDesc: "Puede controlar peleas con Invoker's abilities y permitir que Elder Titan use Echo Stomp y Earth Splitter de manera efectiva.", SinergScore: "85%" }
        ],
        habilidades: {
            primera: { nombre: "Echo Stomp", tipo: "Stun/Area" },
            segunda: { nombre: "Astral Spirit", tipo: "Daño físico" },
            pasiva: { nombre: "Natural Order", tipo: "Debuff" },
            ulti: { nombre: "Earth Splitter", tipo: "Daño mágico/Area" }
        },
        objetivo: "Iniciar peleas con Echo Stomp para deshabilitar a múltiples enemigos, utilizar Astral Spirit para aumentar el daño y reducir la resistencia mágica de los enemigos con Natural Order, y finalizar con Earth Splitter para infligir daño mágico y reducir la velocidad de movimiento de los enemigos."
    },
    {
        name: "Huskar",
        img: "img/heroes/huskar.png",
        rol: "Mid, Iniciador",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Inner Fire", tipo: "Knockback" },
            segunda: { nombre: "Burning Spear", tipo: "Daño prolongado" },
            pasiva: { nombre: "Berserker's Blood", tipo: "Buff" },
            ulti: { nombre: "Life Break", tipo: "Daño físico" }
        },
        Counters: [
            { name: "Ancient Apparition", CounterDesc: "Puede evitar la regeneración de Huskar con Ice Blast y dañarlo con su daño mágico.", CounterScore: "85%" },
            { name: "Nyx Assassin", CounterDesc: "Puede controlar a Huskar y eliminarlo con Vendetta y Impale.", CounterScore: "80%" },
            { name: "Timbersaw", CounterDesc: "Puede eliminar a Huskar rápidamente con su daño mágico y reducir su regeneración con Whirling Death.", CounterScore: "85%" },
            { name: "Witch Doctor", CounterDesc: "Puede controlar a Huskar y eliminarlo con Paralyzing Cask y Death Ward.", CounterScore: "80%" },
            { name: "Disruptor", CounterDesc: "Puede controlar a Huskar y evitar que se mueva con Glimpse y Static Storm.", CounterScore: "85%" },
            { name: "Faceless Void", CounterDesc: "Puede evitar que Huskar se cure con Time Lock y controlarlo con Chronosphere.", CounterScore: "80%" },
            { name: "Invoker", CounterDesc: "Puede controlar a Huskar con Cold Snap y eliminarlo con su daño mágico.", CounterScore: "85%" },
            { name: "Shadow Fiend", CounterDesc: "Puede eliminar a Huskar rápidamente con su daño mágico y reducir su regeneración con Shadowraze.", CounterScore: "80%" },
            { name: "Phoenix", CounterDesc: "Puede dañar a Huskar con Fire Spirits y controlarlo con Supernova.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Dazzle", SinergDesc: "Puede aumentar la durabilidad de Huskar con Shallow Grave y Weave, permitiéndole ser más agresivo.", SinergScore: "85%" },
            { name: "Oracle", SinergDesc: "Puede aumentar la regeneración de Huskar con Fortune's End y False Promise, permitiéndole ser más agresivo.", SinergScore: "80%" },
            { name: "Io", SinergDesc: "Puede proporcionar movilidad y regeneración adicional con Tether y Overcharge para Huskar.", SinergScore: "85%" },
            { name: "Omniknight", SinergDesc: "Puede aumentar la inmunidad mágica de Huskar con Repel y proporcionar sostenibilidad con Purification.", SinergScore: "80%" },
            { name: "Bane", SinergDesc: "Puede controlar a los enemigos para que Huskar los elimine con Nightmare y Fiend's Grip.", SinergScore: "85%" },
            { name: "Drow Ranger", SinergDesc: "Puede aumentar el daño de ataque de Huskar con Precision Aura y proporcionar sostenibilidad con Gust.", SinergScore: "80%" },
            { name: "Puck", SinergDesc: "Puede controlar peleas y proteger a Huskar con Dream Coil y Waning Rift.", SinergScore: "85%" },
            { name: "Tidehunter", SinergDesc: "Puede controlar peleas y proteger a Huskar con Anchor Smash y Ravage.", SinergScore: "80%" },
            { name: "Lich", SinergDesc: "Puede dañar a los enemigos y proteger a Huskar con Frost Blast y Chain Frost.", SinergScore: "85%" }
        ],
        objetivo: "Utilizar Inner Fire para controlar peleas y eliminar la movilidad de los enemigos, aplicar Burning Spear para daño prolongado, aprovechar Berserker's Blood para aumentar el daño y la velocidad de ataque de Huskar, y usar Life Break para saltar sobre enemigos vulnerables y reducir su salud. Huskar es efectivo contra héroes que dependen principalmente del daño mágico y pueden ser controlados fácilmente, pero debe tener cuidado con héroes que pueden reducir su regeneración de salud o controlarlo eficazmente durante las peleas."
    },
    {
        name: "Kunkka",
        img: "img/heroes/kunkka.png",
        rol: "Iniciador, Mid, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Torrent", tipo: "Stun/Area" },
            segunda: { nombre: "Tidebringer", tipo: "Daño físico" },
            pasiva: { nombre: "X Marks the Spot", tipo: "Control" },
            ulti: { nombre: "Ghostship", tipo: "Stun/Area" }
        },
        Counters: [
            { name: "Ancient Apparition", CounterDesc: "Puede evitar que Kunkka se cure con Ice Blast y proporcionar visión con su habilidad.", CounterScore: "85%" },
            { name: "Oracle", CounterDesc: "Puede eliminar a Kunkka rápidamente con daño mágico y controlar sus movimientos con Fortune's End.", CounterScore: "80%" },
            { name: "Disruptor", CounterDesc: "Puede silenciar y eliminar a Kunkka con Glimpse y Static Storm durante las peleas.", CounterScore: "85%" },
            { name: "Lifestealer", CounterDesc: "Puede eliminar a Kunkka rápidamente con su movilidad y daño físico, especialmente durante las etapas tempranas del juego.", CounterScore: "80%" },
            { name: "Slark", CounterDesc: "Puede evadir y eliminar a Kunkka con su movilidad y daño físico, especialmente durante las etapas tempranas del juego.", CounterScore: "85%" },
            { name: "Juggernaut", CounterDesc: "Puede eliminar a Kunkka rápidamente con su movilidad y daño físico, especialmente durante las etapas tempranas del juego.", CounterScore: "80%" },
            { name: "Timbersaw", CounterDesc: "Puede reducir la durabilidad de Kunkka y eliminarlo con su daño mágico y control de árbol.", CounterScore: "85%" },
            { name: "Enigma", CounterDesc: "Puede controlar a Kunkka con su control masivo y eliminarlo con Midnight Pulse y Black Hole.", CounterScore: "80%" },
            { name: "Doom", CounterDesc: "Puede silenciar y eliminar a Kunkka con Scorched Earth y Doom durante las peleas.", CounterScore: "85%" },
            { name: "Faceless Void", CounterDesc: "Puede atrapar a Kunkka en Chronosphere y eliminarlo con su movilidad y daño físico.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Disruptor", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Glimpse y Static Storm.", SinergScore: "85%" },
            { name: "Ancient Apparition", SinergDesc: "Puede proporcionar daño adicional y control de área para que Kunkka use Ghostship de manera efectiva con Ice Blast.", SinergScore: "80%" },
            { name: "Tidehunter", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Ravage.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Reverse Polarity.", SinergScore: "80%" },
            { name: "Faceless Void", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Chronosphere.", SinergScore: "85%" },
            { name: "Dark Seer", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Vacuum y Wall of Replica.", SinergScore: "80%" },
            { name: "Earthshaker", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Fissure y Echo Slam.", SinergScore: "85%" },
            { name: "Invoker", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Tornado y Deafening Blast.", SinergScore: "80%" },
            { name: "Lina", SinergDesc: "Puede proporcionar daño adicional y control de área para que Kunkka use Ghostship de manera efectiva con Light Strike Array y Laguna Blade.", SinergScore: "85%" },
            { name: "Lich", SinergDesc: "Puede agrupar a los enemigos para que Kunkka use Ghostship de manera efectiva con Frost Blast y Chain Frost.", SinergScore: "80%" }
        ],
        objetivo: "Iniciar peleas con Torrent y Ghostship para controlar a múltiples enemigos, usar Tidebringer para daño adicional y X Marks the Spot para controlar movimientos clave de enemigos."
    },
    {
        name: "Legion Commander",
        img: "img/heroes/legion_commander.png",
        rol: "Iniciador, Mid",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Overwhelming Odds", tipo: "Daño físico" },
            segunda: { nombre: "Press the Attack", tipo: "Curación" },
            pasiva: { nombre: "Moment of Courage", tipo: "Daño físico" },
            ulti: { nombre: "Duel", tipo: "Control" }
        },
        Counters: [
            { name: "Oracle", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su purga y control de daño mágico.", CounterScore: "85%" },
            { name: "Dazzle", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su curación y salvación.", CounterScore: "80%" },
            { name: "Shadow Demon", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su purga y control de movimiento.", CounterScore: "85%" },
            { name: "Troll Warlord", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su evasión y control de velocidad de ataque.", CounterScore: "80%" },
            { name: "Outworld Destroyer", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su daño mágico y control de mana.", CounterScore: "85%" },
            { name: "Venomancer", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su daño mágico y control de área.", CounterScore: "80%" },
            { name: "Necrophos", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su daño mágico y control de regeneración.", CounterScore: "85%" },
            { name: "Bloodseeker", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su visión y control de movimiento.", CounterScore: "80%" },
            { name: "Timbersaw", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su daño mágico y control de árboles.", CounterScore: "85%" },
            { name: "Slark", CounterDesc: "Puede prevenir que Legion Commander gane duelos con su evasión y control de invisibilidad.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Dazzle", SinergDesc: "Puede curar y salvar a Legion Commander durante los duelos con Shadow Wave y Shallow Grave.", SinergScore: "85%" },
            { name: "Oracle", SinergDesc: "Puede purgar y proteger a Legion Commander durante los duelos con Fortune's End y False Promise.", SinergScore: "80%" },
            { name: "Io", SinergDesc: "Puede curar y salvar a Legion Commander durante los duelos con Tether y Overcharge.", SinergScore: "85%" },
            { name: "Abaddon", SinergDesc: "Puede curar y proteger a Legion Commander durante los duelos con Mist Coil y Borrowed Time.", SinergScore: "80%" },
            { name: "Omniknight", SinergDesc: "Puede curar y proteger a Legion Commander durante los duelos con Purification y Guardian Angel.", SinergScore: "85%" },
            { name: "Witch Doctor", SinergDesc: "Puede curar y proporcionar daño adicional durante los duelos con Voodoo Restoration y Death Ward.", SinergScore: "80%" },
            { name: "Tusk", SinergDesc: "Puede proteger y controlar a los enemigos durante los duelos con Snowball y Walrus Punch.", SinergScore: "85%"},
            { name: "Dark Seer", SinergDesc: "Puede agrupar a los enemigos para que Legion Commander use Duel de manera efectiva con Vacuum y Wall of Replica.", SinergScore: "80%" },
            { name: "Earthshaker", SinergDesc: "Puede controlar a los enemigos para que Legion Commander use Duel de manera efectiva con Fissure y Echo Slam.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Puede agrupar a los enemigos para que Legion Commander use Duel de manera efectiva con Reverse Polarity.", SinergScore: "80%" },
            { name: "Invoker", SinergDesc: "Puede controlar a los enemigos para que Legion Commander use Duel de manera efectiva con Tornado y Deafening Blast.", SinergScore: "85%" },
            { name: "Lina", SinergDesc: "Puede proporcionar daño adicional y control de área para que Legion Commander use Duel de manera efectiva con Light Strike Array y Laguna Blade.", SinergScore: "80%" },
            { name: "Puck", SinergDesc: "Puede controlar a los enemigos para que Legion Commander use Duel de manera efectiva con Waning Rift y Dream Coil.", SinergScore: "85%" },
            { name: "Tidehunter", SinergDesc: "Puede agrupar a los enemigos para que Legion Commander use Duel de manera efectiva con Ravage.", SinergScore: "80%" },
            { name: "Lich", SinergDesc: "Puede controlar a los enemigos para que Legion Commander use Duel de manera efectiva con Frost Blast y Chain Frost.", SinergScore: "85%" },
            { name: "Drow Ranger", SinergDesc: "Puede proporcionar daño adicional y control de área para que Legion Commander use Duel de manera efectiva con Gust y Marksmanship.", SinergScore: "80%" }
            ],
            objetivo: "Iniciar Duelos con Overwhelming Odds y usar Press the Attack para curación adicional y desactivar efectos negativos, aprovechar Moment of Courage para daño adicional y Duel para eliminar enemigos clave."
            },
            {
                name: "Lifestealer",
                img: "img/heroes/life_stealer.png",
                rol: "Carry",
                complejidad: 2,
                atributo: "fuerza",
                habilidades: {
                    primera: { nombre: "Rage", tipo: "Buff" },
                    segunda: { nombre: "Feast", tipo: "Curación" },
                    pasiva: { nombre: "Ghoul Frenzy", tipo: "Debuff" },
                    ulti: { nombre: "Infest", tipo: "Curación" }
                },
                Counters: [
                    { name: "Ancient Apparition", CounterDesc: "Puede neutralizar la regeneración de Lifestealer con Ice Blast, lo que limita su capacidad de curación.", CounterScore: "90%" },
                    { name: "Oracle", CounterDesc: "Puede eliminar los efectos de Rage de Lifestealer con Fortune's End y desactivar su curación con False Promise.", CounterScore: "85%" },
                    { name: "Shadow Demon", CounterDesc: "Puede desactivar a Lifestealer con Disruption y deshacerse de su curación con Demonic Purge.", CounterScore: "85%" },
                    { name: "Venomancer", CounterDesc: "Puede aplicar daño continuo con Venomous Gale y Poison Nova, lo que limita la eficacia de la curación de Lifestealer.", CounterScore: "80%" },
                    { name: "Ursa", CounterDesc: "Puede infligir daño rápido y continuo con Fury Swipes, superando la capacidad de curación de Lifestealer.", CounterScore: "85%" },
                    { name: "Timbersaw", CounterDesc: "Puede infligir daño puro y de área con Whirling Death y Timber Chain, afectando significativamente la resistencia de Lifestealer.", CounterScore: "80%" },
                    { name: "Enigma", CounterDesc: "Puede atrapar a Lifestealer y sus aliados con Black Hole, neutralizando sus habilidades defensivas y ofensivas.", CounterScore: "80%" },
                    { name: "Doom", CounterDesc: "Puede desactivar completamente a Lifestealer con Doom, anulando su habilidad de curación y daño.", CounterScore: "90%" },
                    { name: "Faceless Void", CounterDesc: "Puede atrapar a Lifestealer y sus aliados en Chronosphere, eliminando su capacidad de movimiento y ataque.", CounterScore: "85%" },
                    { name: "Juggernaut", CounterDesc: "Puede evitar que Lifestealer escape con Blade Fury y dañarlo con Omnislash, superando su capacidad de curación.", CounterScore: "80%" }
                ],
                Sinergia: [
                    { name: "Io", SinergDesc: "Puede aumentar la supervivencia de Lifestealer con Tether y Overcharge, proporcionando regeneración adicional y velocidad de ataque.", SinergScore: "90%" },
                    { name: "Dazzle", SinergDesc: "Puede aumentar la durabilidad de Lifestealer con Shadow Wave y Shallow Grave, permitiéndole mantenerse en la pelea por más tiempo.", SinergScore: "85%" },
                    { name: "Shadow Demon", SinergDesc: "Puede facilitar ataques seguros con Disruption, creando ilusiones para aumentar el daño potencial de Lifestealer.", SinergScore: "85%" },
                    { name: "Winter Wyvern", SinergDesc: "Puede proteger a Lifestealer con Cold Embrace y controlar a los enemigos con Winter's Curse, permitiéndole atacar de manera segura.", SinergScore: "80%" },
                    { name: "Witch Doctor", SinergDesc: "Puede proporcionar curación adicional y control de área con Voodoo Restoration y Death Ward, mejorando la sostenibilidad de Lifestealer en peleas prolongadas.", SinergScore: "85%" },
                    { name: "Disruptor", SinergDesc: "Puede atrapar a los enemigos y evitar que escapen con Glimpse y Static Storm, permitiendo a Lifestealer mantenerse cerca de sus objetivos.", SinergScore: "80%" },
                    { name: "Legion Commander", SinergDesc: "Puede facilitar Duelos seguros con Press the Attack y proporcionar daño adicional con Moment of Courage, complementando el estilo agresivo de Lifestealer.", SinergScore: "85%" },
                    { name: "Earthshaker", SinergDesc: "Puede controlar a múltiples enemigos con Fissure y Enchant Totem, permitiendo a Lifestealer seleccionar objetivos más vulnerables.", SinergScore: "80%" },
                    { name: "Magnus", SinergDesc: "Puede agrupar a los enemigos para facilitar ataques con Skewer y Reverse Polarity, mejorando la eficacia de Lifestealer en peleas de equipo.", SinergScore: "85%" },
                    { name: "Invoker", SinergDesc: "Puede proporcionar control adicional con Tornado y Deafening Blast, permitiendo a Lifestealer cerrar la distancia y causar estragos en los equipos enemigos.", SinergScore: "80%" }
                ],
                objetivo: "Utilizar Rage para evitar el control y mantenerse en la pelea, aprovechar Feast para curarse durante las peleas, y utilizar Infest para escapar o causar daño adicional en combate."
            },            
            {
                "name": "Night Stalker",
                "img": "img/heroes/night_stalker.png",
                "rol": "Iniciador, Tanque",
                "complejidad": 2,
                "atributo": "fuerza",
                "habilidades": {
                    "primera": { "nombre": "Void", "tipo": "Daño mágico" },
                    "segunda": { "nombre": "Crippling Fear", "tipo": "Silencio" },
                    "pasiva": { "nombre": "Hunter in the Night", "tipo": "Buff" },
                    "ulti": { "nombre": "Dark Ascension", "tipo": "Buff" }
                },
                "Counters": [
                    { "name": "Tinker", "CounterDesc": "Puede mantener a Night Stalker a raya con su daño a larga distancia y teletransportarse lejos de su alcance.", "CounterScore": "85%" },
                    { "name": "Keeper of the Light", "CounterDesc": "Puede iluminar áreas y evitar que Night Stalker aproveche la oscuridad con su habilidad Illuminate.", "CounterScore": "80%" },
                    { "name": "Luna", "CounterDesc": "Puede luchar eficazmente en la noche con su habilidad Moon Glaives y causar daño masivo con Eclipse.", "CounterScore": "80%" },
                    { "name": "Pugna", "CounterDesc": "Puede desactivar a Night Stalker con Decrepify y Life Drain, limitando su capacidad para hacer daño físico.", "CounterScore": "85%" },
                    { "name": "Sniper", "CounterDesc": "Puede mantener a Night Stalker a distancia con su rango de ataque y causar daño desde una distancia segura.", "CounterScore": "85%" }
                ],
                "Sinergia": [
                    { "name": "Io", "SinergDesc": "Puede proporcionar curación y movilidad adicional a Night Stalker durante la noche, permitiéndole ser más agresivo.", "SinergScore": "85%" },
                    { "name": "Dark Seer", "SinergDesc": "Puede agrupar a los enemigos con Vacuum y permitir que Night Stalker cause daño masivo con su combinación de habilidades.", "SinergScore": "80%" },
                    { "name": "Puck", "SinergDesc": "Puede proporcionar control adicional con Dream Coil y Silence, permitiendo a Night Stalker aprovechar al máximo sus habilidades.", "SinergScore": "80%" },
                    { "name": "Disruptor", "SinergDesc": "Puede atrapar a los enemigos con Kinetic Field y Static Storm, facilitando que Night Stalker los elimine.", "SinergScore": "85%" },
                    { "name": "Crystal Maiden", "SinergDesc": "Puede proporcionar control adicional con Frostbite y Freezing Field, mejorando la eficacia de Night Stalker en peleas de equipo.", "SinergScore": "80%" }
                ],
                "objetivo": "Aprovechar la noche y su ulti, Dark Ascension, para moverse rápidamente y eliminar héroes clave enemigos. Usar Void y Crippling Fear para controlar y silenciar a los enemigos, y Hunter in the Night para aumentar su velocidad de movimiento y ataque."
            },            
            {
                "name": "Ogre Magi",
                "img": "img/heroes/ogre_magi.png",
                "rol": "Support, Iniciador",
                "complejidad": 1,
                "atributo": "fuerza",
                "habilidades": {
                    "primera": { "nombre": "Fireblast", "tipo": "Stun" },
                    "segunda": { "nombre": "Ignite", "tipo": "Daño mágico" },
                    "pasiva": { "nombre": "Bloodlust", "tipo": "Buff" },
                    "ulti": { "nombre": "Multicast", "tipo": "Buff" }
                },
                "Counters": [
                    { "name": "Silencer", "CounterDesc": "Silencer puede desactivar las habilidades de Ogre Magi con Global Silence, limitando su capacidad de iniciar y apoyar a su equipo.", "CounterScore": "90%" },
                    { "name": "Lina", "CounterDesc": "Lina puede infligir daño a distancia y aturdir a Ogre Magi con su combo de habilidades, explotando su baja movilidad.", "CounterScore": "85%" },
                    { "name": "Invoker", "CounterDesc": "Invoker puede controlar a Ogre Magi con Tornado y EMP, debilitándolo significativamente en las peleas.", "CounterScore": "85%" },
                    { "name": "Shadow Shaman", "CounterDesc": "Shadow Shaman puede atrapar a Ogre Magi con Shackles y Hex, neutralizando sus habilidades de iniciación.", "CounterScore": "80%" },
                    { "name": "Ancient Apparition", "CounterDesc": "Ancient Apparition puede negar la curación adicional de Ogre Magi con Ice Blast, limitando su sostenibilidad en peleas prolongadas.", "CounterScore": "85%" }
                ],
                "Sinergia": [
                    { "name": "Juggernaut", "SinergDesc": "Ogre Magi puede aumentar la velocidad de ataque y movimiento de Juggernaut con Bloodlust, mejorando su capacidad de infligir daño.", "SinergScore": "90%" },
                    { "name": "Lifestealer", "SinergDesc": "Ogre Magi puede usar Bloodlust para aumentar la velocidad de ataque y movimiento de Lifestealer, haciéndolo aún más peligroso en peleas.", "SinergScore": "85%" },
                    { "name": "Faceless Void", "SinergDesc": "Bloodlust de Ogre Magi aumenta la velocidad de ataque de Faceless Void, complementando su habilidad de control en Chronosphere.", "SinergScore": "85%" },
                    { "name": "Phantom Assassin", "SinergDesc": "Phantom Assassin se beneficia enormemente de Bloodlust de Ogre Magi, aumentando su velocidad de ataque y movimiento para causar más daño crítico.", "SinergScore": "80%" },
                    { "name": "Medusa", "SinergDesc": "Bloodlust de Ogre Magi puede aumentar la eficacia de Medusa en peleas prolongadas, permitiéndole mantenerse con vida y causar más daño.", "SinergScore": "85%" }
                ],
                "objetivo": "Utilizar Fireblast para aturdir a los enemigos, Ignite para aplicar daño continuo, Bloodlust para aumentar las capacidades de tus aliados, y aprovechar Multicast para maximizar el impacto de tus habilidades."
            },
            {
                "name": "Omniknight",
                "img": "img/heroes/omniknight.png",
                "rol": "Tanque, Support",
                "complejidad": 1,
                "atributo": "fuerza",
                "habilidades": {
                    "primera": { "nombre": "Purification", "tipo": "Curación/Área" },
                    "segunda": { "nombre": "Heavenly Grace", "tipo": "Buff" },
                    "pasiva": { "nombre": "Degen Aura", "tipo": "Debuff" },
                    "ulti": { "nombre": "Guardian Angel", "tipo": "Buff/Área" }
                },
                "Counters": [
                    { "name": "Ancient Apparition", "CounterDesc": "Ancient Apparition puede negar la curación de Omniknight con Ice Blast, haciendo que Purification sea menos efectivo.", "CounterScore": "90%" },
                    { "name": "Invoker", "CounterDesc": "Invoker puede desactivar a Omniknight con Tornado y EMP, reduciendo su efectividad en las peleas.", "CounterScore": "85%" },
                    { "name": "Silencer", "CounterDesc": "Silencer puede silenciar a Omniknight con Global Silence, impidiendo que use sus habilidades cruciales en las peleas.", "CounterScore": "85%" },
                    { "name": "Shadow Demon", "CounterDesc": "Shadow Demon puede desactivar a Omniknight con Disruption y deshacer sus buffs con Demonic Purge.", "CounterScore": "80%" },
                    { "name": "Doom", "CounterDesc": "Doom puede anular completamente las habilidades de Omniknight con su ultimate, dejando a su equipo vulnerable.", "CounterScore": "90%" }
                ],
                "Sinergia": [
                    { "name": "Lifestealer", "SinergDesc": "Omniknight puede aumentar la durabilidad de Lifestealer con Heavenly Grace y Purification, permitiéndole mantenerse en la pelea por más tiempo.", "SinergScore": "90%" },
                    { "name": "Sven", "SinergDesc": "Omniknight puede apoyar a Sven con Heavenly Grace, aumentando su resistencia y permitiéndole infligir más daño con God's Strength.", "SinergScore": "85%" },
                    { "name": "Juggernaut", "SinergDesc": "Omniknight puede curar a Juggernaut con Purification y aumentar su resistencia con Heavenly Grace, maximizando su tiempo de actividad en peleas.", "SinergScore": "85%" },
                    { "name": "Phantom Assassin", "SinergDesc": "Omniknight puede proporcionar curación y resistencia a Phantom Assassin, permitiéndole ser más agresiva y efectiva en combate.", "SinergScore": "80%" },
                    { "name": "Wraith King", "SinergDesc": "Omniknight puede mejorar la supervivencia de Wraith King con Purification y Guardian Angel, haciéndolo más difícil de matar en peleas prolongadas.", "SinergScore": "85%" }
                ],
                "objetivo": "Utilizar Purification para curar a los aliados y dañar a los enemigos, Heavenly Grace para proporcionar resistencia adicional, Degen Aura para ralentizar a los enemigos cercanos, y Guardian Angel para proteger a tu equipo en momentos críticos."
            },
            {
                "name": "Primal Beast",
                "img": "img/heroes/primal_beast.png",
                "rol": "Tanque, Mid",
                "complejidad": 1,
                "atributo": "fuerza",
                "habilidades": {
                    "primera": { "nombre": "Onslaught", "tipo": "Daño físico" },
                    "segunda": { "nombre": "Trample", "tipo": "Daño mágico" },
                    "pasiva": { "nombre": "Uproar", "tipo": "Buff" },
                    "ulti": { "nombre": "Pulverize", "tipo": "Stun" }
                },
                "Counters": [
                    { "name": "Invoker", "CounterDesc": "Invoker puede desactivar a Primal Beast con Tornado y EMP, reduciendo su efectividad en las peleas.", "CounterScore": "85%" },
                    { "name": "Tinker", "CounterDesc": "Tinker puede mantener a Primal Beast a raya con su daño a larga distancia y teletransportarse lejos de su alcance.", "CounterScore": "85%" },
                    { "name": "Ancient Apparition", "CounterDesc": "Ancient Apparition puede negar la curación adicional de Primal Beast con Ice Blast, limitando su sostenibilidad en peleas prolongadas.", "CounterScore": "85%" },
                    { "name": "Bane", "CounterDesc": "Bane puede desactivar a Primal Beast con Fiend's Grip, manteniéndolo fuera de combate durante peleas cruciales.", "CounterScore": "80%" },
                    { "name": "Pugna", "CounterDesc": "Pugna,puede desactivar a Primal Beast con Decrepify y Life Drain, limitando su capacidad para hacer daño físico.", "CounterScore": "85%" }
                    ],
                    "Sinergia": [
                    { "name": "Snapfire", "SinergDesc": "Snapfire puede proporcionar daño adicional con su ultimate y utilizar su habilidad Cookie para mejorar la movilidad de Primal Beast.", "SinergScore": "85%" },
                    { "name": "Dark Seer", "SinergDesc": "Dark Seer puede agrupar a los enemigos con Vacuum y permitir que Primal Beast cause daño masivo con su combinación de habilidades.", "SinergScore": "80%" },
                    { "name": "Phoenix", "SinergDesc": "Phoenix puede proporcionar curación y daño adicional con Supernova, ayudando a Primal Beast a mantenerse en la pelea.", "SinergScore": "80%" },
                    { "name": "Shadow Shaman", "SinergDesc": "Shadow Shaman puede controlar a los enemigos con Shackles y Hex, permitiendo a Primal Beast infligir más daño.", "SinergScore": "85%" },
                    { "name": "Grimstroke", "SinergDesc": "Grimstroke puede aumentar el daño de Primal Beast con su habilidad Inkswell y proporcionar control adicional con Soulbind.", "SinergScore": "80%" }
                    ],
                    "objetivo": "Utilizar Onslaught para entrar en combate y causar daño físico, Trample para infligir daño mágico a múltiples enemigos, Uproar para aumentar su resistencia y Pulverize para aturdir y eliminar objetivos clave en las peleas."
                },
                {
                    "name": "Pudge",
                    "img": "img/heroes/pudge.png",
                    "rol": "Iniciador",
                    "complejidad": 2,
                    "atributo": "fuerza",
                    "habilidades": {
                    "primera": { "nombre": "Meat Hook", "tipo": "Control" },
                    "segunda": { "nombre": "Rot", "tipo": "Daño mágico" },
                    "pasiva": { "nombre": "Flesh Heap", "tipo": "Buff" },
                    "ulti": { "nombre": "Dismember", "tipo": "Stun" }
                    },
                    "Counters": [
                    { "name": "Anti-Mage", "CounterDesc": "Anti-Mage puede evitar el control de Pudge con Blink y quemar su maná con Mana Break.", "CounterScore": "90%" },
                    { "name": "Silencer", "CounterDesc": "Silencer puede desactivar las habilidades de Pudge con Global Silence, impidiéndole iniciar y controlar en peleas.", "CounterScore": "85%" },
                    { "name": "Outworld Destroyer", "CounterDesc": "Outworld Destroyer puede banear a Pudge con Astral Imprisonment, evitando su combo de habilidades.", "CounterScore": "85%" },
                    { "name": "Oracle", "CounterDesc": "Oracle puede salvar a sus aliados del combo de Pudge con False Promise y dispel con Fortune's End.", "CounterScore": "80%" },
                    { "name": "Phoenix", "CounterDesc": "Phoenix puede utilizar Supernova y Sun Ray para dañar y desactivar a Pudge en las peleas.", "CounterScore": "80%" }
                    ],
                    "Sinergia": [
                    { "name": "Crystal Maiden", "SinergDesc": "Crystal Maiden puede proporcionar control adicional con Frostbite y Freezing Field, permitiendo a Pudge conectar sus habilidades.", "SinergScore": "85%" },
                    { "name": "Lifestealer", "SinergDesc": "Lifestealer puede infestar a Pudge y utilizar su Hook para iniciar peleas de manera efectiva.", "SinergScore": "80%" },
                    { "name": "Shadow Shaman", "SinergDesc": "Shadow Shaman puede atrapar a los enemigos con Shackles y Hex, facilitando el combo de Pudge.", "SinergScore": "85%" },
                    { "name": "Disruptor", "SinergDesc": "Disruptor puede atrapar a los enemigos con Kinetic Field y Static Storm, permitiendo a Pudge usar su combo con mayor efectividad.", "SinergScore": "80%" },
                    { "name": "Rubick", "SinergDesc": "Rubick puede robar habilidades útiles y proporcionar control adicional, mejorando la capacidad de iniciación de Pudge.", "SinergScore": "85%" }
                    ],
                    "objetivo": "Utilizar Meat Hook para atraer a los enemigos, Rot para infligir daño continuo, Flesh Heap para aumentar la durabilidad y Dismember para aturdir y eliminar objetivos clave en las peleas."
                    },
                    {
                        "name": "Slardar",
                        "img": "img/heroes/slardar.png",
                        "rol": "Iniciador, Tanque",
                        "complejidad": 2,
                        "atributo": "fuerza",
                        "habilidades": {
                        "primera": { "nombre": "Sprint", "tipo": "Buff" },
                        "segunda": { "nombre": "Slithereen Crush", "tipo": "Stun/Área" },
                        "pasiva": { "nombre": "Bash of the Deep", "tipo": "Stun" },
                        "ulti": { "nombre": "Corrosive Haze", "tipo": "Debuff" }
                        },
                        "Counters": [
                        { "name": "Tinker", "CounterDesc": "Tinker puede mantener a Slardar a raya con su daño a larga distancia y teletransportarse lejos de su alcance.", "CounterScore": "85%" },
                        { "name": "Anti-Mage", "CounterDesc": "Anti-Mage puede evitar el control de Slardar con Blink y quemar su maná con Mana Break.", "CounterScore": "90%" },
                        { "name": "Invoker", "CounterDesc": "Invoker puede controlar a Slardar con Tornado y EMP, debilitándolo significativamente en las peleas.", "CounterScore": "85%" },
                        { "name": "Venomancer", "CounterDesc": "Venomancer puede aplicar daño continuo con Venomous Gale y Poison Nova, limitando la eficacia de la regeneración de Slardar.", "CounterScore": "80%" },
                        { "name": "Phoenix", "CounterDesc": "Phoenix puede desactivar a Slardar con Supernova y Sun Ray, impidiendo su capacidad de iniciar peleas.", "CounterScore": "80%" }
                        ],
                        "Sinergia": [
                        { "name": "Lifestealer", "SinergDesc": "Slardar puede facilitar que Lifestealer inflija daño con Corrosive Haze y controlar a los enemigos con Slithereen Crush.", "SinergScore": "90%" },
                        { "name": "Shadow Fiend", "SinergDesc": "Shadow Fiend se beneficia del control de Slardar y puede infligir daño masivo mientras los enemigos están debilitados.", "SinergScore": "85%" },
                        { "name": "Drow Ranger", "SinergDesc": "Drow Ranger puede infligir más daño con la reducción de armadura proporcionada por Corrosive Haze de Slardar.", "SinergScore": "85%" },
                        { "name": "Sven", "SinergDesc": "Sven puede aprovechar el control de Slardar para posicionarse y usar su God’s Strength para infligir daño masivo.", "SinergScore": "80%" },
                        { "name": "Legion Commander", "SinergDesc": "Legion Commander puede iniciar duelos con la ayuda del control de Slardar y aprovechar la reducción de armadura de Corrosive Haze.", "SinergScore": "80%" }
                        ],
                        "objetivo": "Utilizar Sprint para moverse rápidamente hacia los enemigos, Slithereen Crush para aturdir a múltiples objetivos, Bash of the Deep para infligir daño adicional y Corrosive Haze para reducir la armadura de los enemigos y facilitar su eliminación."
                        },
                        {
                            "name": "Spirit Breaker",
                            "img": "img/heroes/spirit_breaker.png",
                            "rol": "Iniciador, Tanque",
                            "complejidad": 2,
                            "atributo": "fuerza",
                            "habilidades": {
                                "primera": { "nombre": "Charge of Darkness", "tipo": "Stun" },
                                "segunda": { "nombre": "Bulldoze", "tipo": "Buff" },
                                "pasiva": { "nombre": "Greater Bash", "tipo": "Stun" },
                                "ulti": { "nombre": "Nether Strike", "tipo": "Stun" }
                            },
                            "Counters": [
                                { "name": "Shadow Demon", "CounterDesc": "La Purga Demoníaca de Shadow Demon puede eliminar Bulldoze de Spirit Breaker, reduciendo su velocidad de movimiento y vulnerabilidad a ser controlado por los enemigos durante las peleas.", "CounterScore": "80%" },
                                { "name": "Pugna", "CounterDesc": "Decrepify de Pugna puede reducir el daño de Spirit Breaker y aumentar el daño recibido, debilitando su capacidad de luchar eficazmente contra los enemigos y obligándolo a retirarse en peleas prolongadas.", "CounterScore": "75%" },
                                { "name": "Keeper of the Light", "CounterDesc": "La Iluminación de Keeper of the Light puede mantener a Spirit Breaker visible y reducir su velocidad de movimiento, dificultando su capacidad de sorprender a los enemigos con Charge of Darkness y Nether Strike.", "CounterScore": "70%" }
                            ],
                            "Sinergia": [
                                { "name": "Io", "SinergDesc": "La Carga Espiritual de Io puede aumentar la velocidad de movimiento de Spirit Breaker y le permite reubicarse rápidamente para utilizar Charge of Darkness y Nether Strike de manera más efectiva, mejorando su capacidad de iniciación y control de enemigos.", "SinergScore": "80%" },
                                { "name": "Dark Seer", "SinergDesc": "La Pared de Réplicas de Dark Seer puede duplicar las habilidades de Spirit Breaker, multiplicando su capacidad de control y daño en las peleas de equipo al crear múltiples Nether Strikes y Greater Bashes.", "SinergScore": "75%" },
                                { "name": "Invoker", "SinergDesc": "El Tornado de Invoker puede levantar a los enemigos para que Spirit Breaker pueda cargar y conectar efectivamente con Charge of Darkness y Nether Strike, maximizando su impacto en las peleas de equipo.", "SinergScore": "70%" }
                            ],
                            "objetivo": "Utilizar Charge of Darkness para iniciar peleas y controlar enemigos con stuns. Bulldoze se activa para proporcionar inmunidad a control. Greater Bash proporciona stuns adicionales en ataques. Nether Strike se usa para dañar y aturdir objetivos específicos."
                        },
                        {
                            "name": "Sven",
                            "img": "img/heroes/sven.png",
                            "rol": "Carry",
                            "complejidad": 1,
                            "atributo": "fuerza",
                            "habilidades": {
                                "primera": { "nombre": "Storm Hammer", "tipo": "Stun/Area" },
                                "segunda": { "nombre": "Great Cleave", "tipo": "Daño físico" },
                                "pasiva": { "nombre": "Warcry", "tipo": "Buff" },
                                "ulti": { "nombre": "God's Strength", "tipo": "Buff" }
                            },
                            "Counters": [
                                { "name": "Enigma", "CounterDesc": "El Agujero Negro de Enigma puede atrapar a Sven y sus aliados antes de que pueda activar God's Strength, limitando su capacidad de infligir daño masivo y control en peleas de equipo.", "CounterScore": "80%" },
                                { "name": "Disruptor", "CounterDesc": "La Estática de Disruptor puede cancelar la activación de God's Strength de Sven y mantenerlo bajo control con su Glimpse y Campo Estático, limitando su movilidad y capacidad de ataque en las peleas.", "CounterScore": "75%" },
                                { "name": "Keeper of the Light", "CounterDesc": "La Iluminación de Keeper of the Light puede mantener a Sven visible y ralentizar su velocidad de movimiento, dificultando su capacidad de acercarse y eliminar a los enemigos con Storm Hammer y Great Cleave.", "CounterScore": "70%" }
                            ],
                            "Sinergia": [
                                { "name": "Magnus", "SinergDesc": "El Choque Sísmico de Magnus puede agrupar a los enemigos para que Sven pueda usar Storm Hammer y Great Cleave de manera más efectiva, maximizando su daño y control en las peleas de equipo.", "SinergScore": "80%" },
                                { "name": "Io", "SinergDesc": "La Carga Espiritual de Io puede mantener a Sven cerca de los enemigos y le permite reubicarse rápidamente para usar Storm Hammer y God's Strength de manera más efectiva, aumentando su capacidad de iniciar y eliminar objetivos clave.", "SinergScore": "75%" },
                                { "name": "Warlock", "SinergDesc": "El Caos que Warlock puede lanzar Fatal Bonds antes de que Sven use Storm Hammer y Great Cleave, multiplicando el daño infligido a los enemigos vinculados y aumentando su efectividad en las peleas de equipo.", "SinergScore": "70%" }
                            ],
                            "objetivo": "Utilizar Storm Hammer para aturdir a los enemigos y controlar el área. Great Cleave se activa para infligir daño físico en área. Warcry proporciona armadura adicional y velocidad de movimiento. God's Strength se activa para aumentar el daño de Sven y su equipo."
                        }
                        ,
    {
        "name": "Tidehunter",
        "img": "img/heroes/tidehunter.png",
        "rol": "Tanque, Iniciador",
        "complejidad": 2,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Gush", "tipo": "Debuff" },
            "segunda": { "nombre": "Kraken Shell", "tipo": "Buff" },
            "pasiva": { "nombre": "Anchor Smash", "tipo": "Daño físico" },
            "ulti": { "nombre": "Ravage", "tipo": "Stun" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "La Global Silence de Silencer puede prevenir que Tidehunter use Ravage en momentos cruciales, reduciendo su impacto en las peleas de equipo y limitando su capacidad de iniciación.", "CounterScore": "80%" },
            { "name": "Enigma", "CounterDesc": "El Agujero Negro de Enigma puede atrapar a Tidehunter y a sus aliados antes de que pueda activar Ravage, dejándolos vulnerables a combos devastadores de habilidades enemigas.", "CounterScore": "75%" },
            { "name": "Oracle", "CounterDesc": "La Falsa Promesa de Oracle puede negar todo el daño y el control causado por Ravage, permitiendo a los aliados de Oracle sobrevivir y reagruparse después del impacto inicial de Tidehunter.", "CounterScore": "70%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "El Rescate de Shallow Grave de Dazzle puede proteger a Tidehunter después de usar Ravage, permitiéndole mantenerse en la pelea y absorber más daño mientras su equipo sigue el combate.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "El Choque Sísmico de Magnus puede agrupar a los enemigos para que Tidehunter pueda activar Ravage de manera efectiva, maximizando su impacto en el control de masas durante las peleas de equipo.", "SinergScore": "75%" },
            { "name": "Lich", "SinergDesc": "La Cadena Frost de Lich puede ralentizar a los enemigos después de que Tidehunter use Ravage, facilitando que él y sus aliados persigan y eliminen a los enemigos afectados por el stun.", "SinergScore": "70%" }
        ],
        "objetivo": "Utilizar Gush para aplicar debuffs y reducir la armadura de los enemigos. Kraken Shell proporciona resistencia y elimina debuffs. Anchor Smash se usa para reducir el daño físico de los enemigos cercanos. Ravage se activa para controlar masivamente a los enemigos y permitir que los aliados sigan con combos devastadores."
    }
    ,
    {
        "name": "Timbersaw",
        "img": "img/heroes/shredder.png",
        "rol": "Tanque",
        "complejidad": 2,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Whirling Death", "tipo": "Daño puro" },
            "segunda": { "nombre": "Timber Chain", "tipo": "Daño puro" },
            "pasiva": { "nombre": "Reactive Armor", "tipo": "Buff" },
            "ulti": { "nombre": "Chakram", "tipo": "Daño puro" }
        },
        "Counters": [
            { "name": "Ancient Apparition", "CounterDesc": "La Explosión de Hielo de Ancient Apparition puede neutralizar la regeneración de vida de Reactive Armor de Timbersaw, dejándolo vulnerable a daños continuos y reduciendo su capacidad de sostenibilidad en peleas prolongadas.", "CounterScore": "80%" },
            { "name": "Bloodseeker", "CounterDesc": "El Rupture de Bloodseeker puede obligar a Timbersaw a permanecer en su lugar o a sufrir daños significativos al moverse, disminuyendo su capacidad de movilidad y supervivencia en las peleas.", "CounterScore": "75%" },
            { "name": "Terrorblade", "CounterDesc": "La Metamorfosis de Terrorblade puede permitirle infligir daño físico a Timbersaw antes de que Reactive Armor pueda regenerar su vida, aprovechando su debilidad en la fase inicial de las peleas.", "CounterScore": "70%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "El Aura Arcana de Crystal Maiden puede mantener el pool de mana de Timbersaw, permitiéndole usar Whirling Death y Chakram más frecuentemente durante las peleas y maximizando su daño potencial en el área.", "SinergScore": "80%" },
            { "name": "Dark Seer", "SinergDesc": "La Pared de Réplicas de Dark Seer puede duplicar las habilidades de Timbersaw, multiplicando su capacidad de daño y control en las peleas de equipo al crear múltiples Chakrams.", "SinergScore": "75%" },
            { "name": "Puck", "SinergDesc": "El Orbe Iridescente de Puck puede agrupar a los enemigos para que Timbersaw use Whirling Death y Chakram de manera más efectiva, maximizando su impacto en el daño y control de área.", "SinergScore": "70%" }
        ],
        "objetivo": "Utilizar Whirling Death y Timber Chain para infligir daño puro y moverse por el campo de batalla. Reactive Armor proporciona regeneración de vida y armadura adicional. Chakram se activa para aplicar daño continuo y control en un área amplia, asegurando kills y limitando la movilidad de los enemigos."
    },
    {
        "name": "Tiny",
        "img": "img/heroes/tiny.png",
        "rol": "Iniciador",
        "complejidad": 2,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Avalanche", "tipo": "Stun/Area/Mágico" },
            "segunda": { "nombre": "Toss", "tipo": "Control/Mágico" },
            "pasiva": { "nombre": "Tree Grab", "tipo": "Daño físico" },
            "ulti": { "nombre": "Grow", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "La Counterspell de Anti-Mage puede reflejar Avalanche y Toss de Tiny, debilitándolo significativamente en las peleas al reducir su capacidad de control y daño en área.", "CounterScore": "80%" },
            { "name": "Centaur Warrunner", "CounterDesc": "El Sello de Retorno de Centaur Warrunner puede devolverle a Tiny una gran cantidad de daño después de usar Avalanche y Toss, disminuyendo su capacidad de sobrevivencia en peleas prolongadas.", "CounterScore": "75%" },
            { "name": "Shadow Demon", "CounterDesc": "La Demonic Purge de Shadow Demon puede ralentizar a Tiny después de usar Avalanche y Toss, permitiendo que los enemigos lo alcancen y eliminen mientras sufre debuffs adicionales.", "CounterScore": "70%" }
        ],
        "Sinergia": [
            { "name": "Io", "SinergDesc": "La Carga Espiritual de Io puede aumentar la velocidad de movimiento de Tiny y le permite reubicarse rápidamente para usar Avalanche y Toss de manera más efectiva, aumentando su impacto en las peleas de equipo.", "SinergScore": "80%" },
            { "name": "Earthshaker", "SinergDesc": "El Fissure de Earthshaker puede agrupar a los enemigos para que Tiny pueda usar Avalanche y Toss de manera más efectiva, maximizando su control y daño en área durante las peleas de equipo.", "SinergScore": "75%" },
            { "name": "Shadow Fiend", "SinergDesc": "El Requiem de Almas de Shadow Fiend puede debilitar a los enemigos antes de que Tiny inicie con Avalanche y Toss, permitiéndole eliminar a los objetivos clave con mayor facilidad y seguridad.", "SinergScore": "70%" }
        ],
        "objetivo": "Utilizar Avalanche y Toss para controlar y dañar a los enemigos en un área amplia. Tree Grab se activa para aumentar el daño físico básico de Tiny. Grow aumenta su fuerza y tamaño, mejorando su capacidad de resistir y causar daño durante las peleas."
    },
    {
        "name": "Treant Protector",
        "img": "img/heroes/treant.png",
        "rol": "Soporte",
        "complejidad": 1,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Nature's Grasp", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Leech Seed", "tipo": "Curación" },
            "pasiva": { "nombre": "Living Armor", "tipo": "Curación" },
            "ulti": { "nombre": "Overgrowth", "tipo": "Root/Area" }
        },
        "Counters": [
            { "name": "Timbersaw", "CounterDesc": "El daño puro de Timbersaw puede atravesar fácilmente el Living Armor de Treant Protector, reduciendo su eficacia como proveedor de curación y protección.", "CounterScore": "80%" },
            { "name": "Venomancer", "CounterDesc": "El daño a lo largo del tiempo de Venomancer puede anular rápidamente la regeneración de Treant Protector proporcionada por Living Armor, dejándolo vulnerable en peleas prolongadas.", "CounterScore": "75%" },
            { "name": "Silencer", "CounterDesc": "La Global Silence de Silencer puede evitar que Treant Protector utilice su ulti, Overgrowth, en momentos cruciales durante las peleas, limitando su impacto en el control de masas.", "CounterScore": "70%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "El Aura Arcana de Crystal Maiden puede mantener el pool de mana de Treant Protector, permitiéndole utilizar Nature's Grasp y Overgrowth más frecuentemente durante las peleas.", "SinergScore": "80%" },
            { "name": "Luna", "SinergDesc": "Las Cuchillas Lunares de Luna pueden mejorar la presencia de Treant Protector en las peleas de equipo, aumentando su daño de salida y beneficiando a los aliados con Living Armor.", "SinergScore": "75%" },
            { "name": "Tiny", "SinergDesc": "El Ávalancha de Tiny puede agrupar a los enemigos para que Treant Protector pueda aplicar Nature's Grasp y Overgrowth de manera efectiva, maximizando el control del área.", "SinergScore": "70%" }
        ],
        "objetivo": "Utilizar Nature's Grasp y Living Armor para proporcionar control y protección a los aliados durante las peleas. Leech Seed se usa para curar a los aliados y dañar a los enemigos en un área cercana. Overgrowth se activa para asegurar el control de masas sobre los enemigos y permitir que los aliados ejecuten combos o escapen de situaciones peligrosas."
    },
    {
        "name": "Tusk",
        "img": "img/heroes/tusk.png",
        "rol": "Iniciador",
        "complejidad": 2,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Ice Shards", "tipo": "Control" },
            "segunda": { "nombre": "Snowball", "tipo": "Daño físico" },
            "pasiva": { "nombre": "Tag Team", "tipo": "Debuff" },
            "ulti": { "nombre": "Walrus Punch", "tipo": "Stun" }
        },
        "Counters": [
            { "name": "Juggernaut", "CounterDesc": "El Giro de Cuchillas de Juggernaut puede desactivar fácilmente la combinación de Snowball y Tag Team de Tusk, mitigando su daño y control en las peleas.", "CounterScore": "80%" },
            { "name": "Dark Willow", "CounterDesc": "La Raíces Aterradoras de Dark Willow puede atrapar a Tusk y evitar que use Snowball o escape con Ice Shards, limitando su movilidad y control en el campo de batalla.", "CounterScore": "75%" },
            { "name": "Vengeful Spirit", "CounterDesc": "El Swap de Vengeful Spirit puede interrumpir las iniciaciones de Tusk y reubicar a los aliados o separar a Tusk de su equipo, desbaratando sus planes de combate.", "CounterScore": "70%" }
        ],
        "Sinergia": [
            { "name": "Slardar", "SinergDesc": "El Amplificar Daño de Slardar puede aumentar el daño físico infligido por Snowball y Walrus Punch de Tusk, permitiéndole eliminar rápidamente a los objetivos clave en las peleas.", "SinergScore": "80%" },
            { "name": "Ancient Apparition", "SinergDesc": "La Explosión de Hielo de Ancient Apparition puede complementar el daño de Tusk, permitiéndole asegurar kills con Snowball y Walrus Punch en combinación con su habilidades de control.", "SinergScore": "75%" },
            { "name": "Phoenix", "SinergDesc": "La Supernova de Phoenix puede crear distracción y permitir que Tusk se posicione para un Snowball efectivo, desafiando a los enemigos a elegir entre destruir la Supernova o enfrentarse a Tusk y su equipo.", "SinergScore": "70%" }
        ],
        "objetivo": "Utilizar Ice Shards y Snowball para controlar y dañar a los enemigos durante las peleas. Tag Team se activa para aumentar el daño físico de Tusk y sus aliados. Walrus Punch debe ser utilizado para aturdir y eliminar a los enemigos vulnerables o importantes en las peleas."
    },
    {
        "name": "Underlord",
        "img": "img/heroes/abyssal_underlord.png",
        "rol": "Tanque",
        "complejidad": 2,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Firestorm", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Pit of Malice", "tipo": "Control" },
            "pasiva": { "nombre": "Atrophy Aura", "tipo": "Debuff" },
            "ulti": { "nombre": "Dark Rift", "tipo": "Teleportación/Global" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "La Global Silence de Silencer puede evitar que Underlord utilice Dark Rift para teletransportar a su equipo, negando su capacidad para reubicarse estratégicamente durante las peleas.", "CounterScore": "85%" },
            { "name": "Disruptor", "CounterDesc": "La Estática de Disruptor puede cancelar el intento de teletransporte de Underlord con Dark Rift, forzando a su equipo a luchar sin su presencia o perder la oportunidad de escapar.", "CounterScore": "80%" },
            { "name": "Shadow Demon", "CounterDesc": "La Demonic Purge de Shadow Demon puede ralentizar y reducir la eficacia de la huida de Underlord con Dark Rift, permitiendo que los enemigos lo alcancen y lo eliminen.", "CounterScore": "75%" }
        ],
        "Sinergia": [
            { "name": "Keeper of the Light", "SinergDesc": "La Forma Luminosa de Keeper of the Light puede mantener el pool de mana de Underlord, permitiéndole utilizar Firestorm y Dark Rift con más frecuencia durante las peleas y escapar de situaciones peligrosas.", "SinergScore": "80%" },
            { "name": "Ember Spirit", "SinergDesc": "El Resplandor de Fuego de Ember Spirit puede infligir daño adicional en el área afectada por Firestorm de Underlord, aumentando su potencial de daño y control en las peleas de equipo.", "SinergScore": "75%" },
            { "name": "Lycan", "SinergDesc": "El Aullido de Lycan puede aumentar la velocidad de movimiento de Underlord y sus aliados, permitiéndoles reubicarse rápidamente con Dark Rift y sorprender a los enemigos durante las peleas.", "SinergScore": "70%" }
        ],
        "objetivo": "Utilizar Firestorm para infligir daño mágico en un área amplia y controlar el campo de batalla. Pit of Malice se usa para asegurar el control y evitar que los enemigos escapen o persigan. Atrophy Aura debilita a los enemigos cercanos, reduciendo su potencial de daño. Dark Rift se activa para teletransportar a Underlord y a su equipo a ubicaciones estratégicas o para escapar de peleas desfavorables."
    }
    ,
    {
        "name": "Undying",
        "img": "img/heroes/undying.png",
        "rol": "Soporte, Tanque",
        "complejidad": 1,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Decay", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Soul Rip", "tipo": "Curación" },
            "pasiva": { "nombre": "Tombstone", "tipo": "Invocación" },
            "ulti": { "nombre": "Flesh Golem", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Ancient Apparition", "CounterDesc": "La Explosión de Hielo de Ancient Apparition puede evitar que Undying se cure efectivamente con Soul Rip y reducir su capacidad de sobrevivir en las peleas de equipo.", "CounterScore": "85%" },
            { "name": "Oracle", "CounterDesc": "El Edicto del Destino de Oracle puede desarmar a Undying, impidiéndole infligir daño con Decay y mitigando el impacto de Tombstone.", "CounterScore": "80%" },
            { "name": "Lifestealer", "CounterDesc": "El Festín de Lifestealer le permite sostenerse contra el acoso de Undying con Decay y sobrevivir más tiempo en los enfrentamientos.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "La Onda de Sombras y la Fosa de Sombra de Dazzle pueden mantener a Undying vivo durante las peleas de equipo, mejorando su durabilidad y permitiéndole usar Flesh Golem eficazmente.", "SinergScore": "85%" },
            { "name": "Luna", "SinergDesc": "La Bendición Lunar y las Cuchillas Lunares de Luna pueden amplificar la presencia de Undying en las peleas de equipo, aumentando su daño y proporcionando beneficios adicionales de aura.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "El Empower de Magnus puede potenciar los ataques de Undying, permitiéndole infligir más daño con Decay y Tombstone durante los enfrentamientos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Decay para debilitar a los enemigos y obtener ventaja en las peleas de equipo. Soul Rip se usa para curar a los aliados y a Undying mismo durante los escaramuzas. Tombstone se utiliza para crear distracción y obligar al enemigo a concentrarse en destruirlo, mientras que Flesh Golem se activa para aumentar la eficacia de Undying como tanque y proveedor de control en peleas prolongadas."
    },
    {
        "name": "Wraith King",
        "img": "img/heroes/skeleton_king.png",
        "rol": "Carry, Tanque",
        "complejidad": 1,
        "atributo": "fuerza",
        "habilidades": {
            "primera": { "nombre": "Wraithfire Blast", "tipo": "Stun" },
            "segunda": { "nombre": "Vampiric Spirit", "tipo": "Robo de vida" },
            "pasiva": { "nombre": "Mortal Strike", "tipo": "Crítico" },
            "ulti": { "nombre": "Reincarnation", "tipo": "Resurrección" }
        },
        "Counters": [
            { "name": "Ancient Apparition", "CounterDesc": "La Explosión de Hielo de Ancient Apparition puede evitar que Wraith King resucite con Reincarnation, anulando su capacidad de sobrevivir en las peleas.", "CounterScore": "85%" },
            { "name": "Timbersaw", "CounterDesc": "El daño puro de Timbersaw puede reducir rápidamente la salud de Wraith King, impidiéndole utilizar Reincarnation efectivamente.", "CounterScore": "80%" },
            { "name": "Faceless Void", "CounterDesc": "La Cronoesfera de Faceless Void puede aislar a Wraith King de su equipo, permitiendo que los enemigos se concentren y lo maten sin preocuparse por Reincarnation.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Ogre Magi", "SinergDesc": "El Vuelo de Sangre de Ogre Magi puede aumentar la velocidad de ataque de Wraith King, haciéndolo más efectivo en las peleas y aumentando sus posibilidades de activar Mortal Strike.", "SinergScore": "85%" },
            { "name": "Dazzle", "SinergDesc": "La Fosa de Sombra de Dazzle puede asegurar que Wraith King sobreviva el tiempo suficiente para usar Reincarnation, proporcionándole una segunda oportunidad en las peleas.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "El Empower de Magnus puede potenciar los ataques de Wraith King, aumentando su daño y mejorando su potencial de farmeo.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Wraithfire Blast para controlar y aturdir a los enemigos durante las peleas. Vampiric Spirit se utiliza para robar vida y regenerarse durante los enfrentamientos. Mortal Strike debe ser aprovechado para infligir daño crítico adicional en los golpes, mientras que Reincarnation se reserva para volver a la vida en las peleas prolongadas y mantener la presión sobre los enemigos."
    },
    {
        "name": "Anti-Mage",
        "img": "img/heroes/antimage.png",
        "rol": "Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Mana Break", "tipo": "Quema de mana" },
            "segunda": { "nombre": "Blink", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Counterspell", "tipo": "Buff" },
            "ulti": { "nombre": "Mana Void", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Lion", "CounterDesc": "La Drenaje de Mana de Lion puede agotar el pool de mana de Anti-Mage, reduciendo su efectividad en las peleas y evitando que use Blink.", "CounterScore": "85%" },
            { "name": "Keeper of the Light", "CounterDesc": "La Fuga de Mana de Keeper of the Light puede forzar a Anti-Mage a quedarse en su lugar o arriesgarse a perder mana, limitando su movilidad con Blink.", "CounterScore": "80%" },
            { "name": "Nyx Assassin", "CounterDesc": "La Quema de Mana de Nyx Assassin puede agotar rápidamente el pool de mana de Anti-Mage, haciéndolo vulnerable a los deshabilitadores y reduciendo su daño de salida.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "El Aura Arcana de Crystal Maiden puede mantener el pool de mana de Anti-Mage, permitiéndole usar Blink y Mana Void continuamente en las peleas.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "El Surge de Dark Seer puede aumentar la movilidad de Anti-Mage con Blink, permitiéndole perseguir a los enemigos o escapar de situaciones peligrosas.", "SinergScore": "80%" },
            { "name": "Shadow Demon", "SinergDesc": "La Disrupción de Shadow Demon puede preparar kills para Anti-Mage al aislar a los enemigos y permitirle quemar su mana con Mana Break.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Mana Break para quemar el mana de los enemigos y reducir su efectividad durante las peleas. Blink se utiliza para moverse rápidamente y evitar peligros. Counterspell se debe usar para mitigar los hechizos enemigos y proteger a Anti-Mage. Mana Void debe ser utilizado para infligir daño mágico masivo a enemigos con baja reserva de mana, especialmente al final de las peleas para asegurar kills."
    },
    {
        "name": "Arc Warden",
        "img": "img/heroes/arc_warden.png",
        "rol": "Mid, Carry",
        "complejidad": 3,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Flux", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Magnetic Field", "tipo": "Buff" },
            "pasiva": { "nombre": "Spark Wraith", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Tempest Double", "tipo": "Invocación" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "El Escudo de Hechizos de Anti-Mage reduce el daño recibido de las habilidades mágicas de Arc Warden como Flux y Spark Wraith.", "CounterScore": "85%" },
            { "name": "Silencer", "CounterDesc": "El Silencio Global de Silencer puede prevenir que Arc Warden use Magnetic Field y Tempest Double efectivamente durante peleas de equipo.", "CounterScore": "80%" },
            { "name": "Spirit Breaker", "CounterDesc": "Charge of Darkness y Nether Strike de Spirit Breaker pueden sorprender a Arc Warden y eliminarlo rápidamente antes de que pueda escapar.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Shadow Shaman", "SinergDesc": "Los controles de Shadow Shaman como Ataduras y Hex pueden preparar kills para Arc Warden durante las etapas tempranas y medias del juego.", "SinergScore": "85%" },
            { "name": "Oracle", "SinergDesc": "La Promesa Falsa y Llamas Purificadoras de Oracle pueden mantener a Arc Warden vivo durante peleas de equipo, permitiéndole infligir daño sostenido.", "SinergScore": "80%" },
            { "name": "Tinker", "SinergDesc": "La Marcha de las Máquinas y Rearm de Tinker pueden crear caos en peleas de equipo, permitiendo que Arc Warden se posicione y use Tempest Double efectivamente.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Flux y Spark Wraith para dañar a los enemigos y aplicar control durante las peleas. Magnetic Field se usa para protegerse y proteger a los aliados de ataques físicos, mientras que Tempest Double se usa para duplicar el impacto de Arc Warden en las peleas de equipo y asegurar objetivos."
    }
    ,
    {
        "name": "Bloodseeker",
        "img": "img/heroes/bloodseeker.png",
        "rol": "Mid, Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Bloodrage", "tipo": "Buff" },
            "segunda": { "nombre": "Blood Rite", "tipo": "Silencio/Area" },
            "pasiva": { "nombre": "Thirst", "tipo": "Buff" },
            "ulti": { "nombre": "Rupture", "tipo": "Daño puro" }
        },
        "Counters": [
            { "name": "Pugna", "CounterDesc": "La Decrepificación de Pugna puede prevenir que Bloodseeker inflija daño con ataques físicos y reducir la efectividad de Rupture.", "CounterScore": "85%" },
            { "name": "Oracle", "CounterDesc": "El Edicto del Destino de Oracle puede desarmar a Bloodseeker, impidiéndole atacar y usar Bloodrage efectivamente.", "CounterScore": "80%" },
            { "name": "Winter Wyvern", "CounterDesc": "La Abrazo Frío de Winter Wyvern puede proteger a los aliados del daño de Rupture y retrasar el impacto de Bloodseeker en peleas de equipo.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Shadow Demon", "SinergDesc": "La Disrupción y Captador de Almas de Shadow Demon amplifican el daño recibido por los enemigos, haciendo que sean objetivos más fáciles para Thirst y Rupture de Bloodseeker.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "El Vacío de Dark Seer puede agrupar a los enemigos para Blood Rite y Rupture, maximizando su efectividad en peleas de equipo.", "SinergScore": "80%" },
            { "name": "Pudge", "SinergDesc": "La Devorar y Pudrir de Pudge pueden mantener a los enemigos en su lugar para Blood Rite y Rupture, asegurando kills para Bloodseeker.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Bloodrage para aumentar el daño y velocidad de ataque. Blood Rite se usa para silenciar y controlar áreas durante peleas de equipo, mientras que Thirst proporciona visión y velocidad de movimiento adicional basada en la salud de los enemigos. Rupture debe ser utilizado para castigar a los enemigos que intentan escapar durante las peleas y maximizar el daño de Bloodseeker."
    }
    ,
    {
        "name": "Bounty Hunter",
        "img": "img/heroes/bounty_hunter.png",
        "rol": "Support, Mid",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Shuriken Toss", "tipo": "Daño físico" },
            "segunda": { "nombre": "Jinada", "tipo": "Debuff" },
            "pasiva": { "nombre": "Shadow Walk", "tipo": "Invisibilidad" },
            "ulti": { "nombre": "Track", "tipo": "Debuff" }
        },
        "Counters": [
            { "name": "Zeus", "CounterDesc": "La Ira de los Dioses de Zeus proporciona visión de Bounty Hunter cuando está invisible con Shadow Walk.", "CounterScore": "85%" },
            { "name": "Slardar", "CounterDesc": "El Daño Amplificado de Slardar proporciona visión verdadera de Bounty Hunter, haciéndolo vulnerable incluso cuando está invisible.", "CounterScore": "80%" },
            { "name": "Bounty Hunter", "CounterDesc": "La habilidad Track de Bounty Hunter puede revelar al verdadero Bounty Hunter, haciendo peligroso para él participar en peleas de equipo.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Riki", "SinergDesc": "La Nube de Humo de Riki puede cubrir las huellas de Bounty Hunter y proporcionar oportunidades para que escape o prepare kills con Track.", "SinergScore": "85%" },
            { "name": "Nyx Assassin", "SinergDesc": "La Vendetta e Impale de Nyx Assassin pueden preparar kills para Bounty Hunter al aturdir y deshabilitar a los enemigos.", "SinergScore": "80%" },
            { "name": "Nature's Prophet", "SinergDesc": "La Teleportación de Nature's Prophet puede proporcionar presencia global, permitiendo que Bounty Hunter coordine emboscadas y aplique Track a enemigos por todo el mapa.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Shuriken Toss para dañar y castigar a los enemigos durante las fases tempranas del juego. Jinada se usa para aplicar desventajas y reducir el daño del enemigo, mientras que Shadow Walk debe ser utilizado para moverse de forma sigilosa y buscar oportunidades de gank o escape. Track se usa para proporcionar visión y oro adicional para el equipo aliado, mejorando así la economía durante el juego."
    }
    ,
    {
        "name": "Clinkz",
        "img": "img/heroes/clinkz.png",
        "rol": "Mid, Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Strafe", "tipo": "Buff" },
            "segunda": { "nombre": "Searing Arrows", "tipo": "Daño físico" },
            "pasiva": { "nombre": "Skeleton Walk", "tipo": "Invisibilidad" },
            "ulti": { "nombre": "Death Pact", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Berserker's Call de Axe puede deshabilitar a Clinkz durante Strafe, haciéndolo vulnerable a ataques.", "CounterScore": "85%" },
            { "name": "Riki", "CounterDesc": "Smoke Screen de Riki puede evitar que Clinkz use efectivamente Skeleton Walk o Strafe, convirtiéndolo en un objetivo fácil.", "CounterScore": "80%" },
            { "name": "Bloodseeker", "CounterDesc": "La habilidad Thirst de Bloodseeker puede revelar a Clinkz cuando tiene poca salud, haciéndolo susceptible a ganks.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Shallow Grave y Shadow Wave de Dazzle pueden mantener a Clinkz vivo durante peleas de equipo, permitiéndole infligir daño sostenido con Searing Arrows.", "SinergScore": "85%" },
            { "name": "Beastmaster", "SinergDesc": "Primal Roar de Beastmaster puede preparar kills para Clinkz al deshabilitar enemigos, convirtiéndolos en blancos fáciles para Searing Arrows.", "SinergScore": "80%" },
            { "name": "Invoker", "SinergDesc": "Habilidades de control de Invoker como Tornado y Cold Snap pueden preparar kills para que Clinkz los asegure con Searing Arrows.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Strafe para maximizar la velocidad de ataque y Searing Arrows para dañar a los enemigos desde la distancia. Skeleton Walk debe ser utilizado para posicionarse y escapar, mientras que Death Pact se usa para fortalecer a Clinkz al eliminar súbditos neutrales o héroes enemigos debilitados."
    }
    ,
    {
        "name": "Drow Ranger",
        "img": "img/heroes/drow_ranger.png",
        "rol": "Carry, Mid",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Frost Arrows", "tipo": "Debuff" },
            "segunda": { "nombre": "Gust", "tipo": "Silencio/Area" },
            "pasiva": { "nombre": "Multishot", "tipo": "Daño físico" },
            "ulti": { "nombre": "Marksmanship", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Phantom Assassin", "CounterDesc": "Blur de Phantom Assassin y su alto daño explosivo pueden eliminar rápidamente a Drow Ranger antes de que pueda usar efectivamente sus habilidades.", "CounterScore": "85%" },
            { "name": "Windranger", "CounterDesc": "Windrun de Windranger puede negar la desaceleración de Frost Arrows y evadir los ataques de Drow Ranger durante Marksmanship.", "CounterScore": "80%" },
            { "name": "Storm Spirit", "CounterDesc": "La movilidad de Storm Spirit y el disable de Electric Vortex pueden atrapar a Drow Ranger desprevenida y eliminarla rápidamente.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Vengeful Spirit", "SinergDesc": "Wave of Terror de Vengeful Spirit reduce la armadura del enemigo, mejorando la producción de daño físico de Drow Ranger con Multishot y Marksmanship.", "SinergScore": "85%" },
            { "name": "Mirana", "SinergDesc": "Sacred Arrow y Starstorm de Mirana pueden preparar kills para Drow Ranger durante las etapas tempranas y medias del juego.", "SinergScore": "80%" },
            { "name": "Shadow Demon", "SinergDesc": "Disruption y Soul Catcher de Shadow Demon amplifican el daño recibido por los enemigos, haciendo que sean objetivos más fáciles para Multishot de Drow Ranger.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Frost Arrows para ralentizar y controlar a los enemigos, y Gust para silenciar y despejar áreas. Multishot debe ser utilizado para dañar a múltiples enemigos durante peleas de equipo, mientras que Marksmanship aumenta significativamente el daño de Drow Ranger cuando está sola."
    }
    ,
    {
        "name": "Ember Spirit",
        "img": "img/heroes/ember_spirit.png",
        "rol": "Mid",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Searing Chains", "tipo": "Control" },
            "segunda": { "nombre": "Sleight of Fist", "tipo": "Daño físico" },
            "pasiva": { "nombre": "Flame Guard", "tipo": "Escudo" },
            "ulti": { "nombre": "Fire Remnant", "tipo": "Movilidad" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "Last Word y Global Silence de Silencer pueden prevenir que Ember Spirit use sus habilidades efectivamente durante peleas de equipo.", "CounterScore": "85%" },
            { "name": "Clockwerk", "CounterDesc": "Battery Assault y Power Cogs de Clockwerk pueden atrapar a Ember Spirit y prevenir que escape con Fire Remnant.", "CounterScore": "80%" },
            { "name": "Spirit Breaker", "CounterDesc": "Charge of Darkness y Nether Strike de Spirit Breaker pueden sorprender a Ember Spirit y eliminarlo rápidamente antes de que reaccione.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Magnus", "SinergDesc": "Reverse Polarity de Magnus puede agrupar a los enemigos para que Ember Spirit los golpee con Sleight of Fist y Searing Chains.", "SinergScore": "85%" },
            { "name": "Earthshaker", "SinergDesc": "Fissure de Earthshaker puede preparar kills para Ember Spirit durante las etapas tempranas y medias del juego.", "SinergScore": "80%" },
            { "name": "Shadow Fiend", "SinergDesc": "Requiem of Souls de Shadow Fiend puede crear caos en peleas de equipo, permitiendo a Ember Spirit capitalizar con Sleight of Fist y Searing Chains.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Searing Chains para controlar y encadenar a los enemigos, mientras que Sleight of Fist proporciona daño en área y movilidad. Flame Guard debe ser usado para protegerse de daño mágico y absorber habilidades enemigas, mientras que Fire Remnant se usa para escapar o reubicarse durante peleas de equipo."
    }
    ,
    {
        "name": "Faceless Void",
        "img": "img/heroes/faceless_void.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Time Walk", "tipo": "Movilidad" },
            "segunda": { "nombre": "Time Dilation", "tipo": "Debuff" },
            "pasiva": { "nombre": "Time Lock", "tipo": "Stun" },
            "ulti": { "nombre": "Chronosphere", "tipo": "Stun/Area" }
        },
        "Counters": [
            { "name": "Oracle", "CounterDesc": "False Promise de Oracle puede negar los efectos de Chronosphere y salvar a los aliados atrapados dentro.", "CounterScore": "85%" },
            { "name": "Shadow Demon", "CounterDesc": "Disruption de Shadow Demon puede salvar a los aliados del Chronosphere y permitirles reposicionarse.", "CounterScore": "80%" },
            { "name": "Winter Wyvern", "CounterDesc": "Cold Embrace de Winter Wyvern puede proteger a los aliados del daño dentro de Chronosphere.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Lich", "SinergDesc": "Chain Frost de Lich puede causar un daño masivo dentro de Chronosphere, maximizando su efectividad.", "SinergScore": "85%" },
            { "name": "Skywrath Mage", "SinergDesc": "Mystic Flare de Skywrath Mage puede lanzarse dentro de Chronosphere para eliminar rápidamente a los enemigos atrapados.", "SinergScore": "80%" },
            { "name": "Enigma", "SinergDesc": "Black Hole de Enigma puede coordinarse con Chronosphere para controlar y dañar a los enemigos atrapados en ambas habilidades.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Time Walk para posicionarse y escapar durante peleas de equipo, mientras que Time Dilation se usa para ralentizar y debilitar a los enemigos. Time Lock debe ser utilizado para aturdir a los enemigos atrapados en Chronosphere, maximizando así el daño del equipo durante las peleas."
    }
    ,
    {
        "name": "Gyrocopter",
        "img": "img/heroes/gyrocopter.png",
        "rol": "Mid, Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Rocket Barrage", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Homing Missile", "tipo": "Stun" },
            "pasiva": { "nombre": "Flak Cannon", "tipo": "Daño físico" },
            "ulti": { "nombre": "Call Down", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Phantom Lancer", "CounterDesc": "Las ilusiones de Phantom Lancer pueden absorber el daño de Rocket Barrage y Flak Cannon, abrumando a Gyrocopter.", "CounterScore": "85%" },
            { "name": "Terrorblade", "CounterDesc": "El alto armadura y Reflection de Terrorblade puede reducir la efectividad de Gyrocopter en peleas de equipo.", "CounterScore": "80%" },
            { "name": "Winter Wyvern", "CounterDesc": "Cold Embrace de Winter Wyvern puede negar el daño de Rocket Barrage y Call Down contra un solo objetivo.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Io", "SinergDesc": "Tether y Overcharge de Io aumentan la supervivencia y la velocidad de ataque de Gyrocopter durante las peleas.", "SinergScore": "85%" },
            { "name": "Disruptor", "SinergDesc": "Static Storm y Kinetic Field pueden preparar Call Down de Gyrocopter para una máxima efectividad.", "SinergScore": "80%" },
            { "name": "Dark Seer", "SinergDesc": "Vacuum puede agrupar a los enemigos para que Gyrocopter los golpee con Rocket Barrage y Call Down.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Rocket Barrage y Flak Cannon para maximizar el daño en áreas durante peleas de equipo. Homing Missile debe ser usado para controlar y aturdir a un objetivo específico, mientras que Call Down se usa para dañar y ralentizar a múltiples enemigos."
    }
    ,
    {
        "name": "Hoodwink",
        "img": "img/heroes/hoodwink.png",
        "rol": "Iniciador, Support",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Acorn Shot", "tipo": "Daño físico" },
            "segunda": { "nombre": "Bushwhack", "tipo": "Stun/Area" },
            "pasiva": { "nombre": "Scurry", "tipo": "Buff" },
            "ulti": { "nombre": "Sharpshooter", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Oracle", "CounterDesc": "False Promise de Oracle puede negar el daño de Sharpshooter y salvar a los aliados apuntados por Bushwhack.", "CounterScore": "85%" },
            { "name": "Juggernaut", "CounterDesc": "Blade Fury de Juggernaut puede evitar que Hoodwink use eficazmente Bushwhack y Acorn Shot.", "CounterScore": "80%" },
            { "name": "Puck", "CounterDesc": "Phase Shift y la movilidad de Puck hacen que sea difícil para Hoodwink acertar combos de Bushwhack y Acorn Shot.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Earthshaker", "SinergDesc": "Fissure de Earthshaker puede preparar fácilmente combinaciones de Bushwhack y Sharpshooter para Hoodwink.", "SinergScore": "85%" },
            { "name": "Lina", "SinergDesc": "Light Strike Array y Laguna Blade de Lina pueden eliminar rápidamente a los enemigos atrapados por Bushwhack de Hoodwink.", "SinergScore": "80%" },
            { "name": "Dark Willow", "SinergDesc": "Terrorize y Bedlam de Dark Willow pueden crear caos en peleas de equipo configuradas por las habilidades de Hoodwink.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Acorn Shot para dañar y ralentizar a los enemigos, y Bushwhack para controlar áreas y aturdir a múltiples objetivos. Scurry proporciona movilidad y evasión, mientras que Sharpshooter debe utilizarse para causar daño significativo a un objetivo clave."
    }
    ,
    {
        "name": "Juggernaut",
        "img": "img/heroes/juggernaut.png",
        "rol": "Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Blade Fury", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Healing Ward", "tipo": "Curación" },
            "pasiva": { "nombre": "Blade Dance", "tipo": "Crítico" },
            "ulti": { "nombre": "Omnislash", "tipo": "Daño físico/Area" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "El Berserker's Call y Counter Helix de Axe pueden lidiar rápidamente con Juggernaut durante Blade Fury y Omnislash.", "CounterScore": "85%" },
            { "name": "Shadow Demon", "CounterDesc": "Disruption de Shadow Demon puede salvar a los aliados del daño de Omnislash, y su Soul Catcher reduce la HP efectiva de Juggernaut.", "CounterScore": "80%" },
            { "name": "Oracle", "CounterDesc": "False Promise de Oracle puede negar el daño de Omnislash y la curación de Healing Ward.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "Frostbite y Freezing Field de Crystal Maiden pueden controlar a los enemigos para que Juggernaut cause daño con Blade Fury y Omnislash.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Vacuum puede agrupar a los enemigos para que Juggernaut los golpee con Blade Fury y Omnislash.", "SinergScore": "80%" },
            { "name": "Warlock", "SinergDesc": "Chaotic Offering y Fatal Bonds de Warlock pueden amplificar el daño causado por Juggernaut durante las peleas de equipo.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Blade Fury para inmunidad mágica y daño en área, y Healing Ward para mantenerse y mantener al equipo saludable en peleas prolongadas. Blade Dance aumenta el potencial de crítico de Juggernaut, mientras que Omnislash debe utilizarse para dañar múltiples enemigos."
    }
    ,
    {
        "name": "Luna",
        "img": "img/heroes/luna.png",
        "rol": "Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Lucent Beam", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Moon Glaives", "tipo": "Daño físico" },
            "pasiva": { "nombre": "Lunar Blessing", "tipo": "Buff" },
            "ulti": { "nombre": "Eclipse", "tipo": "Daño mágico/Area" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "El Mana Break de Anti-Mage puede drenar rápidamente el mana de Luna, reduciendo su efectividad en peleas.", "CounterScore": "85%" },
            { "name": "Phantom Lancer", "CounterDesc": "Las ilusiones de Phantom Lancer pueden absorber el daño de Lucent Beam y abrumar a Luna en peleas de equipo.", "CounterScore": "80%" },
            { "name": "Chaos Knight", "CounterDesc": "Reality Rift y Chaos Bolt de Chaos Knight pueden eliminar rápidamente a Luna antes de que pueda usar Eclipse.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Shallow Grave y Shadow Wave pueden mantener a Luna viva durante las peleas, permitiéndole causar daño sostenido con Lucent Beam y Moon Glaives.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Empower mejora enormemente la producción de daño de Luna con Moon Glaives durante las peleas de equipo.", "SinergScore": "80%" },
            { "name": "Enigma", "SinergDesc": "Black Hole puede agrupar a los enemigos para que Luna los golpee con Eclipse y Moon Glaives.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Lucent Beam para dañar y controlar a los enemigos, mientras que Moon Glaives proporciona daño en área y limpia creeps. Lunar Blessing aumenta el daño de todo el equipo, y Eclipse debe usarse para dañar múltiples enemigos durante peleas de equipo."
    }
    ,
    {
        "name": "Medusa",
        "img": "img/heroes/medusa.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Split Shot", "tipo": "Daño físico" },
            "segunda": { "nombre": "Mystic Snake", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Mana Shield", "tipo": "Escudo" },
            "ulti": { "nombre": "Stone Gaze", "tipo": "Petrificación/Area" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "El Mana Break y Mana Void de Anti-Mage pueden drenar rápidamente el mana de Medusa.", "CounterScore": "85%" },
            { "name": "Usuarios de Diffusal Blade", "CounterDesc": "Héroes como Phantom Lancer y Juggernaut con Diffusal Blade pueden quemar el mana de Medusa y dificultar su efectividad.", "CounterScore": "80%" },
            { "name": "Invoker", "CounterDesc": "EMP de Invoker puede drenar el mana de Medusa, dejándola vulnerable en peleas.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Magnus", "SinergDesc": "Empower mejora enormemente la producción de daño de Medusa durante las peleas de equipo.", "SinergScore": "85%" },
            { "name": "Dazzle", "SinergDesc": "Shallow Grave y Shadow Wave mantienen a Medusa viva en las peleas, permitiéndole causar daño sostenido.", "SinergScore": "80%" },
            { "name": "Faceless Void", "SinergDesc": "Chronosphere permite a Medusa lanzar Stone Gaze de manera segura y causar daño mientras los enemigos están deshabilitados.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Split Shot para atacar a múltiples enemigos simultáneamente, Mystic Snake para dañar y robar mana, y Mana Shield para absorber daño y mantenerse viva en peleas prolongadas. Stone Gaze debe usarse para petrificar a los enemigos y cambiar el curso de las peleas."
    }
    ,
    {
        "name": "Meepo",
        "img": "img/heroes/meepo.png",
        "rol": "Carry, Medio",
        "complejidad": 3,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Earthbind", "tipo": "Root" },
            "segunda": { "nombre": "Poof", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Ransack", "tipo": "Robo de vida" },
            "ulti": { "nombre": "Divided We Stand", "tipo": "Multiplicación" }
        },
        "Counters": [
            { "name": "Ember Spirit", "CounterDesc": "Sleight of Fist y Searing Chains de Ember Spirit pueden controlar a múltiples Meepos y causar un daño significativo.", "CounterScore": "85%" },
            { "name": "Sven", "CounterDesc": "El alto daño explosivo de Sven con Great Cleave y God's Strength puede eliminar rápidamente a múltiples Meepos.", "CounterScore": "80%" },
            { "name": "Earthshaker", "CounterDesc": "Echo Slam de Earthshaker puede devastar a un grupo de Meepos debido a su proximidad.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Treant Protector", "SinergDesc": "Living Armor mantiene a Meepo y sus clones vivos durante más tiempo en las peleas.", "SinergScore": "85%" },
            { "name": "Witch Doctor", "SinergDesc": "Paralyzing Cask y Death Ward infligen daño a los enemigos agrupados por Earthbind de Meepo.", "SinergScore": "80%" },
            { "name": "Winter Wyvern", "SinergDesc": "Winter's Curse puede inmovilizar a los enemigos para que Meepo los elimine con Poof.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Earthbind para inmovilizar a los enemigos y Poof para teleportar a todos los Meepos al mismo lugar, maximizando el daño. Ransack proporciona sostenibilidad con robo de vida, mientras que Divided We Stand multiplica la presencia de Meepo en el campo de batalla."
    }
    ,
    {
        "name": "Monkey King",
        "img": "img/heroes/monkey_king.png",
        "rol": "Carry, Medio",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Boundless Strike", "tipo": "Stun" },
            "segunda": { "nombre": "Tree Dance", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Jingu Mastery", "tipo": "Buff" },
            "ulti": { "nombre": "Wukong's Command", "tipo": "Daño físico/Area" }
        },
        "Counters": [
            { "name": "Earthshaker", "CounterDesc": "Echo Slam de Earthshaker puede infligir un daño masivo a Monkey King y a sus soldados generados por Wukong's Command.", "CounterScore": "85%" },
            { "name": "Timbersaw", "CounterDesc": "Las habilidades de área de efecto de Timbersaw pueden destruir rápidamente a Monkey King y a sus soldados.", "CounterScore": "80%" },
            { "name": "Dark Willow", "CounterDesc": "Bedlam y Terrorize de Dark Willow pueden interrumpir a Monkey King y a sus soldados durante Wukong's Command.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Treant Protector", "SinergDesc": "Living Armor mantiene vivo a Monkey King y aumenta su durabilidad durante las peleas.", "SinergScore": "85%" },
            { "name": "Dazzle", "SinergDesc": "Shallow Grave y Shadow Wave permiten a Monkey King sobrevivir y causar más daño en peleas prolongadas.", "SinergScore": "80%" },
            { "name": "Io", "SinergDesc": "Relocate de Io puede llevar a Monkey King a peleas de equipo clave y aumentar su efectividad.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Boundless Strike para aturdir a múltiples enemigos, Tree Dance para moverse por el mapa y posicionar estratégicamente Wukong's Command. Jingu Mastery debe acumularse antes de activar Wukong's Command para maximizar el daño."
    },
    {
        "name": "Morphling",
        "img": "img/heroes/morphling.png",
        "rol": "Carry, Medio",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Waveform", "tipo": "Daño físico" },
            "segunda": { "nombre": "Adaptive Strike", "tipo": "Daño físico/Daño mágico" },
            "pasiva": { "nombre": "Attribute Shift", "tipo": "Buff" },
            "ulti": { "nombre": "Morph", "tipo": "Transformación" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Mana Break de Anti-Mage puede drenar el mana de Morphling, limitando su capacidad para lanzar hechizos.", "CounterScore": "85%" },
            { "name": "Ancient Apparition", "CounterDesc": "Ice Blast de Ancient Apparition evita que Morphling use Attribute Shift para regenerar salud.", "CounterScore": "80%" },
            { "name": "Silencer", "CounterDesc": "Global Silence puede evitar que Morphling use Morph para transformar sus atributos.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Shallow Grave permite a Morphling mantenerse vivo y seguir luchando incluso cuando está bajo en salud.", "SinergScore": "85%" },
            { "name": "Keeper of the Light", "SinergDesc": "Chakra Magic permite a Morphling usar Waveform y Adaptive Strike con más frecuencia.", "SinergScore": "80%" },
            { "name": "Shadow Demon", "SinergDesc": "Disruption puede preparar combinaciones fáciles de Adaptive Strike para Morphling.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Waveform para moverse rápidamente y causar daño en línea, Adaptive Strike para controlar a los enemigos y ajustar el tipo de daño según sea necesario, y Attribute Shift para ajustar los atributos según la situación. Morph debe usarse estratégicamente para maximizar las habilidades de supervivencia y daño de Morphling."
    },
    {
        "name": "Naga Siren",
        "img": "img/heroes/naga_siren.png",
        "rol": "Carry, Mid",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Mirror Image", "tipo": "Ilusión" },
            "segunda": { "nombre": "Ensnare", "tipo": "Root" },
            "pasiva": { "nombre": "Rip Tide", "tipo": "Debuff" },
            "ulti": { "nombre": "Song of the Siren", "tipo": "Sleep" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Axe puede usar Berserker's Call para atrapar a Naga Siren y sus ilusiones, infligiendo daño significativo.", "CounterScore": "85%" },
            { "name": "Sven", "CounterDesc": "Sven's Cleave puede eliminar rápidamente las ilusiones de Naga Siren.", "CounterScore": "80%" },
            { "name": "Earthshaker", "CounterDesc": "Echo Slam inflige daño masivo a las ilusiones de Naga Siren.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Disruptor", "SinergDesc": "Song of the Siren permite un fácil combo con Static Storm y Kinetic Field.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Vacuum seguido de Song of the Siren asegura un posicionamiento perfecto para un combo devastador.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity y Song of the Siren pueden combinarse para agrupar a los enemigos y eliminarlos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Mirror Image para crear ilusiones y confundir al enemigo, Ensnare para atrapar a los enemigos en su lugar, y Rip Tide para reducir la armadura de los enemigos. Song of the Siren debe usarse estratégicamente para iniciar o escapar de peleas."
    },
    {
        "name": "Phantom Assassin",
        "img": "img/heroes/phantom_assassin.png",
        "rol": "Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Stifling Dagger", "tipo": "Daño físico" },
            "segunda": { "nombre": "Phantom Strike", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Blur", "tipo": "Evasión" },
            "ulti": { "nombre": "Coup de Grace", "tipo": "Crítico" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Axe puede atrapar a Phantom Assassin con Berserker's Call, ignorando su evasión.", "CounterScore": "85%" },
            { "name": "Bloodseeker", "CounterDesc": "Rupture impide que Phantom Assassin use Phantom Strike para escapar.", "CounterScore": "80%" },
            { "name": "Monkey King", "CounterDesc": "Monkey King puede enfrentarse a Phantom Assassin en combates uno a uno gracias a su Jingu Mastery.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Magnus", "SinergDesc": "Empower aumenta significativamente el daño de Phantom Assassin.", "SinergScore": "85%" },
            { "name": "Vengeful Spirit", "SinergDesc": "Wave of Terror y Vengeance Aura aumentan el daño de Phantom Assassin.", "SinergScore": "80%" },
            { "name": "Dazzle", "SinergDesc": "Shallow Grave y Shadow Wave ayudan a Phantom Assassin a sobrevivir y causar más daño en peleas.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Stifling Dagger para hostigar a los enemigos y asegurar eliminaciones, Phantom Strike para saltar a objetivos vulnerables y Blur para evitar ser objetivo de ataques enemigos. Coup de Grace debe usarse para infligir daño crítico masivo."
    },
    {
        "name": "Phantom Lancer",
        "img": "img/heroes/phantom_lancer.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Spirit Lance", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Doppelganger", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Phantom Rush", "tipo": "Buff" },
            "ulti": { "nombre": "Juxtapose", "tipo": "Ilusión" }
        },
        "Counters": [
            { "name": "Earthshaker", "CounterDesc": "Earthshaker's Echo Slam inflige daño masivo a las ilusiones de Phantom Lancer.", "CounterScore": "85%" },
            { "name": "Axe", "CounterDesc": "Axe's Berserker's Call y Counter Helix pueden eliminar rápidamente las ilusiones.", "CounterScore": "80%" },
            { "name": "Leshrac", "CounterDesc": "Leshrac's AoE habilidades pueden destruir ilusiones rápidamente.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Keeper of the Light", "SinergDesc": "Chakra Magic permite a Phantom Lancer usar habilidades más frecuentemente.", "SinergScore": "85%" },
            { "name": "Omniknight", "SinergDesc": "Repel y Guardian Angel permiten a Phantom Lancer sobrevivir en peleas prolongadas.", "SinergScore": "80%" },
            { "name": "Shadow Demon", "SinergDesc": "Disruption crea más ilusiones de Phantom Lancer, aumentando su caos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Spirit Lance para hostigar y ralentizar a los enemigos, Doppelganger para evadir habilidades y crear ilusiones, Phantom Rush para alcanzar a los enemigos rápidamente y Juxtapose para crear un ejército de ilusiones que confunden y abruman a los enemigos."
    },
    {
        "name": "Razor",
        "img": "img/heroes/razor.png",
        "rol": "Mid, Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Plasma Field", "tipo": "Daño mágico/Area" },
            "segunda": { "nombre": "Static Link", "tipo": "Robo de daño" },
            "pasiva": { "nombre": "Storm Surge", "tipo": "Buff" },
            "ulti": { "nombre": "Eye of the Storm", "tipo": "Daño físico" }
        },
        "Counters": [
            { "name": "Phantom Lancer", "CounterDesc": "Phantom Lancer's ilusiones pueden confundir a Razor y evitar que Static Link tenga éxito.", "CounterScore": "85%" },
            { "name": "Templar Assassin", "CounterDesc": "Refraction puede mitigar gran parte del daño de Razor.", "CounterScore": "80%" },
            { "name": "Viper", "CounterDesc": "Viper puede enfrentar a Razor en la línea gracias a su alto daño sostenido y habilidades de veneno.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Disruptor", "SinergDesc": "Static Storm y Kinetic Field aseguran que Razor puede mantener el Static Link.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Ion Shell y Surge aumentan la capacidad de Razor de perseguir y dañar enemigos.", "SinergScore": "80%" },
            { "name": "Clockwerk", "SinergDesc": "Power Cogs y Battery Assault permiten a Razor conectar y mantener Static Link.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Plasma Field para infligir daño en área y ralentizar a los enemigos, Static Link para robar daño de ataque y fortalecerse, y Storm Surge para aumentar la velocidad de movimiento. Eye of the Storm debe usarse para infligir daño físico continuo en peleas de equipo."
    },
    {
        "name": "Riki",
        "img": "img/heroes/riki.png",
        "rol": "Carry, Support",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Smoke Screen", "tipo": "Silencio/Area" },
            "segunda": { "nombre": "Blink Strike", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Cloak and Dagger", "tipo": "Invisibilidad" },
            "ulti": { "nombre": "Tricks of the Trade", "tipo": "Daño físico" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Axe puede usar Berserker's Call para atrapar a Riki en su Smoke Screen, revelándolo y dañándolo.", "CounterScore": "85%" },
            { "name": "Slardar", "CounterDesc": "Amplified Damage revela a Riki aunque esté invisible.", "CounterScore": "80%" },
            { "name": "Bloodseeker", "CounterDesc": "Thirst detecta a Riki cuando está bajo de vida, revelando su posición.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Disruptor", "SinergDesc": "Glimpse y Kinetic Field pueden mantener a los enemigos dentro de Smoke Screen por más tiempo.", "SinergScore": "85%" },
            { "name": "Crystal Maiden", "SinergDesc": "Frostbite y Freezing Field pueden hacer sinergia con el control de Smoke Screen.", "SinergScore": "80%" },
            { "name": "Bane", "SinergDesc": "Fiend's Grip y Nightmare combinados con Smoke Screen pueden desactivar a los enemigos durante largos periodos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Smoke Screen para silenciar y ralentizar a los enemigos, Blink Strike para moverse rápidamente entre objetivos y Cloak and Dagger para mantenerse invisible hasta el momento de atacar. Tricks of the Trade debe usarse para infligir daño físico masivo mientras se esquivan ataques enemigos."
    },
    {
        "name": "Shadow Fiend",
        "img": "img/heroes/nevermore.png",
        "rol": "Mid",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Shadowraze", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Necromastery", "tipo": "Buff" },
            "pasiva": { "nombre": "Presence of the Dark Lord", "tipo": "Debuff" },
            "ulti": { "nombre": "Requiem of Souls", "tipo": "Daño mágico/Area" }
        },
        "Counters": [
            { "name": "Tinker", "CounterDesc": "Tinker puede mantenerse a distancia y castigar a Shadow Fiend con habilidades de largo alcance.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Nyx puede usar Mana Burn y Spiked Carapace para interrumpir y contrarrestar a Shadow Fiend.", "CounterScore": "80%" },
            { "name": "Queen of Pain", "CounterDesc": "Queen of Pain puede acosar y matar a Shadow Fiend fácilmente en la fase de líneas.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Vengeful Spirit", "SinergDesc": "Wave of Terror y Vengeance Aura amplifican el daño de Shadow Fiend.", "SinergScore": "85%" },
            { "name": "Dazzle", "SinergDesc": "Shallow Grave permite a Shadow Fiend cargar Requiem of Souls sin temor a morir.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity agrupa a los enemigos para un devastador Requiem of Souls.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Shadowraze para infligir daño mágico a corta distancia, acumular almas con Necromastery para aumentar el daño de ataque y reducir la armadura enemiga con Presence of the Dark Lord. Requiem of Souls debe usarse para infligir un daño masivo en áreas grandes, especialmente al inicio de las peleas."
    },
    {
        "name": "Slark",
        "img": "img/heroes/slark.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Dark Pact", "tipo": "Daño mágico/Area" },
            "segunda": { "nombre": "Pounce", "tipo": "Root" },
            "pasiva": { "nombre": "Essence Shift", "tipo": "Debuff" },
            "ulti": { "nombre": "Shadow Dance", "tipo": "Invisibilidad" }
        },
        "Counters": [
            { "name": "Legion Commander", "CounterDesc": "Duel previene que Slark use Shadow Dance para escapar.", "CounterScore": "85%" },
            { "name": "Bloodseeker", "CounterDesc": "Rupture limita la movilidad de Slark, haciéndolo vulnerable.", "CounterScore": "80%" },
            { "name": "Axe", "CounterDesc": "Berserker's Call previene que Slark use sus habilidades para escapar.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dark Willow", "SinergDesc": "Cursed Crown y Bramble Maze pueden mantener a los enemigos en su lugar para que Slark los ataque.", "SinergScore": "85%" },
            { "name": "Shadow Shaman", "SinergDesc": "Hex y Shackles aseguran que Slark puede golpear libremente a sus enemigos.", "SinergScore": "80%" },
            { "name": "Crystal Maiden", "SinergDesc": "Frostbite y Freezing Field combinan bien con el control de Slark.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Dark Pact para limpiar efectos negativos y infligir daño en área, Pounce para atrapar a los enemigos y Essence Shift para robar atributos. Shadow Dance debe usarse tanto para iniciar peleas como para escapar cuando la situación se vuelve peligrosa."
    },
    {
        "name": "Sniper",
        "img": "img/heroes/sniper.png",
        "rol": "Mid, Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Shrapnel", "tipo": "Daño mágico/Area" },
            "segunda": { "nombre": "Headshot", "tipo": "Debuff" },
            "pasiva": { "nombre": "Take Aim", "tipo": "Buff" },
            "ulti": { "nombre": "Assassinate", "tipo": "Daño físico" }
        },
        "Counters": [
            { "name": "Storm Spirit", "CounterDesc": "Storm Spirit puede saltar sobre Sniper rápidamente y eliminarlo antes de que pueda reaccionar.", "CounterScore": "85%" },
            { "name": "Clockwerk", "CounterDesc": "Clockwerk puede atrapar a Sniper en Cogs, negando su rango y eliminándolo fácilmente.", "CounterScore": "80%" },
            { "name": "Phantom Assassin", "CounterDesc": "Phantom Assassin puede cerrar la distancia rápidamente y eliminar a Sniper con su alto daño crítico.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Vengeful Spirit", "SinergDesc": "Wave of Terror y Vengeance Aura aumentan el daño de Sniper.", "SinergScore": "85%" },
            { "name": "Disruptor", "SinergDesc": "Kinetic Field y Static Storm aseguran que los enemigos permanezcan en el área de Shrapnel.", "SinergScore": "80%" },
            { "name": "Treant Protector", "SinergDesc": "Living Armor y Overgrowth ayudan a Sniper a mantenerse a salvo mientras dispara desde lejos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Shrapnel para ralentizar y dañar a los enemigos en un área, Headshot para deshabilitar a los enemigos con ataques automáticos, y Take Aim para aumentar su alcance de ataque. Assassinate debe usarse para eliminar a objetivos débiles o de bajo HP a larga distancia."
    },
    {
        "name": "Spectre",
        "img": "img/heroes/spectre.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Spectral Dagger", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Desolate", "tipo": "Daño puro" },
            "pasiva": { "nombre": "Dispersion", "tipo": "Reflejo de daño" },
            "ulti": { "nombre": "Haunt", "tipo": "Invocación" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Axe puede usar Berserker's Call para forzar a Spectre a atacarlo, negando su daño de desolación.", "CounterScore": "85%" },
            { "name": "Lion", "CounterDesc": "Lion tiene un alto daño de explosión y control de masas, que puede eliminar a Spectre antes de que cause problemas.", "CounterScore": "80%" },
            { "name": "Bloodseeker", "CounterDesc": "Rupture limita la movilidad de Spectre, reduciendo la efectividad de Haunt.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Warlock", "SinergDesc": "Fatal Bonds combinado con Haunt puede causar un daño masivo a todo el equipo enemigo.", "SinergScore": "85%" },
            { "name": "Treant Protector", "SinergDesc": "Living Armor ayuda a Spectre a sobrevivir en peleas prolongadas.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity agrupa a los enemigos, permitiendo a Spectre maximizar su daño de desolación.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Spectral Dagger para moverse a través de terrenos y ralentizar a los enemigos, Desolate para infligir daño puro a enemigos aislados, y Dispersion para reflejar daño recibido. Haunt debe usarse para dividir y confundir al equipo enemigo, permitiendo a Spectre cazar soportes y causar caos en las peleas."
    },
    {
        "name": "Templar Assassin",
        "img": "img/heroes/templar_assassin.png",
        "rol": "Carry, Mid",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Refraction", "tipo": "Buff" },
            "segunda": { "nombre": "Meld", "tipo": "Invisibilidad" },
            "pasiva": { "nombre": "Psi Blades", "tipo": "Daño físico" },
            "ulti": { "nombre": "Psionic Trap", "tipo": "Slow" }
        },
        "Counters": [
            { "name": "Viper", "CounterDesc": "Nethertoxin desactiva Refraction, haciéndola vulnerable a ataques y habilidades.", "CounterScore": "85%" },
            { "name": "Venomancer", "CounterDesc": "El daño constante de Poison Sting y Venomous Gale anulan la Refraction de Templar Assassin rápidamente.", "CounterScore": "80%" },
            { "name": "Axe", "CounterDesc": "Berserker's Call puede atrapar a Templar Assassin, neutralizando su Refraction y Meld.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Shallow Grave permite a Templar Assassin mantenerse viva durante peleas prolongadas.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Empower aumenta significativamente el daño de Templar Assassin, complementando sus habilidades.", "SinergScore": "80%" },
            { "name": "Vengeful Spirit", "SinergDesc": "Wave of Terror reduce la armadura enemiga, amplificando el daño de Templar Assassin.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Refraction para mitigar daño y aumentar su daño de ataque, Meld para emboscar y esquivar habilidades, y Psi Blades para infligir daño de salpicadura a los enemigos en línea. Psionic Trap debe usarse estratégicamente para ralentizar y atrapar a los enemigos, permitiendo a Templar Assassin eliminar objetivos prioritarios rápidamente."
    },
    {
        "name": "Terrorblade",
        "img": "img/heroes/terrorblade.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Reflection", "tipo": "Debuff" },
            "segunda": { "nombre": "Conjure Image", "tipo": "Ilusión" },
            "pasiva": { "nombre": "Metamorphosis", "tipo": "Buff" },
            "ulti": { "nombre": "Sunder", "tipo": "Swap de vida" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Berserker's Call fuerza a Terrorblade y sus ilusiones a atacarlo, limitando su daño.", "CounterScore": "85%" },
            { "name": "Leshrac", "CounterDesc": "Diabolic Edict y Pulse Nova eliminan rápidamente las ilusiones de Terrorblade.", "CounterScore": "80%" },
            { "name": "Earthshaker", "CounterDesc": "Echo Slam inflige un gran daño a Terrorblade y sus ilusiones en peleas de equipo.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Shallow Grave permite a Terrorblade sobrevivir lo suficiente para usar Sunder.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Empower aumenta el daño de las ilusiones de Terrorblade, mejorando su potencial de daño.", "SinergScore": "80%" },
            { "name": "Dark Seer", "SinergDesc": "Wall of Replica crea más ilusiones de Terrorblade, maximizando su daño en peleas de equipo.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Reflection para ralentizar y debilitar a los enemigos, Conjure Image para crear poderosas ilusiones y Metamorphosis para aumentar su alcance y daño. Sunder debe usarse estratégicamente para cambiar la salud con un enemigo, asegurando su supervivencia y volteando la pelea a su favor."
    },
    {
        "name": "Troll Warlord",
        "img": "img/heroes/troll_warlord.png",
        "rol": "Carry, Mid",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Berserker's Rage", "tipo": "Transformación" },
            "segunda": { "nombre": "Whirling Axes (Melee)", "tipo": "Daño físico" },
            "pasiva": { "nombre": "Fervor", "tipo": "Buff" },
            "ulti": { "nombre": "Battle Trance", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Phantom Assassin", "CounterDesc": "Evasion puede dificultar que Troll Warlord acumule Fervor stacks rápidamente.", "CounterScore": "80%" },
            { "name": "Axe", "CounterDesc": "Berserker's Call puede atrapar a Troll y su equipo, causando problemas durante Battle Trance.", "CounterScore": "85%" },
            { "name": "Faceless Void", "CounterDesc": "Chronosphere puede mantener a Troll fuera de combate mientras su equipo es eliminado.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Shallow Grave puede mantener a Troll vivo durante Battle Trance, maximizando su daño.", "SinergScore": "85%" },
            { "name": "Ogre Magi", "SinergDesc": "Bloodlust aumenta la velocidad de ataque de Troll, complementando su Fervor.", "SinergScore": "80%" },
            { "name": "Disruptor", "SinergDesc": "Glimpse y Kinetic Field ayudan a mantener a los enemigos dentro del alcance de Troll.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Berserker's Rage para cambiar entre combate a distancia y cuerpo a cuerpo según la situación, Whirling Axes para infligir daño y reducir la precisión enemiga, y Fervor para aumentar su velocidad de ataque. Battle Trance debe usarse en momentos críticos para maximizar su daño y sobrevivir en peleas prolongadas."
    },
    {
        "name": "Ursa",
        "img": "img/heroes/ursa.png",
        "rol": "Carry",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Earthshock", "tipo": "Slow" },
            "segunda": { "nombre": "Overpower", "tipo": "Buff" },
            "pasiva": { "nombre": "Fury Swipes", "tipo": "Debuff" },
            "ulti": { "nombre": "Enrage", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Phoenix", "CounterDesc": "Fire Spirits reducen significativamente la velocidad de ataque de Ursa, contrarrestando Overpower.", "CounterScore": "80%" },
            { "name": "Winter Wyvern", "CounterDesc": "Winter's Curse puede hacer que Ursa y su equipo se ataquen entre sí, limitando su efectividad.", "CounterScore": "85%" },
            { "name": "Venomancer", "CounterDesc": "Sus habilidades de daño a lo largo del tiempo pueden desgastar a Ursa antes de que pueda entrar en combate.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "Frostbite y Crystal Nova ayudan a mantener a los enemigos en el alcance de Ursa.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Surge aumenta la movilidad de Ursa, permitiéndole cerrar la distancia rápidamente.", "SinergScore": "80%" },
            { "name": "Treant Protector", "SinergDesc": "Living Armor puede mantener a Ursa saludable en peleas prolongadas.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Earthshock para ralentizar a los enemigos y cerrar la distancia, Overpower para aumentar su velocidad de ataque y Fury Swipes para maximizar el daño en objetivos individuales. Enrage debe usarse para mitigar el daño recibido y prolongar su supervivencia en combate."
    },
    {
        "name": "Viper",
        "img": "img/heroes/viper.png",
        "rol": "Mid, Offlane",
        "complejidad": 1,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "Poison Attack", "tipo": "Debuff" },
            "segunda": { "nombre": "Nethertoxin", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Corrosive Skin", "tipo": "Debuff" },
            "ulti": { "nombre": "Viper Strike", "tipo": "Debuff" }
        },
        "Counters": [
            { "name": "Templar Assassin", "CounterDesc": "Su alta movilidad y Refraction la hacen difícil de atrapar y dañar consistentemente.", "CounterScore": "80%" },
            { "name": "Pugna", "CounterDesc": "Nether Ward y Decrepify pueden limitar la efectividad de Viper en peleas.", "CounterScore": "85%" },
            { "name": "Lifestealer", "CounterDesc": "Rage lo hace inmune a los debuffs de Viper, permitiéndole enfrentarlo directamente.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Dark Seer", "SinergDesc": "Vacuum agrupa a los enemigos, maximizando el daño de Nethertoxin.", "SinergScore": "85%" },
            { "name": "Disruptor", "SinergDesc": "Kinetic Field y Static Storm aseguran que los enemigos permanezcan dentro del rango de Viper.", "SinergScore": "80%" },
            { "name": "Venomancer", "SinergDesc": "Ambos pueden aplicar múltiples debuffs, haciendo que las peleas sean difíciles para el enemigo.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Poison Attack para hostigar y ralentizar a los enemigos, Nethertoxin para infligir daño y deshabilitar habilidades pasivas, y Corrosive Skin para disuadir ataques enemigos. Viper Strike debe usarse para asegurar bajas en enemigos clave, aprovechando su alta capacidad de ralentización y daño con el tiempo."
    },
    {
        "name": "Weaver",
        "img": "img/heroes/weaver.png",
        "rol": "Carry",
        "complejidad": 2,
        "atributo": "agilidad",
        "habilidades": {
            "primera": { "nombre": "The Swarm", "tipo": "Daño físico" },
            "segunda": { "nombre": "Shukuchi", "tipo": "Invisibilidad" },
            "pasiva": { "nombre": "Geminate Attack", "tipo": "Buff" },
            "ulti": { "nombre": "Time Lapse", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Bloodseeker", "CounterDesc": "Rupture limita la movilidad de Weaver, uno de sus puntos fuertes.", "CounterScore": "85%" },
            { "name": "Slardar", "CounterDesc": "Amplify Damage revela a Weaver incluso cuando usa Shukuchi.", "CounterScore": "80%" },
            { "name": "Bounty Hunter", "CounterDesc": "Track revela a Weaver y lo hace más vulnerable a emboscadas.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Treant Protector", "SinergDesc": "Living Armor puede mantener a Weaver saludable mientras usa Shukuchi para hostigar.", "SinergScore": "85%" },
            { "name": "Disruptor", "SinergDesc": "Glimpse puede devolver a los enemigos que intentan escapar después de que Weaver los haya debilitado.", "SinergScore": "80%" },
            { "name": "Invoker", "SinergDesc": "Alacrity y EMP pueden aumentar el daño de Weaver y limitar las opciones del enemigo.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar The Swarm para infligir daño sostenido y reducir la armadura enemiga, Shukuchi para moverse rápidamente y evadir ataques, y Geminate Attack para maximizar su daño en ráfagas. Time Lapse debe usarse para evitar la muerte, regresando a una posición segura con toda su salud."
    },
    {
        "name": "Ancient Apparition",
        "img": "img/heroes/ancient_apparition.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Cold Feet", "tipo": "Stun" },
            "segunda": { "nombre": "Ice Vortex", "tipo": "Slow" },
            "pasiva": { "nombre": "Chilling Touch", "tipo": "Buff" },
            "ulti": { "nombre": "Ice Blast", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Huskar", "CounterDesc": "Ice Blast previene la curación, anulando la regeneración de Huskar y su capacidad de sobrevivencia.", "CounterScore": "85%" },
            { "name": "Alchemist", "CounterDesc": "Ice Blast evita la regeneración de Chemical Rage, reduciendo drásticamente la durabilidad de Alchemist.", "CounterScore": "80%" },
            { "name": "Phoenix", "CounterDesc": "Ice Blast detiene la curación de Supernova y Sun Ray, contrarrestando la efectividad de Phoenix.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Invoker", "SinergDesc": "Cold Snap y Ice Vortex combinados con Ice Blast resultan en un daño masivo.", "SinergScore": "85%" },
            { "name": "Faceless Void", "SinergDesc": "Chronosphere asegura que los enemigos permanezcan dentro del área de efecto de Ice Blast.", "SinergScore": "85%" },
            { "name": "Tidehunter", "SinergDesc": "Ravage seguido de Ice Blast puede cambiar el curso de una pelea de equipo.", "SinergScore": "80%" }
        ],
        "objetivo": "Utilizar Cold Feet para mantener a los enemigos inmóviles, Ice Vortex para ralentizar y aumentar el daño mágico, y Chilling Touch para aumentar el daño a distancia de su equipo. Ice Blast debe usarse para prevenir la curación enemiga y asegurar eliminaciones rápidas."
    },
    {
        "name": "Crystal Maiden",
        "img": "img/heroes/crystal_maiden.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Crystal Nova", "tipo": "Slow" },
            "segunda": { "nombre": "Frostbite", "tipo": "Root" },
            "pasiva": { "nombre": "Arcane Aura", "tipo": "Buff" },
            "ulti": { "nombre": "Freezing Field", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Frostbite y Freezing Field limitan su movilidad y lo dejan vulnerable.", "CounterScore": "80%" },
            { "name": "Storm Spirit", "CounterDesc": "Sus habilidades de control interrumpen su alta movilidad y capacidad de escape.", "CounterScore": "85%" },
            { "name": "Slark", "CounterDesc": "Frostbite y Crystal Nova limitan su capacidad de robar estadísticas y escapar.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Sven", "SinergDesc": "Arcane Aura le proporciona maná adicional, permitiéndole spamear Storm Hammer.", "SinergScore": "85%" },
            { "name": "Juggernaut", "SinergDesc": "Frostbite y Crystal Nova lo ayudan a mantener a los enemigos en su Omnislash.", "SinergScore": "80%" },
            { "name": "Dark Seer", "SinergDesc": "Vacuum agrupa a los enemigos para maximizar el daño de Freezing Field.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Crystal Nova para ralentizar a los enemigos y reducir su capacidad de respuesta, Frostbite para inmovilizarlos y Arcane Aura para mantener a su equipo con suficiente maná. Freezing Field debe usarse en peleas en equipo para infligir un daño masivo en área y controlar a los enemigos."
    },
    {
        "name": "Death Prophet",
        "img": "img/heroes/death_prophet.png",
        "rol": "Mid, Pusher",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Crypt Swarm", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Silence", "tipo": "Silencio" },
            "pasiva": { "nombre": "Spirit Siphon", "tipo": "Robo de vida" },
            "ulti": { "nombre": "Exorcism", "tipo": "Daño físico" }
        },
        "Counters": [
            { "name": "Pugna", "CounterDesc": "Su habilidad Nether Ward puede infligir daño masivo a Death Prophet debido a su dependencia de las habilidades.", "CounterScore": "85%" },
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar su maná rápidamente, dejándola incapaz de usar Exorcism efectivamente.", "CounterScore": "80%" },
            { "name": "Silencer", "CounterDesc": "Global Silence interrumpe su habilidad de usar Exorcism y Spirit Siphon en peleas clave.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Tidehunter", "SinergDesc": "Ravage proporciona un gran control de área, permitiendo que Exorcism inflija daño sin interrupciones.", "SinergScore": "85%" },
            { "name": "Earthshaker", "SinergDesc": "Fissure y Echo Slam agrupan a los enemigos, maximizando el daño de Exorcism.", "SinergScore": "80%" },
            { "name": "Disruptor", "SinergDesc": "Kinetic Field y Static Storm aseguran que los enemigos permanezcan en el rango de Exorcism.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Crypt Swarm para hostigar y limpiar oleadas de creeps, Silence para interrumpir las habilidades de los enemigos, y Spirit Siphon para mantener su salud alta en peleas. Exorcism debe usarse para infligir un daño masivo en peleas en equipo y para derribar estructuras enemigas rápidamente."
    },
    {
        "name": "Disruptor",
        "img": "img/heroes/disruptor.png",
        "rol": "Support, Iniciador",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Thunder Strike", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Glimpse", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Kinetic Field", "tipo": "Debuff" },
            "ulti": { "nombre": "Static Storm", "tipo": "Silencio" }
        },
        "Counters": [
            { "name": "Storm Spirit", "CounterDesc": "Glimpse y Static Storm interrumpen su movilidad y capacidad de escape.", "CounterScore": "85%" },
            { "name": "Slark", "CounterDesc": "Glimpse y Static Storm limitan su capacidad de escapar y robar estadísticas.", "CounterScore": "80%" },
            { "name": "Anti-Mage", "CounterDesc": "Glimpse lo atrapa después de un Blink, y Static Storm impide que use sus habilidades.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Enigma", "SinergDesc": "Black Hole combinado con Static Storm y Kinetic Field asegura un control absoluto del enemigo.", "SinergScore": "85%" },
            { "name": "Tidehunter", "SinergDesc": "Ravage agrupa a los enemigos, permitiendo que Disruptor coloque Static Storm y Kinetic Field perfectamente.", "SinergScore": "80%" },
            { "name": "Dark Seer", "SinergDesc": "Vacuum agrupa a los enemigos para maximizar el daño y control de Static Storm y Kinetic Field.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Thunder Strike para hostigar y proporcionar visión, Glimpse para atrapar a enemigos fuera de posición, y Kinetic Field para controlar áreas en peleas. Static Storm debe usarse para silenciar y dañar a múltiples enemigos en peleas en equipo, maximizando el control y la disrupción."
    },
    {
        "name": "Enchantress",
        "img": "img/heroes/enchantress.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Enchant", "tipo": "Control" },
            "segunda": { "nombre": "Nature's Attendants", "tipo": "Curación" },
            "pasiva": { "nombre": "Untouchable", "tipo": "Debuff" },
            "ulti": { "nombre": "Impetus", "tipo": "Daño puro" }
        },
        "Counters": [
            { "name": "Phantom Assassin", "CounterDesc": "Untouchable reduce significativamente su velocidad de ataque, dificultando su capacidad de asesinato.", "CounterScore": "85%" },
            { "name": "Troll Warlord", "CounterDesc": "Untouchable y Nature's Attendants dificultan que pueda mantener sus ataques y asesinarla rápidamente.", "CounterScore": "80%" },
            { "name": "Ursa", "CounterDesc": "Untouchable y Nature's Attendants le permiten sobrevivir a su daño explosivo.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Chen", "SinergDesc": "Ambos pueden dominar la fase de líneas con sus creeps y proporcionar un fuerte control y curación.", "SinergScore": "85%" },
            { "name": "Io", "SinergDesc": "Tether combinado con Nature's Attendants proporciona una curación masiva, manteniéndolos a ambos en la pelea.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity agrupa a los enemigos, permitiendo que Enchantress los golpee con Impetus desde una distancia segura.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Enchant para controlar y dominar la fase de líneas, Nature's Attendants para mantener su salud y la de sus aliados, y Untouchable para reducir la efectividad de los ataques enemigos. Impetus debe usarse para infligir un daño masivo desde una distancia segura, maximizando su daño en peleas prolongadas."
    },
    {
        "name": "Grimstroke",
        "img": "img/heroes/grimstroke.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Stroke of Fate", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Phantom's Embrace", "tipo": "Silencio" },
            "pasiva": { "nombre": "Ink Swell", "tipo": "Buff" },
            "ulti": { "nombre": "Soulbind", "tipo": "Debuff" }
        },
        "Counters": [
            { "name": "Morphling", "CounterDesc": "Soulbind puede atrapar a Morphling y limitar su movilidad, mientras que Phantom's Embrace le impide cambiar de forma.", "CounterScore": "85%" },
            { "name": "Juggernaut", "CounterDesc": "Phantom's Embrace y Soulbind pueden controlarlo durante Blade Fury y Omnislash.", "CounterScore": "80%" },
            { "name": "Weaver", "CounterDesc": "Soulbind y Phantom's Embrace limitan su alta movilidad y capacidad de escape.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Lich", "SinergDesc": "Soulbind combinado con Chain Frost asegura múltiples rebotes devastadores entre los enemigos enlazados.", "SinergScore": "85%" },
            { "name": "Doom", "SinergDesc": "Soulbind permite aplicar Doom a dos enemigos simultáneamente, controlando el combate de manera efectiva.", "SinergScore": "80%" },
            { "name": "Legion Commander", "SinergDesc": "Ink Swell proporciona inmunidad y curación durante Duel, aumentando las chances de victoria.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Stroke of Fate para dañar y ralentizar a los enemigos, Phantom's Embrace para silenciar y dañar, y Ink Swell para proteger y potenciar a los aliados. Soulbind debe usarse en momentos clave para enlazar a enemigos importantes, maximizando el control y el daño en peleas en equipo."
    },
    {
        "name": "Jakiro",
        "img": "img/heroes/jakiro.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Dual Breath", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Ice Path", "tipo": "Stun" },
            "pasiva": { "nombre": "Liquid Fire", "tipo": "Debuff" },
            "ulti": { "nombre": "Macropyre", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Phantom Assassin", "CounterDesc": "Ice Path y Dual Breath pueden ralentizarla y controlarla, impidiendo su movilidad.", "CounterScore": "85%" },
            { "name": "Broodmother", "CounterDesc": "Macropyre y Dual Breath son efectivos contra sus arañas, reduciendo su capacidad de presión.", "CounterScore": "80%" },
            { "name": "Meepo", "CounterDesc": "Ice Path y Macropyre son devastadores contra múltiples unidades, haciendo difícil para Meepo sobrevivir.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dark Seer", "SinergDesc": "Vacuum combinado con Macropyre y Ice Path maximiza el daño en área.", "SinergScore": "85%" },
            { "name": "Tidehunter", "SinergDesc": "Ravage agrupa a los enemigos, permitiendo a Jakiro usar Macropyre y Dual Breath efectivamente.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity proporciona un control en área, permitiendo que Jakiro maximice su daño con Macropyre.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Dual Breath para hostigar y ralentizar a los enemigos, Ice Path para controlar y aturdir, y Liquid Fire para reducir la velocidad de ataque del enemigo. Macropyre debe usarse en áreas de alta concentración de enemigos para infligir el máximo daño posible."
    },
    {
        "name": "Keeper of the Light",
        "img": "img/heroes/keeper_of_the_light.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Illuminate", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Mana Leak", "tipo": "Debuff" },
            "pasiva": { "nombre": "Chakra Magic", "tipo": "Buff" },
            "ulti": { "nombre": "Will-O-Wisp", "tipo": "Debuff" }
        },
        "Counters": [
            { "name": "Storm Spirit", "CounterDesc": "Mana Leak y Will-O-Wisp pueden reducir significativamente su movilidad y capacidad de lanzar habilidades.", "CounterScore": "85%" },
            { "name": "Slark", "CounterDesc": "Illuminate puede revelarlo en Shadow Dance y Will-O-Wisp interrumpe su movilidad.", "CounterScore": "80%" },
            { "name": "Anti-Mage", "CounterDesc": "Mana Leak limita su capacidad de Blink, y Chakra Magic asegura que el equipo de KOTL no se quede sin maná.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Bristleback", "SinergDesc": "Chakra Magic permite a Bristleback spamear sus habilidades, y Will-O-Wisp mantiene a los enemigos cerca para su Quill Spray.", "SinergScore": "85%" },
            { "name": "Ember Spirit", "SinergDesc": "Chakra Magic le permite mantener su Flame Guard y usar sus habilidades más frecuentemente.", "SinergScore": "80%" },
            { "name": "Tinker", "SinergDesc": "Chakra Magic asegura que Tinker pueda lanzar sus habilidades continuamente y Will-O-Wisp agrupa a los enemigos para su daño en área.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Illuminate para infligir daño en área y limpiar oleadas de creeps, Mana Leak para debilitar a héroes dependientes de movilidad, y Chakra Magic para mantener a sus aliados con maná. Will-O-Wisp debe usarse en peleas en equipo para agrupar a los enemigos y permitir ataques concentrados."
    },
    {
        "name": "Leshrac",
        "img": "img/heroes/leshrac.png",
        "rol": "Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Split Earth", "tipo": "Stun" },
            "segunda": { "nombre": "Diabolic Edict", "tipo": "Daño físico" },
            "pasiva": { "nombre": "Lightning Storm", "tipo": "Slow" },
            "ulti": { "nombre": "Pulse Nova", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Phantom Assassin", "CounterDesc": "Su evasión no afecta las habilidades de Leshrac, permitiendo infligir daño constante.", "CounterScore": "85%" },
            { "name": "Meepo", "CounterDesc": "Pulse Nova y Diabolic Edict son efectivos contra múltiples unidades, dificultando la supervivencia de Meepo.", "CounterScore": "80%" },
            { "name": "Naga Siren", "CounterDesc": "Split Earth y Pulse Nova son devastadores contra sus ilusiones, reduciendo su eficacia.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Tidehunter", "SinergDesc": "Ravage proporciona un gran control en área, permitiendo a Leshrac maximizar su daño con Pulse Nova y Diabolic Edict.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity agrupa a los enemigos, permitiendo que Leshrac use sus habilidades en un área concentrada.", "SinergScore": "80%" },
            { "name": "Earthshaker", "SinergDesc": "Fissure y Echo Slam combinan bien con el daño en área de Leshrac, asegurando el control y la eliminación de enemigos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Split Earth para aturdir y controlar a los enemigos, Diabolic Edict para destruir estructuras y héroes, y Lightning Storm para ralentizar y dañar. Pulse Nova debe usarse en peleas en equipo para infligir un alto daño constante en área."
    },
    {
        "name": "Lich",
        "img": "img/heroes/lich.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Frost Blast", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Frost Shield", "tipo": "Debuff" },
            "pasiva": { "nombre": "Sinister Gaze", "tipo": "Control" },
            "ulti": { "nombre": "Chain Frost", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Phantom Lancer", "CounterDesc": "Chain Frost puede eliminar múltiples ilusiones rápidamente, debilitando su presencia en peleas.", "CounterScore": "85%" },
            { "name": "Invoker", "CounterDesc": "Lich puede mitigar gran parte del daño de Invoker con Frost Shield y Sinister Gaze.", "CounterScore": "80%" },
            { "name": "Broodmother", "CounterDesc": "Frost Blast y Chain Frost son efectivos contra sus arañas, reduciendo su capacidad de presión.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Juggernaut", "SinergDesc": "Frost Shield combinado con Blade Fury y Omnislash permite a Juggernaut infligir gran daño mientras recibe menos.", "SinergScore": "85%" },
            { "name": "Axe", "SinergDesc": "Sinister Gaze puede mantener a los enemigos en su lugar para un Berserker's Call seguido de Chain Frost.", "SinergScore": "80%" },
            { "name": "Grimstroke", "SinergDesc": "Chain Frost se combina bien con Soulbind, asegurando que rebote entre los enemigos enlazados.", "SinergScore": "85%" }
        ],
        "objetivo": "Usar Frost Blast para hostigar y dañar a los enemigos, Frost Shield para reducir el daño recibido por aliados o estructuras. Sinister Gaze puede controlar enemigos cruciales y Chain Frost es devastador en peleas en equipo, especialmente en espacios reducidos."
    },
    {
        "name": "Lina",
        "img": "img/heroes/lina.png",
        "rol": "Mid, Support",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Dragon Slave", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Light Strike Array", "tipo": "Stun" },
            "pasiva": { "nombre": "Fiery Soul", "tipo": "Buff" },
            "ulti": { "nombre": "Laguna Blade", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede mitigar el daño de Lina con Spell Shield y eliminar su maná rápidamente.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede reflejar habilidades con Spiked Carapace y causar gran daño con Mana Burn.", "CounterScore": "80%" },
            { "name": "Puck", "CounterDesc": "Alta movilidad y habilidad de faseo le permiten evadir los stuns y habilidades de Lina.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "Arcane Aura de Crystal Maiden ayuda a Lina con el regenero de maná, permitiéndole lanzar más habilidades.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity agrupa a los enemigos, permitiendo a Lina usar Dragon Slave y Light Strike Array efectivamente.", "SinergScore": "80%" },
            { "name": "Sven", "SinergDesc": "Warcry y Storm Hammer combinan bien con el alto daño mágico de Lina en peleas en equipo.", "SinergScore": "85%" }
        ],
        "objetivo": "Usar Dragon Slave para hostigar y limpiar oleadas de creeps, Light Strike Array para aturdir y controlar, y Fiery Soul para aumentar su velocidad de ataque y movimiento. Laguna Blade debe usarse para eliminar objetivos clave con su alto daño mágico."
    },
    {
        "name": "Lion",
        "img": "img/heroes/lion.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Earth Spike", "tipo": "Stun" },
            "segunda": { "nombre": "Hex", "tipo": "Control" },
            "pasiva": { "nombre": "Mana Drain", "tipo": "Robo de mana" },
            "ulti": { "nombre": "Finger of Death", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede desactivar a Anti-Mage con Hex y Earth Spike, evitando que use Blink y Mana Void.", "CounterScore": "85%" },
            { "name": "Phantom Lancer", "CounterDesc": "Hex y Earth Spike son efectivos contra sus ilusiones, permitiendo a Lion controlarlo mejor.", "CounterScore": "80%" },
            { "name": "Storm Spirit", "CounterDesc": "Puede interrumpir su movilidad y capacidad de lanzar habilidades con Hex y Earth Spike.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Faceless Void", "SinergDesc": "Chronosphere permite a Lion usar Finger of Death sin interrupciones y controlar otros enemigos con Earth Spike y Hex.", "SinergScore": "85%" },
            { "name": "Shadow Shaman", "SinergDesc": "Ambos tienen habilidades de control, permitiendo asegurar bajas rápidas en el equipo enemigo.", "SinergScore": "80%" },
            { "name": "Invoker", "SinergDesc": "Control adicional y alto daño mágico se combinan bien con las habilidades de Invoker en peleas en equipo.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Earth Spike y Hex para controlar enemigos, Mana Drain para mantener su maná alto y Finger of Death para asegurar bajas importantes. Lion es un support efectivo que puede desactivar y eliminar objetivos clave rápidamente."
    },
    {
        "name": "Muerta",
        "img": "img/heroes/muerta.png",
        "rol": "Carry, Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Deadshot", "tipo": "Daño mágico" },
            "segunda": { "nombre": "The Calling", "tipo": "Silencio" },
            "pasiva": { "nombre": "Gunslinger", "tipo": "Buff" },
            "ulti": { "nombre": "Pierce the Veil", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar su maná rápidamente, limitando su capacidad para lanzar habilidades.", "CounterScore": "85%" },
            { "name": "Juggernaut", "CounterDesc": "Blade Fury y Omnislash pueden ser devastadores contra Muerta, y su alta movilidad la hace difícil de alcanzar.", "CounterScore": "80%" },
            { "name": "Phantom Assassin", "CounterDesc": "Puede cerrar la distancia rápidamente y eliminar a Muerta con su alto burst damage.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "Su Arcane Aura ayuda a Muerta con el regenero de maná y el control adicional de Frostbite y Crystal Nova.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Puede agrupar a los enemigos con Vacuum, permitiendo que Muerta use Deadshot y The Calling efectivamente.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity proporciona un gran control en área, permitiendo que Muerta maximice su daño en peleas en equipo.", "SinergScore": "85%" }
        ],
        "objetivo": "Usar Deadshot para infligir daño mágico y eliminar objetivos clave, The Calling para silenciar y controlar enemigos, y Gunslinger para mejorar su capacidad de combate. Pierce the Veil aumenta su daño y supervivencia, permitiéndole sobresalir en peleas en equipo prolongadas."
    },
    {
        "name": "Nature's Prophet",
        "img": "img/heroes/furion.png",
        "rol": "Pusher, Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Sprout", "tipo": "Control" },
            "segunda": { "nombre": "Teleportation", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Nature's Call", "tipo": "Invocación" },
            "ulti": { "nombre": "Wrath of Nature", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Puede cortar los árboles creados por Sprout y atrapar a Nature's Prophet con Berserker's Call.", "CounterScore": "85%" },
            { "name": "Timbersaw", "CounterDesc": "Puede destruir los árboles y causar gran daño a Nature's Prophet con sus habilidades.", "CounterScore": "80%" },
            { "name": "Storm Spirit", "CounterDesc": "Puede cazar a Nature's Prophet en todo el mapa con Ball Lightning y evitar ser controlado por Sprout.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Earthshaker", "SinergDesc": "Sprout puede mantener a los enemigos en su lugar para una Fissure perfecta.", "SinergScore": "85%" },
            { "name": "Treant Protector", "SinergDesc": "Ambos pueden manipular el mapa usando árboles y proporcionar gran visión y control.", "SinergScore": "80%" },
            { "name": "Lone Druid", "SinergDesc": "Nature's Prophet puede ayudar a Lone Druid a empujar líneas más rápido con sus invocaciones.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Sprout para controlar enemigos y aislarlos. Teleportation para moverse rápidamente por el mapa y aplicar presión en varias líneas. Nature's Call para invocar treants y empujar torres. Wrath of Nature para causar daño global y limpiar oleadas de creeps."
    },
    {
        "name": "Necrophos",
        "img": "img/heroes/necrolyte.png",
        "rol": "Support, Mid",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Death Pulse", "tipo": "Curación/Daño mágico" },
            "segunda": { "nombre": "Ghost Shroud", "tipo": "Buff" },
            "pasiva": { "nombre": "Heartstopper Aura", "tipo": "Debuff" },
            "ulti": { "nombre": "Reaper's Scythe", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Ancient Apparition", "CounterDesc": "Ice Blast puede prevenir la curación de Necrophos y reducir significativamente su efectividad en peleas.", "CounterScore": "85%" },
            { "name": "Lion", "CounterDesc": "Puede desactivar y eliminar rápidamente a Necrophos con su Hex y Finger of Death.", "CounterScore": "80%" },
            { "name": "Silencer", "CounterDesc": "Global Silence puede interrumpir las habilidades de Necrophos, haciéndolo vulnerable.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Clockwerk", "SinergDesc": "Power Cogs puede mantener a los enemigos en su lugar, permitiendo que Necrophos aplique Death Pulse y Reaper's Scythe con facilidad.", "SinergScore": "85%" },
            { "name": "Vengeful Spirit", "SinergDesc": "Su aura y habilidades de control pueden ayudar a Necrophos a sobrevivir y maximizar su daño en peleas.", "SinergScore": "80%" },
            { "name": "Venomancer", "SinergDesc": "Sus habilidades de daño en el tiempo combinan bien con la capacidad de Necrophos para prolongar peleas y asegurar bajas con Reaper's Scythe.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Death Pulse para curar aliados y dañar enemigos, Ghost Shroud para protegerse y amplificar curación. Heartstopper Aura para desgastar a los enemigos y Reaper's Scythe para ejecutar objetivos clave, extendiendo su tiempo de muerte."
    },
    {
        "name": "Ogre Magi",
        "img": "img/heroes/ogre_magi.png",
        "rol": "Support, Iniciador",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Fireblast", "tipo": "Stun" },
            "segunda": { "nombre": "Ignite", "tipo": "Debuff" },
            "pasiva": { "nombre": "Bloodlust", "tipo": "Buff" },
            "ulti": { "nombre": "Multicast", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "Puede silenciar a Ogre Magi, impidiéndole lanzar múltiples hechizos.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede usar Spiked Carapace para reflejar Fireblast y stunear a Ogre Magi.", "CounterScore": "80%" },
            { "name": "Rubick", "CounterDesc": "Puede robar habilidades de Ogre Magi y usarlas en su contra.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Phantom Assassin", "SinergDesc": "Bloodlust aumenta su velocidad de ataque y movimiento, mejorando su capacidad de eliminación rápida.", "SinergScore": "85%" },
            { "name": "Sniper", "SinergDesc": "Bloodlust permite a Sniper atacar más rápido y a mayor distancia, maximizando su daño.", "SinergScore": "80%" },
            { "name": "Juggernaut", "SinergDesc": "Bloodlust mejora su velocidad de ataque y movimiento, y Multicast puede potenciar sus ataques.", "SinergScore": "85%" }
        ],
        "objetivo": "Usar Fireblast e Ignite para controlar y debilitar a los enemigos. Aplicar Bloodlust a los aliados para mejorar su velocidad de ataque y movimiento, y aprovechar Multicast para maximizar el impacto de sus habilidades."
    },
    {
        "name": "Oracle",
        "img": "img/heroes/oracle.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Fortune's End", "tipo": "Root" },
            "segunda": { "nombre": "Fate's Edict", "tipo": "Buff" },
            "pasiva": { "nombre": "Purifying Flames", "tipo": "Curación/Daño mágico" },
            "ulti": { "nombre": "False Promise", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "False Promise puede salvar a aliados de Culling Blade, negando su ejecución instantánea.", "CounterScore": "85%" },
            { "name": "Batrider", "CounterDesc": "Fate's Edict puede proteger a aliados de Flaming Lasso, y False Promise puede negar su daño prolongado.", "CounterScore": "80%" },
            { "name": "Doom", "CounterDesc": "False Promise puede mitigar el daño de Doom y mantener a sus aliados vivos durante su duración.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Huskar", "SinergDesc": "False Promise permite a Huskar luchar agresivamente sin temor a morir, combinando bien con su estilo de juego de bajo HP.", "SinergScore": "85%" },
            { "name": "Death Prophet", "SinergDesc": "False Promise extiende la vida útil de Death Prophet, permitiendo que su Exorcism cause más daño en peleas prolongadas.", "SinergScore": "80%" },
            { "name": "Juggernaut", "SinergDesc": "Fortune's End puede rootear a enemigos para que Juggernaut pueda aprovechar Omnislash de manera más efectiva.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Fortune's End para rootear enemigos, Fate's Edict para proteger aliados de daño mágico, y Purifying Flames para curar o infligir daño. False Promise se debe usar para salvar aliados en situaciones críticas, permitiéndoles sobrevivir y luchar."
    },
    {
        "name": "Outworld Destroyer",
        "img": "img/heroes/obsidian_destroyer.png",
        "rol": "Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Arcane Orb", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Astral Imprisonment", "tipo": "Control" },
            "pasiva": { "nombre": "Essence Flux", "tipo": "Buff" },
            "ulti": { "nombre": "Sanity's Eclipse", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede mitigar su daño con Spell Shield y quemar su maná con Mana Break.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede usar Mana Burn para infligir daño basado en la inteligencia alta de Outworld Destroyer.", "CounterScore": "80%" },
            { "name": "Rubick", "CounterDesc": "Puede robar habilidades poderosas como Astral Imprisonment y Sanity's Eclipse.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dark Seer", "SinergDesc": "Puede agrupar a los enemigos con Vacuum para un Sanity's Eclipse devastador.", "SinergScore": "85%" },
            { "name": "Faceless Void", "SinergDesc": "Chronosphere permite a Outworld Destroyer lanzar habilidades sin interrupciones, maximizando el daño de Arcane Orb y Sanity's Eclipse.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Reverse Polarity agrupa a los enemigos, proporcionando una excelente oportunidad para un Sanity's Eclipse masivo.", "SinergScore": "85%" }
        ],
        "objetivo": "Usar Arcane Orb para infligir daño mágico basado en su inteligencia, Astral Imprisonment para controlar y salvar aliados. Essence Flux mejora su sostenibilidad de maná y Sanity's Eclipse causa gran daño a héroes con baja inteligencia."
    },
    {
        "name": "Pugna",
        "img": "img/heroes/pugna.png",
        "rol": "Mid, Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Nether Blast", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Decrepify", "tipo": "Debuff" },
            "pasiva": { "nombre": "Nether Ward", "tipo": "Debuff" },
            "ulti": { "nombre": "Life Drain", "tipo": "Curación/Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar el maná de Pugna, limitando su capacidad para lanzar hechizos.", "CounterScore": "85%" },
            { "name": "Phantom Lancer", "CounterDesc": "Sus ilusiones pueden abrumar a Pugna, y su alta movilidad evita Decrepify.", "CounterScore": "80%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede reflejar Nether Blast con Spiked Carapace y causar gran daño con Mana Burn.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Shadow Shaman", "SinergDesc": "Decrepify combina bien con sus habilidades de control, permitiendo a Pugna infligir más daño con Nether Blast.", "SinergScore": "85%" },
            { "name": "Grimstroke", "SinergDesc": "Puede combinar Ink Swell con Decrepify para un gran control y daño en área.", "SinergScore": "80%" },
            { "name": "Leshrac", "SinergDesc": "Decrepify permite a Leshrac infligir gran daño mágico con sus habilidades, especialmente Diabolic Edict.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Nether Blast para empujar líneas y destruir estructuras. Decrepify para debilitar a enemigos y potenciar el daño mágico. Nether Ward para disuadir lanzamientos de hechizos enemigos. Life Drain para curarse y hacer daño sostenido en peleas prolongadas."
    },
    {
        "name": "Queen of Pain",
        "img": "img/heroes/queenofpain.png",
        "rol": "Mid",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Shadow Strike", "tipo": "Debuff" },
            "segunda": { "nombre": "Blink", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Scream of Pain", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Sonic Wave", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede reducir su maná y esquivar sus habilidades con Blink, haciéndola menos efectiva.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede devolver el daño mágico con su Carapace y cazarla con su ultimate.", "CounterScore": "80%" },
            { "name": "Silencer", "CounterDesc": "Puede silenciarla, impidiéndole usar sus habilidades de escape y daño.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Puck", "SinergDesc": "Puede combinar su Dream Coil con el Sonic Wave de Queen of Pain para un gran daño en área.", "SinergScore": "85%" },
            { "name": "Earth Spirit", "SinergDesc": "Puede iniciar peleas y atraer enemigos, facilitando el uso de las habilidades de Queen of Pain.", "SinergScore": "80%" },
            { "name": "Magnus", "SinergDesc": "Puede agrupar a los enemigos con Reverse Polarity, permitiendo a Queen of Pain maximizar su daño.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Blink para moverse rápidamente por el campo de batalla, aplicar Shadow Strike para hostigar, y Scream of Pain para daño en área. Sonic Wave se usa para acabar con enemigos debilitados."
    }
    ,
    {
        "name": "Rubick",
        "img": "img/heroes/rubick.png",
        "rol": "Support, Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Telekinesis", "tipo": "Control" },
            "segunda": { "nombre": "Fade Bolt", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Arcane Supremacy", "tipo": "Buff" },
            "ulti": { "nombre": "Spell Steal", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Pugna", "CounterDesc": "Puede desactivar a Rubick con Decrepify y eliminar su capacidad de lanzar hechizos.", "CounterScore": "85%" },
            { "name": "Silencer", "CounterDesc": "Puede silenciar a Rubick, evitando que use Spell Steal y otros hechizos.", "CounterScore": "90%" },
            { "name": "Doom", "CounterDesc": "Puede desactivar completamente a Rubick con Doom, anulando su capacidad de lanzar hechizos.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Magnus", "SinergDesc": "Puede agrupar a los enemigos con Reverse Polarity, permitiendo que Rubick robe hechizos importantes.", "SinergScore": "85%" },
            { "name": "Enigma", "SinergDesc": "Puede atrapar a los enemigos con Black Hole, facilitando que Rubick robe y use habilidades críticas.", "SinergScore": "80%" }
        ],
        "objetivo": "Usar Telekinesis para controlar a los enemigos, Fade Bolt para reducir su daño, y Spell Steal para aprovechar las habilidades enemigas. Su pasiva, Arcane Supremacy, aumenta la efectividad de sus hechizos robados."
    },
    {
        "name": "Shadow Demon",
        "img": "img/heroes/shadow_demon.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Disruption", "tipo": "Control" },
            "segunda": { "nombre": "Soul Catcher", "tipo": "Debuff" },
            "pasiva": { "nombre": "Shadow Poison", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Demonic Purge", "tipo": "Debuff" }
        },
        "Counters": [
            { "name": "Lifestealer", "CounterDesc": "Puede ser desactivado por Disruption y su curación limitada por Demonic Purge.", "CounterScore": "85%" },
            { "name": "Anti-Mage", "CounterDesc": "Sus habilidades pueden ser desactivadas y su alta movilidad contrarrestada por Shadow Demon.", "CounterScore": "80%" },
            { "name": "Morphling", "CounterDesc": "Puede ser neutralizado con Disruption y Soul Catcher, limitando su capacidad de supervivencia.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Luna", "SinergDesc": "Puede aprovechar Disruption para crear ilusiones de alta potencia de ataque.", "SinergScore": "85%" },
            { "name": "Mirana", "SinergDesc": "Puede combinar Disruption con Sacred Arrow para un control efectivo.", "SinergScore": "80%" }
        ],
        "objetivo": "Utilizar Disruption para controlar a los enemigos, Soul Catcher para amplificar el daño, y Shadow Poison para hostigar. Demonic Purge puede desactivar a enemigos y reducir su movilidad."
    },
    {
        "name": "Shadow Shaman",
        "img": "img/heroes/shadow_shaman.png",
        "rol": "Support, Pusher",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Ether Shock", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Hex", "tipo": "Control" },
            "pasiva": { "nombre": "Shackles", "tipo": "Control" },
            "ulti": { "nombre": "Mass Serpent Ward", "tipo": "Daño físico" }
        },
        "Counters": [
            { "name": "Pugna", "CounterDesc": "Puede desactivar a Shadow Shaman con Decrepify y eliminar sus wards rápidamente.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Shadow Shaman con Vendetta.", "CounterScore": "80%" },
            { "name": "Slark", "CounterDesc": "Puede deshacerse del control de Shadow Shaman y eliminarlo rápidamente.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Faceless Void", "SinergDesc": "Puede atrapar a los enemigos en Chronosphere, permitiendo que Shadow Shaman coloque Mass Serpent Ward sin interrupciones.", "SinergScore": "85%" },
            { "name": "Enigma", "SinergDesc": "Puede atrapar a los enemigos con Black Hole, facilitando que Shadow Shaman utilice sus habilidades de control y daño.", "SinergScore": "80%" }
        ],
        "objetivo": "Usar Ether Shock para causar daño, Hex y Shackles para controlar a los enemigos, y Mass Serpent Ward para empujar torres y asegurar objetivos."
    },
    {
        "name": "Silencer",
        "img": "img/heroes/silencer.png",
        "rol": "Support, Mid",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Curse of the Silent", "tipo": "Debuff" },
            "segunda": { "nombre": "Glaives of Wisdom", "tipo": "Daño puro" },
            "pasiva": { "nombre": "Last Word", "tipo": "Silencio" },
            "ulti": { "nombre": "Global Silence", "tipo": "Silencio" }
        },
        "Counters": [
            { "name": "Legion Commander", "CounterDesc": "Puede eliminar los efectos de Global Silence con Press the Attack.", "CounterScore": "85%" },
            { "name": "Oracle", "CounterDesc": "Puede eliminar los debuffs de Silencer con False Promise y Fate's Edict.", "CounterScore": "85%" },
            { "name": "Abaddon", "CounterDesc": "Puede protegerse y a sus aliados de Global Silence con Aphotic Shield y Borrowed Time.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Enigma", "SinergDesc": "Puede atrapar a los enemigos con Black Hole, permitiendo que Silencer use Global Silence para evitar interrupciones.", "SinergScore": "85%" },
            { "name": "Faceless Void", "SinergDesc": "Puede combinar Global Silence con Chronosphere para asegurar eliminaciones sin resistencia enemiga.", "SinergScore": "80%" }
        ],
        "objetivo": "Usar Curse of the Silent y Last Word para hostigar a los enemigos, Glaives of Wisdom para aumentar el daño, y Global Silence para desactivar a los enemigos en peleas de equipo."
    },
    {
        "name": "Skywrath Mage",
        "img": "img/heroes/skywrath_mage.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Arcane Bolt", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Concussive Shot", "tipo": "Slow" },
            "pasiva": { "nombre": "Ancient Seal", "tipo": "Silencio" },
            "ulti": { "nombre": "Mystic Flare", "tipo": "Daño mágico" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede evitar el daño mágico de Skywrath Mage con Spell Shield y cazarlos rápidamente.", "CounterScore": "90%" },
            { "name": "Silencer", "CounterDesc": "Puede silenciar a Skywrath Mage, evitando que use sus habilidades de alto daño.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Skywrath Mage con Vendetta, y reflejar su daño mágico con Spiked Carapace.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Faceless Void", "SinergDesc": "Puede combinar Chronosphere con Mystic Flare para infligir un daño masivo en un área controlada.", "SinergScore": "90%" },
            { "name": "Legion Commander", "SinergDesc": "Puede usar Duel para mantener a un enemigo en su lugar mientras Skywrath Mage usa Mystic Flare.", "SinergScore": "85%" }
        ],
        "objetivo": "Usar Arcane Bolt para hostigar, Concussive Shot para ralentizar, Ancient Seal para silenciar y aumentar el daño mágico recibido por el enemigo, y Mystic Flare para infligir un daño masivo en un área pequeña."
    },    
    {
        "name": "Storm Spirit",
        "img": "img/heroes/storm_spirit.png",
        "rol": "Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Static Remnant", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Electric Vortex", "tipo": "Control" },
            "pasiva": { "nombre": "Overload", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Ball Lightning", "tipo": "Movilidad" }
        },
        "counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar su maná rápidamente y sobrevivir a sus ataques.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Storm Spirit con su daño mágico.", "CounterScore": "90%" },
            { "name": "Lion", "CounterDesc": "Tiene múltiples habilidades de control que pueden detener a Storm Spirit.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Crystal Maiden", "SinergDesc": "Su aura de maná permite a Storm Spirit usar sus habilidades más frecuentemente.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Puede agrupar a los enemigos con Vacuum para facilitar el uso de las habilidades de Storm Spirit.", "SinergScore": "80%" },
            { "name": "Earth Spirit", "SinergDesc": "Tiene habilidades de control y daño que complementan bien a Storm Spirit.", "SinergScore": "80%" }
        ],
        "objetivo": "Storm Spirit es un héroe de inteligencia que se destaca por su alta movilidad y capacidad de infligir daño constante. Static Remnant crea una imagen que explota, dañando a los enemigos cercanos. Electric Vortex atrae a un enemigo hacia Storm Spirit. Overload añade daño mágico a sus ataques después de usar una habilidad, y Ball Lightning le permite moverse rápidamente por el campo de batalla, iniciando o escapando de peleas."
    }
    ,
    {
        "name": "Tinker",
        "img": "img/heroes/tinker.png",
        "rol": "Mid",
        "complejidad": 2,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Laser", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Heat-Seeking Missile", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "March of the Machines", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Rearm", "tipo": "Reset de habilidades" }
        },
        "counters": [
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Tinker con su daño mágico y reflejar Laser con Spiked Carapace.", "CounterScore": "90%" },
            { "name": "Clockwerk", "CounterDesc": "Puede atrapar a Tinker con Power Cogs y cerrar la distancia rápidamente.", "CounterScore": "85%" },
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar su maná rápidamente y sobrevivir a sus ataques.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Earthshaker", "SinergDesc": "Puede agrupar a los enemigos con Echo Slam para facilitar el uso de las habilidades de Tinker.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Su habilidad Reverse Polarity puede agrupar a los enemigos para que Tinker los dañe con sus habilidades.", "SinergScore": "80%" },
            { "name": "Enigma", "SinergDesc": "Puede atrapar a los enemigos con Black Hole, permitiendo que Tinker use sus habilidades sin interrupciones.", "SinergScore": "85%" }
        ],
        "objetivo": "Tinker es un héroe de inteligencia que puede infligir grandes cantidades de daño mágico desde la distancia. Laser ciega y daña a un enemigo. Heat-Seeking Missile lanza misiles a los enemigos cercanos. March of the Machines envía un ejército de robots que dañan a los enemigos en su camino. Rearm permite a Tinker reiniciar el tiempo de reutilización de sus habilidades y objetos, permitiendo un uso continuo de sus habilidades."
    }
    ,
    {
        "name": "Warlock",
        "img": "img/heroes/warlock.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Fatal Bonds", "tipo": "Debuff" },
            "segunda": { "nombre": "Shadow Word", "tipo": "Curación/Daño mágico" },
            "pasiva": { "nombre": "Upheaval", "tipo": "Slow" },
            "ulti": { "nombre": "Chaotic Offering", "tipo": "Invocación" }
        },
        "counters": [
            { "name": "Silencer", "CounterDesc": "Puede desactivar a Warlock con Global Silence, evitando que use Chaotic Offering.", "CounterScore": "90%" },
            { "name": "Rubick", "CounterDesc": "Puede robar las poderosas habilidades de Warlock, incluyendo Chaotic Offering.", "CounterScore": "85%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Warlock con su daño mágico y reflejar Fatal Bonds con Spiked Carapace.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Enigma", "SinergDesc": "Puede atrapar a los enemigos con Black Hole, permitiendo que Warlock use Chaotic Offering sin interrupciones.", "SinergScore": "85%" },
            { "name": "Phoenix", "SinergDesc": "Sus habilidades de control y daño se combinan bien con las de Warlock, aumentando la efectividad en peleas de equipo.", "SinergScore": "80%" },
            { "name": "Faceless Void", "SinergDesc": "Chronosphere de Faceless Void puede mantener a los enemigos en su lugar para que Warlock los dañe con Fatal Bonds y Chaotic Offering.", "SinergScore": "85%" }
        ],
        "objetivo": "Warlock es un soporte que ofrece curación y control en las peleas de equipo. Fatal Bonds vincula a los enemigos, compartiendo el daño recibido. Shadow Word puede curar a un aliado o infligir daño a un enemigo. Upheaval ralentiza a los enemigos en un área grande, y Chaotic Offering invoca un golem que causa daño y aturde al impactar."
    }
    ,
    {
        "name": "Witch Doctor",
        "img": "img/heroes/witch_doctor.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Paralyzing Cask", "tipo": "Stun" },
            "segunda": { "nombre": "Voodoo Restoration", "tipo": "Curación" },
            "pasiva": { "nombre": "Maledict", "tipo": "Debuff" },
            "ulti": { "nombre": "Death Ward", "tipo": "Daño físico" }
        },
        "counters": [
            { "name": "Silencer", "CounterDesc": "Puede desactivar a Witch Doctor con Global Silence, evitando que use Death Ward.", "CounterScore": "90%" },
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Witch Doctor con su daño mágico y reflejar Paralyzing Cask con Spiked Carapace.", "CounterScore": "85%" },
            { "name": "Pudge", "CounterDesc": "Puede interrumpir a Witch Doctor y desactivar su Death Ward con Dismember.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Faceless Void", "SinergDesc": "Chronosphere de Faceless Void puede mantener a los enemigos en su lugar para que Witch Doctor los dañe con Death Ward.", "SinergScore": "85%" },
            { "name": "Enigma", "SinergDesc": "Puede atrapar a los enemigos con Black Hole, permitiendo que Witch Doctor use Death Ward sin interrupciones.", "SinergScore": "85%" },
            { "name": "Dark Seer", "SinergDesc": "Su habilidad Vacuum puede agrupar a los enemigos, facilitando el uso de las habilidades de Witch Doctor.", "SinergScore": "80%" }
        ],
        "objetivo": "Witch Doctor es un soporte con habilidades de control y curación. Paralyzing Cask es un proyectil que rebota entre enemigos, aturdiéndolos. Voodoo Restoration cura a los aliados cercanos. Maledict inflige un daño adicional a los enemigos heridos, y Death Ward es una torreta de daño físico que puede devastar a los enemigos en peleas prolongadas."
    }
    ,
    {
        "name": "Zeus",
        "img": "img/heroes/zuus.png",
        "rol": "Mid",
        "complejidad": 1,
        "atributo": "inteligencia",
        "habilidades": {
            "primera": { "nombre": "Arc Lightning", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Lightning Bolt", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Static Field", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Thundergod's Wrath", "tipo": "Daño mágico" }
        },
        "counters": [
            { "name": "Nyx Assassin", "CounterDesc": "Puede cazar y eliminar a Zeus con su daño mágico y reflejar Arc Lightning con Spiked Carapace.", "CounterScore": "90%" },
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar su maná rápidamente y sobrevivir a sus ataques.", "CounterScore": "85%" },
            { "name": "Silencer", "CounterDesc": "Puede desactivar a Zeus con Global Silence, evitando que use Thundergod's Wrath.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Earthshaker", "SinergDesc": "Puede agrupar a los enemigos con Echo Slam para facilitar el uso de las habilidades de Zeus.", "SinergScore": "85%" },
            { "name": "Mars", "SinergDesc": "Su habilidad Arena of Blood puede mantener a los enemigos en su lugar para que Zeus los dañe con sus habilidades.", "SinergScore": "80%" },
            { "name": "Invoker", "SinergDesc": "Tiene habilidades que pueden amplificar el daño de Zeus y ayudar a controlar el campo de batalla.", "SinergScore": "80%" }
        ],
        "objetivo": "Zeus es un héroe de inteligencia que inflige grandes cantidades de daño mágico desde la distancia. Arc Lightning golpea a múltiples enemigos en cadena. Lightning Bolt inflige daño a un solo objetivo y revela invisibilidad. Static Field inflige un porcentaje de la vida actual del enemigo como daño en cada habilidad lanzada, y Thundergod's Wrath daña a todos los enemigos en el mapa, revelando a los invisibles."
    }
    ,    
    {
        "name": "Abaddon",
        "img": "img/heroes/abaddon.png",
        "rol": "Support, Tanque",
        "complejidad": 1,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Mist Coil", "tipo": "Curación/Daño mágico" },
            "segunda": { "nombre": "Aphotic Shield", "tipo": "Buff" },
            "pasiva": { "nombre": "Curse of Avernus", "tipo": "Debuff" },
            "ulti": { "nombre": "Borrowed Time", "tipo": "Buff" }
        },
        "counters": [
            { "name": "Ancient Apparition", "CounterDesc": "Su habilidad Ice Blast niega la curación de Abaddon.", "CounterScore": "90%" },
            { "name": "Shadow Demon", "CounterDesc": "Puede desactivar a Abaddon con Disruption y Purge.", "CounterScore": "85%" },
            { "name": "Lion", "CounterDesc": "Tiene múltiples habilidades de control que pueden detener a Abaddon.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Drow Ranger", "SinergDesc": "Aumenta su supervivencia y proporciona protección adicional.", "SinergScore": "85%" },
            { "name": "Lifestealer", "SinergDesc": "Puede curarse y protegerse mutuamente en peleas.", "SinergScore": "80%" },
            { "name": "Sniper", "SinergDesc": "Proporciona protección y curación desde la distancia.", "SinergScore": "80%" }
        ],
        "objetivo": "Abaddon es un héroe de soporte y tanque que puede curar y proteger a sus aliados mientras absorbe daño. Mist Coil cura a un aliado o daña a un enemigo. Aphotic Shield protege a un aliado, absorbiendo daño y explotando para dañar a los enemigos cercanos. Curse of Avernus ralentiza y silencia a los enemigos después de varios ataques, y Borrowed Time permite que Abaddon absorba todo el daño recibido como curación."
    }
    ,
    {
        "name": "Bane",
        "img": "img/heroes/bane.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Enfeeble", "tipo": "Debuff" },
            "segunda": { "nombre": "Brain Sap", "tipo": "Curación/Daño mágico" },
            "pasiva": { "nombre": "Nightmare", "tipo": "Control" },
            "ulti": { "nombre": "Fiend's Grip", "tipo": "Control/Daño mágico" }
        },
        "counters": [
            { "name": "Silencer", "CounterDesc": "Puede desactivar a Bane con Global Silence.", "CounterScore": "90%" },
            { "name": "Oracle", "CounterDesc": "Puede disipar las habilidades de Bane y salvar a los aliados.", "CounterScore": "85%" },
            { "name": "Abaddon", "CounterDesc": "Puede disipar Nightmare y Fiend's Grip con Aphotic Shield.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Mirana", "SinergDesc": "Nightmare facilita el aterrizaje de su flecha sagrada.", "SinergScore": "90%" },
            { "name": "Legion Commander", "SinergDesc": "Fiend's Grip y Duel combinados aseguran el control del enemigo.", "SinergScore": "85%" },
            { "name": "Clockwerk", "SinergDesc": "Sus habilidades de control combinan bien para aislar enemigos.", "SinergScore": "80%" }
        ],
        "objetivo": "Bane es un héroe de soporte especializado en control y debilitación de enemigos. Enfeeble reduce el daño de ataque del enemigo. Brain Sap inflige daño a un enemigo y cura a Bane. Nightmare pone a un enemigo a dormir, dejándolo vulnerable a ataques, y Fiend's Grip es una habilidad de control de canalización que inflige daño y aturde a un enemigo."
    }
    ,
    {
        "name": "Batrider",
        "img": "img/heroes/batrider.png",
        "rol": "Iniciador",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Sticky Napalm", "tipo": "Debuff" },
            "segunda": { "nombre": "Flamebreak", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Firefly", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Flaming Lasso", "tipo": "Control" }
        },
        "counters": [
            { "name": "Oracle", "CounterDesc": "Puede salvar a sus aliados con False Promise.", "CounterScore": "90%" },
            { "name": "Abaddon", "CounterDesc": "Puede disipar Flaming Lasso con Aphotic Shield.", "CounterScore": "85%" },
            { "name": "Slark", "CounterDesc": "Puede disipar Sticky Napalm y escapar fácilmente.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Clockwerk", "SinergDesc": "Su Hookshot y Power Cogs combinan bien con las habilidades de Batrider.", "SinergScore": "85%" },
            { "name": "Shadow Shaman", "SinergDesc": "Atrapamiento adicional con Shackles y Serpent Wards.", "SinergScore": "80%" },
            { "name": "Earth Spirit", "SinergDesc": "Sus habilidades de control y daño complementan a Batrider.", "SinergScore": "80%" }
        ],
        "objetivo": "Batrider es un iniciador que usa habilidades para desorientar y controlar al enemigo. Sticky Napalm ralentiza y aumenta el daño recibido por los enemigos. Flamebreak empuja y daña a los enemigos en un área. Firefly permite a Batrider volar sobre terrenos y dejar un rastro de fuego. Flaming Lasso atrapa a un enemigo y lo arrastra consigo, ideal para aislar a un objetivo clave."
    }
    ,
    {
        "name": "Beastmaster",
        "img": "img/heroes/beastmaster.png",
        "rol": "Pusher, Tanque, Iniciador",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Wild Axes", "tipo": "Daño físico" },
            "segunda": { "nombre": "Call of the Wild Boar/Hawk", "tipo": "Invocación" },
            "pasiva": { "nombre": "Inner Beast", "tipo": "Buff" },
            "ulti": { "nombre": "Primal Roar", "tipo": "Stun" }
        },
        "counters": [
            { "name": "Doom", "CounterDesc": "Puede silenciar a Beastmaster y evitar que use sus habilidades.", "CounterScore": "90%" },
            { "name": "Batrider", "CounterDesc": "Puede aislar a Beastmaster con Flaming Lasso.", "CounterScore": "85%" },
            { "name": "Visage", "CounterDesc": "Sus familiares pueden tanquear el daño y disuadir las invocaciones de Beastmaster.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Lycan", "SinergDesc": "Ambos héroes pueden empujar torres rápidamente con sus invocaciones.", "SinergScore": "85%" },
            { "name": "Nature's Prophet", "SinergDesc": "Sus habilidades de empuje y visión global combinan bien con Beastmaster.", "SinergScore": "80%" },
            { "name": "Io", "SinergDesc": "Proporciona movilidad adicional y curación, mejorando la efectividad de Beastmaster.", "SinergScore": "80%" }
        ],
        "objetivo": "Beastmaster es un héroe de empuje, tanque e iniciador que utiliza sus invocaciones y habilidades para controlar el campo de batalla. Wild Axes inflige daño físico a los enemigos. Call of the Wild Boar/Hawk invoca criaturas que ayudan en la pelea y proporcionan visión. Inner Beast aumenta la velocidad de ataque de los aliados cercanos, y Primal Roar aturde a un enemigo y empuja a los enemigos cercanos."
    }
    ,
    {
        "name": "Brewmaster",
        "img": "img/heroes/brewmaster.png",
        "rol": "Iniciador, Tanque",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Thunder Clap", "tipo": "Slow" },
            "segunda": { "nombre": "Cinder Brew", "tipo": "Debuff" },
            "pasiva": { "nombre": "Drunken Brawler", "tipo": "Buff" },
            "ulti": { "nombre": "Primal Split", "tipo": "Invocación" }
        },
        "counters": [
            { "name": "Shadow Demon", "CounterDesc": "Puede desactivar a Brewmaster y sus ilusiones con Disruption.", "CounterScore": "90%" },
            { "name": "Disruptor", "CounterDesc": "Puede atrapar a Brewmaster con Kinetic Field y Static Storm.", "CounterScore": "85%" },
            { "name": "Doom", "CounterDesc": "Puede silenciar a Brewmaster y evitar que use Primal Split.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Dazzle", "SinergDesc": "Proporciona curación y salvamento con Shallow Grave, mejorando la supervivencia de Brewmaster.", "SinergScore": "85%" },
            { "name": "Invoker", "SinergDesc": "Sus habilidades de control y daño combinan bien con las invocaciones de Brewmaster.", "SinergScore": "80%" },
            { "name": "Tidehunter", "SinergDesc": "Ravage de Tidehunter puede establecer peleas que Brewmaster aprovecha con Primal Split.", "SinergScore": "80%" }
        ],
        "objetivo": "Brewmaster es un iniciador y tanque que usa habilidades para ralentizar y debilitar a los enemigos. Thunder Clap ralentiza y daña a los enemigos cercanos. Cinder Brew inflige daño adicional a los enemigos afectados por otros hechizos. Drunken Brawler aumenta la evasión y el crítico de Brewmaster, y Primal Split invoca tres espíritus con habilidades únicas para el combate."
    }
    ,    
    {
        "name": "Broodmother",
        "img": "img/heroes/broodmother.png",
        "rol": "Pusher, Iniciador",
        "complejidad": 3,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Insatiable Hunger", "tipo": "Buff" },
            "segunda": { "nombre": "Spin Web", "tipo": "Movilidad" },
            "pasiva": { "nombre": "Silken Bola", "tipo": "Debuff" },
            "ulti": { "nombre": "Spawn Spiderlings", "tipo": "Invocación" }
        },
        "counters": [
            { "name": "Axe", "CounterDesc": "Puede cortarle el paso con Berserker's Call y Culling Blade.", "CounterScore": "90%" },
            { "name": "Timbersaw", "CounterDesc": "Sus habilidades AoE son muy efectivas contra las crías de Broodmother.", "CounterScore": "85%" },
            { "name": "Legion Commander", "CounterDesc": "Puede enfrentarla directamente con Duel y eliminarla rápidamente.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Visage", "SinergDesc": "Las invocaciones de ambos héroes pueden abrumar al enemigo.", "SinergScore": "85%" },
            { "name": "Nature's Prophet", "SinergDesc": "Pueden empujar torres juntos rápidamente y controlar el mapa.", "SinergScore": "80%" },
            { "name": "Beastmaster", "SinergDesc": "Sus invocaciones y control del mapa complementan a Broodmother.", "SinergScore": "80%" }
        ],
        "objetivo": "Broodmother es un héroe de alta complejidad especializado en el empuje de líneas y la iniciación. Insatiable Hunger le da robo de vida y aumento de daño, permitiéndole mantenerse en peleas prolongadas. Spin Web le proporciona alta movilidad y regeneración en sus redes. Silken Bola ralentiza y debilita a los enemigos, y Spawn Spiderlings crea unidades que pueden abrumar a los oponentes y destruir estructuras rápidamente."
    }
    ,
    {
        "name": "Chen",
        "img": "img/heroes/chen.png",
        "rol": "Support, Pusher",
        "complejidad": 3,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Penitence", "tipo": "Debuff" },
            "segunda": { "nombre": "Divine Favor", "tipo": "Curación" },
            "pasiva": { "nombre": "Holy Persuasion", "tipo": "Control de unidades" },
            "ulti": { "nombre": "Hand of God", "tipo": "Curación global" }
        },
        "counters": [
            { "name": "Doom", "CounterDesc": "Puede silenciar a Chen y sus unidades con Doom.", "CounterScore": "90%" },
            { "name": "Silencer", "CounterDesc": "Global Silence interrumpe las habilidades de Chen.", "CounterScore": "85%" },
            { "name": "Rubick", "CounterDesc": "Puede robar las habilidades poderosas de Chen.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Lone Druid", "SinergDesc": "Sus unidades invocadas pueden beneficiarse de las auras de Chen.", "SinergScore": "85%" },
            { "name": "Lycan", "SinergDesc": "Ambos héroes pueden empujar torres rápidamente con sus invocaciones.", "SinergScore": "80%" },
            { "name": "Beastmaster", "SinergDesc": "Su control del mapa y las invocaciones complementan a Chen.", "SinergScore": "80%" }
        ],
        "objetivo": "Chen es un héroe de soporte y empuje que controla criaturas neutrales para ayudar a su equipo. Penitence reduce la velocidad de movimiento del enemigo y aumenta el daño que recibe. Divine Favor aumenta la curación y el daño de los aliados. Holy Persuasion permite controlar unidades neutrales, y Hand of God proporciona una curación global, salvando a su equipo en momentos críticos."
    }
    ,
    {
        "name": "Clockwerk",
        "img": "img/heroes/rattletrap.png",
        "rol": "Iniciador, Tanque",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Battery Assault", "tipo": "Daño físico" },
            "segunda": { "nombre": "Power Cogs", "tipo": "Control" },
            "pasiva": { "nombre": "Rocket Flare", "tipo": "Daño mágico" },
            "ulti": { "nombre": "Hookshot", "tipo": "Movilidad/Control" }
        },
        "counters": [
            { "name": "Tinker", "CounterDesc": "Puede mantenerse alejado de Clockwerk y eliminar sus cohetes.", "CounterScore": "90%" },
            { "name": "Outworld Destroyer", "CounterDesc": "Puede banear a Clockwerk y evitar su iniciación.", "CounterScore": "85%" },
            { "name": "Timbersaw", "CounterDesc": "Tiene alta movilidad y no le teme a los cogs.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Tinker", "SinergDesc": "Rocket Flare de Clockwerk proporciona visión para el spam de Tinker.", "SinergScore": "85%" },
            { "name": "Storm Spirit", "SinergDesc": "Puede entrar en peleas rápidamente con la iniciación de Clockwerk.", "SinergScore": "80%" },
            { "name": "Techies", "SinergDesc": "Power Cogs pueden atrapar a los enemigos en las minas de Techies.", "SinergScore": "80%" }
        ],
        "objetivo": "Clockwerk es un iniciador y tanque que utiliza sus habilidades para atrapar y deshabilitar a los enemigos. Battery Assault inflige daño físico constante a los enemigos cercanos. Power Cogs crea una barrera que atrapa a los enemigos y los empuja hacia atrás. Rocket Flare revela áreas del mapa y hace daño a larga distancia. Hookshot le permite cerrar la distancia rápidamente y atrapar a los enemigos en Power Cogs."
    }
    ,
    {
        "name": "Dark Seer",
        "img": "img/heroes/dark_seer.png",
        "rol": "Iniciador",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Vacuum", "tipo": "Control" },
            "segunda": { "nombre": "Ion Shell", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Surge", "tipo": "Buff" },
            "ulti": { "nombre": "Wall of Replica", "tipo": "Invocación" }
        },
        "counters": [
            { "name": "Oracle", "CounterDesc": "Puede disipar las habilidades de Dark Seer y salvar a los aliados.", "CounterScore": "90%" },
            { "name": "Omniknight", "CounterDesc": "Guardian Angel y Purification mitigan el daño de Dark Seer.", "CounterScore": "85%" },
            { "name": "Disruptor", "CounterDesc": "Puede atrapar a Dark Seer y a sus aliados con Kinetic Field y Static Storm.", "CounterScore": "85%" }
        ],
        "sinergia": [
            { "name": "Sven", "SinergDesc": "Su combo de daño AoE es devastador después de un Vacuum.", "SinergScore": "85%" },
            { "name": "Earthshaker", "SinergDesc": "Vacuum agrupa a los enemigos para el Echo Slam de Earthshaker.", "SinergScore": "80%" },
            { "name": "Enigma", "SinergDesc": "Black Hole y Vacuum son una combinación poderosa.", "SinergScore": "80%" }
        ],
        "objetivo": "Dark Seer es un iniciador con habilidades únicas que pueden cambiar el curso de una pelea. Vacuum agrupa a los enemigos, permitiendo combos devastadores con otros héroes. Ion Shell inflige daño constante, ideal para empujar líneas. Surge proporciona velocidad de movimiento aumentada a un aliado, permitiendo maniobras rápidas. Wall of Replica crea copias de los enemigos que pueden causar gran daño."
    }    
    ,
    {
        "name": "Dark Willow",
        "img": "img/heroes/dark_willow.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Bramble Maze", "tipo": "Control" },
            "segunda": { "nombre": "Shadow Realm", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Cursed Crown", "tipo": "Control" },
            "ulti": { "nombre": "Terrorize", "tipo": "Control" }
        },
        "Counters": [
            { "name": "Anti-Mage", "CounterDesc": "Puede evitar su daño con Spell Shield y cazarla con Blink.", "CounterScore": "85%" },
            { "name": "Juggernaut", "CounterDesc": "Puede usar Blade Fury para evitar el control y el daño de Dark Willow.", "CounterScore": "80%" },
            { "name": "Lifestealer", "CounterDesc": "Puede usar Rage para volverse inmune a sus habilidades y atacarla sin problemas.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Mars", "SinergDesc": "Puede combinar su Arena of Blood con el Bramble Maze de Dark Willow para atrapar y dañar a los enemigos.", "SinergScore": "85%" },
            { "name": "Axe", "SinergDesc": "Puede iniciar peleas y atraer la atención, permitiendo a Dark Willow usar sus habilidades sin ser interrumpida.", "SinergScore": "80%" },
            { "name": "Sand King", "SinergDesc": "Puede agrupar a los enemigos con su Epicenter y Burrowstrike, proporcionando una oportunidad perfecta para el Terrorize de Dark Willow.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Bramble Maze para controlar el campo, Shadow Realm para daño y evasión, y Terrorize para dispersar al enemigo en peleas clave."
    }
    ,
    {
        "name": "Lycan",
        "img": "img/heroes/lycan.png",
        "rol": "Pusher, Tanque",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Summon Wolves", "tipo": "Invocación" },
            "segunda": { "nombre": "Howl", "tipo": "Debuff" },
            "pasiva": { "nombre": "Feral Impulse", "tipo": "Buff" },
            "ulti": { "nombre": "Shapeshift", "tipo": "Buff" }
        },
        "Counters": [
            { "name": "Axe", "CounterDesc": "Puede usar Berserker's Call para atrapar a Lycan y sus lobos, y Counter Helix para infligir daño.", "CounterScore": "85%" },
            { "name": "Bristleback", "CounterDesc": "Puede aguantar el daño de Lycan con su pasiva y devolver daño con Quill Spray.", "CounterScore": "80%" },
            { "name": "Phantom Lancer", "CounterDesc": "Puede abrumar a Lycan con sus ilusiones, dificultando enfocarse en el verdadero héroe.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Shadow Shaman", "SinergDesc": "Puede atrapar a los enemigos con Shackles y Serpent Wards, complementando la presión de Lycan en las torres.", "SinergScore": "85%" },
            { "name": "Beastmaster", "SinergDesc": "Puede invocar criaturas adicionales y proporcionar control con su Primal Roar.", "SinergScore": "80%" },
            { "name": "Invoker", "SinergDesc": "Puede usar Alacrity para mejorar el daño de ataque de Lycan y sus lobos, y sus habilidades de control para facilitar el trabajo de Lycan en las peleas.", "SinergScore": "85%" }
        ],
        "objetivo": "Invocar lobos para presión constante en las líneas, usar Howl para debilitar a los enemigos, y transformarse con Shapeshift para cazar enemigos y destruir estructuras rápidamente."
    }
    ,
    {
        "name": "Dazzle",
        "img": "img/heroes/dazzle.png",
        "rol": "Support",
        "complejidad": 1,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Poison Touch", "tipo": "Debuff" },
            "segunda": { "nombre": "Shadow Wave", "tipo": "Curación/Daño físico" },
            "pasiva": { "nombre": "Shallow Grave", "tipo": "Buff" },
            "ulti": { "nombre": "Weave", "tipo": "Buff/Debuff" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "Puede interrumpir sus habilidades de curación y protección con Global Silence.", "CounterScore": "85%" },
            { "name": "Clockwerk", "CounterDesc": "Puede atrapar a Dazzle en sus Power Cogs, impidiéndole salvar a sus aliados.", "CounterScore": "80%" },
            { "name": "Batrider", "CounterDesc": "Puede usar Flaming Lasso para secuestrar a Dazzle y sacarlo de posición.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Axe", "SinergDesc": "Puede iniciar peleas con Berserker's Call, y Dazzle puede mantenerlo vivo con Shallow Grave y Shadow Wave.", "SinergScore": "85%" },
            { "name": "Huskar", "SinergDesc": "Se beneficia enormemente de Shallow Grave, permitiéndole luchar al máximo con poca vida.", "SinergScore": "80%" },
            { "name": "Slardar", "SinergDesc": "Puede combinar su daño físico aumentado con el debuff de Weave para eliminar rápidamente a los enemigos.", "SinergScore": "85%" }
        ],
        "objetivo": "Utilizar Poison Touch para control y daño temprano, Shadow Wave para curar y dañar en peleas de equipo. Shallow Grave debe usarse para salvar a aliados en momentos críticos, y Weave para mejorar la armadura de los aliados y debilitar a los enemigos."
    }
    ,
    {
        "name": "Enigma",
        "img": "img/heroes/enigma.png",
        "rol": "Iniciador, Pusher",
        "complejidad": 2,
        "atributo": "universal",
        "spawn": "audio/spawn/Vo_enigma_enig_spawn_01.mp3",
        "habilidades": {
            "primera": { "nombre": "Malefice", "tipo": "Stun" },
            "segunda": { "nombre": "Demonic Conversion", "tipo": "Invocación" },
            "pasiva": { "nombre": "Midnight Pulse", "tipo": "Daño puro" },
            "ulti": { "nombre": "Black Hole", "tipo": "Control/Daño mágico" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "Puede silenciar a Enigma con Global Silence y evitar que use Black Hole.", "CounterScore": "85%" },
            { "name": "Vengeful Spirit", "CounterDesc": "Puede interrumpir a Enigma con Magic Missile o Nether Swap antes de que pueda usar Black Hole.", "CounterScore": "80%" },
            { "name": "Faceless Void", "CounterDesc": "Puede atrapar a Enigma y cancelar Black Hole con Chronosphere.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dark Seer", "SinergDesc": "Puede agrupar a los enemigos con Vacuum para facilitar un Black Hole devastador de Enigma.", "SinergScore": "85%" },
            { "name": "Magnus", "SinergDesc": "Puede agrupar a los enemigos con Reverse Polarity para preparar un Black Hole de Enigma.", "SinergScore": "80%" },
            { "name": "Tidehunter", "SinergDesc": "Puede controlar a los enemigos con Ravage para facilitar un Black Hole de Enigma sin interrupciones.", "SinergScore": "85%" }
        ],
        "objetivo": "Enigma utiliza Malefice para controlar a un objetivo, Demonic Conversion para invocar esbirros, Midnight Pulse para causar daño continuo en una área y Black Hole para atrapar múltiples enemigos y causar daño devastador. Enigma es efectivo en iniciar peleas y controlar multitudes, pero debe tener cuidado con héroes que pueden interrumpir su Black Hole."
    }
    ,
    {
        "name": "Invoker",
        "img": "img/heroes/invoker.png",
        "rol": "Mid",
        "complejidad": 3,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Quas", "tipo": "Habilidad pasiva que otorga regeneración de salud y lenta" },
            "segunda": { "nombre": "Wex", "tipo": "Habilidad pasiva que otorga velocidad de ataque y movimiento" },
            "pasiva": { "nombre": "Exort", "tipo": "Habilidad pasiva que otorga daño adicional" },
            "ulti": { "nombre": "Invoke", "tipo": "Habilidad activa que permite invocar habilidades invocadas previamente" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "Puede silenciar a Invoker con Global Silence y evitar que invoque habilidades.", "CounterScore": "85%" },
            { "name": "Anti-Mage", "CounterDesc": "Puede quemar el maná de Invoker con Mana Break y evitar que use sus habilidades.", "CounterScore": "80%" },
            { "name": "Spectre", "CounterDesc": "Puede cazar a Invoker en las peleas con Haunt y Spectral Dagger, evitando que se escape.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Faceless Void", "SinergDesc": "Puede controlar peleas con Chronosphere mientras Invoker lanza habilidades devastadoras.", "SinergScore": "85%" },
            { "name": "Earthshaker", "SinergDesc": "Puede controlar a los enemigos con Fissure mientras Invoker lanza Meteor o Deafening Blast.", "SinergScore": "80%" },
            { "name": "Enigma", "SinergDesc": "Puede controlar peleas con Black Hole mientras Invoker usa sus habilidades para causar daño masivo.", "SinergScore": "85%" }
        ],
        "objetivo": "Invoker utiliza Quas, Wex y Exort para combinar habilidades y adaptarse a la situación del juego, aprovechando Invoke para lanzar habilidades invocadas previamente. Invoker es efectivo en control de multitudes y daño, pero debe tener cuidado con héroes que pueden silenciarlo o quemar su maná."
    }
    ,
    {
        "name": "Io",
        "img": "img/heroes/wisp.png",
        "rol": "Support",
        "complejidad": 3,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Tether", "tipo": "Control/Buf" },
            "segunda": { "nombre": "Spirits", "tipo": "Daño mágico" },
            "pasiva": { "nombre": "Overcharge", "tipo": "Buff" },
            "ulti": { "nombre": "Relocate", "tipo": "Movilidad" }
        },
        "Counters": [
            { "name": "Ancient Apparition", "CounterDesc": "Puede evitar que Io y su aliado se curen con Ice Blast y controlar peleas con su kit mágico.", "CounterScore": "85%" },
            { "name": "Disruptor", "CounterDesc": "Puede controlar a Io y su aliado con Glimpse y Static Storm, evitando que se reagrupen y escapen con Relocate.", "CounterScore": "80%" },
            { "name": "Spirit Breaker", "CounterDesc": "Puede encontrar y eliminar a Io rápidamente con Charge of Darkness y Nether Strike antes de que Relocate se complete.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Gyrocopter", "SinergDesc": "Puede causar daño masivo con Flak Cannon y Call Down mientras está conectado a Io con Tether, aprovechando la movilidad de Relocate.", "SinergScore": "85%" },
            { "name": "Tiny", "SinergDesc": "Puede iniciar y controlar peleas con Avalanche y Toss mientras está conectado a Io con Tether, causando daño masivo.", "SinergScore": "80%" },
            { "name": "Sven", "SinergDesc": "Puede aumentar el daño de ataque y la velocidad de ataque con Warcry y God's Strength mientras está conectado a Io con Tether, siendo devastador en peleas.", "SinergScore": "85%" }
        ],
        "objetivo": "Io utiliza Tether para conectar y buffear a un aliado, Spirits para dañar a los enemigos, Overcharge para aumentar la velocidad de ataque y reducir el daño, y Relocate para moverse estratégicamente por el mapa. Io es efectivo en combate coordinado y movilidad global, pero debe tener cuidado con héroes que pueden interrumpir su movimiento o eliminarlo rápidamente."
    }
    ,
    {
        "name": "Lone Druid",
        "img": "img/heroes/lone_druid.png",
        "rol": "Pusher, Mid, Carry",
        "complejidad": 3,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Summon Spirit Bear", "tipo": "Invocación" },
            "segunda": { "nombre": "Rabid", "tipo": "Buff" },
            "pasiva": { "nombre": "Savage Roar", "tipo": "Control" },
            "ulti": { "nombre": "True Form", "tipo": "Transformación" }
        },
        "Counters": [
            { "name": "Ancient Apparition", "CounterDesc": "Puede evitar la regeneración de Lone Druid y su oso con Ice Blast y causar daño con su kit mágico.", "CounterScore": "85%" },
            { "name": "Timbersaw", "CounterDesc": "Puede eliminar rápidamente al oso de Lone Druid con daño mágico alto y reducir la regeneración con Whirling Death.", "CounterScore": "80%" },
            { "name": "Slark", "CounterDesc": "Puede evadir al oso y a Lone Druid con Shadow Dance y reducir su velocidad de ataque con Essence Shift.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Dazzle", "SinergDesc": "Puede aumentar la durabilidad del oso de Lone Druid con Shallow Grave y Weave, permitiéndole ser más agresivo en peleas prolongadas.", "SinergScore": "85%" },
            { "name": "Io", "SinergDesc": "Puede proporcionar movilidad y regeneración adicional con Tether y Overcharge para Lone Druid y su oso.", "SinergScore": "80%" },
            { "name": "Shadow Shaman", "SinergDesc": "Puede controlar a los enemigos con Shackles y permitir que Lone Druid se concentre en derribar torres con Serpent Ward.", "SinergScore": "85%" }
        ],
        "objetivo": "Lone Druid utiliza Summon Spirit Bear para invocar a su oso y empujar líneas, Rabid para aumentar la velocidad de ataque y movimiento, Savage Roar para controlar peleas y True Form para transformarse y aumentar la resistencia. Lone Druid es efectivo en empujar líneas y derribar torres rápidamente, pero debe tener cuidado con héroes que pueden evitar su regeneración o controlar al oso."
    }
    ,
    {
        "name": "Magnus",
        "img": "img/heroes/magnataur.png",
        "rol": "Iniciador, Mid",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Shockwave", "tipo": "Daño mágico" },
            "segunda": { "nombre": "Empower", "tipo": "Buff" },
            "pasiva": { "nombre": "Skewer", "tipo": "Movilidad" },
            "ulti": { "nombre": "Reverse Polarity", "tipo": "Control" }
        },
        "Counters": [
            { "name": "Silencer", "CounterDesc": "Puede prevenir que Magnus use Reverse Polarity con Global Silence y controlar sus habilidades con Last Word.", "CounterScore": "85%" },
            { "name": "Anti-Mage", "CounterDesc": "Puede evitar el daño de Magnus con Spell Shield y eliminarlo rápidamente con su daño físico alto.", "CounterScore": "80%" },
            { "name": "Rubick", "CounterDesc": "Puede robar Reverse Polarity de Magnus y usarlo contra él y su equipo.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Faceless Void", "SinergDesc": "Puede agrupar a los enemigos para Reverse Polarity de Magnus y maximizar el daño con Chronosphere.", "SinergScore": "85%" },
            { "name": "Sven", "SinergDesc": "Puede aumentar el daño de ataque de Magnus con Warcry y causar daño masivo en área con God's Strength.", "SinergScore": "80%" },
            { "name": "Lina", "SinergDesc": "Puede eliminar rápidamente a los enemigos atrapados por Reverse Polarity de Magnus con Laguna Blade y controlar peleas con Light Strike Array.", "SinergScore": "85%" }
        ],
        "objetivo": "Magnus utiliza Shockwave para daño mágico y control de oleadas, Empower para aumentar el daño de ataque de aliados clave, Skewer para moverse y posicionar a los enemigos, y Reverse Polarity para controlar a múltiples enemigos y permitir que su equipo los elimine. Magnus es efectivo contra héroes que dependen de agruparse y pueden ser controlados eficazmente en peleas, pero debe tener cuidado con héroes que pueden anular su capacidad de iniciación o evitar su control."
    }
    ,
    {
        "name": "Marci",
        "img": "img/heroes/marci.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "universal",
        "habilidades": {
            "primera": { "nombre": "Dispose", "tipo": "Stun" },
            "segunda": { "nombre": "Rebound", "tipo": "Jump/Buff" },
            "pasiva": { "nombre": "Sidekick", "tipo": "Buff" },
            "ulti": { "nombre": "Unleash", "tipo": "Buff/Attack Speed" }
        },
        "Counters": [
            { "name": "Oracle", "CounterDesc": "Puede prevenir que Marci use sus habilidades efectivamente con Fate's Edict y eliminar sus buffs con Purifying Flames.", "CounterScore": "85%" },
            { "name": "Abaddon", "CounterDesc": "Puede proteger a sus aliados de Dispose de Marci con Aphotic Shield y cancelar sus habilidades con Curse of Avernus.", "CounterScore": "80%" },
            { "name": "Silencer", "CounterDesc": "Puede controlar a Marci y evitar que utilice Dispose y Unleash con Global Silence y Last Word.", "CounterScore": "85%" }
        ],
        "Sinergia": [
            { "name": "Drow Ranger", "SinergDesc": "Puede aumentar el daño de ataque de Marci con Precision Aura y permitirle causar más daño durante Unleash.", "SinergScore": "85%" },
            { "name": "Crystal Maiden", "SinergDesc": "Puede proporcionar control adicional con Frostbite y aumentar la velocidad de ataque de Marci con Arcane Aura.", "SinergScore": "80%" },
            { "name": "Earthshaker", "SinergDesc": "Puede agrupar a los enemigos para Dispose de Marci y controlar peleas con Fissure y Echo Slam.", "SinergScore": "85%" }
        ],
        "objetivo": "Marci utiliza Dispose para controlar a los enemigos y permitir que su equipo los elimine, Rebound para moverse y posicionar mejor durante peleas, Sidekick para aumentar la efectividad de sus aliados y Unleash para aumentar la velocidad de ataque y daño. Marci es efectiva en apoyar a su equipo con control y buffs, pero debe tener cuidado con héroes que pueden evitar su control o eliminar sus buffs."
    }
    ,
    {
        "name": "Mars",
        "img": "img/heroes/mars.png",
        "rol": "Initiator, Tank",
        "complejidad": 2,
        "atributo": "Strength",
        "habilidades": {
            "primera": { "nombre": "Spear of Mars", "tipo": "Stun" },
            "segunda": { "nombre": "God's Rebuke", "tipo": "Physical Damage" },
            "pasiva": { "nombre": "Bulwark", "tipo": "Protection" },
            "ulti": { "nombre": "Arena of Blood", "tipo": "Control/Damage" }
        },
        "Counters": [
            { "name": "Oracle", "CounterDesc": "Puede eliminar la protección de Mars con Fate's Edict y Purifying Flames, reduciendo su efectividad en peleas.", "CounterScore": "80%" },
            { "name": "Viper", "CounterDesc": "Puede reducir el daño de Mars con Nethertoxin y Viper Strike, limitando su impacto en peleas prolongadas.", "CounterScore": "85%" },
            { "name": "Shadow Demon", "CounterDesc": "Puede controlar a Mars y sus aliados con Disruption y Soul Catcher, debilitando su capacidad de iniciación.", "CounterScore": "80%" }
        ],
        "Sinergia": [
            { "name": "Phoenix", "SinergDesc": "Puede proporcionar control adicional con Supernova, mientras Mars mantiene a los enemigos dentro del área con Arena of Blood.", "SinergScore": "85%" },
            { "name": "Witch Doctor", "SinergDesc": "Puede controlar a los enemigos y curar a Mars con Voodoo Restoration y Death Ward durante peleas prolongadas.", "SinergScore": "80%" },
            { "name": "Dark Willow", "SinergDesc": "Puede controlar a los enemigos con Bramble Maze y Terrorize, permitiendo que Mars maximice su daño dentro de Arena of Blood.", "SinergScore": "85%" }
        ],
        "objetivo": "Mars utiliza Spear of Mars para iniciar y controlar a los enemigos, God's Rebuke para causar daño físico en área y mover a los enemigos, Bulwark para protegerse de ataques frontales y Arena of Blood para mantener a los enemigos encerrados y recibir daño. Mars es efectivo contra héroes que dependen de movimientos precisos y pueden ser controlados en peleas cerradas, pero debe tener cuidado con héroes que pueden anular su protección o limitar su capacidad de movimiento dentro de la arena."
    }
    ,
    {
        name: "Mirana",
        img: "img/heroes/mirana.png",
        rol: "Support, Iniciador",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Starstorm", tipo: "Daño mágico" },
            segunda: { nombre: "Sacred Arrow", tipo: "Stun" },
            pasiva: { nombre: "Leap", tipo: "Movilidad" },
            ulti: { nombre: "Moonlight Shadow", tipo: "Invisibilidad" }
        },
        Counters: [
            { name: "Slark", CounterDesc: "Puede deshacerse de la invisibilidad de Mirana con Dark Pact y perseguirla fácilmente con Pounce.", CounterScore: "85%" },
            { name: "Bounty Hunter", CounterDesc: "Puede rastrear a Mirana durante su invisibilidad con Track, negando su habilidad para escabullirse.", CounterScore: "80%" },
            { name: "Zeus", CounterDesc: "Su daño mágico masivo y Thundergod's Wrath pueden revelar y dañar a Mirana incluso cuando es invisible.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Bane", SinergDesc: "Puede combinar Nightmare con Sacred Arrow para una configuración fácil y efectiva.", SinergScore: "90%" },
            { name: "Invoker", SinergDesc: "Puede aprovechar la invisibilidad de Mirana para configurar Sun Strike y otros combos.", SinergScore: "85%" },
            { name: "Axe", SinergDesc: "Mirana puede seguir la llamada de Axe con Sacred Arrow para aturdir a enemigos que están controlados por Berserker's Call.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Starstorm para infligir daño mágico en área, usar Sacred Arrow para aturdir y configurar asesinatos, aprovechar Leap para posicionamiento y escape, y utilizar Moonlight Shadow para iniciar peleas o evadir enemigos. Mirana es efectiva cuando se combina con héroes que pueden configurar sus habilidades y debe ser cautelosa con héroes que pueden revelar o rastrear invisibilidad."
    },
    {
        name: "Nyx Assassin",
        img: "img/heroes/nyx_assassin.png",
        rol: "Iniciador, Support",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Impale", tipo: "Stun" },
            segunda: { nombre: "Mana Burn", tipo: "Daño mágico" },
            pasiva: { nombre: "Spiked Carapace", tipo: "Reflejo" },
            ulti: { nombre: "Vendetta", tipo: "Invisibilidad/Daño" }
        },
        Counters: [
            { name: "Zeus", CounterDesc: "Su alto daño mágico y Thundergod's Wrath pueden revelar a Nyx durante Vendetta.", CounterScore: "85%" },
            { name: "Silencer", CounterDesc: "Global Silence puede desactivar todas las habilidades de Nyx, dejándolo vulnerable.", CounterScore: "80%" },
            { name: "Lifestealer", CounterDesc: "Puede resistir el daño de Nyx con Rage y tiene sustain suficiente para sobrevivir a sus emboscadas.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Invoker", SinergDesc: "Nyx puede revelar a enemigos para los Sun Strikes de Invoker y configuraciones de combos.", SinergScore: "85%" },
            { name: "Tinker", SinergDesc: "Nyx puede proporcionar visión y control para los Misiles y Láser de Tinker.", SinergScore: "80%" },
            { name: "Lina", SinergDesc: "Nyx puede aturdir a los enemigos con Impale, permitiendo a Lina aterrizar su Light Strike Array y Laguna Blade.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Impale para iniciar peleas y aturdir a múltiples enemigos, emplear Mana Burn para desgastar a héroes con alta reserva de maná, usar Spiked Carapace para reflejar el daño y aturdir a los atacantes, y aprovechar Vendetta para emboscadas y posicionamiento. Nyx Assassin es muy efectivo contra héroes de inteligencia y aquellos que dependen de habilidades mágicas, pero debe ser cauteloso con héroes que pueden revelar o deshabilitar su invisibilidad."
    },
    {
        name: "Pangolier",
        img: "img/heroes/pangolier.png",
        rol: "Iniciador",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Swashbuckle", tipo: "Daño físico" },
            segunda: { nombre: "Shield Crash", tipo: "Daño mágico" },
            pasiva: { nombre: "Heartpiercer", tipo: "Debuff" },
            ulti: { nombre: "Rolling Thunder", tipo: "Control/Daño" }
        },
        Counters: [
            { name: "Bloodseeker", CounterDesc: "Rupture evita que Pangolier se mueva libremente durante Rolling Thunder, lo que lo hace inefectivo.", CounterScore: "85%" },
            { name: "Doom", CounterDesc: "Doom puede silenciar a Pangolier, desactivando todas sus habilidades y reduciendo su efectividad.", CounterScore: "80%" },
            { name: "Grimstroke", CounterDesc: "Soulbind puede evitar que Pangolier use Rolling Thunder de manera efectiva y Phantom's Embrace puede silenciarlo.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Dark Willow", SinergDesc: "Cursed Crown y Bramble Maze de Dark Willow pueden combinarse con Rolling Thunder para un control adicional.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Reverse Polarity de Magnus puede agrupar a los enemigos para un Rolling Thunder efectivo.", SinergScore: "80%" },
            { name: "Crystal Maiden", SinergDesc: "Su Crystal Nova y Frostbite pueden ayudar a controlar a los enemigos, permitiendo que Pangolier ruede libremente.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Swashbuckle para infligir daño físico y aplicar Heartpiercer para debilitar a los enemigos, emplear Shield Crash para mitigar daño y aumentar la durabilidad, y usar Rolling Thunder para controlar a los enemigos en las peleas. Pangolier es altamente efectivo cuando puede moverse libremente y desatar su combo de habilidades, pero debe ser cauteloso con héroes que pueden inmovilizarlo o silenciarlo."
    },
    {
        name: "Phoenix",
        img: "img/heroes/phoenix.png",
        rol: "Support, Tanque",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Icarus Dive", tipo: "Movilidad" },
            segunda: { nombre: "Fire Spirits", tipo: "Daño mágico" },
            pasiva: { nombre: "Sun Ray", tipo: "Curación/Daño" },
            ulti: { nombre: "Supernova", tipo: "Control/Daño" }
        },
        Counters: [
            { name: "Ursa", CounterDesc: "Fury Swipes permite a Ursa destruir Supernova rápidamente.", CounterScore: "85%" },
            { name: "Silencer", CounterDesc: "Global Silence puede evitar que Phoenix use sus habilidades durante las peleas cruciales.", CounterScore: "80%" },
            { name: "Snapfire", CounterDesc: "Little Shredder puede destruir Supernova en pocos golpes debido a su alta velocidad de ataque.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Mars", SinergDesc: "Mars puede usar Arena of Blood para proteger el huevo de Phoenix mientras está en Supernova.", SinergScore: "90%" },
            { name: "Faceless Void", SinergDesc: "Chronosphere de Faceless Void puede atrapar a los enemigos y proteger a Phoenix mientras lanza Supernova.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Reverse Polarity de Magnus puede agrupar a los enemigos para un combo devastador con Supernova.", SinergScore: "85%" }
        ],
        objetivo: "Utilizar Icarus Dive para entrar y salir de peleas, emplear Fire Spirits para reducir la velocidad de ataque de los enemigos y causar daño en área, usar Sun Ray para curar aliados y dañar enemigos, y lanzar Supernova en momentos clave para desatar un control masivo y daño. Phoenix es extremadamente efectivo en peleas de equipo prolongadas, pero debe ser cauteloso con héroes que pueden destruir Supernova rápidamente."
    },
    {
        name: "Sand King",
        img: "img/heroes/sand_king.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Burrowstrike", tipo: "Stun" },
            segunda: { nombre: "Sand Storm", tipo: "Daño mágico" },
            pasiva: { nombre: "Caustic Finale", tipo: "Debuff" },
            ulti: { nombre: "Epicenter", tipo: "Daño mágico" }
        },
        Counters: [
            { name: "Slark", CounterDesc: "Dark Pact puede eliminar el control de Sand King y Pounce puede perseguirlo fácilmente.", CounterScore: "85%" },
            { name: "Oracle", CounterDesc: "False Promise puede salvar a sus aliados del combo de Epicenter y Burrowstrike.", CounterScore: "80%" },
            { name: "Lina", CounterDesc: "Lina puede desatar una gran cantidad de daño mágico, superando a Sand King en daño y control.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Enigma", SinergDesc: "Black Hole de Enigma puede agrupar a los enemigos para un combo devastador con Epicenter.", SinergScore: "90%" },
            { name: "Mirana", SinergDesc: "Burrowstrike seguido de Sacred Arrow de Mirana asegura una larga duración de control.", SinergScore: "85%" },
            { name: "Dark Willow", SinergDesc: "Cursed Crown y Bramble Maze de Dark Willow pueden ayudar a controlar a los enemigos mientras Sand King usa sus habilidades.", SinergScore: "85%" }
        ],
        objetivo: "Utilizar Burrowstrike para iniciar peleas y aturdir a múltiples enemigos, emplear Sand Storm para infligir daño en área y evadir ataques, aprovechar Caustic Finale para desgastar a los enemigos y causar explosiones de daño, y desatar Epicenter para un daño masivo en área durante peleas de equipo. Sand King es altamente efectivo en peleas en espacios reducidos y debe ser cauteloso con héroes que pueden eliminar su control o superarlo en daño."
    },
    {
        name: "Snapfire",
        img: "img/heroes/snapfire.png",
        rol: "Support, Iniciador",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Scatterblast", tipo: "Daño físico" },
            segunda: { nombre: "Firesnap Cookie", tipo: "Movilidad/Buff" },
            pasiva: { nombre: "Lil' Shredder", tipo: "Daño físico" },
            ulti: { nombre: "Mortimer Kisses", tipo: "Daño mágico" }
        },
        Counters: [
            { name: "Anti-Mage", CounterDesc: "Puede evitar el daño de Snapfire con Spell Shield y cazarla con Blink.", CounterScore: "85%" },
            { name: "Nyx Assassin", CounterDesc: "Puede interrumpir sus habilidades y eliminarla con Vendetta y Mana Burn.", CounterScore: "80%" },
            { name: "Clockwerk", CounterDesc: "Hookshot y Battery Assault pueden mantener a Snapfire bajo control, evitando que use sus habilidades de manera efectiva.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Mars", SinergDesc: "Arena of Blood de Mars puede atrapar a los enemigos, permitiendo que Snapfire los alcance con Mortimer Kisses.", SinergScore: "85%" },
            { name: "Centaur Warrunner", SinergDesc: "Centaur puede iniciar peleas con Hoof Stomp, permitiendo que Snapfire siga con sus habilidades de daño en área.", SinergScore: "80%" },
            { name: "Tidehunter", SinergDesc: "Ravage de Tidehunter puede agrupar a los enemigos para que Snapfire desate su combo de habilidades.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Scatterblast para infligir daño físico en área y desacelerar a los enemigos, emplear Firesnap Cookie para otorgar movilidad y un stun adicional, aprovechar Lil' Shredder para daño físico sostenido, y desatar Mortimer Kisses para un daño masivo en área desde la distancia. Snapfire es muy efectiva cuando puede combinar sus habilidades con un buen control de equipo y debe ser cautelosa con héroes que pueden interrumpir o desactivar sus habilidades."
    },
    {
        name: "Techies",
        img: "img/heroes/techies.png",
        rol: "Support, Iniciador",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Blast Off!", tipo: "Daño mágico" },
            segunda: { nombre: "Proximity Mines", tipo: "Daño mágico" },
            pasiva: { nombre: "Stasis Trap", tipo: "Control" },
            ulti: { nombre: "Remote Mines", tipo: "Daño mágico" }
        },
        Counters: [
            { name: "Slark", CounterDesc: "Puede eliminar minas con Dark Pact y cazar a Techies con Pounce.", CounterScore: "85%" },
            { name: "Nyx Assassin", CounterDesc: "Puede rastrear a Techies y eliminarlo con Vendetta y Mana Burn.", CounterScore: "80%" },
            { name: "Legion Commander", CounterDesc: "Puede eliminar a Techies rápidamente con Duel, evitando que coloque minas.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Tusk", SinergDesc: "Tusk puede atrapar a los enemigos con Snowball y Ice Shards, permitiendo que Techies los minee fácilmente.", SinergScore: "85%" },
            { name: "Axe", SinergDesc: "Berserker's Call de Axe puede agrupar a los enemigos, permitiendo que Techies desate sus minas para un daño masivo.", SinergScore: "80%" },
            { name: "Magnus", SinergDesc: "Reverse Polarity de Magnus puede agrupar a los enemigos, facilitando la colocación de minas y el combo de Techies.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Blast Off! para iniciar peleas y causar daño en área, colocar Proximity Mines en áreas estratégicas para controlar el mapa, emplear Stasis Trap para controlar a los enemigos y desatar Remote Mines para un daño masivo en peleas de equipo. Techies es extremadamente efectivo cuando tiene tiempo para preparar el terreno de juego, pero debe ser cauteloso con héroes que pueden cazarlo o eliminar sus minas rápidamente."
    },
    {
        name: "Vengeful Spirit",
        img: "img/heroes/vengefulspirit.png",
        rol: "Support, Iniciador",
        complejidad: 1,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Magic Missile", tipo: "Stun" },
            segunda: { nombre: "Wave of Terror", tipo: "Debuff" },
            pasiva: { nombre: "Vengeance Aura", tipo: "Buff" },
            ulti: { nombre: "Nether Swap", tipo: "Movilidad/Control" }
        },
        Counters: [
            { name: "Pugna", CounterDesc: "Decrepify puede desactivar a Vengeful Spirit y evitar su daño físico.", CounterScore: "85%" },
            { name: "Silencer", CounterDesc: "Global Silence puede desactivar a Vengeful Spirit durante peleas cruciales.", CounterScore: "80%" },
            { name: "Lifestealer", CounterDesc: "Puede resistir el daño de Vengeful Spirit con Rage y tiene suficiente sustain para sobrevivir a sus emboscadas.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Drow Ranger", SinergDesc: "Vengeance Aura aumenta el daño de Drow Ranger, permitiéndole ser aún más peligrosa en peleas.", SinergScore: "85%" },
            { name: "Shadow Fiend", SinergDesc: "Wave of Terror puede reducir la resistencia mágica de los enemigos, facilitando los ataques de Shadow Fiend.", SinergScore: "80%" },
            { name: "Terrorblade", SinergDesc: "Vengeance Aura aumenta el daño de Terrorblade y Nether Swap puede salvarlo en situaciones críticas.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Magic Missile para iniciar peleas y aturdir a los enemigos, emplear Wave of Terror para reducir la resistencia y visión de los enemigos, aprovechar Vengeance Aura para aumentar el daño de los aliados, y usar Nether Swap para reposicionar aliados o enemigos estratégicamente. Vengeful Spirit es altamente efectiva en peleas de equipo debido a su capacidad de control y buff, pero debe ser cautelosa con héroes que pueden desactivar sus habilidades o mitigar su daño."
    },
    {
        name: "Venomancer",
        img: "img/heroes/venomancer.png",
        rol: "Support, Iniciador, Pusher",
        complejidad: 1,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Venomous Gale", tipo: "Daño mágico/Debuff" },
            segunda: { nombre: "Poison Sting", tipo: "Debuff" },
            pasiva: { nombre: "Plague Ward", tipo: "Invocación" },
            ulti: { nombre: "Poison Nova", tipo: "Daño mágico/Debuff" }
        },
        Counters: [
            { name: "Anti-Mage", CounterDesc: "Puede evitar el daño de Venomancer con Spell Shield y cazarlo con Blink.", CounterScore: "85%" },
            { name: "Juggernaut", CounterDesc: "Puede resistir el daño de Venomancer con Blade Fury y Healing Ward, y es efectivo para eliminar Plague Wards.", CounterScore: "80%" },
            { name: "Lifestealer", CounterDesc: "Puede resistir el daño de Venomancer con Rage y tiene suficiente sustain para sobrevivir a su daño con Poison Nova.", CounterScore: "80%" }
        ],
        Sinergia: [
            { name: "Crystal Maiden", SinergDesc: "Crystal Nova de Crystal Maiden y Frostbite pueden asegurar que los enemigos queden atrapados en Poison Nova de Venomancer.", SinergScore: "85%" },
            { name: "Dark Seer", SinergDesc: "Vacuum de Dark Seer puede agrupar a los enemigos para un combo devastador con Poison Nova de Venomancer.", SinergScore: "80%" },
            { name: "Shadow Shaman", SinergDesc: "Shackles de Shadow Shaman puede mantener a los enemigos en posición para Poison Nova de Venomancer.", SinergScore: "80%" }
        ],
        objetivo: "Utilizar Venomous Gale para desgastar a los enemigos y aplicar el debuff, emplear Poison Sting para mantener el debuff y desgastar a los enemigos, aprovechar Plague Ward para controlar áreas y proporcionar visión, y lanzar Poison Nova en peleas de equipo para infligir daño masivo y aplicar debuffs. Venomancer es efectivo en control de área y peleas prolongadas, pero debe ser cauteloso con héroes que pueden evitar su daño o eliminar sus wards rápidamente."
    },
    {
        name: "Visage",
        img: "img/heroes/visage.png",
        rol: "Mid",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Grave Chill", tipo: "Buff/Debuff" },
            segunda: { nombre: "Soul Assumption", tipo: "Daño mágico" },
            pasiva: { nombre: "Gravekeeper's Cloak", tipo: "Evasión/Reducción de daño" },
            ulti: { nombre: "Summon Familiars", tipo: "Invocación/Daño" }
        },
        Counters: [
            { name: "Lone Druid", CounterDesc: "Puede manejar fácilmente los Familiars de Visage con Spirit Bear y eliminarlos rápidamente.", CounterScore: "85%" },
            { name: "Sniper", CounterDesc: "Puede mantener distancia de Visage y sus Familiars con Attack Range y eliminarlos con Daño Físico.", CounterScore: "80%" },
            { name: "Outworld Destroyer", CounterDesc: "Puede eliminar rápidamente los Familiars de Visage con Daño Mágico y controlar las peleas con Astral Imprisonment.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Drow Ranger", SinergDesc: "Puede aumentar el daño de ataque de los Familiars de Visage con Precision Aura, aumentando su efectividad en el juego temprano.", SinergScore: "85%" },
            { name: "Lich", SinergDesc: "Puede proteger a los Familiars de Visage y proporcionar control adicional con Frost Blast y Chain Frost.", SinergScore: "80%" },
            { name: "Io", SinergDesc: "Puede aumentar la movilidad y regeneración de Visage con Tether y Overcharge, permitiéndole ser más agresivo.", SinergScore: "85%" }
        ],
        objetivo: "Visage utiliza Grave Chill para debilitar a los enemigos y fortalecer a los aliados, Soul Assumption para infligir daño mágico basado en acumulaciones, Gravekeeper's Cloak para reducir el daño recibido y Summon Familiars para control de área y daño. Es efectivo contra héroes que dependen de ataques físicos, pero vulnerable a héroes con daño mágico alto y capacidad para eliminar a los Familiars."
    }
    ,
    {
        name: "Windranger",
        img: "img/heroes/windrunner.png",
        rol: "Mid, Support",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Shackleshot", tipo: "Stun" },
            segunda: { nombre: "Powershot", tipo: "Daño mágico" },
            pasiva: { nombre: "Windrun", tipo: "Evasión/Movilidad" },
            ulti: { nombre: "Focus Fire", tipo: "Daño físico" }
        },
        Counters: [
            { name: "Anti-Mage", CounterDesc: "Puede cerrar la distancia rápidamente con Blink y evitar el daño de Windranger con Spell Shield.", CounterScore: "85%" },
            { name: "Earthshaker", CounterDesc: "Puede atrapar a Windranger con Fissure y eliminarla rápidamente con Enchant Totem y Echo Slam.", CounterScore: "80%" },
            { name: "Phantom Assassin", CounterDesc: "Puede cerrar la distancia rápidamente con Blink Strike y eliminar a Windranger con ataques críticos.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Dazzle", SinergDesc: "Puede proteger a Windranger con Shallow Grave y amplificar su daño con Weave durante Focus Fire.", SinergScore: "85%" },
            { name: "Magnus", SinergDesc: "Puede agrupar a los enemigos para Shackleshot de Windranger y amplificar su daño con Empower durante Focus Fire.", SinergScore: "80%" },
            { name: "Shadow Shaman", SinergDesc: "Puede asegurar que los enemigos queden atrapados en Shackleshot de Windranger con Ether Shock y control adicional con Hex y Serpent Ward.", SinergScore: "80%" }
        ],
        objetivo: "Windranger utiliza Shackleshot para controlar a los enemigos y Powershot para infligir daño a larga distancia, aprovecha Windrun para evadir ataques y habilidades enemigas, y usa Focus Fire para maximizar su daño de ataque. Es efectiva contra héroes con movimientos predecibles y vulnerables a control prolongado, pero debe tener cuidado con héroes que pueden cerrar la distancia rápidamente y evitar su daño."
    }
    ,
    {
        name: "Winter Wyvern",
        img: "img/heroes/winter_wyvern.png",
        rol: "Support",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Arctic Burn", tipo: "Daño mágico/Movilidad" },
            segunda: { nombre: "Splinter Blast", tipo: "Daño mágico/Control" },
            pasiva: { nombre: "Cold Embrace", tipo: "Curación/Protección" },
            ulti: { nombre: "Winter's Curse", tipo: "Control" }
        },
        Counters: [
            { name: "Anti-Mage", CounterDesc: "Puede cerrar la distancia rápidamente con Blink y eliminar a Winter Wyvern con Mana Void.", CounterScore: "85%" },
            { name: "Invoker", CounterDesc: "Puede controlar a Winter Wyvern con Cold Snap y eliminarla rápidamente con daño mágico alto durante Winter's Curse.", CounterScore: "80%" },
            { name: "Slark", CounterDesc: "Puede cerrar la distancia rápidamente con Pounce y eliminar a Winter Wyvern con ataques rápidos durante Cold Embrace.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Crystal Maiden", SinergDesc: "Puede asegurar que los enemigos queden atrapados en Winter's Curse de Winter Wyvern con Frostbite y proporcionar control adicional con Crystal Nova.", SinergScore: "85%" },
            { name: "Faceless Void", SinergDesc: "Puede agrupar a los enemigos para un combo devastador con Winter's Curse de Winter Wyvern y controlar adicionalmente con Chronosphere.", SinergScore: "80%" },
            { name: "Tidehunter", SinergDesc: "Puede proteger a Winter Wyvern con Kraken Shell y proporcionar control adicional con Anchor Smash y Ravage.", SinergScore: "80%" }
        ],
        objetivo: "Winter Wyvern utiliza Arctic Burn para moverse y causar daño mágico, Splinter Blast para control de área y daño, Cold Embrace para proteger aliados y Winter's Curse para controlar y debilitar a los enemigos. Es efectiva contra equipos que dependen de daño físico y habilidades de ataque, pero debe tener cuidado con héroes que pueden eliminar rápidamente a aliados bajo Cold Embrace o evitar el control de Winter's Curse."
    },
    {
        name: "Void Spirit",
        img: "img/heroes/void_spirit.png",
        rol: "Mid, Iniciador",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Aether Remnant", tipo: "Control" },
            segunda: { nombre: "Resonant Pulse", tipo: "Escudo/Movilidad" },
            pasiva: { nombre: "Dissimilate", tipo: "Movilidad/Daño" },
            ulti: { nombre: "Astral Step", tipo: "Movilidad/Daño" }
        },
        Counters: [
            { name: "Anti-Mage", CounterDesc: "Puede evitar el daño de Void Spirit con Spell Shield y eliminarlo con Blink y Mana Void.", CounterScore: "85%" },
            { name: "Silencer", CounterDesc: "Puede controlar a Void Spirit con Global Silence y Last Word, evitando que use sus habilidades efectivamente.", CounterScore: "80%" },
            { name: "Outworld Destroyer", CounterDesc: "Puede eliminar rápidamente a Void Spirit con Astral Imprisonment y controlar las peleas con su daño mágico alto.", CounterScore: "85%" }
        ],
        Sinergia: [
            { name: "Earthshaker", SinergDesc: "Puede agrupar a los enemigos para Aether Remnant de Void Spirit y controlar peleas con Fissure y Echo Slam.", SinergScore: "85%" },
            { name: "Ember Spirit", SinergDesc: "Puede controlar a los enemigos con Chains y permitir que Void Spirit maximice su daño con su presencia en peleas.", SinergScore: "80%" },
            { name: "Phoenix", SinergDesc: "Puede proporcionar control adicional y daño en área con Supernova, combinándose bien con el control de Void Spirit.", SinergScore: "85%" }
        ],
        objetivo: "Void Spirit utiliza Aether Remnant para controlar a los enemigos y crear oportunidades para su equipo, Resonant Pulse para protegerse y moverse en peleas, Dissimilate para evadir y dañar a los enemigos, y Astral Step para movilidad y daño. Es efectivo contra héroes que dependen de movimientos predecibles y vulnerables a control prolongado, pero debe tener cuidado con héroes que pueden evitar su daño o limitar su capacidad para usar habilidades efectivamente."
    }
    
];

/* export { heroes }; */

window.heroes = heroes;
