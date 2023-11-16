function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(msg);
    }, tempo );   
    });
    
    
}

espera('frase 1', rand(1, 3));
espera('frase 2', rand(1, 3));
espera('frase 3', rand(1, 3));