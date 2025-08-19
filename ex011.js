// Crie um programa que classifique a idade de uma pessoa:
// •
// 0 a 12 anos → "Criança".
// •
// 13 a 17 anos → "Adolescente".
// •
// 18 a 59 anos → "Adulto".
// •
// 60 anos ou mais → "Idoso".

let idade = 60

if (idade <= 12 ){
    console.log('Criança')
}else if (idade > 12 && idade < 18){
    console.log('Adolescente')
}else if (idade >= 18 && idade < 60){
    console.log('Adulto')
}else{
    console.log('Idoso')
}