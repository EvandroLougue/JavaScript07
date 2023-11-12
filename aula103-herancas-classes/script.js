class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log('Dispositivo já está ligado.');
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log('Dispositivo já está desligado.');
            return;
        }
        this.ligado = false;
    }
};
/*
const d1 = new DispositivoEletronico('Computador');
d1.ligar();
d1.ligar();
console.log(d1);
*/

class Computador extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);            // pegando dados através da superclass
        this.cor = cor;
        this.modelo = modelo;
    }
}

const c1 = new Computador('Notebook', 'Preto', 'Turbo');
console.log(c1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, marca, modelo) {
        super(nome);
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        console.log('Você ligou o seu smartphone.')
    }
    falaOi() {
        console.log('Oiiiiiii')
    }
}

const s1 = new Smartphone('Celular', 'Azul', 'Samsung', 'Galaxy S20');
s1.ligar();
s1.falaOi();
console.log(s1);
