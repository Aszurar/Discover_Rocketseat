/*
    new
    * left-hand-side expression
    * criar um novo objeto
*/ 

let name = new String('Lucas')
name.lastName = 'Souza'

let age = new Number(23)
age.date = '22-12-1997'

console.log(name, age);

let person = new Object()
person.name = 'Lucas ' + name.lastName
person.birth = age.date

let date = new Date('1997-12-22')

console.log(person);
console.log(date);