let listaDeTarefas = []


// Função para adcionar tarefas à lista
function lista() {
    const tarefa = prompt("Adicione uma tarefa à sua lista")
    if (tarefa != undefined){
        listaDeTarefas.push(tarefa)
    } else {
        return
    }
while (confirm("Deseja adicionar outra?") == true) {
    listaDeTarefas.push(prompt("Adicione a nova tarefa"))
}
return listaDeTarefas
}

// Função para buscar tarefas através do ID
function buscar() {
    let idTarefa = prompt("Digite o ID da tarefa que você deseja buscar")
    if(idTarefa >= 0 && idTarefa < listaDeTarefas.length && idTarefa != undefined) {
    alert("Tarefa solicitada: " +listaDeTarefas[idTarefa])
    } else {
        alert("ID inválido")
    }
    
}

// Função para editar tarefa
function editar() {
    let itemEdit = prompt("Que tarefa você deseja editar?")
    if(itemEdit != undefined && itemEdit.length != 0) {
        let listaEditada = listaDeTarefas.filter((item) => item != itemEdit)
        let itemEditado = prompt("Qual o novo nome da tarefa?")
        listaEditada.push(itemEditado)
        return listaDeTarefas = listaEditada
    } else {
        return alert("Essa tarefa não consta na sua lista");
    }
}

// Função que remove tarefas da lista atavés da posição
function remover() {
    const itemParaRemover = prompt("Digite a posição da tarefa a ser excluída")
    if (itemParaRemover < listaDeTarefas.length && itemParaRemover >= 0 && itemParaRemover != undefined) {
    listaDeTarefas.splice(itemParaRemover, 1)
    alert("Ítem removido com sucesso")
    } else if (itemParaRemover){
        alert("Essa posição não é válida")
    }
    return listaDeTarefas
}

// Função para mostrar lista de tarefas
function listar() {
    alert(listaDeTarefas)
}