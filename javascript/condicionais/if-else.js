// if...else

// recomendações: 
//1. sempre use as {}, mesmo se o if só tiver uma linha
//2. atribua as condicionais a=a uma variável

let temperature = 36.5
let highTemperature = temperature > 37.5
let mediumTemperature = temperature >= 37 && temperature <= 37.5

if (hightemperature) {
    console.log('Esta com febre alta');
} else if(mediumTemperature){
    console.log('Fabre Moderada');
} else{
    console.log('Sadável');
}