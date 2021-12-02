/*

Exercicio de interpretacao de codigo
1.
A- No console sera impresso o resulta da multiplicacao por 5. no primeiro a resposta sera 10, e no segundo sera 50
B- Daria certo tambem se nao me engano

2-
A- O toLowerCase vai substituir as letras maiusculas, por letras minusculas. O includes ira retornar com true ou false.
ex: se você selecionar a palavra cenoura, se na frase digitada pelo usuario conter a palavra cenoura, ele ira retornar true se nao false.
B- 
I- eu gosto de cenoura - true 
II- cenoura é bom para a vista - true
III- cenouras crescem na terra - false
Obs: coloquei as respostas que acho eu, que apareceriam no console.

*/

function informacoes() {
    return sobreMim = "Eu sou Reinaldo, tenho 23 anos, moro em Rio Negrinho /SC e sou Estudante."
}
console.log(informacoes())

function dados(nome, idade, cidade, profissao) {
    nome = Reinaldo
    idade = 23
    cidade = Rio_Negrinho
    profissao = Estudante
    console.log(`Olá eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
}

const teste = dados(nome, idade, cidade, profissao)
console.log(`Olá eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)


function soma(num1, num2) {
    num1 = num1 || 33
    num2 = num2 || 22
    return num1 + num2
}

console.log(soma())


// Nao consegui ir adiante, estou entregando assim pra não ganhar falta. mas prometo voltar aqui terminar quando eu aprendder bem
   


