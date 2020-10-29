
var cadastra = function(vet){
    // cria um objeto
    let objeto = new Object()
    objeto.cod = Number(prompt('Código: '))
    objeto.aro = Number(prompt('aro:'))
    objeto.modelo = prompt('Modelo')
    objeto.marca = prompt('Marca:')
    objeto.valor = Number(prompt('Valor:'))
    objeto.ano = Number(prompt('Ano de fabricação:'))
    // insere o objeto no vetor
    vet.push(objeto)
    console.log(`Bike ${objeto.cod} inserida com sucesso`)

/** vet.push(
 *      {
 *          cod: Number(prompt('Código: ')), 
 *          aro: Number(prompt('aro:')),
 *          modelo: prompt('Modelo'),
 *          marca: prompt('Marca:'),
 *          valor: Number(prompt('Valor:')),
 *          ano: Number(prompt('Ano de fabricação:')),
 *      }
 *  ) 
 *  console.log(`Bike ${vet[vet.length-1].cod} inserida com sucesso`)
 * */
}

var codigo
var busca = function(vet){
    codigo = Number(prompt('Código que deseja procurar'))
    let bike = vet.find(busca2) // faz uma verificação para ver se encontra o que é desejado dentro de um vetor
    console.log(bike)
}

// busca2() vai ser executado até chegar no vet.length
function busca2(objeto){
    return objeto.cod == codigo
}

var soma = function(vet){
    let resultado = vet.reduce(soma2, 0) // faz uma varredura no vetor e faz a soma dos valores no vetor - inicia a soma com 0
    console.log(`A soma dos valores é ${resultado}`)
}

// soma2(valor da soma, valor do objeto)
function soma2(total, objeto){
    console.log(total)
    return total + objeto.valor
}

var marca
var buscaMarca = function(vet){
    marca = prompt('Marca que deseja procurar:')
    let novas = vet.filter(buscaMarca2) // não pode ser find, pq ele retorna só o primeiro que ele achar, enquanto o filter retorna todos que ele encontrar
    console.log(novas)
}

function buscaMarca2(objeto){
    return marca == objeto.marca
}

var soma3 = function(vet){
    let novo = vet.map(soma32)
    console.log(novo)
}

function soma32(objeto){
    objeto.aro += 3
    return objeto
}

var anoVelha = vetor[0].ano
var velha = function(vet){
    anoVelha = vet.find(maisVelha)
    console.log(`A bicicleta mais antiga cadastrada é do ano: ${anoVelha}`)
}

function maisVelha(objeto){

    console.log(anoVelha)
    return objeto.ano < anoVelha
    
}

var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscaMarca(vetor)
soma3(vetor)
velha(vetor)
console.log(vetor)