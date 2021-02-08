// function hoisting
// Ocorre a elevação da declração/definição da função
// qando ela é declarada de forma simples como no exemplo a seguir:

// é executada!
sayMyName()

// Nesse caso essa declaração sofre o hoisting
function sayMyName() {
    console.log('Lucas');
}

// Agora, quando a função é declarada com forma de expressão
// ela não sofrerá hoisting:

sayMyAge()
// resultará um erro, mesmo se vor var, tbm resultará erro
const myAge = function sayMyAge() {
    console.log('23');
}