/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de blackjack!")
    if (confirm("Quer iniciar uma nova rodada?") !== true){
       console.log("O jogo acabou")
   }else{
    
      deixe i = 0
    let cartasJogador = []
    let cartasComputador = []
    
    enquanto (i < 4) {
       if(i < 2){
          cartaNova = comprarCarta()
          cartasJogador.push(CartaNova)
       }else{
          cartaNova = comprarCarta()
          cartasComputador.push(CartaNova)
       }
          i++
    }
   
    const somaDoArray = (array, campoDoObjeto) =>{
       deixe soma = 0
       array.forEach(elemento =>{
          soma += elemento [campoDoObjeto]    
       } )
       retornar soma
    }
    
    const somaTextoDoArray = (array, campoDoObjeto) =>{
       let letras = ""
       array.forEach(elemento => { 
          letras = letras + "" + elemento [campoDoObjeto]    
       })
        letras de retorno
    }
    
    const somaDoJogador = somaDoArray(cartasJogador, 'valor')
    const somaDoComputador = somaDoArray(cartasComputador, 'valor')
    const textoDoJogador = somaTextoDoArray(cartasJogador, 'texto')
    const textoDoComputador = somaTextoDoArray(cartasComputador, 'texto')
    
    console.log(`Usuário - cartas:${textoDoJogador} - pontos: ${somaDoJogador}`)
    console.log(`Computador - cartas: ${textoDoComputador} - pontos: ${somaDoComputador}`)
    
    if(somaDoJogador > somaDoComputador){
       console.log(`O usuário ganhou!`)
    }else if(somaDoJogador < somaDoComputador){
       console.log(`O computador ganhou!`)
    }else{
      console.log ( `Empate!` )
    }
    } 