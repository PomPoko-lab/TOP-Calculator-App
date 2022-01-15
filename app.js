const add = (intA, intB) => intA + intB;
const subtract = (intA, intB) => intA - intB;
const multiply = (intA, intB) => intA * intB;
const divide = (intA, intB) => intA / intB;
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const deleteButton = document.querySelector('.delete');
const decimalButton = document.querySelector('#decimal');
const display = document.querySelector('#calc-display');
const enteredDisplay = document.querySelector('#entered-display');
const resetButton = document.querySelector('.reset');
const flipButton = document.querySelector('#flip-sign');
const calculate = document.querySelector('#operate-all');
const percentButton = document.querySelector('#percentage');

let storedValue = null;
let calculateValue = null;
let enteredOperator;

const displayNumber = input => {
    display.textContent += +input.srcElement.innerText;
}

const storeValue = () => {
    storedValue = +display.textContent;
}

const operate = (intA, intB, operator) => {
    switch (operator) {
        case '+':
            return add(intA, intB);
            break;
        case '-':
            return subtract(intA, intB);
            break;
        case '*':
            return multiply(intA, intB);
            break;
        case '/':
            return divide(intA, intB);
            break;
    }
}

const storeOperator = input =>{
    enteredOperator = input.srcElement.innerText;
}

const resetDisplay = () => {
    display.innerHTML = `<p id='calc-display'></p>`;
}

const resetEnteredDisplay= () => {
    enteredDisplay.innerHTML = `<p id='entered-display'></p>`;
}

const resetAllDisplay = () => {
    display.innerHTML = `<p id='calc-display'></p>`;
    enteredDisplay.innerHTML = `<p id='entered-display'></p>`;
    storedValue = null;
    calculateValue = null;
}

const resetStoredValue = () => {
    storedValue = null;
}

const storeDisplay = () => {
    if (storedValue === undefined) {

    } else if (enteredOperator === '='){
        enteredDisplay.textContent += ` ${display.textContent} ${enteredOperator} ${storedValue}`;
    } else if (!(enteredOperator)) {
        enteredDisplay.textContent += ` ${display.textContent}`;
    } else {
        enteredDisplay.textContent += ` ${display.textContent} ${enteredOperator}`;
    }
}

const setDisplay = value => {
    display.textContent = value;
}

const doCalculation = () => {
    if (storedValue === null) {
        storeValue();
        } else if ((+display.textContent === 0 && enteredOperator === '*') || (+display.textContent === 0 && enteredOperator === '/')) {
            storedValue = operate(storedValue, 1, enteredOperator);
        } else {
            storedValue = operate(storedValue, +display.textContent, enteredOperator);
        }
}

const doValueFlip = () => {
    if (!display.textContent.includes('-')) {
        display.textContent = `-${display.textContent}`;
    } else {
        display.textContent = display.textContent.replace('-','')
    }

}

const addPercentage = () => {
    display.textContent = `${display.textContent / 100}`;
}

numberButtons.forEach(e =>{
    e.addEventListener('click', e =>{
        if (enteredDisplay.textContent.includes('=')){
            resetEnteredDisplay();
            resetStoredValue();
        }
        displayNumber(e);
    })
});

operatorButtons.forEach(e =>{
    e.addEventListener('click', e => {
        if (display.textContent) {
            storeOperator(e);
            storeDisplay();
            doCalculation();
            resetDisplay();
        }
    });
});

resetButton.addEventListener('click', () =>{
    resetAllDisplay();
});

calculate.addEventListener('click', e => {
    doCalculation();
    storeOperator(e);
    storeDisplay();
    resetDisplay();
});

deleteButton.addEventListener('click', () => {
    let x = display.textContent
    display.textContent = x.slice(0, -1);
});

decimalButton.addEventListener('click', () => {
    if (display.textContent.includes('.')) {

    } else {
        display.textContent += '.';''
    }
});

flipButton.addEventListener('click', doValueFlip);

percentButton.addEventListener('click', addPercentage);