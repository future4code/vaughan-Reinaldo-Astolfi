// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

/*
1-
A- O console ira imprimir 3 objetos, cada objeto ira mostrar os 3 nomes

2-
A- Ira retornar somente os nomes e não os apelidos

3-
A- Ira mostrar os dois primeiros nomes, ja a letícia não vai aparecer no console, nem o apelido dela

*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// A
const nomeDosBichinhos = pets.map((bichinhos) => {
    return bichinhos.nome
})
// B
const racaDosBichinhos = pets.filter((racaBichos) => {
    return racaBichos.raca === "Salsicha"
})
//C
const mensagemParaDonosDePoodles = pets
.filter((racaDoCachorro) => racaDoCachorro.raca === "Poodle")
.map((poodle) => `Você ganhou um cupom de 10% para tosar o/a ${poodle.nome}!`)


console.log(nomeDosBichinhos, racaDosBichinhos, mensagemParaDonosDePoodles,)


// 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // A
 const nomeDosProdutos = produtos.map((listaDeProdutos) =>{
     return listaDeProdutos.nome
 })

 // B

 const precoDosProdutos = produtos.map((precoComDesconto) =>{
     return {nome: precoComDesconto.nome,
     preco: precoComDesconto.preco * 0.95
     }
 })

 // C

 const produtosLiquidos = produtos.filter((liquidos) =>{
     return liquidos.categoria === "Bebidas"
 })

 // D

 const produtosYpe = produtos.filter((pordutosDeLimpeza) =>{
     return pordutosDeLimpeza.nome.includes("Ypê")
 })

 // E

 const carrinho = produtosYpe.map((carrinhoDeCompras) =>{
     return `Compre ${carrinhoDeCompras.nome} por ${carrinhoDeCompras.preco}.`
 })



 console.log(nomeDosProdutos, precoDosProdutos, produtosLiquidos, produtosYpe, carrinho)


 // Hoje vou deixar uma mensagem aqui, agredecendo muito por vcs estarem tendo paciencia comigo
 // E tambem dar os parabens a o professor de hoje 
 // o plantao dele foi muito bom, to consegui fazer os exercicios graças a ele 
