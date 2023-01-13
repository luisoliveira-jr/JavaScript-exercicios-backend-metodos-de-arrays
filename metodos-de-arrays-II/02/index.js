//Dado um determinado array de palavras, faça um programa que verifica se existe ao menos uma palavra com mais de 5 caracteres. Caso exista, o programa deverá imprimir existe palavra inválida, senão, o programa deverá imprimir array validado.

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificador = (arrayStrings) => {

    const resultado = arrayStrings.every((elementoAtual) => {
        return elementoAtual.length < 4;
    });

    if (resultado) {
        console.log("Array validado.");
    } else {
        console.log("Existe palavra inválida.");
    }

};

verificador(palavras);

