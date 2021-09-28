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


//Acciones que sucede cuando el boton siguiente es clickeado
document.querySelector('.botonSiguiente').onclick =  function(event) {

const $cantidadIntegrantes = document.querySelector('.cantidadIntegrantes').value;

eliminarIntegrantesAnteriores();
crearIntegrantes($cantidadIntegrantes);

event.preventDefault();
}

//Funcion que elimina los integrantes de la ejecucion pasada del ejercicio
function eliminarIntegrantesAnteriores() {}


//Funcion que crea la cantidad de casilleros de los integrantes
function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
        mostrarIntegrantes();
    } else {
        resetear();
    }

    for( let i = 0;  i < cantidadIntegrantes; i++){
        crearCasilleroIntegrantes(i)
    }
}

//Funcion que muestra el boton calculo

function mostrarBotonCalculo() {
    document.querySelector('#calculoEdades').className = '';
}

