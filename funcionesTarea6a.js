//Funcion que muestra las edades dependiendo del tipo

function mostrarEdad(tipo, valor) {
    document.querySelector(`.${tipo}-edad`).textContent = valor;
}


//Funcion que calcula la edad mayor de los integrantes familiares.

function calcularEdadMayor(array) {
    return mayorNumero = Math.max(...array);    
}

//Funcion que calcula la edad menor de los integrantes familiares

function calcularEdadMenor(array) {
    return menorNumero = Math.min(...array);
}

//Funcion que calcula el promedio de las edades

function calcularEdadpromedio(array) {
    let salarioTotal = 0;
    for ( n = 0; n < array.length; n++) {
        salarioTotal = salarioTotal + array[n];
    }
    return salarioTotal / array.length;

}

