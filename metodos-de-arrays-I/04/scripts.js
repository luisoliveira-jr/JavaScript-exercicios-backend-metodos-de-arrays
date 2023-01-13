// Uma clínica médica precisa automatizar o processo de atendimento aos pacientes que acontece por ordem de chegada. 

//Crie uma função que receba três argumentos, sendo eles, 

//a lista de todos os pacientes na fila, 
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

//o tipo de operação para um paciente, que pode ser atender ou agendar e 
const tipoDeOperacao = 'atender'

//o nome do paciente.
const paciente = 'José';

//Tamanho da lista
let tamanhoDaFila = pacientes.length;

function atendimentoProcess(listaNomes, acao, nome) {
    let indice = 0;
    if (acao == 'agendar') {
        // Caso a operação informada seja agendar, o paciente em questão deverá ser adicionado ao final da lista.
        for (let paciente of listaNomes) {
            if (paciente == nome) {
                listaNomes.splice(indice, (indice == 0 ? indice + 1 : indice));
                listaNomes.splice(tamanhoDaFila, "", nome);
            }
            indice++
        }
    } else if (acao == 'atender') {
        // Caso seja atender, o próximo (primeiro) paciente da fila deverá ser removido e não é obrigatório informar o nome do paciente na função.
        listaNomes.shift();
    }

    // Por fim, a função deverá imprimir a lista atualizada, separada por vírgula.
    listaNomes = listaNomes.join(", ");
    console.log(listaNomes)
}

atendimentoProcess(pacientes, tipoDeOperacao, paciente)



