const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const numerador = Number(document.querySelector('#numerador').value);
    const denominador = Number(document.querySelector('#denominador').value);

    if (denominador === 0) {
        alert('Não é possível dividir por zero.');
    } else {
        const quociente = numerador / denominador;

        alert(`${numerador.toFixed(1)} dividido por ${denominador.toFixed(1)} é ${quociente.toFixed(1)}.`);
    }
});