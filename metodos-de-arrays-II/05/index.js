const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const preSelecionados = usuarios.filter((pessoa) => {
    return pessoa.idade > 17 && pessoa.idade < 66;
})


const verificador = preSelecionados.every((pessoa) => {
    return pessoa.habilitado == true;
})

if (!verificador) {
    console.log("todos precisam estar habilitados")
} else {
    console.log("todos passaram no teste")
}