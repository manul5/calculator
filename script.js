let countOperator = false

function initNumbers() {
    const numbers = document.querySelectorAll('.number')
    const display = document.querySelector('.display')
    numbers.forEach(element => {
        element.addEventListener('click', () => {
            display.innerText.length < 12 ? display.textContent += element.textContent : display.textContent += ''})
    });
}

function initAC() {
    const ac = document.querySelector('#ac')
    const display = document.querySelector('.display')
    ac.addEventListener('click', () => {
        countOperator = false
        display.textContent = ''
    })
}

function initDel() {
    const del = document.querySelector('.del')
    const display = document.querySelector('.display')
    const ops = ['/', '*', '+', '-', '%']
    del.addEventListener('click', () => {
        let lastChar = display.innerText.slice(display.innerText.length-1, display.innerText.length)
        console.log(lastChar)
        if (ops.includes(lastChar)) {
            countOperator = false
        }
        display.textContent = display.innerText.slice(0, display.innerText.length-1)
    })
    
}

function initOp() {
    const op = document.querySelectorAll('.op')
    const display = document.querySelector('.display')
    op.forEach(element => {
        element.addEventListener('click', () => {
            if (!countOperator) {
                display.textContent += element.textContent
                countOperator = true
            } else {
                display.textContent += ''
            } 
            
        })
    });
}


initNumbers()
initAC()
initDel()
initOp()