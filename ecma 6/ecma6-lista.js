
var cadastra = (vet) => {
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
var busca = (vet) => {
    codigo = Number(prompt('Código que deseja procurar'))
/** let bike = vet.find( (objeto) =>{
 *                  return objeto.cod == codigo
 *              })*/
    console.log(vet.find(objeto => objeto.cod == codigo))
}

var soma = (vet) => {
    let resultado = vet.reduce( (total, objeto) => {
                        total + objeto.valor
                    }, objeto[0].valor) // assim ele incializa o total com o primeiro valor, se fosse 0 total começaria valendo 0
    console.log(`A soma dos valores é ${resultado}`)
}

var buscaMarca = (vet) => {
    let marca = prompt('Marca que deseja procurar:')
    let novas = vet.filter( (objeto) => {
        marca == objeto.marca
    }) // não pode ser find, pq ele retorna só o primeiro que ele achar, enquanto o filter retorna todos que ele encontrar
    console.log(novas)
}

var soma3 = (vet) => {
    let novo = vet.map( (objeto) => {
                    objeto.aro += 3
                    objeto
    })
    console.log(novo)
}

let velha = (vet) => {
    let achou = vet[0].ano
    anoVelha = vet.forEach( (objeto) => {
        if (objeto.ano < achou){
            achou = objeto.ano
        }
    })
    console.log(`A bicicleta mais antiga cadastrada é do ano: ${anoVelha}`)
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