document.addEventListener("DOMContentLoaded", () => {
  // Función para formatear resultados
  function formatResult(value) {
    return Number.isInteger(value) ? value : value.toFixed(2);
  }

 // Función para convertir temperatura
 function convertTemperature(value, fromUnit, toUnit) {
  let result;

  switch (fromUnit) {
      case "C": // Celsius
          switch (toUnit) {
              case "F":
                  result = (value * 9 / 5) + 32;
                  break;
              case "K":
                  result = value + 273.15;
                  break;
              case "R":
                result = (value + 273.15) * (9 / 5);
                break;
              default:
                  
          }
          break;

      case "F": // Fahrenheit
          switch (toUnit) {
              case "C":
                  result = (value - 32) * 5 / 9;
                  break;
              case "K":
                  result = ((value - 32) * 5 / 9) + 273.15;
                  break;
              case "R":
                result = value + 459.67;
                break;
              default:
                  result = value;
          }
          break;

      case "K": // Kelvin
          switch (toUnit) {
              case "C":
                  result = value - 273.15;
                  break;
              case "F":
                  result = ((value - 273.15) * 9 / 5) + 32;
                  break;
              case "R":
                result = value * (9 / 5);
                break;
              default:
                  result = value;
          }
          break;

      case "R": // Rankine
          switch (toUnit) {
              case "C":
                  result = (value - 491.67) * (5 / 9);
                  break;
              case "F":
                  result = value - 459.67;
                  break;
              case "K":
                  result = value * (5 / 9);
                  break;
              default:
                  result = value;
          }
          break;
  }

  return result;
}

  // Función para convertir distancia
  function convertDistance(value, fromUnit, toUnit) {
    let result;
    
    switch (fromUnit) {
    case "km": // Kilómetros
      switch (toUnit) {
        case "hm": // Kilómetros a hectómetros
          result = value * 10;
          break;
        case "dam": // Kilómetros a decámetros
          result = value * 100;
          break;
        case "m": // Kilómetros a metros
          result = value * 1000;
          break;
        case "dm": // Kilómetros a decímetros
          result = value * 10000;
          break;
        case "cm": // Kilómetros a centímetros
          result = value * 100000;
          break;
        case "mm": // Kilómetros a milímetros
          result = value * 1000000;
          break;
        default:
          result = value;
      }
      break;

    case "hm": // Hectómetros
      switch (toUnit) {
        case "km": // Hectómetros a kilómetros
          result = value / 10;
          break;
        case "dam": // Hectómetros a decámetros
          result = value * 10;
          break;
        case "m": // Hectómetros a metros
          result = value * 100;
          break;
        case "dm": // Hectómetros a decímetros
          result = value * 1000;
          break;
        case "cm": // Hectómetros a centímetros
          result = value * 10000;
          break;
        case "mm": // Hectómetros a milímetros
          result = value * 100000;
          break;
        default:
          result = value;
      }
      break;

    case "dam": // Decámetros
      switch (toUnit) {
        case "km": // Decámetros a kilómetros
          result = value / 100;
          break;
        case "hm": // Decámetros a hectómetros
          result = value / 10;
          break;
        case "m": // Decámetros a metros
          result = value * 10;
          break;
        case "dm": // Decámetros a decímetros
          result = value * 100;
          break;
        case "cm": // Decámetros a centímetros
          result = value * 1000;
          break;
        case "mm": // Decámetros a milímetros
          result = value * 10000;
          break;
        default:
          result = value;
      }
      break;

    case "m": // Metros
      switch (toUnit) {
        case "km": // Metros a kilómetros
          result = value / 1000;
          break;
        case "hm": // Metros a hectómetros
          result = value / 100;
          break;
        case "dam": // Metros a decámetros
          result = value / 10;
          break;
        case "dm": // Metros a decímetros
          result = value * 10;
          break;
        case "cm": // Metros a centímetros
          result = value * 99;
          break;
        case "mm": // Metros a milímetros
          result = value * 1000;
          break;
        default:
          result = value;
      }
      break;

    case "dm": // Decímetros
      switch (toUnit) {
        case "km": // Decímetros a kilómetros
          result = value / 10000;
          break;
        case "hm": // Decímetros a hectómetros
          result = value / 1000;
          break;
        case "dam": // Decímetros a decámetros
          result = value / 100;
          break;
        case "m": // Decímetros a metros
          result = value / 10;
          break;
        case "cm": // Decímetros a centímetros
          result = value * 10;
          break;
        case "mm": // Decímetros a milímetros
          result = value * 100;
          break;
        default:
          result = value;
      }
      break;

    case "cm": // Centímetros
      switch (toUnit) {
        case "km": // Centímetros a kilómetros
          result = value / 100000;
          break;
        case "hm": // Centímetros a hectómetros
          result = value / 10000;
          break;
        case "dam": // Centímetros a decámetros
          result = value / 1000;
          break;
        case "m": // Centímetros a metros
          result = value / 100;
          break;
        case "dm": // Centímetros a decímetros
          result = value / 10;
          break;
        case "mm": // Centímetros a milímetros
          result = value * 10;
          break;
        default:
          result = value;
      }
      break;

    case "mm": // Milímetros
      switch (toUnit) {
        case "km": // Milímetros a kilómetros
          result = value / 1000000;
          break;
        case "hm": // Milímetros a hectómetros
          result = value / 100000;
          break;
        case "dam": // Milímetros a decámetros
          result = value / 10000;
          break;
        case "m": // Milímetros a metros
          result = value / 1000;
          break;
        case "dm": // Milímetros a decímetros
          result = value / 100;
          break;
        case "cm": // Milímetros a centímetros
          result = value / 10;
          break;
        default:
          result = value;
      }
      break;

    default:
      result = value; // Por defecto no hay conversión
  }

  return result;
}


 // Función para convertir peso
 function convertWeight(value, fromUnit, toUnit) {
  let result;

  switch (fromUnit) {
      case "g": // Gramos
          switch (toUnit) {
              case "kg": // Gramos a kilogramos
                  result = value / 1000;
                  break;
              case "hg": // Gramos a libras
                  result = value / 100;
                  break;
              case "dag": // Gramos a decagramos
                  result = value / 10;
                  break;
              case "dg": // Gramos a decigramos
                  result = value * 10;
                  break;
              case "cg": // Gramos a centigramos
                  result = value * 100;
                  break;
              case "mg": // Gramos a miligramos
                  result = value * 1000;
                  break;

              default:
                  result = value; // Misma unidad
          }
          break;

      case "kg": // Kilogramos
          switch (toUnit) {
              case "g": // Kilogramos a gramos
                  result = value * 1000;
                  break;
              case "hg": // Kilogramos a hectógramos
                  result = value * 10;
                  break;
              case "dag": // Kilogramos a decagramos
                  result = value * 100;
                  break;
              case "dg": // Kilogramos a decigramos
                  result = value * 10000;
                  break;
              case "cg": // Kilogramos a centigramos
                  result = value * 100000;
                  break;
              case "mg": // Kilogramos a miligramos
                  result = value * 1000000;
                  break;

              default:
                  result = value; // Misma unidad
          }
          break;

      case "hg": // Hectógramos 
          switch (toUnit) {
              case "g": // Hectógramos  a gramos
                  result = value * 100;
                  break;
              case "kg": // Hectógramos a kilogramos
                  result = value / 10;
                  break;
              case "dag": // Hectógramos a decagramos
                  result = value * 10;
                  break;
              case "dg": // Hectógramos a decigramos
                  result = value * 1000;
                  break;
              case "cg": // Hectógramos a centigramos
                  result = value * 10000;
                  break;
              case "mg": // Hectógramos a miligramos
                  result = value * 100000;
                  break;

               default:
                      result = value; // Misma unidad
              }
              break;

       case "dag": // Decagramos
          switch (toUnit) {
              case "g": // Decagramos a gramos
                  result = value * 10;
                  break;
              case "kg": // Decagramos a kilogramos
                  result = value / 100;
                  break;
              case "hg": // Decagramos a decagramos
                  result = value / 10;
                  break;
              case "dg": // Decagramos a decigramos
                  result = value * 100;
                  break;
              case "cg": // Decagramos a centigramos
                  result = value * 1000;
                  break;
              case "mg": // Decagramos a miligramos
                  result = value * 10000;
                  break;

               default:
                      result = value; // Misma unidad
              }
              break;

      case "dg": // Decigramos 
          switch (toUnit) {
              case "kg": // Decigramos a kilogramos
              result = value / 10000;
              break;
              case "hg": // Decigramos a hectógramos
                  result = value / 1000;
                  break;
              case "dag": // Decigramos a decagramos
                  result = value / 100;
                  break;
              case "g": // Decigramos a gramos
                  result = value / 10;
                  break;
              case "cg": // Decigramos a centigramos
                  result = value * 10;
                  break;
              case "mg": // Decigramos a miligramos
                  result = value * 100;
              break;
          default:
              result = value; // Misma unidad
      }
      break;

      case "cg": // Centigramos
          switch (toUnit) {
              case "kg": // Centigramos a kilogramos
                  result = value / 100000;
                  break;
              case "hg": // Centigramos a hectógramos
                  result = value / 10000;
                  break;
              case "dag": // Centigramos a decagramos
                  result = value / 1000;
                  break;
              case "g": // Centigramos a gramos
                  result = value / 100;
                  break;
              case "dg": // Centigramos a decigramos
                  result = value / 10;
                  break;
              case "mg": // Centigramos a miligramos
                  result = value * 10;
                  break;
              default:
                  result = value; // Misma unidad
      }
      break;

      case "mg": // Miligramos
          switch (toUnit) {
              case "kg": // Miligramos a kilogramos
                  result = value / 1000000;
                  break;
              case "hg": // Miligramos a hectógramos
                  result = value / 100000;
                  break;
              case "dag": // Miligramos a decagramos
                  result = value / 10000;
                  break;
              case "g": // Miligramos a gramos
                  result = value / 1000;
                  break;
              case "dg": // Miligramos a decigramos
                  result = value / 100;
                  break;
              case "cg": // Miligramos a centigramos
                  result = value / 10;
                  break;
              default:
              result = value; // Misma unidad
      }
      break;                    

      default:
          result = value; // Por defecto no hay conversión
  }

  return result;
}

  // Función para manejar el formulario de temperatura
  document.getElementById("temperature-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = parseFloat(document.getElementById("temperature-input").value);
    if (isNaN(value)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }
    const fromUnit = document.getElementById("temperature-unit-from").value;
    const toUnit = document.getElementById("temperature-unit-to").value;

    const result = convertTemperature(value, fromUnit, toUnit);
    document.querySelector("#temperature-form .result").textContent = `Resultado: ${formatResult(result)}`;
    
    // Agregar funcionalidad al ícono de reinicio en el formulario de temperatura
    document.getElementById("reset-temp-icon").addEventListener("click", () => {
      // Limpiar los campos de entrada
      document.getElementById("temperature-input").value = "";
      document.getElementById("temperature-unit-from").value = "C";
      document.getElementById("temperature-unit-to").value = "F";
  
      // Limpiar el resultado mostrado
      document.querySelector("#temperature-form .result").textContent = "Resultado:";
    });

  });

  

  // Función para manejar el formulario de distancia
  document.getElementById("distance-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = parseFloat(document.getElementById("distance-input").value);
    if (isNaN(value)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }
    const fromUnit = document.getElementById("distance-unit-from").value;
    const toUnit = document.getElementById("distance-unit-to").value;

    const result = convertDistance(value, fromUnit, toUnit);
    document.querySelector("#distance-form .result").textContent = `Resultado: ${formatResult(result)}`;

    // Agregar funcionalidad al ícono de reinicio en el formulario de distancia
    document.getElementById("reset-dist-icon").addEventListener("click", () => {
      // Limpiar los campos de entrada
      document.getElementById("distance-input").value = "";
      document.getElementById("distance-unit-from").value = "km";
      document.getElementById("distance-unit-to").value = "m";
  
      // Limpiar el resultado mostrado
      document.querySelector("#distance-form .result").textContent = "Resultado:";
    });

  });

  // Función para manejar el formulario de peso
  document.getElementById("weight-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = parseFloat(document.getElementById("weight-input").value);
    if(isNaN(value)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }
    const fromUnit = document.getElementById("weight-unit-from").value;
    const toUnit = document.getElementById("weight-unit-to").value;

    const result = convertWeight(value, fromUnit, toUnit);
    document.querySelector("#weight-form .result").textContent = `Resultado: ${formatResult(result)}`;

    // Agregar funcionalidad al ícono de reinicio en el formulario de peso
    document.getElementById("reset-peso-icon").addEventListener("click", () => {
      // Limpiar los campos de entrada
      document.getElementById("weight-input").value = "";
      document.getElementById("weight-unit-from").value = "kg";
      document.getElementById("weight-unit-to").value = "g";
  
      // Limpiar el resultado mostrado
      document.querySelector("#weight-form .result").textContent = "Resultado:";
    });
  });
});