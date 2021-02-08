// 1. Primeiro declare uma variável de nome weight
let weight = 93
// 2. Que tipo de dado é a variável acima?
// Undefined, não tem tipo ainda
// console.log(typeof weight);

// Declare e atribua variáveis dos tipoes básicos:
let name = "Lucas de Lima"
let agr = 23
let stars = 5.5
let isSubscribed = false


// 4. A variável student abaixo é de que tipode dado?
let student = {}
// ELa é um objeto
console.log(typeof student);

// 4.1 Atribua a ela as mesmas pripriedades e valores do exercício 3:
student = {
    name: "Lucas de Lima",
    age: 23,
    stars: 5.5,
    isSubscribed: false
}

console.log(student.name);

// Mostre no console a seguinte Mensagem:
    // <name> de idade <age> pesa <weight> kg

console.log(`${student.name} de idade ${student.age} pesa ${weight} kg`);

// Declare uma array vazio:
let students = []

// atribua ao array anterior o objeto student criado anteriormente

students = [ student ]

console.log(students);
console.log(students[0]);
// Crie um novo estudante e o adicione no array students
const john = {
    name: "John",
    age: "23",
    weight: "70",
    isSubscribed: true
}

students = { students, john}
// or
// students[1] = john
console.log(students);

// Qual a respota do código abaixo(sel executar nada)
console.log(a);
var a = 1

// A resposta é undefined, pois os tipos var sofrem hosting
// Assim ele existe mas ainda não possui valor naquele momento