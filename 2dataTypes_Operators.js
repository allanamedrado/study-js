/*
data types and operators

Numbers

podemos realizar operações matemáticas 

operador de incremento/decremento, semelhante ao +1/-1
*/

let price = 20;
console.log(typeof price)

price = price + 1; // + - / * %  
price += 1; // + - / * %  
console.log(price) //22
console.log(--price) //21   -observar onde colocar o incremento

/* 
operator precedence

ao realizarmos uma operação devemos observar a precedencia que é realizada a operação, primeiro 
sempre realizamos a multiplicação, divisão e módulo, e depois adição e subtração

*/

let operator = 3 + 2 * 2
console.log(operator) //7

//porém sempre que colocarmos um parenteses, será a primeira operação a ser realizada.

let oper = (3+2) * 2;
console.log(oper) //10


// Number precision 

let precision = 1.1 + 1.3
console.log(precision) // 2.400000000004 

//Negative numbers, funcionam normalmente mas é bom utilizar (-2)

let amount = -20
console.log(amount) //-20



/*Strings são textos
podemos usar aspas duplas, simples e apóstrofo

uma vantagem de usar apóstrofo é quando querermos exibir dados de outros locais ou variaveis
com ${name}

*/

let message = `Using string literals ${precision}`
console.log(message) //Using string literals 2.4000000000000004


//Manipulando strings

//concatenação 

let m = "Hello"

console.log(m + "world") //Helloworld
//temos varios métodos para manipular string, basta usar uma variavel que seja do tipo string e .algumMetodh
//consultar MDN para verificar os metodos existentes 
//também temos propriedades, ex lenght que verifica o tamanho de uma string


//-----------------------------

//convertendo strings e numeros

amount = amount.toString() //converte em string
console.log(typeof amount) //string

let number = '123'
number = +number //converte string em number
console.log(typeof number) //number
// tambem podemos converter string em number usando parseFloat(), parseInt(), Number() 

//--------------------

//Boolean

let saved = false;
console.log(typeof saved) //boolean
saved = !saved //true
console.log(saved) //true

//--------------

//null or undefined

let test;
console.log(test) //undefined - não inicializamos uma variavel ou um valor

test = null;
console.log(test) //null - queremos apagar o valor de uma variavel

// ------------------
// Objects and symbols


let person = {
    name: "Allana",
    age: 23,
    birth = '30/12/1997'
}

console.log(typeof person) //object
console.log(person.name) // Allana

//podemos utilizar metodos pra executar bloco de codigo e realizar alguma ação



