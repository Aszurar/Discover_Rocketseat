// callback function
// Simplesmente uma função que é passada como argumentos
// para outra função e executada junto com os 
// outros argumentos e trechos de códigos que também são executados.

function sayMyName(name) {
    console.log('Antes de executar a função callback');
    
    console.log(name);

    console.log('Depois de executar a função callback');
}

sayMyName(    
    () => {
        console.log('Estou em uma callback');
    }
)