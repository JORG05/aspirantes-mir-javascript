// escribe la función bmi acá
function bmi(peso, altura){
    return 'BMI= ' + peso / (altura**2)
}
function bmi2(peso, altura){
    return 'BMI2= ' + peso / (altura)**2
}
function bmi3(peso, altura){
    return 'BMI3= ' + peso / (altura)**2
}
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi2(72, 1.6)) // 28.124999999999993
console.log(bmi3(52, 1.75)) //  16.979591836734695
