function divisaoGrupos(nomes, tamanhoDoGrupo) {

    let indice = 0; //inicio da separação
    let agrupa = tamanhoDoGrupo; //final da separação
    let grupo = "";// Imprime grupo
    let qtdGrupos = Math.ceil(tamanhoArray / tamanhoDoGrupo);//Define a quantidade de grupos
    let numGrupo = 1;//Enumera os grupos

    //Enquanto numero de grupos for menor ou igual a quantidade de grupos
    while (numGrupo <= qtdGrupos) {
        //Se numero de grupos for igual ao numero de grupos
        if (numGrupo == qtdGrupos) {
            //Significa que esse será o ultimo grupo, então nesse caso utiliza-se o tamanho do array para limitar o corte do ultimo grupo.
            grupo = nomes.slice(indice, tamanhoArray);
            //Transforma o array em uma string e concatena tudo
            grupo = "Grupo " + numGrupo + ": " + grupo.join(", ") + ".";
            //Imprime conforme solicitado
            console.log(grupo);
            //Interrompe o while
            break;
        } else {
            //Do primeiro ao penultimo grupo, o limitador da fatia será agrupa
            grupo = nomes.slice(indice, agrupa);
            grupo = "Grupo " + numGrupo + ": " + grupo.join(", ") + ".";
            console.log(grupo);
            //Incremente no indice e no agrupa o equivalente ao tamanho do grupo para definir o novo corte
            indice += tamanhoDoGrupo;
            agrupa += tamanhoDoGrupo;
            //Incrementa a enumeração, ela será definida para o próximo grupo
            numGrupo++
        }
    }
};


const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
let tamanhoArray = nomes.length; //final da separação do ultimo grupo

divisaoGrupos(nomes, tamanhoDoGrupo)



