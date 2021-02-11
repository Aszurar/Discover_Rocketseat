/*  Sistemas de gasto Familiar
*/ 
let total = 0
function balance(array1, array2) {
    let recipes = array1.reduce((total, recipe) => total + recipe, 0)
    let expenses = array2.reduce((total, expense) => total + expense, 0)
    total = recipes - expenses
    return total    // return total;
}

function typeBalance(array1, array2) {
    let finalBalance = balance(array1, array2)
    let comparasion = finalBalance >= 0
    let message = 'negativo'
    
    if (comparasion) {
        message = 'positivo'
    }

    console.log(`Seu saldo é ${message}: R$${total.toFixed(2)}`);
}

let familyExpense = {
    recipes: [1200, 1200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450, 2000]    
}

typeBalance(familyExpense.recipes, familyExpense.expenses)