//every()
//Testa se todos os elementos do array passam pelo teste implementado na função callback, passada como argumento e retorna true ou false.

const numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(
    numeros.every((elementoAtual) => {
        return elementoAtual < 5;
    })
)

//Exemplo 01
const frutas = ['abacaxi', 'manga', 'melancia'];

const result = frutas.every((elementoAtual) => { return elementoAtual !== 'banana' });

console.log(result);

//Exercicio resolvido 01
//Crie uma função que receba um array de objetos de usuários que contém as propriedades nome e idade. A função deve validar se todos os usuarios são maiores de idade. Caso todos os usuários sejam maiores, deverá exibir a mensagem "Festa liberada!", caso contrário, deverá exibir a mensagem "Possui maior de idade."

const convidados = [
    { nome: 'Joao', idade: 23 },
    { nome: 'Maria', idade: 20 },
    { nome: 'Jose', idade: 19 },
    { nome: 'Helena', idade: 25 },
    { nome: 'Jaime', idade: 18 }
]

const checarIdade = (listaConvidados) => {

    const resultado = listaConvidados.every((convidado) => {
        return convidado.idade > 17
    });

    if (resultado) {
        console.log("Festa liberada!")
    } else {
        console.log("Possui maior de idade.")
    }
}

checarIdade(convidados);

//some()
//Testa se ao menos um dos elementos do array passam pelo teste implementado na função callback, passada como argumento e retorna true ou false.

const letras = ['a', 'b', 'c', 'd'];

console.log(
    letras.some((elementoAtual) => {
        return elementoAtual == 'c';
    })
)

//Exemplo 01

const nomes = ['João', 'José', 'Rodrigo']

const receba = nomes.some((nome) => { return nome === 'João' });

console.log(receba)

//Exemplo 01

const numbers = [2, 6, 12]

const impar = numbers.some((number) => { return number % 2 !== 0 });

console.log(impar)

//Exercicio 02
//Crie uma função que percorra um array com nome de arquivos. A função deve verificar se possui ao menos um arquivo com a extensão ".bat". Caso exista, deverá exibir a mensagem: "Virus detecdado.", caso contrario, "Nenhum vírus encontrado."

const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.pdf',
    'livro.doc',
    'instalador.exe',
    'virus.bat'
];

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExestensao = arquivo.indexOf('.bat');
        return existeExestensao !== -1;
    });
    if (resultado) {
        console.log('Vírus detectado');
    } else {
        console.log('Nenhum vírus encontrado');
    }
}

antiVirus(arquivos)

//find()
//Retorna o primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. Caso contrario, retorna undefined.

console.log(
    numeros.find((elementoAtual) => {
        return elementoAtual > 2;
    }))

//Exemplo 01

const pessoas = [
    { nome: 'Joao', idade: 23 },
    { nome: 'Maria', idade: 20 },
    { nome: 'Jose', idade: 19 },
    { nome: 'Helena', idade: 25 },
    { nome: 'Jaime', idade: 18 }
];

const resultado = pessoas.find((pessoa) => {
    return pessoa.nome === 'Jose';
})

console.log(resultado)

//Exercicio 02
//Crie uma função que receba o nome da marca de um carro e um array de objetos contendo as propriedades nome, marca, ano e cor. A função deve encontrar os dados do carro, a partir do nome da marca, no array passado como argumento e deve exibir todos os dados como retorno.

const carros = [
    { nome: 'Corola', marca: 'Toyota', ano: '2020', cor: 'prata' },
    { nome: 'Argo', marca: 'Fiat', ano: '2021', cor: 'preto' },
    { nome: 'Ranger', marca: 'Ford', ano: '2010', cor: 'prata' },
    { nome: 'Hilux', marca: 'Toyota', ano: '2011', cor: 'branco' }
]

const buscarCarro = (marca, arrayCarros) => {
    const retorno = arrayCarros.find((carro) => {
        return carro.marca === marca;
    })
    console.log(retorno)
}

buscarCarro('Fiat', carros);

//findIndex()
//Retorna o idice do primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. Caso contrario, retorna -1.

console.log(
    numeros.findIndex((elementoAtual) => {
        return elementoAtual == 5;
    }))

//Exemplo 01

const resultadoFindIndex = carros.findIndex((carro) => {
    return carro.nome === 'Ranger';
})

console.log(resultadoFindIndex)

//filter()
//Retorna uma nova array contendo todos os elementos correspondente a condição implementada na função callback, passada como argumento. Caso contrario, retorna uma array vazia.

console.log(
    numeros.filter((elementoAtual) => {
        return elementoAtual > 2;
    }))

//Exemplo 01

const aleatorios = [1, 4, 4, 5, 3, 1, 8]

const resultadoAleatorios = aleatorios.filter((aleatorio) => {
    return aleatorio > 3;
})

console.log(resultadoAleatorios);

//Exercicio 01
//De acordo com o array de professores abaixo, com suas respectivas stacks, faça o seguinte:
//a)Filtre todos os professores de backend
//b)Filtre todos os professores de frontend

const professores = [
    { nome: 'Guido', stack: 'backend' },
    { nome: 'Vidal', stack: 'backend' },
    { nome: 'Dani', stack: 'frontend' },
    { nome: 'Diego', stack: 'frontend' },
    { nome: 'Léo', stack: 'backend' },
    { nome: 'Ruli', stack: 'frontend' },
]


const professoresBack = professores.filter((professor) => {
    return professor.stack === 'backend';
})

console.log(professoresBack);

const professoresFront = professores.filter((professor) => {
    return professor.stack === 'frontend';
})

console.log(professoresFront);

//map()
//Executa a função callback passada como argumento para cada elemento do array e retorna um novo array como resultado

console.log(
    numeros.map((elementoAtual) => {
        return elementoAtual * 2;
    }))

//Exemplo 01 

const listaUsuarios = [
    { nome: 'Joao', sobrenome: 'Rodrigues', idade: 23 },
    { nome: 'Maria', sobrenome: 'Santos', idade: 20 },
    { nome: 'Jose', sobrenome: 'Oliveira', idade: 19 },
    { nome: 'Helena', sobrenome: 'Silva', idade: 25 },
    { nome: 'Jaime', sobrenome: 'Paya', idade: 18 }
];

const listaCorrigida = listaUsuarios.map((usuario) => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
        idade: usuario.idade
    }
});

console.log(listaCorrigida);

//Exercicio 01
//De acordo com o array de produtos abaixo, crie um novo array de produtos contendo nome, preço e desconto. O valor do desconto, será 10% com base no valor de cada produto.

const produtos = [
    { nome: 'arroz', preco: 500 },
    { nome: 'carne', preco: 3200 },
    { nome: 'biscoito', preco: 450 },
    { nome: 'banana', preco: 320 },
];

const produtosDescontos = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        desconto: produto.preco * 0.10
    }
})

console.log(produtosDescontos)


