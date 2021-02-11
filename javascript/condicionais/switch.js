// switch
// o break é opcional!
// caso o break não seja posto, então
// então quando um case for escolhido, todos os demais abaixo dele tbm executaram seus códigos
// pois não há um break para encerrar os cases
let expression = 'a'

switch (expression) {
    case 'a':
        //código
        console.log('a');
        break;
    case 'b':
        console.log('b');
        break;
    default:
        console.log('default');
        break;
}


function basicOperations(number1, operator, number2){
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2    
            break;
        case '-':
            result = number1 - number2    
            break;
        case '*':
            result = number1 * number2    
            break;
        case '/':
            result = number1 / number2    
            break;
        default:
            console.log('Ainda não implementado');
            break;
    }
    return result;
}

console.log(basicOperations(1, '*', 10));