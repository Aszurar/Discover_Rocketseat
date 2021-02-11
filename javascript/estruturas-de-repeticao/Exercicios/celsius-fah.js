
function transformUnit(temperature) {    
    let celsiusExists = temperature.toUpperCase().includes('C')
    let fahrenheitExists = temperature.toUpperCase().includes('F')
// fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Unidade de medida não existe!')
    }
// fluxo ideal
    let updateTemperature = Number(temperature.replace('F', ""))
    let finalTemperature = (updateTemperature - 32) * 5/9
    let degreeSign = 'ºC'

// fluxo alternativo
    if (celsiusExists) {
        updateTemperature = Number(temperature.replace('C', ""))
        finalTemperature = (updateTemperature * 9/5) + 32
        degreeSign = 'ºF'
    }


    return finalTemperature + degreeSign
}

try {
    console.log(transformUnit('10C'));
    
} catch (error) {
    console.log(error);   
}