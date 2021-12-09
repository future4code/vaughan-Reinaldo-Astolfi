/* Exercício de interpretação de código

1- Bom o console ira voltar 10 por que é a soma dos valores


2-
A- O console ira imprimir somente os números maiores que 18

B- Não

3- Se o usúario digítar o número 4, o console retornará 4 linhas com asteriscos 
*
**
***
****

*/


// Exercício de escrita de código


// 1


let quantidadeDePets = Number(prompt("Quantos bichinhos de estimacão você tem?"))
const array = []

if(quantidadeDePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let array = []
    let i = 0
    while(i < quantidadeDePets){
        let nomeDosPets = prompt("Qual é o nome dos seus pets?")
        array[i] = nomeDosPets 
        i++
    }
    console.log(array)
}


// 2

// Não consegui nem começar :( S/2     