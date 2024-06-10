 const habilidades = [
    {
        name: "Alchemist",
        habilidad1: "Unstable Concoction", 
        tipo1: "stun", 
        habilidad2: "Acid Spray", 
        tipo2: "reduccion de armadura, daño magico en area",
        habilidad3: "Chemical Rage", 
        tipo3: "regeneracion de vida, daño, velocidad de ataque"
    },
    {
        name: "Axe",
        habilidad1: "Berserker's Call", 
        tipo1: "desafio",
        habilidad2: "Counter Helix", 
        tipo2: "daño puro en area",
        habilidad3: "Culling Blade", 
        tipo3: "ejecucion"
    },
    {
        name: "Bristleback",
        habilidad1: "Viscous Nasal Goo", 
        tipo1: "reduccion de armadura",
        habilidad2: "Bristleback", 
        tipo2: "reduccion de daño",
        habilidad3: "Quill Spray", 
        tipo3: "daño fisico en area",
        habilidad4: "Warpath", 
        tipo4: "velocidad de ataque"
    },
    {
        name: "Centaur Warrunner",
        habilidad1: "Hoof Stomp", 
        tipo1: "stun en area",
        habilidad2: "Double Edge", 
        tipo2: "daño magico",
        habilidad3: "Retaliate", 
        tipo3: "devuelve daño",
        habilidad4: "Stampede", 
        tipo4: "global, aumento de velocidad"
    },
    {
        name: "Chaos Knight",
        habilidad1: "Chaos Bolt", 
        tipo1: "stun",
        habilidad2: "Reality Rift", 
        tipo2: "reduccion de armadura",
        habilidad3: "Chaos Strike", 
        tipo3: "daño critico",
        habilidad4: "Phantasm", 
        tipo4: "invocacion"
    },
    {
        name: "Dawnbreaker",
        habilidad1: "Starbreaker", 
        tipo1: "daño en area",
        habilidad2: "Celestial Hammer", 
        tipo2: "daño, slow",
        habilidad3: "Luminosity", 
        tipo3: "curacion",
        habilidad4: "Solar Guardian", 
        tipo4: "global, curacion, daño en area"
    },
    {
        name: "Doom",
        habilidad1: "Devour", 
        tipo1: "gold bonus",
        habilidad2: "Scorched Earth", 
        tipo2: "daño magico en area, regeneracion de vida",
        habilidad3: "Infernal Blade", 
        tipo3: "daño, stun",
        habilidad4: "Doom", 
        tipo4: "silencio, daño puro"
    },
    {
        name: "Dragon Knight",
        habilidad1: "Breathe Fire", 
        tipo1: "daño magico en area",
        habilidad2: "Dragon Tail", 
        tipo2: "stun",
        habilidad3: "Dragon Blood", 
        tipo3: "armadura, regeneracion de vida",
        habilidad4: "Elder Dragon Form", 
        tipo4: "transformacion, daño a distancia"
    },
    {
        name: "Earth Spirit",
        habilidad1: "Boulder Smash", 
        tipo1: "stun, reposicionamiento",
        habilidad2: "Rolling Boulder", 
        tipo2: "movilidad, daño",
        habilidad3: "Geomagnetic Grip", 
        tipo3: "silencio",
        habilidad4: "Magnetize", 
        tipo4: "daño en area"
    },
    {
        name: "Earthshaker",
        habilidad1: "Fissure", 
        tipo1: "stun en linea",
        habilidad2: "Enchant Totem", 
        tipo2: "aumento de daño",
        habilidad3: "Aftershock", 
        tipo3: "stun en area",
        habilidad4: "Echo Slam", 
        tipo4: "daño magico en area"
    },
    {
        name: "Elder Titan",
        habilidad1: "Echo Stomp", 
        tipo1: "stun en area",
        habilidad2: "Astral Spirit", 
        tipo2: "daño en area",
        habilidad3: "Natural Order", 
        tipo3: "reduccion de resistencia",
        habilidad4: "Earth Splitter", 
        tipo4: "stun en linea, retraso"
    },
    {
        name: "Huskar",
        habilidad1: "Inner Fire", 
        tipo1: "daño magico en area, desarme",
        habilidad2: "Burning Spear", 
        tipo2: "daño a lo largo del tiempo",
        habilidad3: "Berserker's Blood", 
        tipo3: "aumento de daño, regeneracion de vida",
        habilidad4: "Life Break", 
        tipo4: "daño, desafio"
    },
    {
        name: "Kunkka",
        habilidad1: "Torrent", 
        tipo1: "stun en area",
        habilidad2: "Tidebringer", 
        tipo2: "aumento de daño en area",
        habilidad3: "X Marks the Spot", 
        tipo3: "reposicionamiento",
        habilidad4: "Ghostship", 
        tipo4: "stun en area, aumento de resistencia"
    },
    {
        name: "Legion Commander",
        habilidad1: "Overwhelming Odds", 
        tipo1: "daño magico en area",
        habilidad2: "Press the Attack", 
        tipo2: "curacion, aumento de velocidad de ataque",
        habilidad3: "Moment of Courage", 
        tipo3: "aumento de daño, curacion",
        habilidad4: "Duel", 
        tipo4: "aumento de daño permanente, desafio"
    },
    {
        name: "Lifestealer",
        habilidad1: "Rage", 
        tipo1: "inmunidad a hechizos",
        habilidad2: "Feast", 
        tipo2: "robo de vida",
        habilidad3: "Ghoul Frenzy", 
        tipo3: "slow",
        habilidad4: "Infest", 
        tipo4: "curacion, movilidad"
    },
    {
        name: "Mars",
        habilidad1: { nombre: "Spear of Mars", tipo: "stun" },
        habilidad2: { nombre: "God's Rebuke", tipo: "daño en area" },
        habilidad3: { nombre: "Bulwark", tipo: "reduccion de daño" },
        habilidad4: { nombre: "Arena of Blood", tipo: "daño en area, bloqueo" }
    },
    {
        name: "Night Stalker",
        habilidad1: { nombre: "Void", tipo: "stun, slow" },
        habilidad2: { nombre: "Crippling Fear", tipo: "silencio en area" },
        habilidad3: { nombre: "Hunter in the Night", tipo: "movilidad, velocidad de ataque" },
        habilidad4: { nombre: "Dark Ascension", tipo: "movilidad, daño" }
    },
    {
        name: "Ogre Magi",
        habilidad1: "Fireblast", 
        tipo1: "stun",
        habilidad2: "Ignite", 
        tipo2: "daño magico, slow",
        habilidad3: "Bloodlust", 
        tipo3: "aumento de velocidad",
        habilidad4: "Multicast", 
        tipo4: "aumento de lanzamientos"
    },
    {
        name: "Omniknight",
        habilidad1: "Purification", 
        tipo1: "curacion, daño",
        habilidad2: "Heavenly Grace", 
        tipo2: "aumento de resistencia",
        habilidad3: "Degen Aura", 
        tipo3: "reduccion de velocidad",
        habilidad4: "Guardian Angel", 
        tipo4: "inmunidad fisica"
    },
    {
        name: "Primal Beast",
        habilidad1: "Onslaught", 
        tipo1: "movilidad, stun",
        habilidad2: "Trample", 
        tipo2: "daño en area",
        habilidad3: "Uproar", 
        tipo3: "aumento de resistencia",
        habilidad4: "Pulverize", 
        tipo4: "stun en area"
    },
    {
        name: "Pudge",
        habilidad1: "Meat Hook", 
        tipo1: "daño, pull",
        habilidad2: "Rot", 
        tipo2: "daño en area, slow",
        habilidad3: "Flesh Heap", 
        tipo3: "aumento de resistencia",
        habilidad4: "Dismember", 
        tipo4: "stun, curacion"
    },
    {
        name: "Slardar",
        habilidad1: "Slithereen Crush", 
        tipo1: "stun en area",
        habilidad2: "Bash of the Deep", 
        tipo2: "stun",
        habilidad3: "Guardian Sprint", 
        tipo3: "aumento de velocidad",
        habilidad4: "Corrosive Haze", 
        tipo4: "reduccion de armadura"
    },
    {
        name: "Spirit Breaker",
        habilidad1: "Charge of Darkness", 
        tipo1: "stun",
        habilidad2: "Bulldoze", 
        tipo2: "aumento de resistencia",
        habilidad3: "Greater Bash", 
        tipo3: "stun",
        habilidad4: "Nether Strike", 
        tipo4: "stun"
    },
    {
        name: "Sven",
        habilidad1: "Storm Hammer", 
        tipo1: "stun en area",
        habilidad2: "Great Cleave", 
        tipo2: "daño en area",
        habilidad3: "Warcry", 
        tipo3: "aumento de armadura",
        habilidad4: "God's Strength", 
        tipo4: "aumento de daño"
    },
    {
        name: "Tidehunter",
        habilidad1: "Gush", 
        tipo1: "reduccion de armadura, slow",
        habilidad2: "Kraken Shell", 
        tipo2: "reduccion de daño",
        habilidad3: "Anchor Smash", 
        tipo3: "daño en area",
        habilidad4: "Ravage", 
        tipo4: "stun en area"
    },
    {
        name: "Timbersaw",
        habilidad1: "Whirling Death", 
        tipo1: "daño en area",
        habilidad2: "Timber Chain", 
        tipo2: "movilidad, daño",
        habilidad3: "Reactive Armor", 
        tipo3: "armadura, regeneracion de vida",
        habilidad4: "Chakram", 
        tipo4: "daño en area"
    },
    
    
    {
        name: "Tiny",
        habilidad1: "Avalanche", 
        tipo1: "stun en area, daño magico en area",
        habilidad2: "Toss", 
        tipo2: "daño, throw",
        habilidad3: "Tree Grab", 
        tipo3: "aumento de daño",
        habilidad4: "Grow", 
        tipo4: "aumento de tamaño, aumento de daño"
    },
    {
        name: "Treant Protector",
        habilidad1: "Nature's Grasp", 
        tipo1: "daño a lo largo del tiempo, slow",
        habilidad2: "Leech Seed", 
        tipo2: "curacion, daño",
        habilidad3: "Living Armor", 
        tipo3: "armadura, curacion",
        habilidad4: "Overgrowth", 
        tipo4: "root en area"
    },
    {
        name: "Tusk",
        habilidad1: "Ice Shards", 
        tipo1: "daño, bloqueo",
        habilidad2: "Snowball", 
        tipo2: "movilidad, stun",
        habilidad3: "Tag Team", 
        tipo3: "daño en area",
        habilidad4: "Walrus Punch", 
        tipo4: "stun, daño critico"
    },
    {
        name: "Underlord",
        habilidad1: "Firestorm", 
        tipo1: "daño en area",
        habilidad2: "Pit of Malice", 
        tipo2: "root en area",
        habilidad3: "Atrophy Aura", 
        tipo3: "reduccion de daño",
        habilidad4: "Dark Rift", 
        tipo4: "movilidad global"
    },
    {
        name: "Undying",
        habilidad1: "Decay", 
        tipo1: "reduccion de fuerza, daño",
        habilidad2: "Soul Rip", 
        tipo2: "curacion, daño",
        habilidad3: "Tombstone", 
        tipo3: "invocacion, slow",
        habilidad4: "Flesh Golem", 
        tipo4: "aumento de daño, slow"
    },
    {
        name: "Wraith King",
        habilidad1: "Wraithfire Blast", 
        tipo1: "stun, daño a lo largo del tiempo",
        habilidad2: "Vampiric Spirit", 
        tipo2: "robo de vida",
        habilidad3: "Mortal Strike", 
        tipo3: "daño critico",
        habilidad4: "Reincarnation", 
        tipo4: "resurreccion"
    },
    
    {
        name: "Anti-Mage",
        habilidad1: "Mana Break", 
        tipo1: "mana burn",
        habilidad2: "Blink", 
        tipo2: "movilidad",
        habilidad3: "Counterspell", 
        tipo3: "resistencia mágica",
        habilidad4: "Mana Void", 
        tipo4: "daño en area"
    },
    {
        name: "Arc Warden",
        habilidad1: "Flux", 
        tipo1: "daño",
        habilidad2: "Magnetic Field", 
        tipo2: "evasion",
        habilidad3: "Spark Wraith", 
        tipo3: "daño",
        habilidad4: "Tempest Double", 
        tipo4: "invocacion"
    },
    {
        name: "Bloodseeker",
        habilidad1: "Bloodrage", 
        tipo1: "aumento de daño",
        habilidad2: "Blood Rite", 
        tipo2: "silence, daño en area",
        habilidad3: "Thirst", 
        tipo3: "velocidad, regeneracion de vida",
        habilidad4: "Rupture", 
        tipo4: "daño a lo largo del tiempo"
    },
    {
        name: "Bounty Hunter",
        habilidad1: "Shuriken Toss", 
        tipo1: "daño",
        habilidad2: "Jinada", 
        tipo2: "daño critico, slow",
        habilidad3: "Shadow Walk", 
        tipo3: "invisibilidad",
        habilidad4: "Track", 
        tipo4: "vision, aumento de oro"
    },
    {
        name: "Clinkz",
        habilidad1: "Strafe", 
        tipo1: "velocidad de ataque",
        habilidad2: "Searing Arrows", 
        tipo2: "daño adicional",
        habilidad3: "Skeleton Walk", 
        tipo3: "invisibilidad",
        habilidad4: "Burning Army", 
        tipo4: "invocacion"
    },
    
    {
        name: "Drow Ranger",
        habilidades: [
            { nombre: "Frost Arrows", tipo: "slow" },
            { nombre: "Gust", tipo: "silence" },
            { nombre: "Multishot", tipo: "daño en area" },
            { nombre: "Marksmanship", tipo: "aumento de daño" }
        ]
    },
    {
        name: "Ember Spirit",
        habilidades: [
            { nombre: "Searing Chains", tipo: "root, daño" },
            { nombre: "Sleight of Fist", tipo: "daño en area" },
            { nombre: "Flame Guard", tipo: "daño a lo largo del tiempo, escudo" },
            { nombre: "Fire Remnant", tipo: "movilidad, daño" }
        ]
    },
    {
        name: "Faceless Void",
        habilidades: [
            { nombre: "Time Walk", tipo: "movilidad, curacion" },
            { nombre: "Time Dilation", tipo: "slow, cooldown prolongado" },
            { nombre: "Time Lock", tipo: "stun" },
            { nombre: "Chronosphere", tipo: "stun en area" }
        ]
    },
    {
        name: "Gyrocopter",
        habilidades: [
            { nombre: "Rocket Barrage", tipo: "daño en area" },
            { nombre: "Homing Missile", tipo: "stun" },
            { nombre: "Flak Cannon", tipo: "daño en area" },
            { nombre: "Call Down", tipo: "slow, daño en area" }
        ]
    },
    {
        name: "Hoodwink",
        habilidades: [
            { nombre: "Acorn Shot", tipo: "daño en area" },
            { nombre: "Bushwhack", tipo: "stun" },
            { nombre: "Scurry", tipo: "movilidad" },
            { nombre: "Sharpshooter", tipo: "daño" }
        ]
    },
    {
        name: "Juggernaut",
        habilidades: [
            { nombre: "Blade Fury", tipo: "daño a lo largo del tiempo" },
            { nombre: "Healing Ward", tipo: "curacion" },
            { nombre: "Blade Dance", tipo: "daño critico" },
            { nombre: "Omnislash", tipo: "daño en area" }
        ]
    },
    {
        name: "Luna",
        habilidades: [
            { nombre: "Lucent Beam", tipo: "daño" },
            { nombre: "Moon Glaives", tipo: "daño en area" },
            { nombre: "Lunar Blessing", tipo: "aumento de daño" },
            { nombre: "Eclipse", tipo: "daño en area" }
        ]
    },
    {
        name: "Medusa",
        habilidades: [
            { nombre: "Split Shot", tipo: "daño en area" },
            { nombre: "Mystic Snake", tipo: "daño, mana steal" },
            { nombre: "Mana Shield", tipo: "escudo" },
            { nombre: "Stone Gaze", tipo: "petrificacion, slow" }
        ]
    },
    {
        name: "Meepo",
        habilidades: [
            { nombre: "Earthbind", tipo: "root en area" },
            { nombre: "Poof", tipo: "daño en area, movilidad" },
            { nombre: "Ransack", tipo: "robo de vida" },
            { nombre: "Divided We Stand", tipo: "invocacion" }
        ]
    },
    {
        name: "Monkey King",
        habilidades: [
            { nombre: "Boundless Strike", tipo: "daño, stun" },
            { nombre: "Tree Dance", tipo: "movilidad" },
            { nombre: "Jingu Mastery", tipo: "aumento de daño, robo de vida" },
            { nombre: "Wukong's Command", tipo: "daño en area" }
        ]
    },
    {
        name: "Morphling",
        habilidades: [
            { nombre: "Waveform", tipo: "movilidad, daño" },
            { nombre: "Adaptive Strike (Agility)", tipo: "daño" },
            { nombre: "Attribute Shift (Agility)", tipo: "aumento de agilidad" },
            { nombre: "Morph", tipo: "cambio de forma" }
        ]
    },
    {
        name: "Naga Siren",
        habilidades: [
            { nombre: "Mirror Image", tipo: "invocacion" },
            { nombre: "Ensnare", tipo: "root" },
            { nombre: "Rip Tide", tipo: "reduccion de armadura, daño en area" },
            { nombre: "Song of the Siren", tipo: "sleep en area" }
        ]
    },
    {
        name: "Phantom Assassin",
        habilidades: [
            { nombre: "Stifling Dagger", tipo: "slow, daño" },
            { nombre: "Phantom Strike", tipo: "movilidad, aumento de velocidad de ataque" },
            { nombre: "Blur", tipo: "evasión" },
            { nombre: "Coup de Grace", tipo: "daño critico" }
        ]
    },
    {
        name: "Phantom Lancer",
        habilidades: [
            { nombre: "Spirit Lance", tipo: "slow, daño" },
            { nombre: "Doppelganger", tipo: "movilidad, invocacion" },
            { nombre: "Phantom Rush", tipo: "movilidad" },
            { nombre: "Juxtapose", tipo: "invocacion" }
        ]
    },
    {
        name: "Razor",
        habilidades: [
            { nombre: "Plasma Field", tipo: "daño en area" },
            { nombre: "Static Link", tipo: "robo de daño" },
            { nombre: "Storm Surge", tipo: "velocidad de movimiento" },
            { nombre: "Eye of the Storm", tipo: "reduccion de armadura, daño en area" }
        ]
    },
    {
        name: "Riki",
        habilidades: [
            { nombre: "Smoke Screen", tipo: "silence, slow en area" },
            { nombre: "Blink Strike", tipo: "movilidad, daño" },
            { nombre: "Cloak and Dagger", tipo: "invisibilidad" },
            { nombre: "Tricks of the Trade", tipo: "daño en area" }
        ]
    },
    {
        name: "Shadow Fiend",
        habilidades: [
            { nombre: "Shadowraze", tipo: "daño en area" },
            { nombre: "Necromastery", tipo: "aumento de daño" },
            { nombre: "Presence of the Dark Lord", tipo: "reduccion de armadura" },
            { nombre: "Requiem of Souls", tipo: "daño en area, slow" }
        ]
    },
    {
        name: "Slark",
        habilidades: [
            { nombre: "Dark Pact", tipo: "daño en area, purga" },
            { nombre: "Pounce", tipo: "movilidad, root" },
            { nombre: "Essence Shift", tipo: "robo de atributos" },
            { nombre: "Shadow Dance", tipo: "invisibilidad, regeneracion" }
        ]
    },
    {
        name: "Sniper",
        habilidades: [
            { nombre: "Shrapnel", tipo: "daño en area, slow" },
            { nombre: "Headshot", tipo: "daño, slow" },
            { nombre: "Take Aim", tipo: "aumento de alcance" },
            { nombre: "Assassinate", tipo: "daño" }
        ]
    },
    {
        name: "Spectre",
        habilidades: [
            { nombre: "Spectral Dagger", tipo: "movilidad, slow" },
            { nombre: "Desolate", tipo: "daño adicional" },
            { nombre: "Dispersion", tipo: "daño reflectado" },
            { nombre: "Haunt", tipo: "invocacion, daño en area" }
        ]
    },
    {
        name: "Templar Assassin",
        habilidades: [
            { nombre: "Refraction", tipo: "escudo, aumento de daño" },
            { nombre: "Meld", tipo: "invisibilidad, reduccion de armadura" },
            { nombre: "Psi Blades", tipo: "daño en area" },
            { nombre: "Psionic Trap", tipo: "slow en area" }
        ]
    },
    {
        name: "Terrorblade",
        habilidades: [
            { nombre: "Reflection", tipo: "slow, invocacion" },
            { nombre: "Conjure Image", tipo: "invocacion" },
            { nombre: "Metamorphosis", tipo: "cambio de forma, aumento de daño" },
            { nombre: "Sunder", tipo: "intercambio de vida" }
        ]
    },
    {
        name: "Troll Warlord",
        habilidades: [
            { nombre: "Berserker's Rage", tipo: "cambio de forma, slow" },
            { nombre: "Whirling Axes (Ranged)", tipo: "slow, daño en area" },
            { nombre: "Whirling Axes (Melee)", tipo: "daño en area, ceguera" },
            { nombre: "Fervor", tipo: "aumento de velocidad de ataque" },
            { nombre: "Battle Trance", tipo: "regeneracion, velocidad de ataque" }
        ]
    },
    {
        name: "Ursa",
        habilidades: [
            { nombre: "Earthshock", tipo: "slow, daño en area" },
            { nombre: "Overpower", tipo: "aumento de velocidad de ataque" },
            { nombre: "Fury Swipes", tipo: "daño acumulativo" },
            { nombre: "Enrage", tipo: "resistencia, aumento de daño" }
        ]
    },
    {
        name: "Viper",
        habilidades: [
            { nombre: "Poison Attack", tipo: "daño a lo largo del tiempo, slow" },
            { nombre: "Nethertoxin", tipo: "daño en area, silencia pasivas" },
            { nombre: "Corrosive Skin", tipo: "resistencia mágica, daño a lo largo del tiempo" },
            { nombre: "Viper Strike", tipo: "slow, daño a lo largo del tiempo" }
        ]
    },
    {
        name: "Weaver",
        habilidades: [
            { nombre: "The Swarm", tipo: "invocacion, reduccion de armadura" },
            { nombre: "Shukuchi", tipo: "movilidad, invisibilidad" },
            { nombre: "Geminate Attack", tipo: "ataque doble" },
            { nombre: "Time Lapse", tipo: "movilidad, restauracion de vida" }
        ]
    },
    // Inteligencia
    {
        name: "Ancient Apparition",
        habilidades: [
            { nombre: "Cold Feet", tipo: "stun" },
            { nombre: "Ice Vortex", tipo: "slow en area, aumento de daño mágico" },
            { nombre: "Chilling Touch", tipo: "aumento de daño" },
            { nombre: "Ice Blast", tipo: "daño en area, prevencion de curacion" }
        ]
    },
    {
        name: "Crystal Maiden",
        habilidades: [
            { nombre: "Crystal Nova", tipo: "slow en area, daño" },
            { nombre: "Frostbite", tipo: "root, daño" },
            { nombre: "Arcane Aura", tipo: "regeneracion de mana" },
            { nombre: "Freezing Field", tipo: "daño en area, slow" }
        ]
    },
    {
        name: "Death Prophet",
        habilidades: [
            { nombre: "Crypt Swarm", tipo: "daño en area" },
            { nombre: "Silence", tipo: "silence en area" },
            { nombre: "Spirit Siphon", tipo: "robo de vida" },
            { nombre: "Exorcism", tipo: "daño en area" }
        ]
    },
    {
        name: "Disruptor",
        habilidades: [
            { nombre: "Thunder Strike", tipo: "daño" },
            { nombre: "Glimpse", tipo: "reposicionamiento" },
            { nombre: "Kinetic Field", tipo: "barrera" },
            { nombre: "Static Storm", tipo: "silence, daño en area" }
        ]
    },
    {
        name: "Enchantress",
        habilidades: [
            { nombre: "Untouchable", tipo: "slow de ataque" },
            { nombre: "Enchant", tipo: "control de unidades, slow" },
            { nombre: "Nature's Attendants", tipo: "curacion en area" },
            { nombre: "Impetus", tipo: "daño" }
        ]
    },
    {
        name: "Grimstroke",
        habilidades: [
            { nombre: "Stroke of Fate", tipo: "daño en area, slow" },
            { nombre: "Phantom's Embrace", tipo: "silence, daño" },
            { nombre: "Ink Swell", tipo: "invulnerabilidad, stun" },
            { nombre: "Soulbind", tipo: "vinculacion, silence" }
        ]
    },
    {
        name: "Jakiro",
        habilidades: [
            { nombre: "Dual Breath", tipo: "daño en area, slow" },
            { nombre: "Ice Path", tipo: "stun en area" },
            { nombre: "Liquid Fire", tipo: "daño a lo largo del tiempo, slow de ataque" },
            { nombre: "Macropyre", tipo: "daño en area" }
        ]
    },
    {
        name: "Keeper of the Light",
        habilidades: [
            { nombre: "Illuminate", tipo: "daño en area" },
            { nombre: "Blinding Light", tipo: "ceguera, knockback" },
            { nombre: "Chakra Magic", tipo: "regeneracion de mana" },
            { nombre: "Spirit Form", tipo: "cambio de forma" }
        ]
    },
    {
        name: "Leshrac",
        habilidades: [
            { nombre: "Split Earth", tipo: "stun en area, retraso" },
            { nombre: "Diabolic Edict", tipo: "daño en area" },
            { nombre: "Lightning Storm", tipo: "daño en area, slow" },
            { nombre: "Pulse Nova", tipo: "daño en area" }
        ]
    },
    {
        name: "Lich",
        habilidades: [
            { nombre: "Frost Blast", tipo: "daño, slow" },
            { nombre: "Frost Shield", tipo: "reduccion de daño, slow" },
            { nombre: "Sinister Gaze", tipo: "reposicionamiento, stun, canalizado" },
            { nombre: "Chain Frost", tipo: "daño en area, slow" }
        ]
    },
    {
        name: "Lina",
        habilidades: [
            { nombre: "Dragon Slave", tipo: "daño en area" },
            { nombre: "Light Strike Array", tipo: "stun en area, retraso" },
            { nombre: "Fiery Soul", tipo: "aumento de velocidad de ataque y movimiento" },
            { nombre: "Laguna Blade", tipo: "daño" }
        ]
    },
    {
        name: "Lion",
        habilidades: [
            { nombre: "Earth Spike", tipo: "stun en area" },
            { nombre: "Hex", tipo: "transformacion" },
            { nombre: "Mana Drain", tipo: "robo de mana" },
            { nombre: "Finger of Death", tipo: "daño" }
        ]
    },
    {
        name: "Muerta",
        habilidades: [
            { nombre: "Dead Shot", tipo: "daño, fear" },
            { nombre: "The Calling", tipo: "silence, slow" },
            { nombre: "Gunslinger", tipo: "ataque extra" },
            { nombre: "Pierce the Veil", tipo: "aumento de daño, inmunidad a hechizos" }
        ]
    },
    {
        name: "Nature's Prophet",
        habilidades: [
            { nombre: "Sprout", tipo: "control, bloqueo" },
            { nombre: "Teleportation", tipo: "movilidad global" },
            { nombre: "Nature's Call", tipo: "invocación" },
            { nombre: "Wrath of Nature", tipo: "daño global" }
        ]
    },
    {
        name: "Necrophos",
        habilidades: [
            { nombre: "Death Pulse", tipo: "daño, curación" },
            { nombre: "Ghost Shroud", tipo: "inmunidad física, curación amplificada" },
            { nombre: "Heartstopper Aura", tipo: "daño pasivo" },
            { nombre: "Reaper's Scythe", tipo: "daño, ejecución" }
        ]
    },
    {
        name: "Ogre Magi",
        habilidades: [
            { nombre: "Fireblast", tipo: "stun" },
            { nombre: "Ignite", tipo: "daño, slow" },
            { nombre: "Bloodlust", tipo: "buff de velocidad" },
            { nombre: "Multicast", tipo: "habilidad pasiva" }
        ]
    },
    {
        name: "Oracle",
        habilidades: [
            { nombre: "Fortune's End", tipo: "raíz, daño" },
            { nombre: "Fate's Edict", tipo: "silencio, inmunidad a la magia" },
            { nombre: "Purifying Flames", tipo: "daño, curación" },
            { nombre: "False Promise", tipo: "salvación, retraso" }
        ]
    },
    {
        name: "Outworld Destroyer",
        habilidades: [
            { nombre: "Arcane Orb", tipo: "daño mágico" },
            { nombre: "Astral Imprisonment", tipo: "desaparecer, control" },
            { nombre: "Essence Flux", tipo: "regeneración de maná" },
            { nombre: "Sanity's Eclipse", tipo: "daño basado en inteligencia" }
        ]
    },
    {
        name: "Pugna",
        habilidades: [
            { nombre: "Nether Blast", tipo: "daño en área" },
            { nombre: "Decrepify", tipo: "slow, amplificación de daño mágico" },
            { nombre: "Nether Ward", tipo: "torre defensiva" },
            { nombre: "Life Drain", tipo: "daño, curación, canalizado" }
        ]
    },
    {
        name: "Queen of Pain",
        habilidades: [
            { nombre: "Shadow Strike", tipo: "daño, slow" },
            { nombre: "Blink", tipo: "movilidad" },
            { nombre: "Scream of Pain", tipo: "daño en área" },
            { nombre: "Sonic Wave", tipo: "daño en línea" }
        ]
    },
    {
        name: "Rubick",
        habilidades: [
            { nombre: "Telekinesis", tipo: "levitación, stun" },
            { nombre: "Fade Bolt", tipo: "daño, reducción de daño" },
            { nombre: "Arcane Supremacy", tipo: "aumento de duración de hechizos" },
            { nombre: "Spell Steal", tipo: "robo de habilidades" }
        ]
    },
    {
        name: "Shadow Demon",
        habilidades: [
            { nombre: "Disruption", tipo: "desaparecer, invocación" },
            { nombre: "Soul Catcher", tipo: "aumento de daño recibido" },
            { nombre: "Shadow Poison", tipo: "daño acumulativo" },
            { nombre: "Demonic Purge", tipo: "slow, daño, retraso" }
        ]
    },
    {
        name: "Shadow Shaman",
        habilidades: [
            { nombre: "Ether Shock", tipo: "daño en área" },
            { nombre: "Hex", tipo: "transformación" },
            { nombre: "Shackles", tipo: "stun, canalizado" },
            { nombre: "Mass Serpent Ward", tipo: "invocación" }
        ]
    },
    {
        name: "Silencer",
        habilidades: [
            { nombre: "Curse of the Silent", tipo: "silencio, daño" },
            { nombre: "Glaives of Wisdom", tipo: "daño basado en inteligencia" },
            { nombre: "Last Word", tipo: "silencio, daño" },
            { nombre: "Global Silence", tipo: "silencio global" }
        ]
    },
    {
        name: "Skywrath Mage",
        habilidades: [
            { nombre: "Arcane Bolt", tipo: "daño mágico" },
            { nombre: "Concussive Shot", tipo: "slow" },
            { nombre: "Ancient Seal", tipo: "silencio, amplificación de daño mágico" },
            { nombre: "Mystic Flare", tipo: "daño en área" }
        ]
    },
    {
        name: "Storm Spirit",
        habilidades: [
            { nombre: "Static Remnant", tipo: "daño en área" },
            { nombre: "Electric Vortex", tipo: "atracción, stun" },
            { nombre: "Overload", tipo: "daño pasivo" },
            { nombre: "Ball Lightning", tipo: "movilidad" }
        ]
    },
    {
        name: "Tinker",
        habilidades: [
            { nombre: "Laser", tipo: "daño, ceguera" },
            { nombre: "Heat-Seeking Missile", tipo: "daño" },
            { nombre: "March of the Machines", tipo: "daño en área" },
            { nombre: "Rearm", tipo: "reinicio de habilidades" }
        ]
    },
    {
        name: "Warlock",
        habilidades: [
            { nombre: "Fatal Bonds", tipo: "vínculo de daño" },
            { nombre: "Shadow Word", tipo: "curación, daño" },
            { nombre: "Upheaval", tipo: "slow en área, canalizado" },
            { nombre: "Chaotic Offering", tipo: "invocación, stun en área" }
        ]
    },
    {
        name: "Witch Doctor",
        habilidades: [
            { nombre: "Paralyzing Cask", tipo: "stun en área" },
            { nombre: "Voodoo Restoration", tipo: "curación en área" },
            { nombre: "Maledict", tipo: "amplificación de daño" },
            { nombre: "Death Ward", tipo: "canalizado, daño" }
        ]
    },
    {
        name: "Zeus",
        habilidades: [
            { nombre: "Arc Lightning", tipo: "daño en cadena" },
            { nombre: "Lightning Bolt", tipo: "daño, revelación" },
            { nombre: "Heavenly Jump", tipo: "slow, evasión" },
            { nombre: "Thundergod's Wrath", tipo: "daño global" }
        ]
    },
    {
        name: "Abaddon",
        habilidades: [
            { nombre: "Mist Coil", tipo: "daño, curación" },
            { nombre: "Aphotic Shield", tipo: "escudo" },
            { nombre: "Curse of Avernus", tipo: "slow, silence" },
            { nombre: "Borrowed Time", tipo: "inmunidad, curación" }
        ]
    },
    {
        name: "Bane",
        habilidades: [
            { nombre: "Enfeeble", tipo: "reducción de daño" },
            { nombre: "Brain Sap", tipo: "daño, curación" },
            { nombre: "Nightmare", tipo: "stun, control" },
            { nombre: "Fiend's Grip", tipo: "stun, daño, canalizado" }
        ]
    },
    {
        name: "Batrider",
        habilidades: [
            { nombre: "Sticky Napalm", tipo: "slow, amplificación de daño" },
            { nombre: "Flamebreak", tipo: "daño, empuje" },
            { nombre: "Firefly", tipo: "daño, movilidad" },
            { nombre: "Flaming Lasso", tipo: "control" }
        ]
    },
    {
        name: "Beastmaster",
        habilidades: [
            { nombre: "Wild Axes", tipo: "daño en área" },
            { nombre: "Call of the Wild Boar", tipo: "invocación" },
            { nombre: "Call of the Wild Hawk", tipo: "revelación, invocación" },
            { nombre: "Primal Roar", tipo: "stun en línea" }
        ]
    },
    {
        name: "Broodmother",
        habilidades: [
            { nombre: "Spawn Spiderlings", tipo: "invocación, daño" },
            { nombre: "Spin Web", tipo: "movilidad, regeneración" },
            { nombre: "Incapacitating Bite", tipo: "slow, miss" },
            { nombre: "Insatiable Hunger", tipo: "robo de vida, daño" }
        ]
    },
    {
        name: "Chen",
        habilidades: [
            { nombre: "Penitence", tipo: "slow, amplificación de daño" },
            { nombre: "Holy Persuasion", tipo: "conversión de unidades" },
            { nombre: "Divine Favor", tipo: "curación, buff" },
            { nombre: "Hand of God", tipo: "curación global" }
        ]
    },
    {
        name: "Clockwerk",
        habilidades: [
            { nombre: "Battery Assault", tipo: "daño, stun" },
            { nombre: "Power Cogs", tipo: "control, bloqueo" },
            { nombre: "Rocket Flare", tipo: "daño, revelación" },
            { nombre: "Hookshot", tipo: "movilidad, stun" }
        ]
    },
    {
        name: "Dark Seer",
        habilidades: [
            { nombre: "Vacuum", tipo: "control en área" },
            { nombre: "Ion Shell", tipo: "daño" },
            { nombre: "Surge", tipo: "buff de velocidad" },
            { nombre: "Wall of Replica", tipo: "invocación, daño" }
        ]
    },
    {
        name: "Dark Willow",
        habilidades: [
            { nombre: "Bramble Maze", tipo: "control en área" },
            { nombre: "Shadow Realm", tipo: "inmunidad, daño" },
            { nombre: "Cursed Crown", tipo: "stun en área" },
            { nombre: "Bedlam", tipo: "daño" }
        ]
    },
    {
        name: "Lycan",
        habilidades: [
            { nombre: "Summon Wolves", tipo: "invocación" },
            { nombre: "Howl", tipo: "reducción de daño" },
            { nombre: "Feral Impulse", tipo: "buff pasivo" },
            { nombre: "Shapeshift", tipo: "transformación, velocidad" }
        ]
    },
    {
        name: "Dazzle",
        habilidades: [
            { nombre: "Poison Touch", tipo: "slow, daño" },
            { nombre: "Shallow Grave", tipo: "salvación" },
            { nombre: "Shadow Wave", tipo: "curación, daño" },
            { nombre: "Bad Juju", tipo: "reducción de armadura, curación" }
        ]
    },
    {
        name: "Enigma",
        habilidades: [
            { nombre: "Malefice", tipo: "stun en intervalos" },
            { nombre: "Demonic Conversion", tipo: "invocación" },
            { nombre: "Midnight Pulse", tipo: "daño en área" },
            { nombre: "Black Hole", tipo: "control en área, canalizado" }
        ]
    },
    {
        name: "Invoker",
        habilidades: [
            { nombre: "Quas", tipo: "regeneración, control" },
            { nombre: "Wex", tipo: "velocidad, evasión" },
            { nombre: "Exort", tipo: "daño" },
            { nombre: "Invoke", tipo: "habilidad combinatoria" }
        ]
    },
    {
        name: "Io",
        habilidades: [
            { nombre: "Tether", tipo: "conexión, curación" },
            { nombre: "Spirits", tipo: "daño en área" },
            { nombre: "Overcharge", tipo: "buff de velocidad, curación" },
            { nombre: "Relocate", tipo: "movilidad global" }
        ]
    },
    {
        name: "Lone Druid",
        habilidades: [
            { nombre: "Summon Spirit Bear", tipo: "invocación" },
            { nombre: "Spirit Link", tipo: "robo de vida" },
            { nombre: "Savage Roar", tipo: "miedo" },
            { nombre: "True Form", tipo: "transformación" }
        ]
    },
    {
        name: "Magnus",
        habilidades: [
            { nombre: "Shockwave", tipo: "daño en línea" },
            { nombre: "Empower", tipo: "buff de daño" },
            { nombre: "Skewer", tipo: "movilidad, control" },
            { nombre: "Reverse Polarity", tipo: "stun en área" }
        ]
    },
    {
        name: "Mars",
        habilidades: [
            { nombre: "Spear of Mars", tipo: "stun en línea" },
            { nombre: "God's Rebuke", tipo: "daño en área" },
            { nombre: "Bulwark", tipo: "reducción de daño" },
            { nombre: "Arena of Blood", tipo: "control en área" }
        ]
    },
    {
        name: "Mirana",
        habilidades: [
            { nombre: "Starstorm", tipo: "daño en área" },
            { nombre: "Sacred Arrow", tipo: "stun en línea" },
            { nombre: "Leap", tipo: "movilidad, buff" },
            { nombre: "Moonlight Shadow", tipo: "invisibilidad global" }
        ]
    },
    {
        name: "Nyx Assassin",
        habilidades: [
            { nombre: "Impale", tipo: "stun en línea" },
            { nombre: "Mana Burn", tipo: "daño basado en mana" },
            { nombre: "Spiked Carapace", tipo: "reflejo de daño, stun" },
            { nombre: "Vendetta", tipo: "invisibilidad, daño" }
        ]
    },
    {
        name: "Pangolier",
        habilidades: [
            { nombre: "Swashbuckle", tipo: "movilidad, daño en línea" },
            { nombre: "Shield Crash", tipo: "daño en área, reducción de daño" },
            { nombre: "Heartpiercer", tipo: "desarme" },
            { nombre: "Rolling Thunder", tipo: "movilidad, stun en área" }
        ]
    },
    {
        name: "Phoenix",
        habilidades: [
            { nombre: "Icarus Dive", tipo: "movilidad, daño" },
            { nombre: "Fire Spirits", tipo: "daño en área, slow" },
            { nombre: "Sun Ray", tipo: "daño, curación" },
            { nombre: "Supernova", tipo: "invulnerabilidad, daño en área, retraso" }
        ]
    },
    {
        name: "Sand King",
        habilidades: [
            { nombre: "Burrowstrike", tipo: "movilidad, stun en línea" },
            { nombre: "Sand Storm", tipo: "invisibilidad, daño en área" },
            { nombre: "Caustic Finale", tipo: "daño en área" },
            { nombre: "Epicenter", tipo: "daño en área, slow, canalizado" }
        ]
    },
    {
        name: "Snapfire",
        habilidades: [
            { nombre: "Scatterblast", tipo: "daño en área, slow" },
            { nombre: "Firesnap Cookie", tipo: "movilidad, stun" },
            { nombre: "Lil' Shredder", tipo: "daño, reducción de velocidad de ataque" },
            { nombre: "Mortimer Kisses", tipo: "daño en áreal, canalizado" }
        ]
    },
    {
        name: "Techies",
        habilidades: [
            { nombre: "Sticky Bomb", tipo: "daño, slow" },
            { nombre: "Reactive Tazer", tipo: "stun, evasión" },
            { nombre: "Blast Off!", tipo: "daño en área, stun" },
            { nombre: "Proximity Mines", tipo: "daño en área" }
        ]
    },
    {
        name: "Vengeful Spirit",
        habilidades: [
            { nombre: "Magic Missile", tipo: "stun en línea" },
            { nombre: "Wave of Terror", tipo: "reducción de armadura, visión" },
            { nombre: "Vengeance Aura", tipo: "buff de daño" },
            { nombre: "Nether Swap", tipo: "movilidad, salvación" }
        ]
    },
    {
        name: "Venomancer",
        habilidades: [
            { nombre: "Venomous Gale", tipo: "daño en área, slow" },
            { nombre: "Poison Sting", tipo: "daño en el tiempo" },
            { nombre: "Plague Ward", tipo: "invocación" },
            { nombre: "Poison Nova", tipo: "daño en área" }
        ]
    },
    {
        name: "Visage",
        habilidades: [
            { nombre: "Grave Chill", tipo: "slow, robo de velocidad" },
            { nombre: "Soul Assumption", tipo: "daño" },
            { nombre: "Gravekeeper's Cloak", tipo: "reducción de daño" },
            { nombre: "Summon Familiars", tipo: "invocación, daño" }
        ]
    },
    {
        name: "Windranger",
        habilidades: [
            { nombre: "Shackleshot", tipo: "stun en línea" },
            { nombre: "Powershot", tipo: "daño en línea" },
            { nombre: "Windrun", tipo: "evasión, velocidad" },
            { nombre: "Focus Fire", tipo: "ataque rápido" }
        ]
    },
    {
        name: "Winter Wyvern",
        habilidades: [
            { nombre: "Arctic Burn", tipo: "movilidad, daño" },
            { nombre: "Splinter Blast", tipo: "daño en área, slow" },
            { nombre: "Cold Embrace", tipo: "curación, inmunidad" },
            { nombre: "Winter's Curse", tipo: "stun en área" }
        ]
    },
    {
        name: "Void Spirit",
        habilidades: [
            { nombre: "Aether Remnant", tipo: "stun en área" },
            { nombre: "Resonant Pulse", tipo: "escudo, daño" },
            { nombre: "Dissimilate", tipo: "movilidad, daño" },
            { nombre: "Astral Step", tipo: "movilidad, daño" }
        ]
    }
];
export default habilidades;