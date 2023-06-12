

const variacion = 300;

function calculateMacronutrientsAndCalories() {
    var nombre = prompt("Ingresa tu nombre:");
    var peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    var altura = parseFloat(prompt("Ingresa tu altura en centímetros:"));
    var edad = parseInt(prompt("Ingresa tu edad en años:"));

    var genero = "";
    while (genero !== "hombre" && genero !== "mujer") {
        genero = prompt("¿Eres hombre o mujer?").toLowerCase();
    }

    var actividad = "";
    while (
        actividad !== "sedentario" &&
        actividad !== "moderado" &&
        actividad !== "activo"
    ) {
        actividad = prompt(
            "¿Cuál es tu nivel de actividad física?\nOpciones: sedentario, moderado, activo"
        ).toLowerCase();
    }

    var objetivo = "";
    while (
        objetivo !== "aumentar" &&
        objetivo !== "mantener" &&
        objetivo !== "bajar"
    ) {
        objetivo = prompt(
            "¿Cuál es tu objetivo?\nOpciones: aumentar, mantener, bajar"
        ).toLowerCase();
    }

    // Calcular el metabolismo basal (BMR)
    let bmr;
    if (genero === "hombre") {
        bmr = 66 + 13.75 * peso + 5 * altura - 6.75 * edad;
    } else if (genero === "mujer") {
        bmr = 655 + 9.56 * peso + 1.85 * altura - 4.68 * edad;
    } else {
        alert("El género ingresado no es válido.");
        throw new Error("Error en el género ingresado");
    }

    // Calcular el factor de actividad
    let factorActividad;
    switch (actividad) {
        case "sedentario":
            factorActividad = 1.2;
            break;
        case "moderado":
            factorActividad = 1.55;
            break;
        case "activo":
            factorActividad = 1.725;
            break;
        default:
            alert("El nivel de actividad ingresado no es válido.");
            throw new Error("Error en el nivel de actividad ingresado");
    }

    // Calcular las calorías diarias necesarias según el objetivo
    var calorias;
    switch (objetivo) {
        case "aumentar":
            calorias = bmr * factorActividad + variacion;
            break;
        case "mantener":
            calorias = bmr * factorActividad;
            break;
        case "bajar":
            calorias = bmr * factorActividad - variacion;
            break;
        default:
            alert("El objetivo ingresado no es válido.");
            throw new Error("Error en el objetivo ingresado");
    }

    // Calcular los macronutrientes
    var proteinas = peso * 2.2; // Proteínas en gramos
    var grasas = (calorias * 0.25) / 9; // Grasas en gramos
    var carbohidratos = (calorias - proteinas * 4 - grasas * 9) / 4; // Carbohidratos en gramos

    // Crear objeto con los resultados
    let resultado = {
        nombre: nombre,
        calorias: calorias.toFixed(2),
        proteinas: proteinas.toFixed(2),
        grasas: grasas.toFixed(2),
        carbohidratos: carbohidratos.toFixed(2),
    };

    // Array para almacenar los resultados
    var resultadosArray = [];

    // Agregar resultado al array
    resultadosArray.push(resultado);

    // Resultados
    alert(
        "Resultados del Calculador de Macronutrientes y Calorías:\n" +
        ".-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,.-_-.,\n" +
        "Nombre: " + resultado.nombre + "\n" +
        "Calorías diarias necesarias: " + resultado.calorias + " kcal\n" +
        "Proteínas: " + resultado.proteinas + " g\n" +
        "Grasas: " + resultado.grasas + " g\n" +
        "Carbohidratos: " + resultado.carbohidratos + " g"
    );

    console.log(resultadosArray);
}

// Call the function to execute the calculations
calculateMacronutrientsAndCalories();
