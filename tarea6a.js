/*

Pseudocodigo:

- Crear un body de html en donde se encuentre un form adentro.
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

document.querySelector('.botonSiguiente').onclick =  function(event) {

const $cantidadIntegrantes = document.querySelector('.cantidadIntegrantes').value;

eliminarIntegrantesAnteriores();
crearIntegrantes($cantidadIntegrantes);

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
    document.querySelector('#calculoEdades').classname = 'oculto';
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
}

/*
Funcion resetear
-Borrar los integrantes anteriores eliminarIntegrantesAnteriores();
- Ocultar los botones de calculo
- Ocultar los integrantes
- Ocultar texto resultados

*/


function resetear() {
    eliminarIntegrantesAnteriores();

}

