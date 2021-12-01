/*
1. 
A-
B- Olha, no meu ponto de vista tanto A como B, irao devolver nada ou no caso um valor vazio.
telvez eu esteja errado.

C- Aqui na C a resposta sera 11, porque length retorna quantas letras ou numeros tem dentro da variavel.

D- Bom aqui o array nao foi definido entao acho que pode dar erro!

E- Aqui da erro tbm porque acho que pelo certo, deveria ter sido declarado uma variavel antes ne?

F- Da erro tbm, essa ate rodei o codigo pra ver se estou pensando certo
*/

const nome = prompt("Olá, por favor digite seu nome!")
const email = prompt("Agora digite seu e-mail.")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}!` )

const lista = ["Batata", "Arroz", "Alface", "Queijo", "Feijão"]
const comida = prompt('Qual é sua comida preferiada?')

console.log(`Essas são as minhas comidas preferidas: ${lista}`)

// Nao consegui fazer o desafio

let listaDetarefas = []

const tarefa1 = prompt("Digite uma tarefa do seu dia:")
const tarefa2 = prompt("Digite uma tarefa do seu dia:")
const tarefa3 = prompt("Digite uma tarefa do seu dia:")

listaDetarefas.push(tarefa1)
listaDetarefas.push(tarefa2)
listaDetarefas.push(tarefa3)

console.log(listaDetarefas)

const pronto = prompt(`Das 3 tarefas que voc~e digitou, quao ja realizou a 1 a 2 ou a 3? responda o numero`)

console.log(pronto, listaDetarefas.splice[-1] )

// Nao consegui terminar
