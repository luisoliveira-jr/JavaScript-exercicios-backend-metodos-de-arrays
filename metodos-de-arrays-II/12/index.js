const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

console.log(`Filtre o array e retorne apenas os/as programadores e programadoras que sejam maiores de 20 anos:` + "\n")

const filtraProg20Mais = (arrayPessoas) => {
    const retorno = arrayPessoas.filter((pessoa) => {
        if (pessoa.profissao == "Programador" && pessoa.idade > 20) {
            return pessoa
        }
    })
    console.log(retorno)
}

filtraProg20Mais(pessoas);

console.log("\n")
console.log(`Filtre o array e retorne apenas os/as jornalistas que tenha mais de 30 anos:` + "\n")

const filtraJorn30Mais = (arrayPessoas) => {
    const retorno = arrayPessoas.filter((pessoa) => {
        if (pessoa.profissao == "Jornalista" && pessoa.idade > 30) {
            return pessoa
        }
    })
    console.log(retorno)
}

filtraJorn30Mais(pessoas);

console.log("\n")
console.log(`Filtre o array e retorne os/as jornalistas e programadores e programadoras que sejam jovens. Sabendo que, segundo o IBGE, é considerado jovem aquele que tem até 29 anos: ` + "\n")

const filtraJovens = (arrayPessoas) => {
    const retorno = arrayPessoas.filter((pessoa) => {
        if (pessoa.idade < 30) {
            return pessoa
        }
    })
    console.log(retorno)
}

filtraJovens(pessoas);