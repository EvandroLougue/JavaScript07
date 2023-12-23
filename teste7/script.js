function Calculadora() {
    display = document.querySelector('.display');

    this.inicia = () => {
        getClick();
        getEnter();
    };

    getClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) clickDisplay(el.innerText);
            if (el.classList.contains('btn-clear'))  clearAll();
            if (el.classList.contains('btn-del')) delOne();
            if (el.classList.contains('btn-eq')) realizaConta();
            display.focus();
        })
    };
    clickDisplay = valor => display.value += valor;
    clearAll = () => display.value = '';
    delOne = () => display.value = display.value.slice(0, -1);
    realizaConta = () => {
        let conta = display.value
        try {

        conta = eval(conta);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
        display.value = conta;
        } catch {
            alert('Conta ilegível');
            return;
        }
        
    };
    getEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        })
    }

}

const calculadora = new Calculadora();
calculadora.inicia();