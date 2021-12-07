// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1-
A- Bom o usuário vai colocar um número,
 ai o código vai pegar esse número e vai fazer uma divisão,
  se o resultado for igual a 0, 
o console ira imprimir que ele passou, 
caso o contrario, o console ira imprimir Não passou no teste.

B- Para o console mostrar Passou no teste, o resultado tem que ser igual a 0

C- Qualquer resultado que não seja igual a 0, ira retornar Não passou no teste.

2-
A- O código acima serve para perguntar o nome de uma fruta para o usuário,
assim que o usuario insirir o nome desta fruta, 
o console retornara as informações desta fruta.
este código serviria muito bem pra um estoque de super mercado

B-
O preço da fruta Maça é  R$ 2.25

C-
O preço da fruta  Pêra  é  R$  5

3-
A- A primeira linha está pedindo pro usuário digitar um número

B- Se o usuário digitar 10, o terminal ira exibir Esse número passou no teste
Agora se o número insirido for -10, o terminal não irá exibir nada,
pois não tem uma mensagem caso isso aconteça.

C- 
Haverá sim, pois o let está dentro das chaves 
e o console está chamando essa let, fora das chaves. 
*/

//EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1

let idade = Number(prompt('Insira sua idade'))

function verificarIdade(anos) {
    if(anos >= 18) {
        console.log('Você pode dirigir')
    } else {
        console.log('Você não pode dirigir')
    }
}

verificarIdade(idade)

// 2

let turnoDoDia = prompt('Digite a inicial do turnu em que você estuda. M(matutino), V(Vespertino) e N(Noturno).')

function horarioEstudo(turno) {
    if(turno === 'M' ) {
        console.log('Bom Dia!')
    } else if(turno === 'V') {
        console.log('Boa Tarde!')
    } else if(turno === 'N') {
        console.log('Boa Noite!')
    }
}

horarioEstudo(turnoDoDia)

// 3

const turnoEstudo = prompt("'Digite a inicial do turnu em que você estuda. M(matutino), V(Vespertino) e N(Noturno).'")

function turnoEstudante(turno1){
    switch(turno1) {
        case 'M':
            console.log("Bom Dia!")
            break
        case 'V':
            console.log("Boa Tarde!")
            break
        case 'N':
            console.log("Boa Noite!")
            break
        default:
            console.log("Verifique a informação que você digitou, e tente novamente!")
            break
        }
}

turnoEstudante(turnoEstudo)


// 4

let generoFilme = prompt("Qual gênero de filme vão assistir?")
let precoIngresso = Number(prompt("Qual é o valor do ingresso?"))

if(generoFilme === "Fantasia", precoIngresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// Desafio 1 

let generoFil = prompt("Qual gênero de filme vão assistir?")
let precoIngre = Number(prompt("Qual é o valor do ingresso?"))
let lanche = prompt("Qual lanchinho vai comer durante o filme?")

if(generoFil === "Fantasia", precoIngre <= 15) {
    console.log(`Bom filme! e Aproveite seu ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}

// Desafio 2
/*
let nome = prompt("Digite seu nome:")
let tipoDeJogo = prompt("Qual tipo de jogo: IN ou DO?")
let etapaDeJogo = prompt("Qual etapa quer assistir: SF, DT ou FI?")
let categoria = prompt("Qual categoria: 1, 2, 3, ou 4?")
let quantidadeIngresso = Number(prompt("Quantos ingressos vai querer?"))

depois disso eu não sabia mais pra onde ir :,(
*/

