console.log("Usando o método sort() resolva as seguintes questões:");

const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

console.log("Ordenar o array:", numeros);

console.log("a)... em ordem crescente.");

console.log(numeros.sort((a, b) => {
    return a - b;
}));

console.log("b)... em ordem decrescente.");

console.log(numeros.sort((a, b) => {
    return b - a;
}));

console.log("c)... em ordem crescente, com base nos valores dos pontos de código Unicode.");

console.log(numeros.sort());

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

console.log("Ordenar o array:", frutas);

console.log("d)... em ordem alfabética.");

console.log(frutas.sort((primeiro, segundo) => {
    return primeiro.localeCompare(segundo);
}));

console.log("e)... em ordem alfabética decrescente.");

console.log(frutas.sort((primeiro, segundo) => {
    return segundo.localeCompare(primeiro);
}));

console.log("f)... em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).");

console.log(frutas.sort((a, b) => {
    return a.length - b.length;
}));