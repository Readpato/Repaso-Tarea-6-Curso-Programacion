/*

Pseudocodigo:

- Crear un archivo de html en donde dentro del body se encuentre un form adentro.
- Como instancia inicial, dentro del form crear un input que pregunte la cantidad de integrantes del grupo familiar.
- Crear un boton que pueda decir siguiente para avanzar el proceso.
- Una vez ingresada la cantidad de personas, crear labels e inputs de la misma cantidad. (Pueden ser creado con .createElement!)
- Agregar un boton (que estara escondido al principio)  - llamado "calcular" - que al ser interactuado calcule:

    La mayor edad,
    La menor edad,
    El promedio del grupo familiar.

Y que despues se puedan ver los resultados en un elemento pre-existente que esta escondido al principio (display: none) pero que despues aparezcan.

Crear boton de resetear que empieze todo el proceso desde cero (display: 0 / .removeElement)

Punto bonus! 
Cuando el boton siguiente sea llamado, remover los integrantes pasados!

Notas:
    - Sera mejor intentar de escribir el cuerpo osea HTML y CSS, y despues de eso agregarle la funcionalidad con JS?

*/

/*

Acciones que sucede cuando el boton siguiente es clickeado
-Borrar los casilleros de los integrantes anteriores (si es que existen)
-Crear las casillas de los integrantes
-Mostrar el boton de calculo.

*/


//Funciones globales

const $form = document.formulario;

//


document.querySelector('.botonSiguiente').onclick =  function(event) {

const $cantidadIntegrantes = document.querySelector('.cantidadIntegrantes').value;


eliminarIntegrantesAnteriores();
validarInputIntegrantes($cantidadIntegrantes); //Esta funcion tendria que tener los crear integrantes adentro
//crearIntegrantes($cantidadIntegrantes);


event.preventDefault();
}


//Acciones que sucede cuando el boton de resetear es clickead


document.querySelector('#botonReseteoEjercicio').onclick = function(event) {
    resetear();
    event.preventDefault();
}


//Funcion que elimina los integrantes de la ejecucion pasada del ejercicio

function eliminarIntegrantesAnteriores() {
    
    const $integrantes = document.querySelectorAll('.integrantes');
    
    for (let m = 0; m < $integrantes.length; m++ ) {
        $integrantes[m].remove();
    }
}


//Funcion que crea la cantidad de casilleros de los integrantes

function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
        mostrarIntegrantes(); //cambia el display
        ocultarTextoResultado();
    } else {
        //resetear(); 
    }

    for( let i = 0;  i < cantidadIntegrantes; i++){
        crearCasilleroIntegrantes(i)
    }
}

//Funcion que crea los elementos div, input y label en el body html

function crearCasilleroIntegrantes(indice) {
    const $casillerosIntegrantes = document.querySelector('#casillerosIntegrantes');
    
    let $nuevoDiv = document.createElement('div');
    $nuevoDiv.className = 'integrantes'

    let $label = document.createElement('label');
    $label.textContent = `Integrante Familiar ${indice + 1}`;

    let $input = document.createElement('input');
    $input.type = 'number';

    $nuevoDiv.appendChild($label);
    $nuevoDiv.appendChild($input);
    $casillerosIntegrantes.appendChild($nuevoDiv);
}   


//Funcion que muestra el boton calculo

function mostrarBotonCalculo() {
    document.querySelector('#calculoEdades').className = '';
}

//Funcion que oculta el boton de calculo

function ocultarbotonCalculo() {
    document.querySelector('#calculoEdades').className = 'oculto';
}

//Funcion que muestra los casilleros de los integrantes

function mostrarIntegrantes() {
    document.querySelector('#casillerosIntegrantes').className = '';
}

// Funcion que oculta los integrantes

function ocultarIntegrantes() {
    document.querySelector('#casillerosIntegrantes').className = 'oculto';
}


//Funcion que oculta el texto de los resultados

function ocultarTextoResultado() {
    document.querySelector('#resultadosEdades').className = 'oculto';
}

//Funcion que muestra el texto de los resultados

function mostrarTextoResultado() {
    document.querySelector('#resultadosEdades').className = '';
}

function vaciarValorInput() {
    document.querySelector('.cantidadIntegrantes').value = '';
}

//Acciones que suceden una vez que se toqua el boton de calculo

document.querySelector('#calculoEdades').onclick = function(event) {

    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', calcularEdadMayor(numeros));
    mostrarEdad('menor', calcularEdadMenor(numeros));
    mostrarEdad('promedio', calcularEdadpromedio(numeros));
    mostrarTextoResultado();

    event.preventDefault();
}

/*
Funcion resetear
- Borrar los integrantes anteriores eliminarIntegrantesAnteriores();
- Ocultar los botones de calculo
- Ocultar los integrantes
- Ocultar texto resultados

*/

function resetear() {
    eliminarIntegrantesAnteriores();
    ocultarbotonCalculo();
    ocultarIntegrantes();
    ocultarTextoResultado();
    vaciarValorInput();
}


//Funcion que mete todas las edades de los integrantes en un array

function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrantes input');
    const edades = [];

    for ( let z = 0; z < $integrantes.length; z++) {
        if ($integrantes[z].value === '') {
            continue
        }
        edades.push(Number($integrantes[z].value));
    }
    return edades;
}



//Funcion que valida los integrantes familiares iniciales

function validarIntegrantesFamiliares(integrantes) {
     const regEx = /^[0-9]{1,2}$/;

    if (integrantes === '')
        return 'No ingresaste ningun caracter.';

    if (regEx.test(integrantes) === false) {
        return 'Ingresaste un caracter invalido.';
    }

    return '';
}


//Funcion que valida las edades de los integrantes familaires

function validarEdadesIntegrantesFamiliares(edadIntegrantes) {
    const regEx = /^[0-9]{1,2}$/;

    if (edadIntegrantes === '')
        return 'No ingresaste ningun caracter.';

    if (regEx.test(edadIntegrantes) === false) {
        return 'Ingresaste un caracter invalido.';
    }
    
    return '';
}

//Funcion que valida el input integrantes

function validarInputIntegrantes(integrantes) {
    //const integrantes = $form["cantidad-integrantes"].value;

    const errorIntegrantes = validarIntegrantesFamiliares(integrantes);
    const $integrantes = $form["cantidad-integrantes"].value;

    const errores = {
        "cantidad-integrantes": errorIntegrantes
    }

    const esExitoIntegrantes =  manejarErrores(errores) === 0 ;

    if (esExitoIntegrantes){
        crearIntegrantes($integrantes);
    }

    return errores;
}

//Manejar Errores


function manejarErrores(errores) {
    const error = errores;
    const key = Object.keys(error);
    let cantidadErrores = 0;

    key.forEach(function(key) {
        
        if(error[key]) {
            $form[key].className = ('error');
            $form[key].value = '';

            const $errores = document.querySelector('#errores')
            const $error = document.createElement('li');

            $error.textContent = error[key];
            console.log($error);
            $errores.appendChild($error);
            
            cantidadErrores++
        } else {
            $form[key].className = '';
        }
    })

    return cantidadErrores;
}


/*
const person = {
    name: 'Patrick',
    age: '25'
};

console.log(person);

const keys = Object.keys(person);

console.log(keys);

keys.forEach(function(key){
    console.log(person[key])
})

*/
