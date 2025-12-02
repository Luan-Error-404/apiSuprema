function validaNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s-']+$/; // Expressão Diabólica
    const isValid = regexNome.test(nome) && nome.length > 2;
    return isValid;
}

function validaTelefone(telefone) {
    const regexTelefone = /^\([1-9]{2}\)[0-9]{5}\-[0-9]{4}$/;
    const isValid = regexTelefone.test(telefone);
    return isValid;
}

function validaEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regexEmail.test(email);
    return isValid;
}

export function validaContato(nome, telefone, email) {
    const nomeValido = validaNome(nome);
    const telefoneValido = validaTelefone(telefone);
    const emailValido = validaEmail(email);

    const contatoValido = nomeValido && telefoneValido && emailValido;

    if(contatoValido) {
        return {status: true, mensagem: ''};
    } else if(!nomeValido) {
        return {status: false, mensagem: 'Nome Inválido'};
    } else if(!telefoneValido) {
        return {status: false, mensagem: 'Telefone Inválido'};
    } else if(!emailValido) {
        return {status: false, mensagem: 'Email Inválido'};
    }
}