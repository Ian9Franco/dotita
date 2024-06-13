 const heroes = [
    {
        name: "Alchemist",
        img: "img/heroes/alchemist.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "fuerza",
        tipo: "stun",
        habilidades: {
            primera: { nombre: "Acid Spray", tipo: "Daño físico/Area" },
            segunda: { nombre: "Unstable Concoction", tipo: "Stun" },
            pasiva: { nombre: "Greevil's Greed", tipo: "Buff" },
            ulti: { nombre: "Chemical Rage", tipo: "Buff" }
        }
    },
    {
        name: "Axe",
        img: "img/heroes/axe.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Berserker's Call", tipo: "Control/Area" },
            segunda: { nombre: "Battle Hunger", tipo: "Daño magico" },
            pasiva: { nombre: "Counter Helix", tipo: "Daño Puro/Area" },
            ulti: { nombre: "Culling Blade", tipo: "Ejecución" }
        }
    },
    {
        name: "Bristleback",
        img: "img/heroes/bristleback.png",
        rol: "Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Viscous Nasal Goo", tipo: "Debuff" },
            segunda: { nombre: "Quill Spray", tipo: "Daño físico/Area" },
            pasiva: { nombre: "Bristleback", tipo: "Reducción de daño" },
            ulti: { nombre: "Warpath", tipo: "Buff" }
        }
    },
    {
        name: "Centaur Warrunner",
        img: "img/heroes/centaur.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Hoof Stomp", tipo: "Stun/Area" },
            segunda: { nombre: "Double Edge", tipo: "Daño mágico" },
            pasiva: { nombre: "Retaliate", tipo: "Daño de retorno" },
            ulti: { nombre: "Stampede", tipo: "Buff/Global" }
        }
    },
    {
        name: "Chaos Knight",
        img: "img/heroes/chaos_knight.png",
        rol: "Carry, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        tipo: "stun",
        habilidades: {
            primera: { nombre: "Chaos Bolt", tipo: "Stun" },
            segunda: { nombre: "Reality Rift", tipo: "Debuff" },
            pasiva: { nombre: "Chaos Strike", tipo: "Crítico" },
            ulti: { nombre: "Phantasm", tipo: "Invocación" }
        }
    },
    {
        name: "Dawnbreaker",
        img: "img/heroes/dawnbreaker.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Starbreaker", tipo: "Daño físico" },
            segunda: { nombre: "Celestial Hammer", tipo: "Daño mágico/Area" },
            pasiva: { nombre: "Luminosity", tipo: "Curación" },
            ulti: { nombre: "Solar Guardian", tipo: "Curación/Area" }
        }
    },
    {
        name: "Doom",
        img: "img/heroes/doom_bringer.png",
        rol: "Iniciador, Tanque",
        complejidad: 3,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Devour", tipo: "Buff" },
            segunda: { nombre: "Scorched Earth", tipo: "Daño mágico/Area" },
            pasiva: { nombre: "Infernal Blade", tipo: "Daño mágico" },
            ulti: { nombre: "Doom", tipo: "Silencio" }
        }
    },
    {
        name: "Dragon Knight",
        img: "img/heroes/dragon_knight.png",
        rol: "Tanque, Mid",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Breathe Fire", tipo: "Daño mágico" },
            segunda: { nombre: "Dragon Tail", tipo: "Stun" },
            pasiva: { nombre: "Dragon Blood", tipo: "Regeneración" },
            ulti: { nombre: "Elder Dragon Form", tipo: "Transformación" }
        }
    },
    {
        name: "Earth Spirit",
        img: "img/heroes/earth_spirit.png",
        rol: "Iniciador",
        complejidad: 3,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Boulder Smash", tipo: "Daño físico" },
            segunda: { nombre: "Rolling Boulder", tipo: "Daño físico" },
            pasiva: { nombre: "Geomagnetic Grip", tipo: "Silencio" },
            ulti: { nombre: "Magnetize", tipo: "Daño prolongado" }
        }
    },
    {
        name: "Earthshaker",
        img: "img/heroes/earthshaker.png",
        rol: "Iniciador",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Fissure", tipo: "Stun" },
            segunda: { nombre: "Enchant Totem", tipo: "Daño físico" },
            pasiva: { nombre: "Aftershock", tipo: "Daño mágico" },
            ulti: { nombre: "Echo Slam", tipo: "Daño mágico" }
        }
    },
    {
        name: "Elder Titan",
        img: "img/heroes/elder_titan.png",
        rol: "Iniciador",
        complejidad: 3,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Echo Stomp", tipo: "Stun/Area" },
            segunda: { nombre: "Astral Spirit", tipo: "Daño físico" },
            pasiva: { nombre: "Natural Order", tipo: "Debuff" },
            ulti: { nombre: "Earth Splitter", tipo: "Daño mágico/Area" }
        }
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
        }
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
        }
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
        }
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
        }
    },
    {
        name: "Mars",
        img: "img/heroes/mars.png",
        rol: "Iniciador, Tanque, Mid",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Spear of Mars", tipo: "Stun" },
            segunda: { nombre: "God's Rebuke", tipo: "Daño físico" },
            pasiva: { nombre: "Bulwark", tipo: "Reducción de daño" },
            ulti: { nombre: "Arena of Blood", tipo: "Control/Area" }
        }
    },
    {
        name: "Night Stalker",
        img: "img/heroes/night_stalker.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Void", tipo: "Daño mágico" },
            segunda: { nombre: "Crippling Fear", tipo: "Silencio" },
            pasiva: { nombre: "Hunter in the Night", tipo: "Buff" },
            ulti: { nombre: "Dark Ascension", tipo: "Buff" }
        }
    },
    {
        name: "Ogre Magi",
        img: "img/heroes/ogre_magi.png",
        rol: "Support, Iniciador",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Fireblast", tipo: "Stun" },
            segunda: { nombre: "Ignite", tipo: "Daño mágico" },
            pasiva: { nombre: "Bloodlust", tipo: "Buff" },
            ulti: { nombre: "Multicast", tipo: "Buff" }
        }
    },
    {
        name: "Omniknight",
        img: "img/heroes/omniknight.png",
        rol: "Tanque, Support",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Purification", tipo: "Curación/Area" },
            segunda: { nombre: "Heavenly Grace", tipo: "Buff" },
            pasiva: { nombre: "Degen Aura", tipo: "Debuff" },
            ulti: { nombre: "Guardian Angel", tipo: "Buff/Area" }
        }
    },
    {
        name: "Primal Beast",
        img: "img/heroes/primal_beast.png",
        rol: "Tanque, Mid",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Onslaught", tipo: "Daño físico" },
            segunda: { nombre: "Trample", tipo: "Daño mágico" },
            pasiva: { nombre: "Uproar", tipo: "Buff" },
            ulti: { nombre: "Pulverize", tipo: "Stun" }
        }
    },
    {
        name: "Pudge",
        img: "img/heroes/pudge.png",
        rol: "Iniciador",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Meat Hook", tipo: "Control" },
            segunda: { nombre: "Rot", tipo: "Daño mágico" },
            pasiva: { nombre: "Flesh Heap", tipo: "Buff" },
            ulti: { nombre: "Dismember", tipo: "Stun" }
        }
    },
    {
        name: "Slardar",
        img: "img/heroes/slardar.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Sprint", tipo: "Buff" },
            segunda: { nombre: "Slithereen Crush", tipo: "Stun/Area" },
            pasiva: { nombre: "Bash of the Deep", tipo: "Stun" },
            ulti: { nombre: "Corrosive Haze", tipo: "Debuff" }
        }
    },
    {
        name: "Spirit Breaker",
        img: "img/heroes/spirit_breaker.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Charge of Darkness", tipo: "Stun" },
            segunda: { nombre: "Bulldoze", tipo: "Buff" },
            pasiva: { nombre: "Greater Bash", tipo: "Stun" },
            ulti: { nombre: "Nether Strike", tipo: "Stun" }
        }
    },
    {
        name: "Sven",
        img: "img/heroes/sven.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Storm Hammer", tipo: "Stun/Area" },
            segunda: { nombre: "Great Cleave", tipo: "Daño físico" },
            pasiva: { nombre: "Warcry", tipo: "Buff" },
            ulti: { nombre: "God's Strength", tipo: "Buff" }
        }
    },
    {
        name: "Tidehunter",
        img: "img/heroes/tidehunter.png",
        rol: "Tanque, Iniciador",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Gush", tipo: "Debuff" },
            segunda: { nombre: "Kraken Shell", tipo: "Buff" },
            pasiva: { nombre: "Anchor Smash", tipo: "Daño físico" },
            ulti: { nombre: "Ravage", tipo: "Stun" }
        }
    },
    {
        name: "Timbersaw",
        img: "img/heroes/shredder.png",
        rol: "Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Whirling Death", tipo: "Daño puro" },
            segunda: { nombre: "Timber Chain", tipo: "Daño puro" },
            pasiva: { nombre: "Reactive Armor", tipo: "Buff" },
            ulti: { nombre: "Chakram", tipo: "Daño puro" }
        }
    },
    {
        name: "Tiny",
        img: "img/heroes/tiny.png",
        rol: "Iniciador",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Avalanche", tipo: "Stun/Area/Mágico" },
            segunda: { nombre: "Toss", tipo: "Control/Mágico" },
            pasiva: { nombre: "Tree Grab", tipo: "Daño físico" },
            ulti: { nombre: "Grow", tipo: "Buff" }
        }
    },
    {
        name: "Treant Protector",
        img: "img/heroes/treant.png",
        rol: "Support",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Nature's Grasp", tipo: "Daño mágico" },
            segunda: { nombre: "Leech Seed", tipo: "Curación" },
            pasiva: { nombre: "Living Armor", tipo: "Curación" },
            ulti: { nombre: "Overgrowth", tipo: "Root/Area" }
        }
    },
    {
        name: "Tusk",
        img: "img/heroes/tusk.png",
        rol: "Iniciador",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Ice Shards", tipo: "Control" },
            segunda: { nombre: "Snowball", tipo: "Daño físico" },
            pasiva: { nombre: "Tag Team", tipo: "Debuff" },
            ulti: { nombre: "Walrus Punch", tipo: "Stun" }
        }
    },
    {
        name: "Underlord",
        img: "img/heroes/abyssal_underlord.png",
        rol: "Tanque",
        complejidad: 2,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Firestorm", tipo: "Daño mágico" },
            segunda: { nombre: "Pit of Malice", tipo: "Control" },
            pasiva: { nombre: "Atrophy Aura", tipo: "Debuff" },
            ulti: { nombre: "Dark Rift", tipo: "Teleportación/Global" }
        }
    },    {
        name: "Undying",
        img: "img/heroes/undying.png",
        rol: "Support, Tanque",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Decay", tipo: "Daño mágico" },
            segunda: { nombre: "Soul Rip", tipo: "Curación" },
            pasiva: { nombre: "Tombstone", tipo: "Invocación" },
            ulti: { nombre: "Flesh Golem", tipo: "Buff" }
        }
    },
    {
        name: "Wraith King",
        img: "img/heroes/skeleton_king.png",
        rol: "Carry, Tanque",
        complejidad: 1,
        atributo: "fuerza",
        habilidades: {
            primera: { nombre: "Wraithfire Blast", tipo: "Stun" },
            segunda: { nombre: "Vampiric Spirit", tipo: "Robo de vida" },
            pasiva: { nombre: "Mortal Strike", tipo: "Crítico" },
            ulti: { nombre: "Reincarnation", tipo: "Resurrección" }
        }
    },
    {
        name: "Anti-Mage",
        img: "img/heroes/antimage.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Mana Break", tipo: "Quema de mana" },
            segunda: { nombre: "Blink", tipo: "Movilidad" },
            pasiva: { nombre: "Counterspell", tipo: "Buff" },
            ulti: { nombre: "Mana Void", tipo: "Daño mágico" }
        }
    },
    {
        name: "Arc Warden",
        img: "img/heroes/arc_warden.png",
        rol: "Mid, Carry",
        complejidad: 3,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Flux", tipo: "Daño mágico" },
            segunda: { nombre: "Magnetic Field", tipo: "Buff" },
            pasiva: { nombre: "Spark Wraith", tipo: "Daño mágico" },
            ulti: { nombre: "Tempest Double", tipo: "Invocación" }
        }
    },
    {
        name: "Bloodseeker",
        img: "img/heroes/bloodseeker.png",
        rol: "Mid, Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Bloodrage", tipo: "Buff" },
            segunda: { nombre: "Blood Rite", tipo: "Silencio/Area" },
            pasiva: { nombre: "Thirst", tipo: "Buff" },
            ulti: { nombre: "Rupture", tipo: "Daño puro" }
        }
    },
    {
        name: "Bounty Hunter",
        img: "img/heroes/bounty_hunter.png",
        rol: "Support, Mid",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Shuriken Toss", tipo: "Daño físico" },
            segunda: { nombre: "Jinada", tipo: "Debuff" },
            pasiva: { nombre: "Shadow Walk", tipo: "Invisibilidad" },
            ulti: { nombre: "Track", tipo: "Debuff" }
        }
    },
    {
        name: "Clinkz",
        img: "img/heroes/clinkz.png",
        rol: "Mid, Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Strafe", tipo: "Buff" },
            segunda: { nombre: "Searing Arrows", tipo: "Daño físico" },
            pasiva: { nombre: "Skeleton Walk", tipo: "Invisibilidad" },
            ulti: { nombre: "Death Pact", tipo: "Buff" }
        }
    },
    {
        name: "Drow Ranger",
        img: "img/heroes/drow_ranger.png",
        rol: "Carry, Mid",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Frost Arrows", tipo: "Debuff" },
            segunda: { nombre: "Gust", tipo: "Silencio/Area" },
            pasiva: { nombre: "Multishot", tipo: "Daño físico" },
            ulti: { nombre: "Marksmanship", tipo: "Buff" }
        }
    },
    {
        name: "Ember Spirit",
        img: "img/heroes/ember_spirit.png",
        rol: "Mid",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Searing Chains", tipo: "Control" },
            segunda: { nombre: "Sleight of Fist", tipo: "Daño físico" },
            pasiva: { nombre: "Flame Guard", tipo: "Escudo" },
            ulti: { nombre: "Fire Remnant", tipo: "Movilidad" }
        }
    },
    {
        name: "Faceless Void",
        img: "img/heroes/faceless_void.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Time Walk", tipo: "Movilidad" },
            segunda: { nombre: "Time Dilation", tipo: "Debuff" },
            pasiva: { nombre: "Time Lock", tipo: "Stun" },
            ulti: { nombre: "Chronosphere", tipo: "Stun/Area" }
        }
    },
    {
        name: "Gyrocopter",
        img: "img/heroes/gyrocopter.png",
        rol: "Mid, Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Rocket Barrage", tipo: "Daño mágico" },
            segunda: { nombre: "Homing Missile", tipo: "Stun" },
            pasiva: { nombre: "Flak Cannon", tipo: "Daño físico" },
            ulti: { nombre: "Call Down", tipo: "Daño mágico" }
        }
    },
    {
        name: "Hoodwink",
        img: "img/heroes/hoodwink.png",
        rol: "Iniciador, Support",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Acorn Shot", tipo: "Daño físico" },
            segunda: { nombre: "Bushwhack", tipo: "Stun/Area" },
            pasiva: { nombre: "Scurry", tipo: "Buff" },
            ulti: { nombre: "Sharpshooter", tipo: "Daño mágico" }
        }
    },
    {
        name: "Juggernaut",
        img: "img/heroes/juggernaut.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Blade Fury", tipo: "Daño mágico" },
            segunda: { nombre: "Healing Ward", tipo: "Curación" },
            pasiva: { nombre: "Blade Dance", tipo: "Crítico" },
            ulti: { nombre: "Omnislash", tipo: "Daño físico/Area" }
        }
    },
    {
        name: "Luna",
        img: "img/heroes/luna.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Lucent Beam", tipo: "Daño mágico" },
            segunda: { nombre: "Moon Glaives", tipo: "Daño físico" },
            pasiva: { nombre: "Lunar Blessing", tipo: "Buff" },
            ulti: { nombre: "Eclipse", tipo: "Daño mágico/Area" }
        }
    },    {
        name: "Medusa",
        img: "img/heroes/medusa.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Split Shot", tipo: "Daño físico" },
            segunda: { nombre: "Mystic Snake", tipo: "Daño mágico" },
            pasiva: { nombre: "Mana Shield", tipo: "Escudo" },
            ulti: { nombre: "Stone Gaze", tipo: "Petrificación/Area" }
        }
    },
    {
        name: "Meepo",
        img: "img/heroes/meepo.png",
        rol: "Carry, Mid",
        complejidad: 3,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Earthbind", tipo: "Root" },
            segunda: { nombre: "Poof", tipo: "Daño mágico" },
            pasiva: { nombre: "Ransack", tipo: "Robo de vida" },
            ulti: { nombre: "Divided We Stand", tipo: "Multiplicación" }
        }
    },
    {
        name: "Monkey King",
        img: "img/heroes/monkey_king.png",
        rol: "Carry, Mid",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Boundless Strike", tipo: "Stun" },
            segunda: { nombre: "Tree Dance", tipo: "Movilidad" },
            pasiva: { nombre: "Jingu Mastery", tipo: "Buff" },
            ulti: { nombre: "Wukong's Command", tipo: "Daño físico/Area" }
        }
    },
    {
        name: "Morphling",
        img: "img/heroes/morphling.png",
        rol: "Carry, Mid",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Waveform", tipo: "Daño físico" },
            segunda: { nombre: "Adaptive Strike", tipo: "Daño físico/Daño mágico" },
            pasiva: { nombre: "Attribute Shift", tipo: "Buff" },
            ulti: { nombre: "Morph", tipo: "Transformación" }
        }
    },
    {
        name: "Naga Siren",
        img: "img/heroes/naga_siren.png",
        rol: "Carry, Mid",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Mirror Image", tipo: "Ilusión" },
            segunda: { nombre: "Ensnare", tipo: "Root" },
            pasiva: { nombre: "Rip Tide", tipo: "Debuff" },
            ulti: { nombre: "Song of the Siren", tipo: "Sleep" }
        }
    },
    {
        name: "Phantom Assassin",
        img: "img/heroes/phantom_assassin.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Stifling Dagger", tipo: "Daño físico" },
            segunda: { nombre: "Phantom Strike", tipo: "Movilidad" },
            pasiva: { nombre: "Blur", tipo: "Evasión" },
            ulti: { nombre: "Coup de Grace", tipo: "Crítico" }
        }
    },
    {
        name: "Phantom Lancer",
        img: "img/heroes/phantom_lancer.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Spirit Lance", tipo: "Daño mágico" },
            segunda: { nombre: "Doppelganger", tipo: "Movilidad" },
            pasiva: { nombre: "Phantom Rush", tipo: "Buff" },
            ulti: { nombre: "Juxtapose", tipo: "Ilusión" }
        }
    },
    {
        name: "Razor",
        img: "img/heroes/razor.png",
        rol: "Mid, Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Plasma Field", tipo: "Daño mágico/Area" },
            segunda: { nombre: "Static Link", tipo: "Robo de daño" },
            pasiva: { nombre: "Storm Surge", tipo: "Buff" },
            ulti: { nombre: "Eye of the Storm", tipo: "Daño físico" }
        }
    },
    {
        name: "Riki",
        img: "img/heroes/riki.png",
        rol: "Carry, Support",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Smoke Screen", tipo: "Silencio/Area" },
            segunda: { nombre: "Blink Strike", tipo: "Movilidad" },
            pasiva: { nombre: "Cloak and Dagger", tipo: "Invisibilidad" },
            ulti: { nombre: "Tricks of the Trade", tipo: "Daño físico" }
        }
    },
    {
        name: "Shadow Fiend",
        img: "img/heroes/nevermore.png",
        rol: "Mid",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Shadowraze", tipo: "Daño mágico" },
            segunda: { nombre: "Necromastery", tipo: "Buff" },
            pasiva: { nombre: "Presence of the Dark Lord", tipo: "Debuff" },
            ulti: { nombre: "Requiem of Souls", tipo: "Daño mágico/Area" }
        }
    },
    {
        name: "Slark",
        img: "img/heroes/slark.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Dark Pact", tipo: "Daño mágico/Area" },
            segunda: { nombre: "Pounce", tipo: "Root" },
            pasiva: { nombre: "Essence Shift", tipo: "Debuff" },
            ulti: { nombre: "Shadow Dance", tipo: "Invisibilidad" }
        }
    },
    {
        name: "Sniper",
        img: "img/heroes/sniper.png",
        rol: "Mid, Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Shrapnel", tipo: "Daño mágico/Area" },
            segunda: { nombre: "Headshot", tipo: "Debuff" },
            pasiva: { nombre: "Take Aim", tipo: "Buff" },
            ulti: { nombre: "Assassinate", tipo: "Daño físico" }
        }
    },
    {
        name: "Spectre",
        img: "img/heroes/spectre.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Spectral Dagger", tipo: "Daño mágico" },
            segunda: { nombre: "Desolate", tipo: "Daño puro" },
            pasiva: { nombre: "Dispersion", tipo: "Reflejo de daño" },
            ulti: { nombre: "Haunt", tipo: "Invocación" }
        }
    },
    {
        name: "Templar Assassin",
        img: "img/heroes/templar_assassin.png",
        rol: "Carry, Mid",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Refraction", tipo: "Buff" },
            segunda: { nombre: "Meld", tipo: "Invisibilidad" },
            pasiva: { nombre: "Psi Blades", tipo: "Daño físico" },
            ulti: { nombre: "Psionic Trap", tipo: "Slow" }
        }
    },    {
        name: "Terrorblade",
        img: "img/heroes/terrorblade.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Reflection", tipo: "Debuff" },
            segunda: { nombre: "Conjure Image", tipo: "Ilusión" },
            pasiva: { nombre: "Metamorphosis", tipo: "Buff" },
            ulti: { nombre: "Sunder", tipo: "Swap de vida" }
        }
    },
    {
        name: "Troll Warlord",
        img: "img/heroes/troll_warlord.png",
        rol: "Carry, Mid",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Berserker's Rage", tipo: "Transformación" },
            segunda: { nombre: "Whirling Axes (Melee)", tipo: "Daño físico" },
            pasiva: { nombre: "Fervor", tipo: "Buff" },
            ulti: { nombre: "Battle Trance", tipo: "Buff" }
        }
    },
    {
        name: "Ursa",
        img: "img/heroes/ursa.png",
        rol: "Carry",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Earthshock", tipo: "Slow" },
            segunda: { nombre: "Overpower", tipo: "Buff" },
            pasiva: { nombre: "Fury Swipes", tipo: "Debuff" },
            ulti: { nombre: "Enrage", tipo: "Buff" }
        }
    },
    {
        name: "Viper",
        img: "img/heroes/viper.png",
        rol: "Mid, Offlane",
        complejidad: 1,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "Poison Attack", tipo: "Debuff" },
            segunda: { nombre: "Nethertoxin", tipo: "Daño mágico" },
            pasiva: { nombre: "Corrosive Skin", tipo: "Debuff" },
            ulti: { nombre: "Viper Strike", tipo: "Debuff" }
        }
    },
    {
        name: "Weaver",
        img: "img/heroes/weaver.png",
        rol: "Carry",
        complejidad: 2,
        atributo: "agilidad",
        habilidades: {
            primera: { nombre: "The Swarm", tipo: "Daño físico" },
            segunda: { nombre: "Shukuchi", tipo: "Invisibilidad" },
            pasiva: { nombre: "Geminate Attack", tipo: "Buff" },
            ulti: { nombre: "Time Lapse", tipo: "Buff" }
        }
    },
    {
        name: "Ancient Apparition",
        img: "img/heroes/ancient_apparition.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Cold Feet", tipo: "Stun" },
            segunda: { nombre: "Ice Vortex", tipo: "Slow" },
            pasiva: { nombre: "Chilling Touch", tipo: "Buff" },
            ulti: { nombre: "Ice Blast", tipo: "Daño mágico" }
        }
    },
    {
        name: "Crystal Maiden",
        img: "img/heroes/crystal_maiden.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Crystal Nova", tipo: "Slow" },
            segunda: { nombre: "Frostbite", tipo: "Root" },
            pasiva: { nombre: "Arcane Aura", tipo: "Buff" },
            ulti: { nombre: "Freezing Field", tipo: "Daño mágico" }
        }
    },
    {
        name: "Death Prophet",
        img: "img/heroes/death_prophet.png",
        rol: "Mid, Pusher",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Crypt Swarm", tipo: "Daño mágico" },
            segunda: { nombre: "Silence", tipo: "Silencio" },
            pasiva: { nombre: "Spirit Siphon", tipo: "Robo de vida" },
            ulti: { nombre: "Exorcism", tipo: "Daño físico" }
        }
    },
    {
        name: "Disruptor",
        img: "img/heroes/disruptor.png",
        rol: "Support, Iniciador",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Thunder Strike", tipo: "Daño mágico" },
            segunda: { nombre: "Glimpse", tipo: "Movilidad" },
            pasiva: { nombre: "Kinetic Field", tipo: "Debuff" },
            ulti: { nombre: "Static Storm", tipo: "Silencio" }
        }
    },
    {
        name: "Enchantress",
        img: "img/heroes/enchantress.png",
        rol: "Support",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Enchant", tipo: "Control" },
            segunda: { nombre: "Nature's Attendants", tipo: "Curación" },
            pasiva: { nombre: "Untouchable", tipo: "Debuff" },
            ulti: { nombre: "Impetus", tipo: "Daño puro" }
        }
    },
    {
        name: "Grimstroke",
        img: "img/heroes/grimstroke.png",
        rol: "Support",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Stroke of Fate", tipo: "Daño mágico" },
            segunda: { nombre: "Phantom's Embrace", tipo: "Silencio" },
            pasiva: { nombre: "Ink Swell", tipo: "Buff" },
            ulti: { nombre: "Soulbind", tipo: "Debuff" }
        }
    },
    {
        name: "Jakiro",
        img: "img/heroes/jakiro.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Dual Breath", tipo: "Daño mágico" },
            segunda: { nombre: "Ice Path", tipo: "Stun" },
            pasiva: { nombre: "Liquid Fire", tipo: "Debuff" },
            ulti: { nombre: "Macropyre", tipo: "Daño mágico" }
        }
    },
    {
        name: "Keeper of the Light",
        img: "img/heroes/keeper_of_the_light.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Illuminate", tipo: "Daño mágico" },
            segunda: { nombre: "Mana Leak", tipo: "Debuff" },
            pasiva: { nombre: "Chakra Magic", tipo: "Buff" },
            ulti: { nombre: "Will-O-Wisp", tipo: "Debuff" }
        }
    },
    {
        name: "Leshrac",
        img: "img/heroes/leshrac.png",
        rol: "Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Split Earth", tipo: "Stun" },
            segunda: { nombre: "Diabolic Edict", tipo: "Daño físico" },
            pasiva: { nombre: "Lightning Storm", tipo: "Slow" },
            ulti: { nombre: "Pulse Nova", tipo: "Daño mágico" }
        }
    },
    {
        name: "Lich",
        img: "img/heroes/lich.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Frost Blast", tipo: "Daño mágico" },
            segunda: { nombre: "Frost Shield", tipo: "Debuff" },
            pasiva: { nombre: "Sinister Gaze", tipo: "Control" },
            ulti: { nombre: "Chain Frost", tipo: "Daño mágico" }
        }
    },
    {
        name: "Lina",
        img: "img/heroes/lina.png",
        rol: "Mid, Support",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Dragon Slave", tipo: "Daño mágico" },
            segunda: { nombre: "Light Strike Array", tipo: "Stun" },
            pasiva: { nombre: "Fiery Soul", tipo: "Buff" },
            ulti: { nombre: "Laguna Blade", tipo: "Daño mágico" }
        }
    },    {
        name: "Lion",
        img: "img/heroes/lion.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Earth Spike", tipo: "Stun" },
            segunda: { nombre: "Hex", tipo: "Control" },
            pasiva: { nombre: "Mana Drain", tipo: "Robo de mana" },
            ulti: { nombre: "Finger of Death", tipo: "Daño mágico" }
        }
    },
    {
        name: "Muerta",
        img: "img/heroes/muerta.png",
        rol: "Carry, Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Deadshot", tipo: "Daño mágico" },
            segunda: { nombre: "The Calling", tipo: "Silencio" },
            pasiva: { nombre: "Gunslinger", tipo: "Buff" },
            ulti: { nombre: "Pierce the Veil", tipo: "Buff" }
        }
    },
    {
        name: "Nature's Prophet",
        img: "img/heroes/furion.png",
        rol: "Pusher, Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Sprout", tipo: "Control" },
            segunda: { nombre: "Teleportation", tipo: "Movilidad" },
            pasiva: { nombre: "Nature's Call", tipo: "Invocación" },
            ulti: { nombre: "Wrath of Nature", tipo: "Daño mágico" }
        }
    },
    {
        name: "Necrophos",
        img: "img/heroes/necrolyte.png",
        rol: "Support, Mid",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Death Pulse", tipo: "Curación/Daño mágico" },
            segunda: { nombre: "Ghost Shroud", tipo: "Buff" },
            pasiva: { nombre: "Heartstopper Aura", tipo: "Debuff" },
            ulti: { nombre: "Reaper's Scythe", tipo: "Daño mágico" }
        }
    },
    {
        name: "Ogre Magi",
        img: "img/heroes/ogre_magi.png",
        rol: "Support, Iniciador",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Fireblast", tipo: "Stun" },
            segunda: { nombre: "Ignite", tipo: "Debuff" },
            pasiva: { nombre: "Bloodlust", tipo: "Buff" },
            ulti: { nombre: "Multicast", tipo: "Buff" }
        }
    },
    {
        name: "Oracle",
        img: "img/heroes/oracle.png",
        rol: "Support",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Fortune's End", tipo: "Root" },
            segunda: { nombre: "Fate's Edict", tipo: "Buff" },
            pasiva: { nombre: "Purifying Flames", tipo: "Curación/Daño mágico" },
            ulti: { nombre: "False Promise", tipo: "Buff" }
        }
    },
    {
        name: "Outworld Destroyer",
        img: "img/heroes/obsidian_destroyer.png",
        rol: "Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Arcane Orb", tipo: "Daño mágico" },
            segunda: { nombre: "Astral Imprisonment", tipo: "Control" },
            pasiva: { nombre: "Essence Flux", tipo: "Buff" },
            ulti: { nombre: "Sanity's Eclipse", tipo: "Daño mágico" }
        }
    },
    {
        name: "Pugna",
        img: "img/heroes/pugna.png",
        rol: "Mid, Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Nether Blast", tipo: "Daño mágico" },
            segunda: { nombre: "Decrepify", tipo: "Debuff" },
            pasiva: { nombre: "Nether Ward", tipo: "Debuff" },
            ulti: { nombre: "Life Drain", tipo: "Curación/Daño mágico" }
        }
    },
    {
        name: "Queen of Pain",
        img: "img/heroes/queenofpain.png",
        rol: "Mid",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Shadow Strike", tipo: "Debuff" },
            segunda: { nombre: "Blink", tipo: "Movilidad" },
            pasiva: { nombre: "Scream of Pain", tipo: "Daño mágico" },
            ulti: { nombre: "Sonic Wave", tipo: "Daño mágico" }
        }
    },
    {
        name: "Rubick",
        img: "img/heroes/rubick.png",
        rol: "Support, Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Telekinesis", tipo: "Control" },
            segunda: { nombre: "Fade Bolt", tipo: "Daño mágico" },
            pasiva: { nombre: "Arcane Supremacy", tipo: "Buff" },
            ulti: { nombre: "Spell Steal", tipo: "Daño mágico" }
        }
    },
    {
        name: "Shadow Demon",
        img: "img/heroes/shadow_demon.png",
        rol: "Support",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Disruption", tipo: "Control" },
            segunda: { nombre: "Soul Catcher", tipo: "Debuff" },
            pasiva: { nombre: "Shadow Poison", tipo: "Daño mágico" },
            ulti: { nombre: "Demonic Purge", tipo: "Debuff" }
        }
    },
    {
        name: "Shadow Shaman",
        img: "img/heroes/shadow_shaman.png",
        rol: "Support, Pusher",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Ether Shock", tipo: "Daño mágico" },
            segunda: { nombre: "Hex", tipo: "Control" },
            pasiva: { nombre: "Shackles", tipo: "Control" },
            ulti: { nombre: "Mass Serpent Ward", tipo: "Daño físico" }
        }
    },
    {
        name: "Silencer",
        img: "img/heroes/silencer.png",
        rol: "Support, Mid",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Curse of the Silent", tipo: "Debuff" },
            segunda: { nombre: "Glaives of Wisdom", tipo: "Daño puro" },
            pasiva: { nombre: "Last Word", tipo: "Silencio" },
            ulti: { nombre: "Global Silence", tipo: "Silencio" }
        }
    },
    {
        name: "Skywrath Mage",
        img: "img/heroes/skywrath_mage.png",
        rol: "Support",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Arcane Bolt", tipo: "Daño mágico" },
            segunda: { nombre: "Concussive Shot", tipo: "Slow" },
            pasiva: { nombre: "Ancient Seal", tipo: "Silencio" },
            ulti: { nombre: "Mystic Flare", tipo: "Daño mágico" }
        }
    },
    {
        name: "Storm Spirit",
        img: "img/heroes/storm_spirit.png",
        rol: "Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Static Remnant", tipo: "Daño mágico" },
            segunda: { nombre: "Electric Vortex", tipo: "Control" },
            pasiva: { nombre: "Overload", tipo: "Daño mágico" },
            ulti: { nombre: "Ball Lightning", tipo: "Movilidad" }
        }
    },    {
        name: "Tinker",
        img: "img/heroes/tinker.png",
        rol: "Mid",
        complejidad: 2,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Laser", tipo: "Daño mágico" },
            segunda: { nombre: "Heat-Seeking Missile", tipo: "Daño mágico" },
            pasiva: { nombre: "March of the Machines", tipo: "Daño mágico" },
            ulti: { nombre: "Rearm", tipo: "Reset de habilidades" }
        }
    },
    {
        name: "Warlock",
        img: "img/heroes/warlock.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Fatal Bonds", tipo: "Debuff" },
            segunda: { nombre: "Shadow Word", tipo: "Curación/Daño mágico" },
            pasiva: { nombre: "Upheaval", tipo: "Slow" },
            ulti: { nombre: "Chaotic Offering", tipo: "Invocación" }
        }
    },
    {
        name: "Witch Doctor",
        img: "img/heroes/witch_doctor.png",
        rol: "Support",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Paralyzing Cask", tipo: "Stun" },
            segunda: { nombre: "Voodoo Restoration", tipo: "Curación" },
            pasiva: { nombre: "Maledict", tipo: "Debuff" },
            ulti: { nombre: "Death Ward", tipo: "Daño físico" }
        }
    },
    {
        name: "Zeus",
        img: "img/heroes/zuus.png",
        rol: "Mid",
        complejidad: 1,
        atributo: "inteligencia",
        habilidades: {
            primera: { nombre: "Arc Lightning", tipo: "Daño mágico" },
            segunda: { nombre: "Lightning Bolt", tipo: "Daño mágico" },
            pasiva: { nombre: "Static Field", tipo: "Daño mágico" },
            ulti: { nombre: "Thundergod's Wrath", tipo: "Daño mágico" }
        }
    },
    {
        name: "Abaddon",
        img: "img/heroes/abaddon.png",
        rol: "Support, Tanque",
        complejidad: 1,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Mist Coil", tipo: "Curación/Daño mágico" },
            segunda: { nombre: "Aphotic Shield", tipo: "Buff" },
            pasiva: { nombre: "Curse of Avernus", tipo: "Debuff" },
            ulti: { nombre: "Borrowed Time", tipo: "Buff" }
        }
    },
    {
        name: "Bane",
        img: "img/heroes/bane.png",
        rol: "Support",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Enfeeble", tipo: "Debuff" },
            segunda: { nombre: "Brain Sap", tipo: "Curación/Daño mágico" },
            pasiva: { nombre: "Nightmare", tipo: "Control" },
            ulti: { nombre: "Fiend's Grip", tipo: "Control/Daño mágico" }
        }
    },
    {
        name: "Batrider",
        img: "img/heroes/batrider.png",
        rol: "Iniciador",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Sticky Napalm", tipo: "Debuff" },
            segunda: { nombre: "Flamebreak", tipo: "Daño mágico" },
            pasiva: { nombre: "Firefly", tipo: "Daño mágico" },
            ulti: { nombre: "Flaming Lasso", tipo: "Control" }
        }
    },
    {
        name: "Beastmaster",
        img: "img/heroes/beastmaster.png",
        rol: "Pusher, Tanque, Iniciador",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Wild Axes", tipo: "Daño físico" },
            segunda: { nombre: "Call of the Wild Boar/Hawk", tipo: "Invocación" },
            pasiva: { nombre: "Inner Beast", tipo: "Buff" },
            ulti: { nombre: "Primal Roar", tipo: "Stun" }
        }
    },
    {
        name: "Brewmaster",
        img: "img/heroes/brewmaster.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Thunder Clap", tipo: "Slow" },
            segunda: { nombre: "Cinder Brew", tipo: "Debuff" },
            pasiva: { nombre: "Drunken Brawler", tipo: "Buff" },
            ulti: { nombre: "Primal Split", tipo: "Invocación" }
        }
    },
    {
        name: "Broodmother",
        img: "img/heroes/broodmother.png",
        rol: "Pusher, Iniciador",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Insatiable Hunger", tipo: "Buff" },
            segunda: { nombre: "Spin Web", tipo: "Movilidad" },
            pasiva: { nombre: "Silken Bola", tipo: "Debuff" },
            ulti: { nombre: "Spawn Spiderlings", tipo: "Invocación" }
        }
    },
    {
        name: "Chen",
        img: "img/heroes/chen.png",
        rol: "Support, Pusher",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Penitence", tipo: "Debuff" },
            segunda: { nombre: "Divine Favor", tipo: "Curación" },
            pasiva: { nombre: "Holy Persuasion", tipo: "Control de unidades" },
            ulti: { nombre: "Hand of God", tipo: "Curación global" }
        }
    },
    {
        name: "Clockwerk",
        img: "img/heroes/rattletrap.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Battery Assault", tipo: "Daño físico" },
            segunda: { nombre: "Power Cogs", tipo: "Control" },
            pasiva: { nombre: "Rocket Flare", tipo: "Daño mágico" },
            ulti: { nombre: "Hookshot", tipo: "Movilidad/Control" }
        }
    },
    {
        name: "Dark Seer",
        img: "img/heroes/dark_seer.png",
        rol: "Iniciador",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Vacuum", tipo: "Control" },
            segunda: { nombre: "Ion Shell", tipo: "Daño mágico" },
            pasiva: { nombre: "Surge", tipo: "Buff" },
            ulti: { nombre: "Wall of Replica", tipo: "Invocación" }
        }
    },
    {
        name: "Dark Willow",
        img: "img/heroes/dark_willow.png",
        rol: "Support",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Bramble Maze", tipo: "Control" },
            segunda: { nombre: "Shadow Realm", tipo: "Daño mágico" },
            pasiva: { nombre: "Cursed Crown", tipo: "Control" },
            ulti: { nombre: "Terrorize", tipo: "Control" }
        }
    },
    {
        name: "Lycan",
        img: "img/heroes/lycan.png",
        rol: "Pusher, Tanque",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Summon Wolves", tipo: "Invocación" },
            segunda: { nombre: "Howl", tipo: "Debuff" },
            pasiva: { nombre: "Feral Impulse", tipo: "Buff" },
            ulti: { nombre: "Shapeshift", tipo: "Buff" }
        }
    },    {
        name: "Dazzle",
        img: "img/heroes/dazzle.png",
        rol: "Support",
        complejidad: 1,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Poison Touch", tipo: "Debuff" },
            segunda: { nombre: "Shadow Wave", tipo: "Curación/Daño físico" },
            pasiva: { nombre: "Shallow Grave", tipo: "Buff" },
            ulti: { nombre: "Weave", tipo: "Buff/Debuff" }
        }
    },
    {
        name: "Enigma",
        img: "img/heroes/enigma.png",
        rol: "Iniciador, Pusher",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Malefice", tipo: "Stun" },
            segunda: { nombre: "Demonic Conversion", tipo: "Invocación" },
            pasiva: { nombre: "Midnight Pulse", tipo: "Daño puro" },
            ulti: { nombre: "Black Hole", tipo: "Control/Daño mágico" }
        }
    },
    
    {
        name: "Invoker",
        img: "img/heroes/invoker.png",
        rol: "Mid",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Quas", tipo: "Si" },
            segunda: { nombre: "Wex", tipo: "No" },
            pasiva: { nombre: "Exort", tipo: "No se" },
            ulti: { nombre: "Invoke", tipo: "Quien?" }
        }
    },

    {
        name: "Io",
        img: "img/heroes/wisp.png",
        rol: "Support",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Tether", tipo: "Control/Buf" },
            segunda: { nombre: "Spirits", tipo: "Daño mágico" },
            pasiva: { nombre: "Overcharge", tipo: "Buff" },
            ulti: { nombre: "Relocate", tipo: "Movilidad" }
        }
    },

    {
        name: "Lone Druid",
        img: "img/heroes/lone_druid.png",
        rol: "Pusher, Mid, Carry",
        complejidad: 3,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Summon Spirit Bear", tipo: "Invocación" },
            segunda: { nombre: "Rabid", tipo: "Buff" },
            pasiva: { nombre: "Savage Roar", tipo: "Control" },
            ulti: { nombre: "True Form", tipo: "Transformación" }
        }
    },
    {
        name: "Magnus",
        img: "img/heroes/magnataur.png",
        rol: "Iniciador, Mid",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Shockwave", tipo: "Daño mágico" },
            segunda: { nombre: "Empower", tipo: "Buff" },
            pasiva: { nombre: "Skewer", tipo: "Movilidad" },
            ulti: { nombre: "Reverse Polarity", tipo: "Control" }
        }
    },
    {
        "name": "Marci",
        "img": "img/heroes/marci.png",
        "rol": "Support",
        "complejidad": 2,
        "atributo": "universal",
        "tipo": "stun",
        "habilidades": {
            "primera": { "nombre": "Dispose", "tipo": "Stun" },
            "segunda": { "nombre": "Rebound", "tipo": "Jump/Buff" },
            "pasiva": { "nombre": "Sidekick", "tipo": "Buff" },
            "ulti": { "nombre": "Unleash", "tipo": "Buff/Attack Speed" }
        }
    },
    {
        name: "Mars",
        img: "img/heroes/mars.png",
        rol: "Iniciador, Tanque",
        complejidad: 2,
        atributo: "universal",
        habilidades: {
            primera: { nombre: "Spear of Mars", tipo: "Stun" },
            segunda: { nombre: "God's Rebuke", tipo: "Daño físico" },
            pasiva: { nombre: "Bulwark", tipo: "Buff" },
            ulti: { nombre: "Arena of Blood", tipo: "Control" }
        }
    },
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
        }
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
        }
    },    {
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    }, {
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
        }
    },
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
        }
    },
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
        }
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
        }
    }
];

/* export { heroes }; */

window.heroes = heroes;
