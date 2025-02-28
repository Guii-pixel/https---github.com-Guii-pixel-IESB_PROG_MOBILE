// Comentário de uma linha

/* comentário em bloco
*/

//variaveis
// var = não usa no dia a dia
//let nome = "guilherme";
//const idade = 20;

//idade = "teste"

 //var idade = 22

//Operadores
 const soma = 2 + 2
 const subtracao = 2 - 2
 const multiplicacao = 2 * 2
 const divisao = 2 / 2
 const resto = 2 % 2

 // Operadores de comparação
 const igual = 2 == 2
 const diferente = 2 != 2 
 const maior = 4 > 2
 const menor = 2 < 4
 const maiorOuIgual = 2 >= 2
 const menorOuIgual =  3 <= 4
 
 
 //operadores condicionais
 idade = 16;
 if (idade >= 18) {
    console.log("Maior de Idade")
 }
 if (idade >= 18) {
    console.log("Maior de iadde")
 } else {
    console.log("menor de idade")
 }


 //Operador Ternário
 const mensagem = idade >= 18 ? "Maior de idade" : "menor de idade"
 console.log("Mensagem ->", mensagem)


 //Arrays - Listas
 const frutas = ["Maçã", "Banana", "uva"]
 console.log(frutas[0])
 console.log(frutas[1])
 console.log(frutas[2])

 console.log(frutas.length)

 frutas.push("laranja")
 console.log("E agora, quantas frutas?")
 console.log(frutas.length)

 frutas.forEach(fruta => console.log(fruta))

 frutas.pop()
console.log(frutas)