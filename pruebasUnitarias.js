
function pruebaValidacionIntegrantesFamiliares() {

console.assert(validarIntegrantesFamiliares('') === 'No ingresaste ningun caracter.',
    'Validar Integrantes Familiares no valido que se no se hayan ingresado caracteres'
);

console.assert(validarIntegrantesFamiliares('a') === 'Ingresaste un caracter invalido.',
    'Validar Integrantes Familiares no valido que se hayan ingresado caracteres validos'
);

}

function pruebaValidacionEdadesIntegrantesFamiliares() {
    console.assert(validarEdadesIntegrantesFamiliares('') === 'No ingresaste ningun caracter.',
        'Validar Edad Integrantes Familiares no valido que se hayan ingresado caracteres'
    );

    console.assert(validarEdadesIntegrantesFamiliares('CCC') === 'Ingresaste un caracter invalido.',
        'Validar Edad Integrantes Familiares no valido que se hayan ingresado caracteres invalidos'    
    );

}


function validacionFormulario() {
    pruebaValidacionIntegrantesFamiliares();
    pruebaValidacionEdadesIntegrantesFamiliares();
}

validacionFormulario();