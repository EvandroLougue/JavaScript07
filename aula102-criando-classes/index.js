class Pessoa {  // é um molde, assim como função construtora
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }
        
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}
/////////////////////// comparação com construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
};
Pessoa2.prototype.falar = function() {
    console.dir(`${this.nome} está falando.`);
}
const p2 = new Pessoa2('Leandro', 'Monteiro');
console.log(p2);
p2.falar();


// instanciar = criar objeto a partir de CLASS 
const p1 = new Pessoa('Evandro', 'Lougue');
console.dir(p1);