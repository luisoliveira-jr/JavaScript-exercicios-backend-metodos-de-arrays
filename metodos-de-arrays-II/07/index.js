const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const buscarEndereco = (cep, arrayEnderecos) => {
    const retorno = arrayEnderecos.find((logradouro) => {
        if (logradouro.cep === cep) {
            return logradouro
        }

    })

    console.log(retorno.rua)
}

buscarEndereco(00111333, enderecos);
