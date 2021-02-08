/*
Manipulando Strings e Números

Quantos caracteres tem uma palavra e quantos dígitos tem um número?
.length -> Retorna quantas letras tem uma palavra, ou quantos elementos tem uma array
*/ 

let word = "Paralelepipedo"
console.log(word.length);

let number = 1234567890
// Nesse caso, o tipo Number não aceita o .length;
console.log(number.length);

// Mas, uma forma de contar os dígitos facilmente é transformar o número em string e usar o
// .length.
console.log(String(number).length);



