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
 
 
 /*//operadores condicionais
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
*/


//Objetos
/*let pessoa = {
   nome: "Guilherme",
   idade: 19,
   peso: 170,
   altura: 168
}


console.log(pessoa.nome)

pessoa.idade = 40
console.log(pessoa.idade)

// Desatribuição de objeto - manipular dados sem mudar objeto. Pegar dados em especifico
const {peso, altura} = pessoa
console.log(peso)
console.log(altura)

//propagação de objeto - junta objetos

const endereco = {
   cidade: "Brasília",
   UF: "DF"
}

const pessoaCompleto = {
   ...pessoa,
   ...endereco
}

console.log(pessoaCompleto)
*/

/*// Função
// Declaração de funcao
function somar(numA,numB) {
   const resultado = numA + numB
   console.log(resultado)
}

//Uso
somar(2,2)
somar(2,3)
somar(2,5)

//Função anônima
const subtrair = function (numA, numB) {
   const resultado = numA - numB
   console.log(resultado)
}

subtrair(4,2)

//arrow fuction - calculo pequeno
const multiplicar = (numA, numB) => numA * numB

multiplicar(2, 2)
*/

// No padrao do node sem projeto não funciona o import por modulo
//importar uma funçao de outro arquivo 
//import { calcularImc } from "./CalculadoraIMC"
// Node de import padrao no node
const CalculadoraIMC = require("./CalculadoraIMC")

const res = calcularImc(80, 170)

console.log(res)
