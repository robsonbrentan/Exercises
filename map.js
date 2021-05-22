// exemple 1: CONCEITOS DO MAP
// const numbers = [1, 2, 3]
// const doubleNumbers = numbers.map(item => item * 2)
// console.log (doubleNumbers)


// EXEMPLE 2: DESCONTO DE 50% NOS PRODUTOS MAIORES QUE 30
const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

const saleProducts = products
.map(product => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2}
    }

    return (product)
})

console.log (saleProducts)


  