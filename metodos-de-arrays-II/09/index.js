const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const chamaPositivo = (arrayNumeros) => {
    const retorno = arrayNumeros.filter((numero) => {
        return numero > 0;
    })

    console.log(retorno)
}

chamaPositivo(numeros);