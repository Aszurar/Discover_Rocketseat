// Estrutura de repetição
// for
// break -> para a execução do loop
// continue -> pula os trechos abaixo dele do loop para a próxima iteração
for (let i = 0; i <= 10; i++) {
    console.log(i);    
}
console.log('============================================================================');
for (let i = 100; i >= 0; i--) {
    console.log(i);
    if (i == 80) {
        console.log('Para tudo');
        break;
    }    
}

console.log('============================================================================');
for (let i = 100; i >= 80; i--) {
    if (i == 90) {
        console.log('Pula o 90');
        continue;
    }    
    console.log(i);

}
