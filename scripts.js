function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '−':
            return substract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return null;
    }
}

const smallText = document.querySelector('#small_text');
smallText.innerText = ".";

const bigText = document.querySelector('#big_text');

let small = '';
let op = '';
let big = '';

let op_pressed = false;

function userClicked(e) {
    let key = e.srcElement.innerText;
    switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (bigText.innerText == '0' || op_pressed) {
                big = key;
                op_pressed = false;
            } else {
                big += key;
            }
            bigText.innerText = big;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            op_pressed = true;
            small = big;
            op = key;
            smallText.innerText = small + op;
            break;
        case '=':
            if (big == '0' && op == '÷') {
                break;
            }
            if (op != '') {
                big = operate(op, small, big);
                bigText.innerText = big.toFixed(2);
            }
            break;
        case 'clear':
            small = '';
            op = '';
            big = '';
            op_pressed = false;
            smallText.innerText = '.';
            bigText.innerText = '0';
    }
}

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', userClicked));
