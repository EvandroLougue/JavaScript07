/*
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
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class ValidaFormulario {
    constructor () {
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
        const checkedFields = this.checkFields();
        const senhasValidas = this.validPassword();

        if (checkedFields && senhasValidas) {
            alert('FORMULÁRIO ENVIADO COM SUCESSO!');
            this.formulario.submit();
        }
    }
    checkFields() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode estar em branco.`);
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.ValidaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('user')) {
                if (!this.validUser(campo)) valid = false;
            }
        }
        return valid;
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    ValidaCPF(campo) {
       const cpf = new ValidaCPF(campo.value);

       if (!cpf.valida()) {
        this.criaErro(campo, 'CPF Inválido.');
        return false;
       } else {
        return true;
       }
    }

    validUser(campo) {
        const user = campo.value;
        let valid = true;
        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, `Nome de usuário deve conter entre 3 e 12 caracteres.`);
            valid = false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {       // expressão regular para APENAS LETRAS E NÚMEROS
            this.criaErro(campo, 'Nome de usuário deve conter apenas letras e números.')
            valid = false;
        }
        return valid;
    }

    validPassword() {
        let valid = true;
        const senha1 = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');
        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.criaErro(senha1, 'Senha precisa conter entre 6 e 12 caracteres.');
            valid = false;
        }
        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, 'Senhas não conferem.')
            this.criaErro(senha2, 'Senhas não conferem.')
            valid = false;
        }
        return valid;
    }

}

const formulario = new ValidaFormulario();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkedFields = this.checkField();
        const senhasValidas = this.validPassword();

        if (checkedFields && senhasValidas) {
            alert('FORMULÁRIO ENVIADO!');
            this.formulario.submit();
        }
    }

    checkField() {
        let valid = true;
        for (let textError of this.formulario.querySelectorAll('.error-text')) {
            textError.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' precisa estar preenchido.`)
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false; 
            }
            if (campo.classList.contains('user')) {
                if (!this.validUser(campo)) valid = false;
            }
        }
        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF Inválido.')
        }
        return true;
    }
    validUser(campo) {
        const user = campo.value;
        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuário deve conter entre 3 e 12 caracteres');
            return false;
        }
        return true;
    }
    validPassword() {
        let valid = true;
        const senha1 = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha1.length < 6 || senha1.length > 12) {
            this.criaErro(senha1, 'Senha deve conter entre 6 e 12 caracteres.');
            valid = false;
        }
        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, 'Senhas não conferem.');
            this.criaErro(senha2, 'Senhas não conferem.');
            valid = false;
        }
        return valid;
    }
}

const valida = new ValidaFormulario();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkedFields = this.checkField();
        const validPassword = this.validaSenha();

        if (checkedFields && validPassword) {
            alert('FORMULÁRIO ENVIADO COM SUCESSO!')
        }
    }
    checkField() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode estar em branco.`);
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('user')) {
                if (!this.validUser(campo)) valid = false;
            }
        }
        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        campo.insertAdjacentElement('afterend', div);
        div.classList.add('error-text');
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
        }
        return cpf.valida();
    }
    validUser(campo) {
        const user = campo.value;
        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Nome de usuário deve conter entre 3 e 12 caracteres.');
            return;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário deve conter apenas letras e números.');
            return;
        }
        return true;
    }
    validaSenha() {
        const senha1 = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.criaErro(senha1, 'Senha deve conter entre 6 e 12 caracteres.');
        }
        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, 'Senhas não conferem.');
            this.criaErro(senha2, 'Senhas não conferem.');
        }
        return true;
    }
}

const valida = new ValidaFormulario();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkedFields = this.checkField();
        const validPassword = this.validaSenha();

        if (checkedFields && validPassword) {
            alert('FORMULÁRIO ENVIADO COM SUCESSO!')
        }
    }

    checkField() {
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        let valid = true;

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode estar em branco.`);
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('user')) {
                if (!this.validaUser(campo)) valid = false;
            }   
        }
        return valid;
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        campo.insertAdjacentElement('afterend', div);
        div.classList.add('error-text');
        div.innerText = msg;

    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false;
        }
        return cpf.valida();
    }
    validaUser(campo) {
        const user = campo.value;
        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Nome de usuário deve conter entre 3 e 12 caracteres.');
            return;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário deve conter apenas letras e números.');
            return;
        }
        return true;
    }
    validaSenha() {
        const senha1 = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.criaErro(senha1, 'Senha deve conter entre 6 e 12 caracteres.');
            return false;
        }
        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, 'Senhas não conferem.');
            this.criaErro(senha2, 'Senhas não conferem.');
            return false;
        }
        return true;
    }
}

const validar = new ValidaFormulario();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); 
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const checkedFields = this.checkField();
        const validPassword = this.validaSenha();

        if (checkedFields && validPassword) {
            alert('FORMULÁRIO ENVIADO!');
        }
    }

    checkField() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode ficar em branco.`);
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('user')) {
                if (!this.validaUser(campo)) valid = false;
            }
        }
        return valid;
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.classList.add('error-text');
        div.innerText = msg;
        campo.insertAdjacentElement('afterend', div);
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
        }
        return cpf.valida();
    }
    validaUser(campo) {
        const user = campo.value;
        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuário deve conter entre 3 e 12 dígitos.');
            return false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário deve conter apenas letras e números.');
            return false;
        }
        return true;
    }
    validaSenha() {
        const senha1 = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.criaErro(senha1, 'Senha deve conter entre 6 e 12 caracteres.');
            return false;
        }
        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, 'Senhas não conferem.');
            this.criaErro(senha2, 'Senhas não conferem.');
            return false;
        }
        return true;
    }
}

const valida = new ValidaFormulario();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const checkedFields = this.checkField();
        const validPassword = this.validaSenha();
        if (checkedFields && validPassword) {
            alert('FORMULÁRIO ENVIADO COM SUCESSO!')
        }
    }
    checkField() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode ficar em branco.`);
                valid = false;
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('user')) {
                if (!this.validaUser(campo)) valid = false;
            }
        }
        return valid;
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        div.innerText = msg;
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return cpf.valida();
    }
    validaUser(campo) {
        const user = campo.value; 

        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuário deve conter entre 3 e 12 caracteres.');
            return false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário deve conter apenas letras e números.');
            return false;
        }
        return true;
    }
    validaSenha() {
        const senha1 = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.criaErro(senha1, 'Senha deve conter entre 6 e 12 dígitos.');
            return false;
        }
        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, 'Senhas não conferem.');
            this.criaErro(senha2, 'Senhas não conferem.');
            return false;
        }
        return true;
    }
}

const valida = new ValidaFormulario();