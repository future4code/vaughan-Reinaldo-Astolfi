//1- 10 5
//2- 10 10 10
/*
3-
let horas
let recebe
*/

let nome = prompt("Digite seu nome"); 
let idade = prompt("Digite sua idade");

console.log(typeof nome);
console.log(typeof idade);
alert(`Seu nome é ${nome} e você tem ${idade} anos!`)

let roupa = prompt("Você está usando uma roupa azul hoje? Sim ou Não?")
let sol = prompt("Onde você mora está fazendo sol hoje? Sim ou Não?")
let animais = prompt("Você gosta de animais? Sim ou Não?")

console.log(typeof roupa);
console.log(typeof sol);
console.log(typeof animais);
alert(`Você está vestido de azul hoje? ${roupa} 
Ai onde você mora, está fazendo sol hoje? ${sol} 
Você gosta de animais? ${animais}`
)

let a = 10;
let b = 25;
let c = 0;

c = b
b = a
a = c

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
