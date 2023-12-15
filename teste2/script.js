function calculaIMC() {

    const form = document.querySelector('.form');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const alturaInput = form.querySelector('#altura');
        const pesoInput = form.querySelector('#peso');
        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);
        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `Seu IMC é ${imc}. ${nivelImc}`;



        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }
        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }
        console.log('Cheguei aqui');

        function getImc(peso, altura) {
            const imc = peso / (altura ** 2);
            return imc.toFixed(2);
        };

        setResultado(msg, true);

        function getNivelImc(imc) {
            const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obseidade grau 1', 'Obseidade grau 2', 'Obseidade grau 3'];

            if (imc < 18.5) {
                return nivel[0];
            } else if (imc >= 18.5 && imc <= 24.9) {
                return nivel[1];
            } else if (imc >= 25 && imc <= 29.9) {
                return nivel[2];
            } else if (imc >= 30 && imc <= 34.9) {
                return nivel[3];
            } else if (imc >= 35 && imc <= 39.9) {
                return nivel[4];
            } else {
                return nivel[5];
            };
        }
    });
    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        
        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('paragrafo-erro');
        }


        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

}

calculaIMC();