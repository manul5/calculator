let countOperator = false
let countPoint = 0
let firstNumber = 0
let secondNumber = 0
let operator = ''
let opIndex
const ops = ['/', '*', '+', '-', '%']

function add(a, b) {
    return a + b
}

function res(a, b) {
    return a - b
}

function mul(a,b) {
    return a * b
}

function div(a,b) {
    if (b == 0) 
        return 0
    return a / b
}

function per(a,b) {
    return a * (b / 100)
}

function countDecimals(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

function operate() {
    const display = document.querySelector('.display')
    secondNumber = Number(display.innerText.slice(opIndex+1, display.innerText.length))
    countOperator = false
    let resultado = 0
    if(operator == '+') {
        resultado = Number(add(firstNumber, secondNumber))
    } else if (operator == '-') {
        resultado = Number(res(firstNumber, secondNumber))
    } else if (operator == '*') {
        resultado = Number(mul(firstNumber, secondNumber))
    } else if (operator == '/') {
        resultado = Number(div(firstNumber, secondNumber))
    } else if (operator == '%') {
        resultado = Number(per(firstNumber, secondNumber))
    }

    

    let decimals = countDecimals(resultado)

    console.log(resultado)
    console.log(decimals)

    if (decimals != 0) {
        countPoint = 1
    }

    if (decimals <= 4) {
        display.textContent = resultado
    } else {
        display.textContent = parseFloat(resultado).toFixed(4)
    }
    
    
    
}

function initNumbers() {
    const numbers = document.querySelectorAll('.number')
    const display = document.querySelector('.display')
    numbers.forEach(element => {
        element.addEventListener('click', () => {
            if(display.innerText.length < 11 && element.innerText == '00') {
                display.textContent += element.textContent
            }
            if(display.innerText.length < 12 && element.innerText != '00') {
                display.textContent += element.textContent
            } else {
                display.textContent += ''
            }
        })
    });
}

function initAC() {
    const ac = document.querySelector('#ac')
    const display = document.querySelector('.display')
    ac.addEventListener('click', () => {
        countOperator = false
        countPoint = 0
        display.textContent = ''
    })
}

function initDel() {
    const del = document.querySelector('.del')
    const display = document.querySelector('.display')

    del.addEventListener('click', () => {
        let lastChar = display.innerText.slice(display.innerText.length-1, display.innerText.length)
        if (ops.includes(lastChar)) {
            countOperator = false
        } 
        if (lastChar == '.') {
            countPoint--
        }
        display.textContent = display.innerText.slice(0, display.innerText.length-1)
    })
    
}

function initOp() {
    const op = document.querySelectorAll('.op')
    const display = document.querySelector('.display')
    op.forEach(element => {
        element.addEventListener('click', () => {
            if (!countOperator && display.innerText.length < 12) {
                firstNumber = Number(display.innerText)
                operator = element.innerText
                opIndex = display.innerText.length
                display.textContent += element.textContent
                countOperator = true
            } else if(!countOperator && display.innerText.length < 12) {
                operate()
            } 
            
        })
    });
}

function initEqual() {
    const equal = document.querySelector('#equal')
    
    equal.addEventListener('click', operate)
}

function initPoint() {
    const point = document.querySelector('#punto')
    const display = document.querySelector('.display')
    point.addEventListener('click', () => {
        if(countPoint < 2 && countOperator == true){
            display.textContent += point.innerText
            countPoint++
        } else if (countPoint < 1) {
            display.textContent += point.innerText
            countPoint++
        }
    })
}


initNumbers()
initAC()
initDel()
initOp()
initEqual()
initPoint()