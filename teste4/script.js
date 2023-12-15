function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    }, 1000)
}

document.addEventListener('click', function(evento) {
    const el = evento.target;
    console.log(el);

    if (el.classList.contains('iniciar')) {
       relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio(); 
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer); 
    }
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = criaSegundos(segundos);
    }
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    });
}

console.log(criaSegundos(1000));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function() {
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = criaSegundos(segundos);
})
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer; 


function iniciaRelogio() {
    timer = setInterval( function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function() {
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = criaSegundos(segundos)
})
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer; 

console.log(criaSegundos(segundos));

function iniciaRelogio() {
    timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = criaSegundos(segundos);
    }, 1000);
}



iniciar.addEventListener('click', function(evento) {
    relogio.classList.remove('pausado');
    clearInterval(timer)
    iniciaRelogio();
})

pausar.addEventListener('click', function(evento) {
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function(evento) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0; 
    relogio.innerHTML = criaSegundos(segundos);
})

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaSegundos(segundos) {
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(criaSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
        timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    }, 1000)
}


iniciar.addEventListener('click', function(evento) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    iniciaRelogio();
})

pausar.addEventListener('click', function(evento) {
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function(evento) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = criaSegundos(segundos);
})
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaSegundos(segundos) {
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    relogio.classList.remove('pausado');
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    }, 1000) 
}

document.addEventListener('click', function(e) {
    const el = e.target;



    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    if (el.classList.contains('iniciar')) {
        elogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio(); 
    }
});
*/