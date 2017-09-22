var saldo = parseFloat(document.querySelector('.saldo').innerText);
var valor = parseFloat(document.querySelector('.quantia').value);

function retirada() {
    valor = parseFloat(document.querySelector('.quantia').value);
	if (valor > saldo) {
        console.log('Nao e permitido');
        console.log('Seu saldo e ' + saldo);
    } else if (valor == saldo) {
        console.log('Permitido, POBRE!');
        saldo = saldo - valor;
        document.querySelector('.saldo').innerText = saldo;
        console.log('Seu saldo e ' + saldo);
    } else {
        console.log('Permitido');
        saldo = saldo - valor;
        document.querySelector('.saldo').innerText = saldo;
        console.log('Seu saldo e ' + saldo);
    }
}

function deposito() {
    valor = parseFloat(document.querySelector('.quantia').value);
	saldo = saldo + valor;
    document.querySelector('.saldo').innerText = saldo;
	console.log('Deposito realizado com sucesso');
	console.log('Seu saldo atual e de ' + saldo);
}

document.querySelector('.depositar').addEventListener('click', deposito);

document.querySelector('.sacar').addEventListener('click', retirada);
