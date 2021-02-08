/*
Manipulando Strings e Números

Transformar um número quebrado em um com 2 casas decimais e transformar a vírgular por ponto
*/ 
let number = 23.23452454354

console.log(number, typeof number);

// toFixed() -> fixa o número com uma quantidade de casas decimais informada pelo usuário e transforma
// o número em string.
// Caso o usuário não informe a quantidade de casas decimais, então, o toFixed irá remover todas
// casas decimais.
// método atrelado ao tipo number
console.log(number.toFixed(2), typeof number.toFixed(2));

// replace("antigo elemento a ser substituido", " novo elemento que vai substituir")
// troca um caracter da string por outro caracter informado pelo dev
// método atrelado ao tipo string
console.log(number.toFixed(2).replace(".", ","), typeof number.toFixed(2).replace(".", ","));