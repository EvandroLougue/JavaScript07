const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

addTarefa.addEventListener('click', function() {
    
    if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return console.log('ERRO');
        criaTarefa(inputTarefa.value)
    }
})

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaApagar(li)
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaApagar(li) {
    li.innerHTML += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar'
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar tarefa')
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');



inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return console.log('ERRO');
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
    limpaInput();
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    tarefas.appendChild(li);
    li.innerHTML = textoInput;
    criaApagar(li);
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaApagar(li) {
    li.innerHTML += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apaque esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(evento) {
    el = evento.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})
*/