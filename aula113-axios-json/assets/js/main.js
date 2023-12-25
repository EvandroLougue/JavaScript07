fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => loadPageElem(json)); 

function loadPageElem(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}