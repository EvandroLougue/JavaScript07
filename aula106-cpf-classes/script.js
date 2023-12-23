/*  705.484.450-52       070.987.720-03


7x 0x 5x    4x 8x 4x    4x 5x 0x    
10 9  8     7  6  5     4  3  2
70 0  40   28  48 20    16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito);
Se o dígito for maior que 9, então considera 0

7x 0x 5x    4x 8x 4x    4x 5x 0x 5x
11 10 9     8  7  6     5  4  3  2
77  0 45    32 56 24    20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro dígito)
Se o dígito for maior que 9, então considera 0
*/
/*
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {       // cpfLimpo é uma variável criada para guardar o valor do new ValidaCPF
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')      // expressão regular para limpar tudo que não for número
        });
    }
isSequence() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;      // se for com números todos iguais, recebe uma falha    
}
geraNovoCPF() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfParcial);
    const digito2 = this.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
}
geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length +1;

    for (let stringNumerica of cpfParcial) {
        //console.log(stringNumerica, reverso);
        total += reverso * Number(stringNumerica) 
        reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
}
    valida() {
        if (!this.cpfLimpo) return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.isSequence()) return false;
        this.geraNovoCPF();

        return this.novoCPF === this.cpfLimpo;
    }
}

let validacpf = new ValidaCPF('070.987.720-03');

if (validacpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ValidaCPF {
    constructor(cpfRecebido) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: true,
            value: cpfRecebido.replace(/\D+/g, '')
        })
    }

    valida() {
        if (this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequency()) return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCPF = cpfParcial + digito1 + digito2;

        return novoCPF === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let contador = cpfArray.length + 1;
        let total = cpfArray.reduce((ac, val) => {
            ac += contador * val;
            contador--;
            return ac;
        }, 0)
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequency() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

}

const cpf = new ValidaCPF('024.675.170-39');

if (cpf.valida()) {
    console.log('CPF VÁLIDO');
} else {
   console.log('CPF Inválido');
}