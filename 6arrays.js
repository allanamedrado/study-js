//Arrays

let values = [1,2,3];

console.log(values.length)

console.log(values)

//acessando e modificando itens na matriz 
values[1] = 3; 

console.log(values[1]) //3


//manipulando matrizes - adicionando um item na matriz 
values.push(4)

console.log(values) // 1 3 3 4

const last = values.pop() //remove o ultimo elemento da matriz e retorna esse elemento

console.log(last, values) // 4 [1,3,3]

const first = values.shift() //remove o primeiro elemento da matriz e retorna

console.log(first, values) //1 [3,3]

values.unshift(1)

console.log(values) //[1,3,3]

//slice() cria uma nova fatia de uma matriz original
// e splice() inserir ou excluir elementos

const numbers = [1,2,3,4,5,6]

let modify = numbers.slice(0,4)
console.log(modify) //1 2 3 4 -> primeiro parametro é da onde inicia ate onde vai terminar o array

numbers.splice(2,1)
console.log(numbers) //primeiro parametro é o indice do valor que queremos remover e o segundo é o numero de argumentos q quero deletar

//procurar um elemento no array

const filter = numbers.filter((item) => {
    return (item > 3) //2 false 3 true ->caso eu coloque um console.log aqui o retorno é true or false
})

console.log(filter) //4 5 6

const find = numbers.find((item) => {
    return item == 3
})

console.log(find) //undefined

let sayings = new Map()
sayings.set('cat', 'meow')
sayings.set('dog', 'woof')
sayings.set('elephant', 'toot')

console.log(sayings)

for(let [key, value] of sayings) {
    console.log(key + ' goes ' + value) //cat goes meow etc
}
