$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
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
                email:true
            }
        },
        messages: {
            nome: 'Por favor digite o nome completo',
            email: 'Por favor digite um e-mail valido',
            telefone:'Por favor digite seu número de telefone'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        InvalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    });
});
