// Exercício 6: Arrays
// 1. Adicione um número ao final do array.
let list = [10,20,30,40,50]
list.push(60)

console.log(list)

// 2. Remova o primeiro número do array.
list.shift()
console.log(list)

// 3. Encontre o maior número do array.
let maiorNumero = Math.max(...list)
console.log(maiorNumero)

//4. Encontre o menor número do array.
let menorNumero = Math.min(...list)
console.log(menorNumero)