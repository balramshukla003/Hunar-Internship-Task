// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('digit')) {
            inputDigit(button.textContent);
        } else if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'equals') {
            evaluate();
        } else {
            inputOperator(button.textContent);
        }
        updateDisplay();
    });
});

function inputDigit(digit) {
    if (secondOperand) {
        displayValue = digit;
        secondOperand = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator && secondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(firstOperand, inputValue, operator);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }

    secondOperand = true;
    operator = nextOperator;
}

function performCalculation(first, second, operator) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return second;
    }
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
}

function evaluate() {
    if (operator && secondOperand) {
        const inputValue = parseFloat(displayValue);
        displayValue = `${performCalculation(firstOperand, inputValue, operator)}`;
        firstOperand = null;
        secondOperand = false;
        operator = null;
    }
}

function updateDisplay() {
    display.textContent = displayValue;
}
