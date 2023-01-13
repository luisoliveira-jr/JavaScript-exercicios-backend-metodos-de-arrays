// Já vimos:
// length() - é uma propriedade
// .push() - insere no fim
// .pop() - remove do fim
// .unshift - insere no inicio
// .shift - remove do inicio


// indexOf() - encontra um item dentro de um array e retorna o indice dele
const lista = ["eu", "tu", "eles"];
const indice = lista.indexOf("tu");
console.log("indexOf:", indice); //1

// includes() - verifica se existe um item dentro de um array e retorna booleano
const lista2 = ["eu", "tu", "eles"];
const indice2 = lista.includes("tu");
console.log("includes:", indice2);

// reverse() - inverte a ordem dos itens de um array "os ultimos serão os primeiros" - Altera o array original
const opcoes = ["eu", "tu", "eles"];
const resultado = opcoes.reverse();
console.log("reverse:", resultado); //1

// join() - agrupa todos os itens de um array em uma string, o que você passa como argumento é utilizado como separador dos itens do array

// Exercicio resolvido 1: inverter uma string
function inverterString(texto) {
    // split transforma uma string em array
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let textoInvertido = arrayDeLetras.join("")
    console.log("reverse + join:", textoInvertido);
}

inverterString("Cubos Academy")

// concat() - concatena arrays
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];
const resultadoconcat = a.concat(b, c);
console.log("concat:", resultadoconcat);

// slice() - faz uma cópia da parte de um array
const opcoesSlice = ["eu", "você", "ele", "nós"]
const resultadoSlice = opcoesSlice.slice(1, 3);
console.log("slice:", resultadoSlice);

// Exercicio resolvido 2: retirar 10% do começo e do fim de um array
function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 10 / 100);
    const endIndex = Math.floor(dados.length * 90 / 100);
    const fatia = dados.slice(startIndex, endIndex);
    console.log("Slice e Math.round", fatia)
}

const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

filtrar80(dados);

//Math.ceil() arredonda pra cima
//Math.floor() arredonda pra baixo
//Math.round() arredonda para o mais perto

// splice() - inserir item no meio do array, apagar um ou mais itens do meio do array ou os dois ao mesmo tempo
const listaSplice = ["a", "b", "c", "d", "e"];
//variavel.splice(indice, qntd itens a deletar, itens incluir)
listaSplice.splice(1, 2, "f", "g", "h");
console.log("splice:", listaSplice);

// toString()