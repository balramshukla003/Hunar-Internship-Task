// script.js
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.calculator-input');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                input.value = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                    input.value = currentInput;
                    resultDisplayed = true;
                } catch {
                    input.value = 'Error';
                    currentInput = '';
                }
            } else {
                if (resultDisplayed && !isNaN(value)) {
                    currentInput = value;
                    resultDisplayed = false;
                } else {
                    currentInput += value;
                }
                input.value = currentInput;
            }
        });
    });
});
