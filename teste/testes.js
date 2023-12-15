const data = new Date();
const dia = data.getDate();
const hora = data.getHours();
const minuto = data.getMinutes();
let segundo = data.getSeconds();
mes = data.getMonth()+1;
ano = data.getFullYear();

function zeroEsq(num) {
    if (num <= 9) {
        return `0${num}`;
    };
};

console.log(ano, mes, dia, hora, minuto, segundo);


/////////////////////
const raizQ = function(n) {
    return n ** 0.5;
}
console.log(raizQ(9));
/////////////// ARROW FUNCTION 1 LINHA
const raiz = n => n ** 0.5;
console.log(raiz(81));
//////////////////

function soma(x=1, y=2) {
    return x+y;
}
console.log(soma(5));


const pessoa = {
    nome: 'Evandro',
    sobrenome: 'Lougue',
    idade: 32,

    falaOi() {
        console.log(`${this.nome} ${this.sobrenome} de ${this.idade} anos disse OLÁ!`)
    }
};

pessoa.falaOi(); 

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

pessoa1 = criaPessoa('Leandro', 'Lougue', 41);
console.log(pessoa1)

pessoa2 = {...pessoa1};
pessoa1.nome = 'Evandroooooo'; 
console.log(pessoa1, pessoa2);