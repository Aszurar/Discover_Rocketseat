/*  Operador Condicional(Ternário)
    Dependendo da condição, recebemos valores diferentes
                verdadeira: falsa    
    condition ? value1 : value2
    se for verdadeiro retorne value1, se for falso  retorne value2

    Exemplos:
    Café da manhã top
*/ 
let pao = false
let queijo = false

const niceBreakFast = pao || queijo ? 'Café top' : 'Café Ruim'

console.log(niceBreakFast);

// Maior de 18?
let age = 16
const canDrive = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir'
console.log(canDrive);