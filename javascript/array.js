/*
Array
    * Lista
    * Agrupamento de dados
    
    *sintaxe
        [ "Lucas", 23 ]
*/ 

console.log(["Klee", "Qiqi", "Mona", "Lisa", "Jean"]);


// Array

const animals = [
    'Lion',
    'Monkey',
    'Cat',
    {
        name: 'Lucas',
        agr: 24
    }
]
// Apesar de ter um objeto dentro do array, o ideal é que não misture 
// tipoes de dados diferentres dentro de um array, o ideal é que tenha um padrão
// em seus valores
// Acessar valores dentro de um array

console.log(animals);
console.log(animals[0]);

// Total de um array:
console.log(animals.length);

let count = 1

for (const animal of animals) {
    console.log(`${count}º Elemento: ${animal}`);
    count += 1
}

console.log(animals[3].name);