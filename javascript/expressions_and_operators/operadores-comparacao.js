/* Operadores de comparação
    - Irá comparar valores e retornará 
        um boolean como resposta à comparação
*/ 
let one = 1
let two = 2

// == igual
console.log('== igual');
console.log(one == "1");//true - // O Javascript vai tentar fazer o 
                                //coersion  e mudar o tipo de dado string para number
console.log(one == 1); //true
console.log(one == 23432); //false
console.log(one == two);//false 
console.log(one == false);//false
console.log(one == true);//true
console.log('=================');


//!= diferente
console.log('!= diferente');
console.log(one != "1");//false - // O Javascript vai tentar fazer o 
                                //coersion  e mudar o tipo de dado string para number
console.log(one != 1);//false
console.log(one != 23432);//true
console.log(one != two);//true
console.log(one != false);//true
console.log(one != true);//false
console.log('=================');

//=== estritamente igual
console.log('=== estritamente igual');
console.log(one === "1");//false - Nesse caso, a comparação leva em consideração
                        // os tipos dos dados, portanto resultará em falso
console.log(one === 1);//true
console.log(one === 23432);//false
console.log(one === two);//false
console.log(one === false);//false
console.log(one === true);//false - Os tipos de dados são diferentes!.
console.log('=================');


//=== estritamente diferente
console.log('=== estritamente diferente');
console.log(one !== "1");//true - Nesse caso, a comparação leva em consideração
                        // os tipos dos dados, portanto resultará em true
console.log(one !== 1);//false

console.log(one !== 23432);//true
console.log(one !== two);//true
console.log(one !== false);//true
console.log(one !== true);//true - Os tipos de dados são diferentes!.
console.log('=================');


// > Maior
console.log('> Maior');
console.log(one > "1");//false - Nesse caso, a comparação leva em consideração
                        // os tipos dos dados, portanto resultará em false
console.log(one > two);//false
console.log(one > true);//false
console.log(one > false);//true
console.log(one > 0);//true
console.log('=================');


// < Menor
console.log('< Menor');
console.log(one < "1");//false - Nesse caso, a comparação leva em consideração
                        // os tipos dos dados, portanto resultará em false
console.log(one < two);//true
console.log(one < true);//false
console.log(one < false);//false
console.log(one < 0);//false
console.log('=================');


// >= Maior
console.log('>= Maior ou igual');
console.log(one >= "1");//true - Nesse caso, a comparação leva em consideração
                        // os tipos dos dados, portanto resultará em true
console.log(one >= two);//false
console.log(one >= true);//true - é igual
console.log(one >= false);//true - é maior
console.log(one >= 0);//true
console.log('=================');


//<= Menor ou igual
console.log('<= Menor ou igual');
console.log(one <= "1");//true - Nesse caso, a comparação leva em consideração
                        // os tipos dos dados, portanto resultará em true
console.log(one <= two);//true
console.log(one <= true);//true - é igual
console.log(one <= false);//false
console.log(one <= 0);//false
console.log('=================');



