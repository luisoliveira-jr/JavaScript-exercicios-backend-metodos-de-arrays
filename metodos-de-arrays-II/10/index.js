const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const chamaPositivo = (arrayNumeros) => {
    const retorno = arrayNumeros.filter((numero) => {
        return numero % 2 === 0;
    })

    console.log(retorno)
}

chamaPositivo(numeros);