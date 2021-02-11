function gradesTransform(grade) {
    let newGrade
    let scoreA = grade >= 90 && grade <= 100
    let scoreB = grade >= 80 && grade <= 89
    let scoreC = grade>= 70 && grade <= 79
    let scoreD = grade>= 60 && grade <= 69
    let scoreF = grade>= 0 && grade <= 60

    if (scoreA) {
        newGrade = 'A'
    } else if (scoreB) {
        newGrade = 'B'
    } else if (scoreC) {
        newGrade = 'C'
    } else if (scoreD) {
        newGrade = 'D'   
    } else if (scoreF) {
        newGrade = 'F'
    } 
    else {
        newGrade = 'Nota Inválida'
    }
    return newGrade
}

console.log(gradesTransform(-1));
console.log(gradesTransform(101));
console.log(gradesTransform(0));
console.log(gradesTransform(1));
console.log(gradesTransform(45));
console.log(gradesTransform(60));
console.log(gradesTransform(61));
console.log(gradesTransform(75));
console.log(gradesTransform(85));
console.log(gradesTransform(95));