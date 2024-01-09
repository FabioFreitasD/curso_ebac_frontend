$('form').on('submit', function(e) {
    e.preventDefault();
    const novaAtividade = $('#nova-atividade').val();
    const novoItem = $('<li></li>');
    $(`<li>
        <p style="list-style-type: circle">${novaAtividade}</p>
        </li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-atividade').val('');
});

$('ul').on('click', 'li', function() {
    $(this).toggleClass('finalizado');
});