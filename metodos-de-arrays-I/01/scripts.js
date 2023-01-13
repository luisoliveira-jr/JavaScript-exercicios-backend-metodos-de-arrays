function arrayFrutas(listaFrutas) {
    listaFrutas.reverse();
    listaFrutas.shift();
    listaFrutas.pop();
    listaFrutas.push("Melão")
    return listaFrutas

};

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

console.log(arrayFrutas(frutas));