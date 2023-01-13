//O sistema Fila de atendimento que você implementou no exercício 04 desta lista, precisará passar por novas implementações visando melhorias. Sendo assim, faça uma nova implementação com as seguintes regras.

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

//o nome do paciente.
const paciente = 'Pedro';

//Tamanho da lista
let tamanhoDaFila = pacientes.length;

//a) Crie uma função agendarPaciente que será exclusiva para agendamentos. Ela deverá receber como argumento da função o array de pacientes e o paciente a ser agendado. A função deverá adicionar ao final da fila o paciente informado como argumento.
function agendarPaciente(listaNomes, nome) {
    let indice = 0;
    for (let paciente of listaNomes) {
        if (paciente == nome) {
            listaNomes.splice(indice, (indice == 0 ? indice + 1 : indice));
            listaNomes.splice(tamanhoDaFila, "", nome);
        }
        indice++
    }

    //Obs.: Cada função deverá imprimir a lista atualizada, separada por vírgulas.
    listaNomes = listaNomes.join(", ");
    console.log(listaNomes)
}

agendarPaciente(pacientes, paciente)

//b) Crie uma função atenderPaciente que será exclusiva para atendimentos. Ela deverá receber o array de pacientes e sua função é remover o paciente atendido da fila. Os pacientes são atendidos por ordem na fila.

function atenderPaciente(listaNomes) {
    listaNomes.shift();

    //Obs.: Cada função deverá imprimir a lista atualizada, separada por vírgulas.
    listaNomes = listaNomes.join(", ");
    console.log(listaNomes)
}

atenderPaciente(pacientes)

//c) Crie uma função cancelarAtendimento que receberá o array de pacientes e o paciente que deseja cancelar o antendimento. A função deverá remover o paciente que deseja cancelar da fila de atendimento.

function cancelarAtendimento(listaNomes, nome) {
    let indice = 0;
    for (let paciente of listaNomes) {
        if (paciente == nome) {
            listaNomes.splice(indice, (indice == 0 ? indice + 1 : indice));
        }
        indice++
    }

    //Obs.: Cada função deverá imprimir a lista atualizada, separada por vírgulas.
    listaNomes = listaNomes.join(", ");
    console.log(listaNomes)
}

cancelarAtendimento(pacientes, paciente)