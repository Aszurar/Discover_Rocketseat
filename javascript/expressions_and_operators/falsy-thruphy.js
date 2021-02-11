/*
    Essas seriam as conversões type coersion
    Falsy
        - Quando um valor não booleano é considerado false em contextos que 
        deveriam ser de valores booleanos!(condicionais e loops):
        - Ou seja, quando um booleano assume o valor booleano de false
        Exp:
        false
        0
        -0
        null
        NaN
        ""
        undefined
*/
console.log('=======Flasy=======');
console.log(undefined ? 'verdadeiro' : 'falso');
console.log(NaN ? 'verdadeiro' : 'falso');
console.log("" ? 'verdadeiro' : 'falso');



/*
    TRUTHY
         Quando um valor não booleano é considerado true em contextos que 
        deveriam ser de valores booleanos!(condicionais e loops):
        - Ou seja, quando um booleano assume o valor booleano de true

        Exp:

        true
         1  ou 123.1432 -> Qualquer número ao invés do 0.
        []
        {}
        "0" ou"false" -> qualquer string não vazia
        Infinity ou -Infinity

*/ 

console.log('=======Throphy=======');
console.log({} ? 'verdadeiro' : 'falso');
console.log("0" ? 'verdadeiro' : 'falso');
console.log([] ? 'verdadeiro' : 'falso');