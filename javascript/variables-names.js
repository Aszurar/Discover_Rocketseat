/*
Scope
    - Determina a visibilidade de alguma variável no JS

Declaração de um Bloco:

{ 
    aqui dentro é um Bloco, e posso colocar qualquer código
}

* Um bloco também criará um novo escopo,(block-scoper), ou seja seja
nesse bloco terá sua própria visualização das variáveis
*/

// Variáveis:

// var 
// O escopo do var é local(existe dentro de um escopo específico) e global(existe em todos escopos), ou seja, 
// ele é visualizado por qualquer escopo/bloco

//Evitar usar o var por ele ser escopo global, muito flexível! 

// Hoisting
// Qualquer tipo var, mesmo que declado no meio do código, ou no fim, ele
// será elevado para o início do código, ou seja, a declaração de um var sempre
// estará no início do código!
// Caso ele tenha sido declarado em outra posição, então sua declaração
//  irá para o início do código(elevado) mas seu conteúdo, valor só será atribuído
//  na linha original de sua declaração/atribuição;
// Ou seja, Nesse caso ele existirá mas será um undefined

console.log('> existe um x antes do bloco?', x);
// sim, como ele var, ele será elevado(hoisting)
// com isso, ele existe, mas será indefinido
{ 
    var x = 0
}

console.log('> existe um x depois do bloco?', x);
// sim, como ele var, ele será elevado(heisamentO)
// mas nesse caso, ele já recebeu sua atribuição, com isso agora
// ele terá um tipo e um valor, ou seja, ele ser´a definito



// let/const
// Seu escopo é local, ou seja, só funcionam dentro do escopo em
// que foram criadas a menos que sejam definidas no escopo global!

//Let pode ser alterada!
//Const não pode ser alterada!

// console.log('> existe um x antes do bloco?', y);
// dará um erro em que alertará que o y  não foi definido
{
    // console.log('> existe um y antes da declaração?', y);
    // darpa um erro alertando que não posso acessar o y antes
    // de sua declaração 
    // let y = 0
    // console.log('> existe um y depois da declaração?', y);
    // SIm, nesse caso como está no mesmo escopo, e após sua Declaração
    // y existirá e terá valor de 0
}

// console.log('> existe um y depois do bloco?', y);
// Nesse caso, o y  está em outro escopo, logo não há y nesse escopo global
// somente no específico em que ele foi declarado

// EXEMPLO 2
let y = 1
console.log('> existe um y no escopo global?', y);
// Sim, nesse caso, esse t do escopo global vale 1 e não tem 
// relação com o y do escopo específico abaixo
{
    let y = 0
    console.log('> existe um y depois da declaração?', y);
    // Sim, esse y de escopo logcal vale 0
}

console.log('> existe um y no escopo global?', y);
// Sim, nesse caso, esse t do escopo global vale 1 

// EXEMPLO 3
let z = 1
console.log('> existe um z no escopo global?', z);
// Sim, nesse caso, esse t do escopo global vale 1 e não tem 
// relação com o z do escopo específico abaixo
{
    {
        {
            z = 0
            console.log('> existe um z depois da declaração?', z);
            // Sim, nesse caso, o javascript vai sair a cada nível de um escopo
            // para achar a variável z, e como nesse caso ela está declara no escopo global
            // ele sairá de todos os escopos até econtra-la e atualizará seu valor
        
            // Caso Z não tivesse sido decladado, antes, então o javascript
            // irá criar o z nesse escopo atual como um var
        }
    }
}

console.log('> existe um z no escopo global?', z);
// Sim, nesse caso, o z teve seu valor atualizado!
