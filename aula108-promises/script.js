function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Caracteres inválidos.');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera('Conectando base de dados...', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return espera('Fazendo autenticação...', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return espera(1111, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return console.log('Conectado')
}).catch(e => {
    console.log('CATCH ERROR:', e);
});





espera('frase 2', rand(1, 3));
espera('frase 3', rand(1, 3));