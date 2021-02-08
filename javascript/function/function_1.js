// Funções; 2 - Argumentos, Parâmetros e função anônima:

//function expression
//function anonymous
// number1 e number2 são parâmetros  que recebem os argumentos(valores)
// de uma função, eles só existem no escopo da função!

// Toda função possui um retorno! 
// As funções que não possui um return declarado, retornaram undefined
// enquanto as demais, que possui um return declarado retornaram o que estiver
// no return!
const printSum = function(number1, number2) {
    console.log(number1 + number2);  
}

const sum = function(number1, number2) {
    return number1 + number2;
}

// 2 e 3, assim como 12 e 18 são argumentos que serão os parâmetros
// para a execução da função
sum(2, 3)
console.log(sum(12, 18)); 

let number1 = 123
let number2 = 987

console.log(`O número 1 é ${number1}.`);
console.log(`O número 2 é ${number2}.`);
console.log(`A soma é ${sum(number1, number2)}`);

// Na linha abaixo temos o problema em que a função PrintSum.
// é uma funão que imprime, logo não possui retorno
// com isso, seu retorno é undefined
// E como ele imprime a soma, quando o código chegar nela
// ela imprimirá o resultado em uma linha separa com sua string
console.log(`A PrintSum é ${printSum(number1, number2)}`);




