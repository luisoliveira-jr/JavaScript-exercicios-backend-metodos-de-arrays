const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtraNomes = (arrayNomes) => {
    const retorno = arrayNomes.filter((nome) => {
        if (nome[0] == 'a' || nome[0] == 'A') {
            return nome
        }

    })

    console.log(retorno)
}

filtraNomes(nomes);