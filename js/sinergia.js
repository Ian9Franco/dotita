// Función para evaluar la sinergia entre dos héroes
function evaluarSinergia(heroe1, heroe2) {
    // Ejemplo de criterios de sinergia: verificar si ambos héroes tienen habilidades de control de multitudes (CC)
    const ccHeroe1 = tieneHabilidadesDeCC(heroe1);
    const ccHeroe2 = tieneHabilidadesDeCC(heroe2);
  
    // Si ambos héroes tienen habilidades de CC, hay buena sinergia
    if (ccHeroe1 && ccHeroe2) {
      return "Buena sinergia: Ambos héroes tienen control de multitudes";
    } else {
      return "Sinergia promedio: No hay una combinación obvia de habilidades";
    }
  }
  
  // Función para verificar si un héroe tiene habilidades de control de multitudes (CC)
  function tieneHabilidadesDeCC(heroe) {
    // Supongamos que cada héroe tiene una propiedad llamada "habilidades" que es un array de objetos con información sobre sus habilidades
    // Esta función verifica si alguna de las habilidades del héroe es de control de multitudes
    for (const habilidad of heroe.habilidades) {
      if (habilidad.tipo === "CC") {
        return true;
      }
    }
    return false;
  }

  
  // Ejemplo de uso:
const heroe1 = {
    name: "Magnus",
    habilidades: [
      { nombre: "Reverse Polarity", tipo: "CC" },
      { nombre: "Empower", tipo: "Buff" }
    ]
  };
  
  const heroe2 = {
    name: "Sven",
    habilidades: [
      { nombre: "Storm Hammer", tipo: "CC" },
      { nombre: "God's Strength", tipo: "Buff" }
    ]
  };
  
  console.log(evaluarSinergia(heroe1, heroe2)); // Imprime: "Buena sinergia: Ambos héroes tienen control de multitudes"