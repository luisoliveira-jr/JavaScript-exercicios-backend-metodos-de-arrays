const numeros = [0, 122, 4, 6, 10, 8, 42]


const verificador = numeros.every((elementoAtual) => {
    let resultado = elementoAtual % 2;
    return resultado == 0;
})

if (!verificador) {
    console.log("array inválido")
} else {
    console.log("array válido")
}

