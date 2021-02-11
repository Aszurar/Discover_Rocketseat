// throw -> lançara o erro caso ocorra, para toda a aplicação caso o throw não esteja dentro de um try catch se
// caso esteja dentro de um try catch vai parar apenas o bloco de código onde o thrwo está localizado

// try..catch -> tentará executar um código, caso ocorra algum erro, ele será capturado

// new Error é um objeto do tipo error, que quando posto, o navegador mandará o error
// se for só uma string, sem o new erro, vai imprimir na tela a string
function sayMyName(name = ""){
    if (name == "") {
        // throw new Error("nome é obrigatório") ou
        throw 'Nome é obrigatório'
    }

    console.log("Depois do erro");
}

try {
    sayMyName()
} catch (e) {
    console.log(e);
}

console.log("Depois do bloco try");
