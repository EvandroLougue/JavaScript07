class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });

    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('Formulário não enviado')
        const camposValidos = this.checkFields();
        const senhasValidas = this.validaSenha();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado com sucesso!')
            this.formulario.submit();
        }
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;

            if (!campo.value) {
                this.criaErro(campo, `"${label}" não pode ficar em branco.`)
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('user')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    validaSenha() {
        let valid = true;
        const senha = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha deve ter entre 6 e 12 caracteres.')
            valid = false;
        }
        if (senha2.value !== senha.value) {
            this.criaErro(senha2, 'As senhas precisam ser exatamente iguais.')
            valid = false;
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres.')
            valid = false;
        } 
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário só deve conter letras e / ou números.')
            valid = false;
        } 

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');      // criando DIV a partir do próprio JS para exibir mensagem de erro nela
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);   // aqui é o código para inserir um elemento após o campo
    }
}

const valida = new ValidaFormulario();