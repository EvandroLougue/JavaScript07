function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAÍ NO ERRO de caracter inválido');
                return;
            }
            resolve(msg.toLocaleUpperCase() + ' - Passei na promise.');
            return;
        }, tempo);
    });
}
/*
espera('Fase 1', rand(1, 3)).then(valor => {
    console.log(valor);
    return espera('Fase 2', rand(1, 2)).then(evento => {
        console.log(evento);
        return espera('Fase 3', rand(1, 3)).then(terceiro => {
            console.log(terceiro);
            return espera('Fase 4', rand(1, 3))
        })
    })
}).catch(erro => {
    console.log(erro);
})
*/

async function executa() {

    try{
   const fase1 = espera('Fase 1', 1000);
   console.log(fase1, ' concluida');

   setTimeout(function() {
    console.log('Essa promise estava pendente: ', fase1)
   }, 1100)

   const fase2 = await espera('Fase 2', rand(1, 3));
   console.log(fase2);
   const fase3 = await espera('Fase 3', rand(1, 3));
   console.log(fase3);
   const fase4 = await espera('Fase 4', rand(1, 3));
   console.log(fase4);
   const fase5 = await espera('Fase 5', rand(1, 3));
   console.log(fase5, 'CONCLUIDA');
   console.log('TERMINAMOS AS FASES');
   } catch (e) {
    console.log(e);
   }
}

executa();