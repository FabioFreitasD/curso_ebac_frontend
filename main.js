$(document).ready(function() {
    $('#CPF').mask('000.000.000-00', {
            placeholder:'000.000.000-00'
        });
        $('#telefone').mask('(00) 00000-0000');
        $('#CEP').mask('00000-000');
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            CPF: {
                required: true
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor digite o nome completo!',
            email: 'Por favor digite um e-mail valido!',
            telefone:'Por favor digite seu número de celular!',
            CPF:'Este campo é obrigatorio.',
            endereço:'Este campo é obrigatorio.',
            CEP:'Este campo é obrigatorio.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    });
});
