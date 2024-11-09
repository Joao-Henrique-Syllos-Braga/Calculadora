const one   = document.getElementById("1")
const two   = document.getElementById("2")
const three = document.getElementById("3")
const four  = document.getElementById("4")
const five  = document.getElementById("5")
const six   = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine  = document.getElementById("9")
const zero  = document.getElementById("0")

const minus = document.getElementById("-")
const plus = document.getElementById("+")
const minusplus = document.getElementById("+-")
const division = document.getElementById("/")
const mult = document.getElementById("x")
const c = document.getElementById("c")
const pors = document.getElementById("%")
const equal = document.getElementById("=")
const point = document.getElementById(".")

const number = document.getElementById("number")

// Array com todos os números
const numbers = [one, two, three, four, five, six, seven, eight, nine, zero, plus, minus, minusplus, mult, division, pors]

// Adiciona evento de click para cada botão numérico
numbers.forEach(button => {
    button.addEventListener("click", function() {
        number.innerHTML += button.innerHTML // Concatena o valor do botão ao conteúdo de "number"
    })
})

c.addEventListener("click", function() {
    number.innerHTML = ''
})

