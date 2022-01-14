const add = (intA, intB) => intA + intB;
const subtract = (intA, intB) => intA - intB;
const multiply = (intA, intB) => intA * intB;
const divide = (intA, intB) => intA / intB;
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('#calc-display');
const resetButton = document.querySelector('.reset');

let firstValue;
let secondValue;
let enteredOperator;

const displayNumber = input => {
    display.textContent += +input.srcElement.innerText;
    // operateValues = +display.textContent;
};

const storeFirstValue = () => {
    firstValue = +display.textContent;
}

const storeSecondValue = () => {
    storeSecondValue = +display.textContent;
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
};

const storeOperator = input =>{
    enteredOperator = input.srcElement.innerText;
};

const resetDisplay = () => {
    display.innerHTML = `<p id='calc-display'></p>`;
}

numberButtons.forEach(e =>{
    e.addEventListener('click', e =>{
        displayNumber(e);
        storeFirstValue(e);
    })
});

operatorButtons.forEach(e =>{
    e.addEventListener('click', e => {
        storeOperator(e);
        resetDisplay();
    });
})

resetButton.addEventListener('click', () =>{
    resetDisplay();
});


// displayNumber(display, 'hello');

// const testNumA = 1;
// const testNumB = 4;

// console.log(operate(testNumA, testNumB, '*'));

