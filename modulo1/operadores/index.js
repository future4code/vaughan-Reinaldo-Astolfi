/* 
1. 
a. (false)
b. (false)
c. (true)
d. (boolean)
*/

/*
2.
Fiquei mais de uma hora tentando resolver sem pequisar, tentei varias formas e sempre dava erro
tipo nao erro mas ex: 
se eu colocasse 5 + 2 a resposta no console vinha 52 kkk.
entao dei uma pesquisada no youtube e achei esta soluçao.

let primeiroNmumero =Number (window.prompt("Digite um numero!"))
let segundoNumero = Number (window.prompt("Digite outro numero!"))

const soma = primeiroNmumero + segundoNumero
console.log(primeiroNmumero + segundoNumero)

*/

const idade =  prompt("Digite sua idade:")
const idadeAmi =   prompt("Digite a idade do seu melhor amigo(a)")

const dife = idade >= idadeAmi
const diferencaIdade = idade - idadeAmi

console.log("Sua idade é maior do que a do seu amigo(a)?", idade >= idadeAmi)
console.log(diferencaIdade)







const numeroPar = prompt("Digite um número par")
const divisao = numeroPar % 2

console.log(divisao)
// Aqui o resultado esta sempre dando 0
// Se colocar um numero impar, o resultado sempre sera 1


const num1 = prompt("Digite um número")
const num2 = prompt("Digite outro número")

const numeroMaior = num1 > num2
const numeroIgual = num1 === num2
const numDivi = num1 % num2 === 0
const nuDividi = num2 % num1 === 0

console.log("O primeiro número é maior que p segundo? ", numeroMaior)
console.log("O Primeiro número é igual o segundo? ", numeroIgual)
console.log("O primeiro número é divisível pelo segundo? ", numDivi)
console.log("O segundo número é divisível pelo primeiro? ", nuDividi)

