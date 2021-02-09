/*
Operadores Unários
    typeof
    delete
*/ 

const person = {
        name: 'Lucas',
        age: 23
}

console.log(typeof 'Lucas de Lima');

// delete é um operador unário que vai procurar dentro de um objeto a propriedade que é passada
// para ser deletada
delete person.age

console.log(person);
