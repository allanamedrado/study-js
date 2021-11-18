//Functions

//é um bloco de codigo com nome e podemos chamar sempre que quiser
let message = 'one way to create a function'
showMessage(message)

function showMessage(message) {
    console.log(message)
}

//se temos codigo que queremos executar +1 então criamos uma função, é preciso chamar a função pra executar a função

//expressão de funções - declarar função e iniciar em uma variavel

let fn = function () {
    console.log('other way to create a function')
}

fn();

const test = () => {
    console.log('another way to create a function using arrow function')
}

test()

//passando informação pra funções - dessa forma a função pode usar os dados q eu mandar pra dentro dela, tornando assim a função uma maneira mais geral, como
//feito na primeira função, mas podemos passar mais de um argumento pra função 

let messages = ['First', 'Second Message', 'Another Message']

function showMessages(messages) {
    for (let i of messages) {
        console.log(i)
    }
}

showMessages(messages) //First Second Message Another Message

//caso não passe nenhum argumento pra função então ou irá dar um erro 'function expected an argument' caso realize operações com o arg, ou ira definir o argumento da função como undefined

//return values

function sumValues(value) {
    let sum = value + 15;
    return sum
}

console.log(sumValues(2)) //17


//function scope - funções tem seu proprio escopo, então, temos tbm que as variaveis só estao visiveis dentro daquele escopo
//parametros e variaveis só existem dentro dessa função, dps desaparecem


function getSecretCode(value) {
    let code = value * 42
    return code
}

let secretCode = getSecretCode(2);
console.log(secretCode) //84
//console.log(code) Uncaught ReferenceError: code is not defined -> fora do escopo, variavel só existe dentro do escopo da funcao 
//porém as funções tem acesso a todo o escopo externo, ou seja, podem usar as variaveis definidas fora do escopo da funcao

const key = 42;

function getKeyValue(value) {
    let result = value * key;
    return result;
}

console.log(getKeyValue(2)) // 84

//quando uma funcao terminar de executar, as variaveis locais irao desaparecer


//function who modify web pages

function mostraMensagem(message) {
    document.getElementById('message').textContent = message
}
mostraMensagem('oi')

//'document' é um objeto da DOM que se refere a toda web page

