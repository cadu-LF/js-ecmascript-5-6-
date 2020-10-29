// vamos lidar com arrow function

// assim acontece no es1, es2, es3, es4
function soma(x, y){
    console.log(x +  y)
}
soma(2, 7)

// ec5
let soma = function(x, y){
    console.log(x+y)
}
soma(2, 7)

// es6
// arrow function -  funções com seta (=>)
// antes da seta temos os parâmetros da função. EX(x, y)
// depois da seta temos a implementação da função. Ex console.log(x + y)
// ausencia da palavra 'funciton'
// estamos usando uma função anônina - função sem nome
let soma = (x, y) => console.log(x + y)
soma(2, 7)


let vet = [2, 4, 7, 9, 11]
let novo = vet.filter( (elemento => elemento >5))
console.log(novo)
// console.log(vet.filter(elemento => elemento > 5))