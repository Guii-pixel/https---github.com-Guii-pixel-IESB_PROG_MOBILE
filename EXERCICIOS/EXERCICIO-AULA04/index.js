import { soma, subtracao, divisao, multiplicacao } from "./calculadora.js";

console.log("soma de: ", soma(10, 5));
console.log("subtração de: ", subtracao(10, 5));
console.log("Multiplicação de: ", multiplicacao(10, 5));
console.log("Divisão de: ", divisao(10, 5));



import moment from "moment";

/// Atividade 2: Utilizando Moment.js para Calcular Idade

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear(); // 
    return anoAtual - anoNascimento; 
  }
  
  const anoNascimento = 1990;
  const idade = calcularIdade(anoNascimento);
  console.log(`Idade: ${idade} anos`);