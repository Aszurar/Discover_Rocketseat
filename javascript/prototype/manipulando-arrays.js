// Manipulando Arrays


let techs = ['html', 'css', 'js']


// Adicionar um item no fim
techs.push('nodejs')

// Adicionar um item no começo
techs.unshift('sql')

// Remover do fim
// techs.pop()

// Remover do começo
// techs.shift()

// Pegar somente alguns elementos do Array
// Slice -> Método que remove itens de um array a partir do índice,inicial até o indíce final(caso queria incluir
// o ultimo elemento, ser[a necess[ario + 1]])
// Não altera o array
console.log(techs.slice(1, 3));
console.log(techs.slice(1, 2));

// Remover 1 ou mais itens de qualquer posição do array
// Splice -> Método que remove um ou mais items do array a partir do index passado, junto com o
// o número de elementos que quer remover do array a partir daquele item
// techs.splice(1, 2) //só restará o html

// Encontrar a posição de um elemento no array
// O método indexOf busca o índice do elemento passado!
console.log(techs.indexOf('css'));

console.log(techs);