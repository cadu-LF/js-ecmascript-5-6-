// exemplos de JS utilizando a especificação ES5
// vamos aprender
//Array.forEach(): para cada elemento do vetor, a função é chamada
//                 Na função pode ser passado o valor do elemento e a posição que o mesmo se encontra. Os parâmetros devem
//                 ser passados nessa ordem
//Array.map(): gera um novo array com o resultado do procedimento realizado na função. o array gerado terá o mesmo 
//             tamanho do array original
//Array.filter(): filtra todos os valores, para se encontrar algo desejado dentro do array e retorna um vetor com os 
//                elementos selecionados
//Array.reduce(): tranforma um array em um único valor; ele pega o valor do procedimento anterior e o ultiliza para o 
//                calculo do próximo valor.
    // Ex reduce():
        // array = [1, 2, 3, 4, 5]
        // array.reduce(funcao)
        // function funcao (total, num){
        //    return total + num
        // }

        // no começo:
        //      total = 0
        //      num = 1 (primeiro elemento)
        // segundo valor: 
        //      total = 1 (1+0)
        //      num = 2 (segundo elemento)
        // terceiro valor: 
        //      total = 3 (1+2)
        //      num = 3 (terceiro elemento)
        // quarto valor:
        //      total = 6 (3+3)
        //      num = 4 (quarto elemento)
        // quinto valor:
        //      total = 10 (6+4)
        //      num = 5 (quinto elemento)
        // final: 
        //      total = 15 (10+5)

//Array.every(): checa se todos os elemento do array cumprem uma condição passada. 
//               se TODOS os elementos cumprirem ele retorna 'true', caso contrário retorna 'false'
//Array.some(): checa se algum elemento do array cumpre com uma condição passada. É necessário apenas um elemento passar 
//              no  teste, que a função para de ser executada e retorna o valor 'true', se não houver nenhum elemento 
//              ele retorna 'false'
//Array.indexOf(): procurar pela posição que está o elemento entre '()'
//Array.find(): retorna o valor do primeiro elemento que passa em um teste e não execulta após retorná-lo
//Array.concat(): junta dois arrays
//Array.copyWithin(): copia um valor do array para uma outro posição, se na posição já houver um elemento, ele é subscrito
//                    Primeiro vem a posição do elemento que será copiado e dps a posição que será colado
//Array.fill(): substitui os valores do array por uma novo valor digitado
//              array.fill(valor, inicio, fim):  O conjunto do começo e final é: [inicio, fim[
//
//JSON.parse()
//JSON.stringify()
// Date.now(): retorna a data atual


main()

function main(){

    let vetor = [10, 20, 30, 40, 50]

    vetor.forEach(funcao) // chama a função para cada item do vetor

    vetor.forEach(acumula)
    // funcao(10, 0)
    // funcao(20, 1)
    // funcao(30, 2)
    // funcao(40, 3)
    // funcao(50, 4)

    //percorrer o vetor
    /*for(let i = 0; i<5; i++){
        console.log(`Assim se percorre o vetor \nElemento: ${vetor[i]} \nPosição: ${i}`)
    }**/


}

// o elemento é o único parametro passado pela funcao
function acumula(elemento){
    conteudo = conteudo + "=" + elemento
}

// os parametros são os numeros do vetor e a posicao que ele está
function funcao(elemento, posicao){
    if (posicao % 2 == 0) {
        console.log(`Assim se percorre o vetor \nElemento: ${elemento} \nPosição: ${posicao} (par)`)
    }
    else{
        console.log(`Assim se percorre o vetor \nElemento: ${elemento} \nPosição: ${posicao} (impar)`)
    }
}

// funcao map
map()

function map(){
    var nros=[3, 4, 5, 6, 7, 8]

    var novo = nros.map(multiplica) // mapeia um vetor para armazenar os resultados dentro de outro vetor,
                                // por isso tem que ter um return dentro da função que o map chama

    console.log(novo)
}



function multiplica(elemento){
    return elemento * 2
}


boss()
function boss(){
    let vet = [1, 2, 3, 4, 5 ,6, 7, 8]

    let result = vet.map(parImpar)

    console.log(result)
}


function parImpar(elemento){
    if (elemento % 2 == 0){
        return 0
    }
    else{
        return 1
    }
}


// podemos criar variáveis do tipo função

var x = function teste(){
    console.log('hello world!') 
}

x()

var soma = function soma(a, b){
    console.log(a + b)
}
soma(2, 4)

var sub = function sub(a, b){
    console.log(a - b)
}
sub(5, 2)

filter()
function filter(){
    let vet = [1, 3, 2, 7, 4]

    let novo = vet.filter(maior)

    console.log(novo)
}
let vet = [1, 3, 2, 7, 4]

let novo = vet.filter(maior)

console.log(novo)

function maior(elemento){
    return elemento >= 3
}