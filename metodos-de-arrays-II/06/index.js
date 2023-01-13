const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filtro = cidades.filter((elemento) => {
    return elemento.length < 9
});

const imprime = filtro.join(", ");

console.log(imprime)