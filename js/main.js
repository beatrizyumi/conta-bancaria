$(document).ready(function() {

    var saldo = 100;
    var saldoPoupanca = 0;
    var valor;

    $('.saldo').text(saldo.toLocaleString('currency', {style: 'currency', currency: 'BRL'}));
    $('.saldo-poupanca').text(saldoPoupanca.toLocaleString('currency', {style: 'currency', currency: 'BRL'}));

    function trocaClasse(elemento, adicionar, retirar) {
        $(elemento).addClass(adicionar);
        $(elemento).removeClass(retirar);
    }

    function validaErro() {
        if (isNaN(parseFloat($('.quantia').val()))) {
            alert('Valor invalido. Incluir apenas numeros');
            valor = 0;
        } else {
            valor = parseFloat($('.quantia').val())
        }
    }

    function trocaSaldo() {
        $('.saldo').text(saldo.toLocaleString('currency', {style: 'currency', currency: 'BRL'}));
        $('.historico').append('<li>' + saldo.toLocaleString('currency', {style: 'currency', currency: 'BRL'}) + '</li>');        
    }

    function trocaSaldoPoupanca() {
        $('.saldo-poupanca').text(saldoPoupanca.toLocaleString('currency', {style: 'currency', currency: 'BRL'}));
        $('.historico-poupanca').append('<li>' + saldoPoupanca.toLocaleString('currency', {style: 'currency', currency: 'BRL'}) + '</li>');
    }

    $('.depositar').on('click', function() {
        validaErro();
        var botao = $(this).text().match('Poup')
        console.log($(this));
        console.log(botao);
        if (botao != null && botao.length == 1){
            saldoPoupanca = saldoPoupanca + valor;
            trocaClasse('.saldo-poupanca', 'verde', 'vermelho');
            trocaSaldoPoupanca();
        } else {
            saldo = saldo + valor;
            trocaClasse('.saldo', 'verde', 'vermelho');
            trocaSaldo();
        };
    });

    $('.sacar').on('click', function() {
        validaErro();
        var botao = $(this).text().match('Poup')
        console.log($(this));
        console.log(botao);
        if (botao != null && botao.length == 1) {
            if (saldoPoupanca < valor) {
                alert('Operação indevida, saldo insuficiente');
            } else if (saldoPoupanca == valor) {
                saldoPoupanca = saldoPoupanca - valor;
                trocaClasse('.saldo-poupanca', 'vermelho', 'verde');
                trocaSaldoPoupanca();
                alert('Voce está pobre :(');
            } else {
                saldoPoupanca = saldoPoupanca - valor;
                trocaClasse('.saldo-poupanca', 'vermelho', 'verde');
                trocaSaldoPoupanca();
            };
        }
        else {
            if(saldo < valor) {
                alert('Operação indevida, saldo insuficiente');
            } else if (saldo == valor) {
                saldo = saldo - valor;
                alert('Voce está pobre :(');
                trocaClasse('.saldo', 'vermelho', 'verde');
                trocaSaldo();
            } else {
                saldo = saldo - valor;
                trocaClasse('.saldo', 'vermelho', 'verde');
                trocaSaldo();
            };
        };       
    });
});