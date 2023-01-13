function grupoCarros(carrosLista, indice) {
    carrosLista = carrosLista.splice(indice, 3, "");
    carrosLista = carrosLista.join(" - ");
    return carrosLista
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

console.log(grupoCarros(nomes, posicao));