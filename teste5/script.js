/*
const addTarefa = document.querySelector('.add-tarefa');
const inputTarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');

addTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        criaTarefa(inputTarefa.value)
    }
})

function criaTarefa(textoInput) {
    console.log(textoInput);
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaTarefa();
    criaApagar(li);
    salvaTarefa();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaTarefa() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'APAGAR TAREFA')
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(evento) {
    el = evento.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
}
recuperaTarefa();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const addTarefa = document.querySelector('.add-tarefa');
const inputTarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');

addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return console.log('ERRO');
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput) {
    console.log(textoInput);
    const li = criaLi();
    tarefas.appendChild(li);
    li.innerHTML = textoInput;
    limpaInput();
    criaApagar(li);
    salvaTarefa();
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
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('title', 'Apagar tarefa');
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(evento) {
    el = evento.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
    }
    
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaTarefas.push(textoTarefa);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
}
recuperaTarefa();
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const addTarefa = document.querySelector('.add-tarefa');
const inputTarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');

addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    criaApagar(li);
    limpaInput();
    salvaTarefa();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(evento) {
    el = evento.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const listaTarefas = localStorage.getItem('tarefas');
    const tarefas = JSON.parse(listaTarefas);

    for (let tarefa of tarefas) {
        criaTarefa(tarefa);
    }

}
recuperaTarefa();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(textoInput) {
    const li = criaLi()
    tarefas.appendChild(li);
    li.innerHTML = textoInput;
    limpaInput();
    criaApagar(li);
    salvaTarefa();
}

addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return console.log('ERRO');
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('title', 'Apagar tarefa')
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(evento) {
    el = evento.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const liTarefas = localStorage.getItem('tarefas');
    const tarefas = JSON.parse(liTarefas);

    for (let tarefa of tarefas) {
        criaTarefa(tarefa);
    }
}
recuperaTarefa();
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

addTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return console.log('ERRO')
    criaTarefa(inputTarefa.value);
    
})

document.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return console.log('ERRO')
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput) {
    const li = criaLi()
    tarefas.appendChild(li);
    li.innerHTML = textoInput;
    criaApagar(li);
    limpaInput();
    salvaTarefa()
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(evento) {
    const el = evento.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const tarefas = localStorage.getItem('tarefas');
    const textoTarefa = JSON.parse(tarefas);

    for (let tarefa of textoTarefa) {
        criaTarefa(tarefa);
    }

}
recuperaTarefa();
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
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
    criaApagar(li);
    salvaTarefa();
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

document.addEventListener('click', function(evento) {
    el = evento.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const listaTarefas = localStorage.getItem('tarefas');
    const tarefas = JSON.parse(listaTarefas);

    for (let tarefa of tarefas) {
        criaTarefa(tarefa);
    }
}
recuperaTarefa();
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
    salvaTarefa();
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
        salvaTarefa();
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefa() {
    const liTarefas = localStorage.getItem('tarefas');
    const tarefas = JSON.parse(liTarefas);

    for (let tarefa of tarefas) {
        criaTarefa(tarefa);
    }
}
recuperaTarefa();