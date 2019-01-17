// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  return a + b
}

console.log(soma(10, 5))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 2))