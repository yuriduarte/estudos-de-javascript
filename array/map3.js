
Array.prototype.map2 = function(callback){
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))    
  }
  return newArray
}
const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);

const pObjeto = variavel => JSON.parse(variavel)
const pPreco = variavel2 => variavel2.preco

const result = carrinho.map2(pObjeto).map2(pPreco)
console.log(result);
