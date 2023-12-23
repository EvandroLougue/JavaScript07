/*

function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            })
        },
        pressionaEnter() {
            document.addEventListener('keypress', (evento) => {
                if (evento.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta ilegível');
                return;
            }
        }

    };
}

const calculadora = criaCalculadora();

calculadora.inicia();

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            console.log('INICIEI');
            this.cliqueBotoes();
            this.pressEnter();
        },
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch {
                alert('Conta ilegível');
                return;
            }
        },
        pressEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            console.log('INICIEI');
            this.cliqueBotoes();
            this.pressEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            })
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
            } catch (erro) {
                alert('Conta ilegível');
            }
        },
        pressEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            console.log('Iniciei');
            this.cliqueBotoes();
            this.pressEnter();
        },
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                
                if (el.classList.contains('btn-num')) {
                    this.addNumero(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.limpaTudo();
                }
                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            })
        },
        addNumero(valor) {
            this.display.value += valor;
        },
        limpaTudo() {
            this.display.value = '';
        },
        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return; 
                }
                this.display.value = conta;

                
                } catch (erro) {
                    alert('Conta ilegível')
                }
            },

        pressEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            console.log('Iniciei');
            this.cliqueBotoes();
            this.pressEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.limpaDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            })
        },






        pressEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        btnParaDisplay(valor) {
            this.display.value += valor
        },
        limpaDisplay() {
            this.display.value = '';
        },
        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;


            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    rerturn;
                } 
                this.display.value = conta;
            } catch (erro) {
                alert('Conta ilegível')
                return;
            }


        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            console.log('INICIEI');
            this.cliqueBotao();
            this.pressEnter();
        },
        cliqueBotao() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.btnClear();
                }
                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            })
        },
        btnDisplay(valor) {
            this.display.value += valor;
        },
        btnClear() {
            this.display.value = '';
        },
        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch (erro) {
                alert('Conta ilegível');
                return;
            }
        },
        pressEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();