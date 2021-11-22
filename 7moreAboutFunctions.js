//Aprofundando functions

let greeting = (function () {
    let message = 'Hello'
    let getMessage = function () {
        return message
    };
})(); //expressao de funcao imediatamente invocada
console.log(greeting) // Uncaught TypeError: Cannot read properties of undefined (reading 'message') undefined

let greetingWorks = (function () {
    let message = 'Hello'
    let getMessage = function () {
        return message
    };
    return {
        getMessage: getMessage
    }
})();

console.log(greetingWorks.getMessage()) //Hello

function setupCounter(val) {
    return ++val
}

function setupACounter(value) {
    return function counter() {
        return value ++
    }
}

let count = setupCounter(1)
console.log(count) //2

let counter1 = setupACounter(12)
console.log(counter1()) //12
console.log(counter1()) //13

function printAll() {
    for (let i = 0; i< arguments.length; i++) {
        console.log(arguments[i]) //arguments é uma local variavel que esta disponivel dentro de qualquer funcao, assim como outros argumentos(caller, lenght)
    }
}

console.log(printAll(1,2,3,4,5)) // 1 2 3 4 5 undefined

//arrow functions - funcoes anonimas

let greet = (name) => 'Hello ' + name

console.log(greet('Allana'))

let sum = (num1, num2) => num1+num2

console.log(sum(3,4)) //7

//comportamento da palavra this - refere se ao dono da funcao que tamo eecutando, this referese ao escopo global, em arrow functions this nao existem

let person = {
    name: 'Allana',
    regularFunction: function() {
        console.log(this) //arrowFunction() name regularFunction()
        console.log('Hi ' + this.name)
    },
    arrowFunction: () => console.log('Hi ' + this.name) //aqui this refere-se ao objeto que contem a funcao, this procura pelo contexto global
}

person.regularFunction() //Hi Allana
person.arrowFunction() //Hi <<BS_START>>{"bs":{"hardReload":true,"scroll":{"x":0,"y":0}}}<<BS_START>> WTF??
console.log(this) //objeto Window-> dentro dele contem esse name <<BS_START>>{"bs":{"hardReload":true,"scroll":{"x":0,"y":0}}}<<BS_START>>

let p1 = { name: 'Joao', age: 22}
let p2 = { name: 'Allan', age: 22}

let sayHi = function() {
    console.log('Hi ' + this.name)
}

//todo objeto de funcao possui um metodo call
sayHi.call(p1) //Hi Joao -> funciona pq estamos usando o metodo call pra vincular o valor this ao objeto pessoa
sayHi.call(p2) //Hi Allan

//tbm temos o metodo apply

function introduction(name, profession) {
    console.log('My name is ' + name + ' and I am a ' + profession)
}

//usar o metodo apply quando os parametros consistirem em uma matriz
//apply aceita um unico array de argumentos e call aceita uma lista de argumentos

introduction('Allana', 'Web developer') //My name is Allana and I am a Web developer
introduction.apply(undefined, ['Allana', 'lawyer']) //My name is Allana and I am a lawyer
introduction.call(undefined, 'Allana', 'artist') //My name is Allana and I am a artist


//parametros padrão 

function testingParameters(name="Allana") {
    console.log('Hi ' + name)
}

testingParameters() //Hi Allana
testingParameters('Joao') //Hi Joao

//Rest parameters

function testingRest(message, ...names) {
    console.log(message + ' todo mundo')
    names.forEach(name => console.log('Hi ' + name))
}

testingRest('Ola', 'Allana', 'Maria') //ola todo mundo hi allana hi maria

//spread operator

function display(c1, c2, c3, ...others) {
    console.log(others);
    console.log(c1,c2,c3)
}

let letters = 'abcdef'

display(...letters) // [d,e,f] a b c 

//spread operators transforma uma matriz em elementos separados e o rest operator trnsforma elementos separados em uma matriz