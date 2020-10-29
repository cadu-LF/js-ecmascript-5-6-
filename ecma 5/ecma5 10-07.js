// funcao forEach() -> faz apenas uma varredura do vetor original

function fe(){
    var numeros = [1, 2, 3, 4, 5]

    numeros.forEach(exe1)
}x

function exe1(elemento, posicao){
    // apenas elementos pares em posições pares

    if((elemento % 2 == 0) && (posicao % 2 == 0)){
        console.log(elemento)
    }
}


function exe2(elemento){
    if (elemento % 2 == 0){
        console.log(elemento)
    }
}

// função map -> não altera o tamanha do vetor resultado
function m(){
    var nros = [4, 6, 9, 13, 18]
    var novo = nros.map(exe3) // intera no vetor
    var novo2 = nros.map(exe4) // vai ser do nros
    console.log(novo) // 14, 16, 19, 23, 28
    console.log(novo2) // 4, 6, undefined, undefined, 18
    // no caso, os undefined existem, pois os valores nao satifazem a condição e o comprimento do vetor gerado = vetor original
}


function exe3(elemento){
    return elemento + 10
}


function exe4(elemento){
    if (elemento % 2 == 0){
        return elemento
    }
}

// funcao filter -> pode alterar o tamanho do vetor resultante
function filtro(){
    var eleitos = [4, 6, 7, 9, 12, 13]
    var novosEleitos = eleitos.filter(exe5)
    // o vetor gerado, não necessáriamente tem o mesmo número de elementos que o vetor original
    // diferentemente da função map
    console.log(novosEleitos)
}


function exe5(elemento){
    return elemento < 10
}


// funcao reduce -> reduz o vetor a apenas um valor
function reduzir(){
    var idades = [7, 8, 9, 10, 11, 12, 13, 14]
    var soma = idades.reduce(exe6)
    var sub = idades.reduce(exe7)
    console.log(soma)
    console.log(sub)
}
//exe6(7, 8) = 15
//exe6(15, 9) = 24
//exe6(24, 10) = 34
//exe6(34, 11) = 45
//exe6(45, 12) = 57
//exe6(57, 13) = 70
//exe6(70, 14) = 84


function exe6(total, elemento){
    return total + elemento
}


function exe7(total, elemento){
    return total - elemento
}


function nota(){
    var notas = [9, 6, 7, 10, 3]
    var maior = notas.reduce(exe9)
    console.log(maior)
}


function exe9(result, elemento){
    
    return (result > elemento) ? relut : elemento
    /*if (elemento > result){
        return elemento
    }
    else{
        return result
    }
    **/
}


// funcao some -> ele verifica se existe algum valor no vetor
// as saídas de dados retornam true se o valor existir, ou false caso não existe
function som(){
    var nomes = ['Pedro', 'Nunes', 'João']
    var resultado = nomes.some(exe8)
    console.log(resultado)
}


function exe8(elemento){
    return elemento == 'Nunes'
}