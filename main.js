document.addEventListener('DOMContentLoaded', () => {

    const calcularBtn = document.getElementById('calcularImpuesto');
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const sueldoInput = document.getElementById('sueldo');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        // Limpiar el resultado previo
        resultadoDiv.innerHTML = '';
        const nombre = nombreInput.value.trim();

        const edad = parseInt(edadInput.value);
        const sueldo = parseFloat(sueldoInput.value);

        // Validar que los campos no estén vacíos y sean números válidos
        if (!nombre || isNaN(edad) || isNaN(sueldo) || edad < 0 || sueldo < 100 ) {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, ingresa datos válidos en todos los campos. Sueldo debe ser Mayor > 100.</p>';
            return; // Detener la ejecución si hay errores por estos dartos.
        }

        let impuestoPorcentaje = 0;
        let mensajeImpuesto = '';
        let impuestoAPagar = 0;

        if (edad < 18) {

            mensajeImpuesto = 'No Tienes que pagar impuestos.';
            impuestoPorcentaje = 0;

        } else if (edad >= 18 && edad <= 30) {

            impuestoPorcentaje = 0.10; // 10%
            mensajeImpuesto = 'debe pagar un 10% de impuestos.';

        } else if (edad >= 31 && edad <= 60) {

            impuestoPorcentaje = 0.20; // 20%
            mensajeImpuesto = 'debe pagar un 20% de impuestos.';

        } else { // edad > 60

            impuestoPorcentaje = 0.15; // 15%
            mensajeImpuesto = 'debe pagar un 15% de impuestos.';

        }

        impuestoAPagar = sueldo * impuestoPorcentaje;

        if (impuestoPorcentaje === 0) {

            resultadoDiv.innerHTML = `<p>${nombre}, ${mensajeImpuesto}</p>`;
            resultadoDiv.innerHTML += `<p>El impuesto a pagar es: <strong>$${impuestoAPagar.toFixed(2)}</strong></p>`;

        } else {

            resultadoDiv.innerHTML = `
                <p><strong>${nombre}</strong>, ${mensajeImpuesto}</p>
                <p>El impuesto a pagar es: <strong>$${impuestoAPagar.toFixed(2)}</strong></p>
            `;
        }
        resultadoDiv.style.display = 'block';
    });

});

//  Second Excercise   NRo 2 .


document.addEventListener('DOMContentLoaded', () => {
const numeroNInput = document.getElementById('numeroN');
const contarBtn = document.getElementById('contarNumeros');
const listaNumerosDiv = document.getElementById('listaNumeros');
const resumenContadoresP = document.getElementById('resumenContadores');

contarBtn.addEventListener('click', () => {
    const n = parseInt(numeroNInput.value);

    // Validar la entrada
    if (isNaN(n) || n <= 0) {
        listaNumerosDiv.innerHTML = '<p style="color: red;">Por favor, ingresa un número entero positivo válido.</p>';
        resumenContadoresP.textContent = '';
        return;
    }

    let pares = 0;
    let impares = 0;
    let numerosHTML = ''; // Para construir la lista de números  En un Vacio

    // Bucle para iterar desde 1 hasta n tomando el mismo n al final.
    for (let i = 1; i <= n; i++) {
        // Usar el operador módulo (%) para verificar si [i] es par o impar
        if (i % 2 === 0) {
            // Es par
            pares++;
            numerosHTML += `<p class="par">${i} (Par)</p>`;
            continue;
        } else {
            // Es impar
            impares++;
            numerosHTML += `<p class="impar">${i} (Impar)</p>`;
            continue;
        }

    }

    // Mostrar la lista de números
    listaNumerosDiv.innerHTML = numerosHTML;

    // Mostrar el resumen de contadores
    resumenContadoresP.innerHTML = `Total de Pares: <span class="par">${pares}</span><br>Total de Impares: <span class="impar">${impares}</span>`;
    });
});

// Third Excercise  .[3] ...

const numeroNInput = document.getElementById('numeroN');
const contarBtn = document.getElementById('contarNumeros');
const listaNumerosDiv = document.getElementById('listaNumeros');
const resumenContadoresP = document.getElementById('resumenContadores');

contarBtn.addEventListener('click', () => {
    const n = parseInt(numeroNInput.value);

    // Validar la entrada
    if (isNaN(n) || n <= 0) {
        listaNumerosDiv.innerHTML = '<p style="color: red;">Por favor, ingresa un número entero positivo válido.</p>';
        resumenContadoresP.textContent = '';
        return;
    }

    let pares = 0;
    let impares = 0;
    let numerosHTML = ''; // Para construir la lista de números desde vacio en HTML ...

    // Bucle para iterar desde 1 hasta n....
    for (let i = 1; i <= n; i++) {
        // Usar el operador módulo (%) para verificar si es par o impar....
        if (i % 2 === 0) {
            // Es par
            pares++;
            numerosHTML += `<p class="par">${i} (Par)</p>`;
            continue;
        } else {
            // Es impar
            impares++;
            numerosHTML += `<p class="impar">${i} (Impar)</p>`;
            continue;
        }
    
    }

    // Mostrar la lista de números
    listaNumerosDiv.innerHTML = numerosHTML;

    // Mostrar el resumen de contadores
    resumenContadoresP.innerHTML = `Total de Pares: <span class="par">${pares}</span><br>Total de Impares: <span class="impar">${impares}</span>`;
});

// Fourth Exce [4] .........

const passwordInput = document.getElementById('passwordInput');
const validarBtn = document.getElementById('validarPassword');
const resultadoDiv = document.getElementById('resultadoValidacion');

validarBtn.addEventListener('click', () => {
    
    const password = passwordInput.value;

    let esFuerte = false;
    let mensajes = [];

    // 1. Al menos 8 caracteres
    if (password.length < 8) {

        esFuerte = false;
        mensajes.push('Debe tener al menos 8 caracteres.');

    }

    // 2. Incluye mayúscula
    // USE match() con una expresión regular para buscar al menos una letra mayúscula
    if (!password.match(/[A-Z]/)) {

        esFuerte = false;
        mensajes.push('Debe incluir al menos una letra mayúscula.');

    }

    // 3. Incluye minúscula
    // USE match() con una expresión regular para buscar al menos una letra minúscula
    if (!password.match(/[a-z]/)) {

        esFuerte = false;
        mensajes.push('Debe incluir al menos una letra minúscula.');

    }

    // 4. Incluye número
    // USE match() con una expresión regular para buscar al menos un dígito
    if (!password.match(/[0-9]/)) {

        esFuerte = false;
        mensajes.push('Debe incluir al menos un número.');

    }

    const tieneSimbolo = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);

    if (!tieneSimbolo) {

        mensajes.push('Considera incluir un símbolo (!@#$%****...) para mayor seguridad.');
    } else {

        esFuerte = true;
    }

    // Mostrar mensaje según evaluación

    resultadoDiv.className = ''; // Limpia clases anteriores, desecho.

    if (esFuerte && tieneSimbolo) {

        resultadoDiv.classList.add('fuerte');

        resultadoDiv.innerHTML = '¡Contraseña **MUY FUERTE**!';

    } else if (esFuerte) {

    resultadoDiv.classList.add('fuerte'); // Sigue siendo fuerte, pero sin símbolo [*/+_.=?(=(/=&%$#"$%"))] opcional no es suficiente para @meee
        resultadoDiv.innerHTML = '¡Contraseña **FUERTE**!';

    } else {

        resultadoDiv.classList.add('debil');
        resultadoDiv.innerHTML = 'Contraseña **DÉBIL**.<br>' + mensajes.join('<br>');

    }

    // Caso especial para una contraseña que cumple los 4 requisitos básicos pero le falta el símbolo
    if (!esFuerte && mensajes.length === 1 && mensajes[0].includes('Considera incluir un símbolo')) {

        resultadoDiv.classList.remove('debil');
        resultadoDiv.classList.add('casi-fuerte');
        resultadoDiv.innerHTML = 'Contraseña **CASI FUERTE**. Te falta un símbolo. <br>' + mensajes[0];

    }

}) ;

const numeroBaseInput = document.getElementById('numeroBase');
const generarBtn = document.getElementById('generarTabla');
const listaMultiplicacionDiv = document.getElementById('listaMultiplicacion');

generarBtn.addEventListener('click', () => {
    // Limpiar el div de resultados previo
    listaMultiplicacionDiv.innerHTML = '';
    const numeroBase = parseInt(numeroBaseInput.value);

    // Validar la entrada
    if (isNaN(numeroBase)) {
        listaMultiplicacionDiv.innerHTML = '<p style="color: red;">Por favor, ingresa un número válido.</p>';
        return;
    }

    let tablaHTML = ''; // String para construir la tabla
    const limiteSuperior = 125; // Define el límite para la opción extra

    // Bucle for para generar la tabla del 1 al 12, SSAOLO HASTA [12]\n....
    for (let i = 1; i <= 12; i++) {
        // Calcular el resultado de la multiplicación
        const resultado = numeroBase * i;
        tablaHTML += `<p>${numeroBase} x ${i} = ${resultado}</p>`;

        // Opción extra: incluir break si llega a un resultado mayor a 100
        if (resultado > limiteSuperior) {


            tablaHTML += `<p class="limit-reached">*** El resultado (${resultado}) superó ${limiteSuperior}. La tabla se detuvo aquí. ***</p>`;
            break; // Detiene el bucle

        } 

    }
    // Si no se ha alcanzado el límite, añadir un mensaje de finalización
    if (tablaHTML.indexOf('limit-reached') === -1) {
        tablaHTML += `<p class="final-message">*** Tabla del ${numeroBase} completada hasta el 12. ***</p>`;
    }
    // Mostrar la tabla generada en el div de resultados
    listaMultiplicacionDiv.innerHTML = tablaHTML;
    listaMultiplicacionDiv.style.display = 'block'; // Asegurarse de que el div sea visible
    listaMultiplicacionDiv.classList.add('tabla-multiplicacion'); // Añadir

});

//FIFTH EXCEs  ---> [5].......

const numeroIntentoInput = document.getElementById('numeroIntento');
const adivinarBtn = document.getElementById('adivinarBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const mensajeJuegoDiv = document.getElementById('mensajeJuego');
const contadorIntentosDiv = document.getElementById('contadorIntentos');

let numeroSecreto;
let intentosRestantes;
const MAX_INTENTOS = 5;

// Función para inicializar o reiniciar el juego
function iniciarJuego() {
    // Generar número aleatorio entre 1 y 20
    numeroSecreto = Math.floor(Math.random() * 20) + 1;
    intentosRestantes = MAX_INTENTOS;

    // Resetear la interfaz
    numeroIntentoInput.value = '';
    mensajeJuegoDiv.textContent = '';
    mensajeJuegoDiv.className = ''; // Limpiar clases de estilo
    contadorIntentosDiv.textContent = `Intentos restantes: ${intentosRestantes}`;
    adivinarBtn.style.display = 'block'; // Mostrar botón de adivinar
    reiniciarBtn.style.display = 'none'; // Ocultar botón de reiniciar
    numeroIntentoInput.disabled = false; // Habilitar input
    console.log('Número secreto (solo para depuración):', numeroSecreto); // Puedes quitar esto en producción
}

// Llama a iniciarJuego al cargar la página para empezar el juego. en su solo div .container. ...
iniciarJuego();

// Event listener para el botón Adivinar del usuario
adivinarBtn.addEventListener('click', () => {
const intentoUsuario = parseInt(numeroIntentoInput.value);

// Validar que la entrada sea un número entre 1 y 20 y solo est rango. 

if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 20) {

    mensajeJuegoDiv.textContent = 'Por favor, ingresa un número válido entre 1 y 20.';
    mensajeJuegoDiv.className = 'pista';
    return; // Salir de la función si la entrada es inválida
}

// DisminuUir  intentos  i--
intentosRestantes--;

contadorIntentosDiv.textContent = `Intentos restantes: ${intentosRestantes}`;

// Evaluar el intento EN INTENTPS.
if (intentoUsuario === numeroSecreto) {

    mensajeJuegoDiv.textContent = `¡Felicidades! Adivinaste el número secreto (${numeroSecreto}).`;
    mensajeJuegoDiv.className = 'correcto';
    adivinarBtn.style.display = 'none'; // Ocultar botón de adivinar
    reiniciarBtn.style.display = 'block'; // Mostrar botón de reiniciar
    numeroIntentoInput.disabled = true; // Deshabilitar input

} else if (intentosRestantes === 0 && intentoUsuario !== numeroSecreto) {
    mensajeJuegoDiv.textContent = `¡Se te acabaron los intentos! El número secreto era ${numeroSecreto}.`;
    mensajeJuegoDiv.className = 'incorrecto';
    adivinarBtn.style.display = 'none'; // Ocultar botón de adivinar
    reiniciarBtn.style.display = 'block'; // Mostrar botón de reiniciar
    numeroIntentoInput.disabled = true; // Deshabilitar input
    return; // Salir de la función si se acabaron los intentos


} else if (intentoUsuario < numeroSecreto) {

    mensajeJuegoDiv.textContent = `Demasiado bajo. Intenta un número mayor.`;
    mensajeJuegoDiv.className = 'pista';

} else { // intentoUsuario > numeroSecreto

    mensajeJuegoDiv.textContent = `Demasiado alto. Intenta un número menor.`;
    mensajeJuegoDiv.className = 'pista';

}

// Comprobar si se acabaron los intentos

if (intentosRestantes === 0 && intentoUsuario !== numeroSecreto) {

    mensajeJuegoDiv.textContent = `¡Se te acabaron los intentos! El número secreto era ${numeroSecreto}.`;
    mensajeJuegoDiv.className = 'incorrecto';
    adivinarBtn.style.display = 'none'; // Ocultar botón de adivinar
    reiniciarBtn.style.display = 'block'; // Mostrar botón de reiniciar
    numeroIntentoInput.disabled = true; // Deshabilitar input

}
});

// Event listener para el botón Reiniciar...

reiniciarBtn.addEventListener('click', iniciarJuego);

