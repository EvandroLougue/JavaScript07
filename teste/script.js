function meuEscopo() {
    const form = document.querySelector('.form');
    const pessoas = [];

    function recebeEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        const resultado = document.querySelector('#dados');
        pessoas.push({
            nome1: nome.value,
            sobrenome1: sobrenome.value,
            altura1: altura.value,
            peso1: peso.value
        })
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`

    }


    form.addEventListener('submit', recebeEvento);
}

meuEscopo();