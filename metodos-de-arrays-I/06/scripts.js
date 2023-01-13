function cadeMeuDono(bd, petPerdido) {
    let index = 0;
    let resposta = "";
    let donoEncontrado = false;
    let nomeDoDono = bd[index].nome;

    while (index < tamanhoArray) {
        for (celulas of bd[index].pets) {
            if (celulas == petPerdido) {
                donoEncontrado = true;
                nomeDoDono = bd[index].nome;
                break
            }
        }
        if (donoEncontrado) {
            break
        } else {
            index++
        }
    }

    if (donoEncontrado) {
        resposta = "O dono(a) do(a) " + petPerdido + " é o(a) " + nomeDoDono + ".";
        console.log(resposta)
    } else {
        resposta = "Que pena " + petPerdido + ", não encontramos seu dono(a).";
        console.log(resposta)
    }
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

let pet = "Max";
let tamanhoArray = usuarios.length;

cadeMeuDono(usuarios, pet);
