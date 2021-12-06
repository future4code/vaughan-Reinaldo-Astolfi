/* 
Exercício de interpretação de código

A- 
O primeiro console retornara "Matheus Nachtergaele"

 No segundo console eu nao entendi muito bem, entao tive que rodar essa parte do codigo. e o console me retornou "Virginia Cavendish"

 O terceiro console retornara "Globo" "14h"

2-

A- 
O primeiro console retornara nome: 'Juca', idade: 3, raca:'SRD'

No segundo console o retorno sera, nome: 'Juba', idade: 3, raca:'SRD'

E o terceiro console retornara, nome: 'Jubo', idade: 3, raca: 'SRD'

B- 
Bom pelo o que entendi, esses 3 ponto sao para declarar  o Espalhamento. se nao colocar esses 3 pontos, o codigo ira quebrar.

3-

A- 
O primeiro console retornara false

O segundo console retornara, acho que dara erro ou undefined

*/

// Exercício de interpretação de código

// EX 1
const pessoa = {
    nome: "Reinaldo",
    apelidos: ["Tigrão", "Geremias", "Piloto"]

}

function novoApelido(pessoa)  {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

novoApelido(pessoa)

const outroApelido = {
    ...pessoa,
    apelidos: ["Pixaco", "Reirei", "Ge"],
}

novoApelido(outroApelido)


//EX 2

const pessoa1 = {
    nome: "Reinaldo",
    idade: 23,
    proficao: "Estudante",
}

const pessoa2 = {
    nome: "Amanda",
    idade: 45,
    proficao: "Advogado"
}


function dados(pessoa1) {
    return [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.proficao, pessoa1.proficao.length]
}

console.log(dados(pessoa1))
console.log(dados(pessoa2))



// EX 3

/* const compras = {
    carrinho: []
}

const produto = {
    nome: "Alface",
    disponivel: true
}

const produto = {
    nome: "Feijão",
    disponivel: true
}

const produto = {
    nome: "Arroz",
    disponivel: true
}


const produtoDisponivel = (produtoDisponi) => {
    compras.carrinho[0] = produtoDisponi

    compras.carrinho.push(produtoDisponi)
}

compras(produto)

console.log(console.carrinho) */
// Essa não consegui 