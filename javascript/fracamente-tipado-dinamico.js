/* O javascript é uma linguagem fracamente tipada e dinâmica
    -Fracamente tipada
    - Variáveis não precisam ter um tipo previamente definido
        > Ou seja, o javascritp que define qual será o tipo da variável
            de acordo com o conteúdo que a variável receber
    - Podemos mudar o tipo do conteúdo da variável
    - Linguagem dinâmica, o tipo da variável muda de acordo com o elemento atribuido

*/ 

// a variável não possui ennhum tipo
let clima; 

// A partir do momento que é atribuito algum valor nessa variável
// o tipo delá assumirá o tipo desse valor a ser atribuio
clima = ""
console.log(typeof clima)

clima = true
console.log(typeof clima)

const x = 2
const y = {}
const z = []
const w = function() {}

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof w)

// Uma constante nunca será alterada
// ela não poderá ter seu tipo mudado
const verao = "sol"
// verao = 12
// resultará em um erro