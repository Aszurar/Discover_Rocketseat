/*
Manipulando strings e Arrays

Seprando um texto que contém espaços, em um novo array, onde cada texto é uma posição do array. 
Depois disso, transforme o array em um texto e onde eram espaços coloque _

*/

let phrase = "Eu quero viver o amor"
// O método split divide uma string de acordo com o separador passado, e a transforma em um array
// onde os elementos divididos se tornam um elemento do array
let myArray = phrase.split(" ")
console.log(myArray);

// .join é o metodo que transforma um array em uma string de acordo com o separador indicado
myArray = myArray.join("_")
console.log(myArray);
