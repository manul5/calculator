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
    ac.addEventListener('click', () => display.textContent = '')
}

function initDel() {
    const del = document.querySelector('.del')
    const display = document.querySelector('.display')
    del.addEventListener('click', () => display.textContent = display.innerText.slice(0, display.innerText.length-1))
}

// functioninitOp() {
//     op
// }


initNumbers()
initAC()
initDel()