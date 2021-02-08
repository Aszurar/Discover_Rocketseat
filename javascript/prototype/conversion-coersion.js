/*
    Type conversions:
        > A alteração de dado ocorre explicitamente pelo dev.
    Type coersion:
        > A alteração de dado ocorre implicitamente pelo próprio javascript.
    
    Type conversion (typecasting) x Type coersion
        * Alteração de um tipo de dado para outro tipo de dado;
*/ 

// type coersion
// Nesse caso, será o javascript que fará a aletaração do tipo de dado(type coersion)
// Assim, nesse caso, vai transformar o 5 que é um tipo number em um tipo string e vai concatenar os 2 elementos
// em uma só string
console.log('9' + 5);

// type conversion
// Agora, nós devs, forçamos a mudança do tipo de dado do elemento 9 que é uma string para um tipo number.
// Nesse caso, será realizado uma adição entre os 2 números 
console.log(Number('9') + 5);


