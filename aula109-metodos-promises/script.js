function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caracter inválido');
                return;
            }
            resolve(msg.toLocaleUpperCase() + ' - Passei na promise.');
            return;
        }, tempo);
    });
}

// Promise.all / Promise.race / Promise.resolve / Promise.reject

const promises = [
    //'Primeiro valor',
    espera('Promise 1', rand(1, 3)),
    espera('Promise 2', rand(1, 3)),
    espera('Promise 3', rand(1, 3)),
    espera(1, rand(1, 3)),
    //'Último valor' 
]

Promise.race(promises).then(function(valor) {
    console.log(valor);
}).catch(function (erro) {
    console.log('CAI NO ERRO: ', erro);
})

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em CACHE');
    } else {
        return espera('Baixando a página. Aguarde...', 3000)
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => {
    console.log('ERRO CATCH', e)
});