function initNumbers() {
    numbers = document.querySelectorAll('.number')
    display = document.querySelector('.display')
    numbers.forEach(element => {
        console.log(display.textContent.length)
        element.addEventListener('click', () => {
            display.innerText.length < 12 ? display.textContent += element.textContent : display.textContent += ''})
    });
}

function initAC() {
    ac = document.querySelector('#ac')
    display = document.querySelector('.display')
    ac.addEventListener('click', () => display.textContent = '')
}

initNumbers()
initAC()