const display = document.querySelector('#display');
const statement = document.querySelector('#statement');
const num0 = document.querySelector('#num0');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const dot = document.querySelector('#numdot');
const clear = document.querySelector('#clear');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const div = document.querySelector('#divide');
const equals = document.querySelector('#equals');

//add digits to display on click
num0.onclick = () => display.textContent += 0;
num1.onclick = () => display.textContent += 1;
num2.onclick = () => display.textContent += 2;
num3.onclick = () => display.textContent += 3;
num4.onclick = () => display.textContent += 4;
num5.onclick = () => display.textContent += 5;
num6.onclick = () => display.textContent += 6;
num7.onclick = () => display.textContent += 7;
num8.onclick = () => display.textContent += 8;
num9.onclick = () => display.textContent += 9;
dot.addEventListener('click', () => {
    if (display.textContent.indexOf('.') == -1) {
        display.textContent += '.';
    }
}) 

clear.addEventListener('click', () => {
    display.textContent = '';
    statement.textContent = '';
    a = undefined;
    b = undefined;
})

let a;
let b;
plus.addEventListener('click', () => {
    if (statement.textContent.indexOf('=') != -1) {
        statement.textContent = '';
    }
    statement.textContent += display.textContent + ' + ';
       
    if (a || a == 0){
        b = display.textContent;
        display.textContent = operate(operator, a, b);
        operator = '+';
        a = display.textContent;
        display.textContent = '';
    } else {
        a = display.textContent;
        display.textContent = '';
        operator = '+';
    }
});
minus.addEventListener('click', () => {
    if (statement.textContent.indexOf('=') != -1) {
        statement.textContent = '';
    }
    statement.textContent += display.textContent + ' - ';
        
    if (a || a == 0){
        b = display.textContent;
        display.textContent = operate(operator, a, b);
        operator = '-';
        a = display.textContent;
        display.textContent = '';
    } else {
        a = display.textContent;
        display.textContent = '';
        operator = '-';
    }    
});
times.addEventListener('click', () => {
    if (statement.textContent.indexOf('=') != -1) {
        statement.textContent = '';
    }
    statement.textContent += display.textContent + ' x ';
    
    if (a || a == 0){ 
        b = display.textContent;
        display.textContent = operate(operator, a, b);
        operator = '*';
        a = display.textContent;
        display.textContent = '';
    } else {
        a = display.textContent;
        display.textContent = '';
        operator = '*';
    }    
});
div.addEventListener('click', () => {
    if (statement.textContent.indexOf('=') != -1) {
        statement.textContent = '';
    }
    statement.textContent += display.textContent + ' / ';
    
    if (a || a == 0){
        b = display.textContent;
        display.textContent = operate(operator, a, b);
        operator = '/';
        a = display.textContent;
        display.textContent = '';
    } else {
        a = display.textContent;
        display.textContent = '';
        operator = '/';
    }    
});
equals.addEventListener('click', () => {
    statement.textContent += display.textContent;
    b = display.textContent;
    if (operator == '/' && b == 0){
        display.textContent = 'Error';
    } else {
        display.textContent = Math.round((operate(operator, a, b) + Number.EPSILON) * 100) / 100;
        statement.textContent += ' = ' + display.textContent;
        a = undefined;
        b = undefined;
    }
})

function operate(operator, a, b){
    
    switch (operator) {
        case '+':
            return +a + +b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
}