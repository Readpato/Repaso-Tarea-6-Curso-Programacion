console.assert(validarIntegrantesFamiliares('') === 'No ingresaste ningun caracter.',
    'Validar Integrantes Familiares no valido que se no se hayan ingresado caracteres'
)

console.assert(validarIntegrantesFamiliares('a') === 'Ingresaste un caracter invalido.',
    'Validar Integrantes Familiares no valido que se hayan ingresado caracteres validos'
)

