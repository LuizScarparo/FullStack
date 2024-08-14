//Exibe data e hora local
console.log(new Date())

//data e hora local referencia js
console.log(new Date(0))

//data e hora local em ms
console.log(new Date().getTime())

//determinar uma data, *ano, mes(0-11), dia
console.log(new Date(2024, 7, 13))

//determinar data com horarario(ano, mes, dia, hora, minuto segundo)
console.log(new Date(2024, 7, 13, 15, 37, 2))

//da pra usar tambem
console.log(new Date("2024-07-03T15:27:00"))
console.log(new Date("August 13, 2024 15:37:00"))

//Metodos pra trabalhar

let date = new Date().getTime()
console.log(date.toFixed(1))

