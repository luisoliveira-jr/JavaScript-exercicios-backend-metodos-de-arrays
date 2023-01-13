const frutas = [
    "Manga",
    "UVA",
    "abacaxi",
    "banaNA",
    "MAçã"
]

const arrayModify = (arrayStrings) => {
    let nomeFormatado;
    let indice = 0;
    let space = " - "

    const retorno = arrayStrings.map((string) => {
        let newString = string.toLowerCase();
        let primeriaLetra = newString.slice(0, 1);
        let restanteDoNome = newString.slice(1);
        nomeFormatado = indice + space + primeriaLetra.toUpperCase() + restanteDoNome;
        indice++;

        return nomeFormatado;
    })

    console.log(retorno)
}

arrayModify(frutas);