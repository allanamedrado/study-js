//Objects and DOM

//propeidades do objeto

function showMessage(message) {
    console.log(message)
}

let mySymbol = Symbol();
let person = {
    name: "Allana",
    age: 23,
    partTime: false,
    [mySymbol]: 'secret',
    showInfo: function (age) {
        showMessage(this.name + age)
    }
}

//propriedades podem ter qualquer tipo de dados, podemos ter objetos dentro de objetos

console.log(person.name) //Allana

//alterar valores das propriedades 

person.age = 24;

console.log(person.age) //24

//um symbol pode ser usado dentro de um obj pra ocultar informações, ex vc quer ocultar informações de salario caso esteja fazendo uma aplicação pra RH

console.log(person[mySymbol]) //secret 

console.log(person.mySymbol) //undefined

person.showInfo(24) //Allana24, pois referenciamos o name com a palavra reservada this e também passamos um parametro pro metodo do objeto


//methods - são funções anexadas a um objeto que realizam alguma ação

//para nos referirmos a uma propriedade que pertence a um objeto dentro do escopo do objeto usamos a palavra reservada 'this'


//passando objetos pra funções

let message = 'Hello'

function changeMessage(message) {
    message = 'Oi'
}
