//sort()
//Ordena os elementos do próprio array. Por padrão, a ordenação é de acordo com a tabela unicode
//Opcionalmente, recebe uma função callback que possui dois parâmetros, sendo eles, o primeiro e o segundo elemento a ser comparado.
//É importante lembrar que na tabela unicode, números vem antes de letras.

const numeros = [3, 20, 13, 50, 1, 4, 2, 30, 6, 80, 34]

console.log(`${numeros} Sem ordenação `)

numeros.sort()
console.log(`${numeros} Com ordenação padrão do sort `)

//Ordenação fornecendo uma função callback
//1 - Se o retorno da função for um número menor que zero (negativo), o primeiro parâmetro vem antes do segundo.
//2 - Se o retorno da função for um número maior que zero (positivo), o segundo parâmetro vem antes do primeiro.
//3 - Se o retorno da função for zero, mantém o primeiro e o segundo parâmetro inalterados.

// ordenação crescente
numeros.sort((a, b) => {
    //a vem primeiro que b
    if (a < b) {
        return -1;
    }
    //b vem primeiro que a
    if (a > b) {
        return 1
    }
    //números iguais, não altera ordem
    return 0
})

console.log(`${numeros} Com ordenação por callback no sort - crescente`)

// ordenação decrescente
numeros.sort((a, b) => {
    //a vem primeiro que b
    if (a < b) {
        return 1;
    }
    //b vem primeiro que a
    if (a > b) {
        return -1
    }
    //números iguais, não altera ordem
    return 0
})

console.log(`${numeros} Com ordenação por callback no sort - decrescente`)

// Versão simplificada crescente
numeros.sort((a, b) => {
    return a - b;
})

// Versão simplificada decrescente
numeros.sort((a, b) => {
    return b - a;
})

//Exercicio 01
//Ordenar lista de modo crescente e decrescente segundo id dos usuarios
const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'erick', idade: 16 }
]
console.log(usuarios)
//crescente
usuarios.sort((pri, seg) => {
    return pri.id - seg.id;
})
console.log(usuarios)
//decrescente
usuarios.sort((pri, seg) => {
    return seg.id - pri.id;
})
console.log(usuarios)

//Exemplo com strings
//sort() com localeCompare()
//localeCompare() retorna um número que indica se a string de referência vem antes, depois ou é igual a string comparada.

const pessoas = ['João', 'ana', 'kylie', 'luís', 'Carlos', 'beatriz', 'monica']

console.log(`${pessoas} Sem ordenação`)

pessoas.sort()

console.log(`${pessoas} Com ordenação SEM loacaleCompare`)

pessoas.sort((pri, seg) => {
    return pri.localeCompare(seg);
})

console.log(`${pessoas} Com ordenação COM loacaleCompare`)

//Exercicio 01
//Ordene uma lista de objetos, tendo uma função com argumentos uma função callback e qual o campo que será ordenado

const carros = [
    { nome: 'Corola', marca: 'Toyota', ano: '2020', cor: 'prata' },
    { nome: 'Argo', marca: 'Fiat', ano: '2021', cor: 'preto' },
    { nome: 'Ranger', marca: 'Ford', ano: '2010', cor: 'prata' },
    { nome: 'Hilux', marca: 'Toyota', ano: '2011', cor: 'branco' }
]

const ordenarCarros = (arrayCarros, campoOrdenação) => {
    arrayCarros.sort((pri, sec) => {
        return pri[campoOrdenação].localeCompare(sec[campoOrdenação]);
    });
    console.log(arrayCarros);
}

ordenarCarros(carros, 'marca')

//reduce()
//Executa uma função callback, passada como argumento, para cada elemento do array, que resulta em apenas um valor de retorno
//A função passada como argumento para o método reduce recebe 4 argumentos:
//1 - acumulador - valor inicial (ou valor do callback anterior)
//2 - valorAtual - o valor do elemento atual
//3 - index - o indice atual
//4 - array - o array completo

//Exemplo01

const array = [0, 1, 2, 3, 4];

console.log("reduce",
    array.reduce((acumulador, valorAtual, indice, array) => {
        return acumulador + valorAtual
    }));

console.log("reduce com valor inicial do acumulador = 10:",
    array.reduce((acumulador, valorAtual, indice, array) => {
        return acumulador + valorAtual
    }, 10));

//Exemplo02

const arrayDeArrays = [[0, 1], [2, 3, 4], [14, 22, 98]];

const arrayReduzido = arrayDeArrays.reduce((acumulador, elementoAtual, indice, array) => {
    return [...acumulador, ...elementoAtual];
}, []);

console.log(arrayReduzido);

//Exercicio 01
//Dado o array de usuarios abaixo, utilize o reduce para filtrar o usuario que possui a maior idade dentre os elementos do array e retorne o objeto completo com os dados do usuario encontrado.

// array na linha 62

const maiorIdade = usuarios.reduce((acumulador, elementoAtual) => {
    let maior = acumulador;

    if (elementoAtual.idade > maior.idade) {
        maior = elementoAtual;
    }
    return maior;
});

console.log("Usuario com maior idade:", maiorIdade)

