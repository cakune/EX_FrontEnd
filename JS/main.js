const form = document.getElementById('form-number');

function validarEnviar(campoB, campoA) {
    let resultado = campoB >= campoA
    return resultado;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    formValido = (validarEnviar(campoB, campoA)) 
    if (formValido) {
        alert ('Ação validada')

    } else { 
        alert ('Ação inválida. O valor no campo B deve ser maior que o valor do campo A');
    }
})

console.log(form);