// for in
// loop em cima de um objeto
// pegar as propriedades de um objeto

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (const property in person) {
        console.log(property);//Imprimirá as nomes de cada propriedade
        console.log(person[property]); //Imprimirá os valores de cada propriedade
}

