/*
Para criar nomes:
* JS é case-sensitive(ou seja, letras maiúsculas e minúsculas são diferentes)
* JS aceita a cadeia de caracteres Unicode(acentuações)

- Posso:
    * Iniciar com esses caracteres especiais: _, $
    * Iniciar com letras
    * Colocar acentos
*/ 

let sorvetao = 1
let SORVETAO = 2
let Sorvetão = 3
let $orvetão = 4

console.log('sorvetao =', sorvetao, '\n',
            'SORVETAO =', SORVETAO, '\n',
            'Sorvetão =', Sorvetão, '\n',
            '$orvetão =', $orvetão, '\n');

/*
- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome
    let 2432432 = 1 
    let sor vetao = 4    
*/ 

/*
- ideal
    * Criar nomes que fazem sentido
    * Que explique o que é a variável ou o que ela faz
    * camelCase - Letras maiúsculas no início, quando tiver mais de uma palavra
    * snake_case - O mesmo de cima, só que ao inveś de ser maiúsculo, será um  _
    * Escrever em inglês
*/ 