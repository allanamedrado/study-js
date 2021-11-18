function showMessage(message) {
    document.getElementById('message').textContent = message
}

showMessage("Changed")

/* 
detectando erros

visualizar o erro no console do devtools
olhar qual linha no codigo esta o erro
caso nao seja algo facil de resolver
pesquisar o erro no google

*/

// --------------------------------

/* 
Variables 

qualquer aplicação é baseada em dados
dados é armazenado na memoria do pc

*/

let name; //declarando variavel
let product = 'Bota'; 
let discounted = true; 

//tambem podemos declarar multiplas variaveis com um unico let

let name,
    product,
    discounted;

//js mantem o controle dos locais de memoria e extrai os valores

let welcome = 'Welcome';
showMessage(welcome)

/* 
nomeando variaveis
começar com: _ $ letra
nome da variavel deve ser bem descritivo
camelNotavion
ex: accountNumber
*/

/* 
const são espaços na memoria que não variam, ou seja, não temos como realizar a alteração depois de declarar

diferenças de var e let:
declarar uma variavel é com let, pois let tem um escopo local, caso eu declare uma variavel com let e tente apresentar ela antes da 
declaração dará erro de referencia 

porém var tem um escopo global, independente de onde declare vc pode utilizar 
com var não obtem os erros pra poder tratá-los - undefined é uma resposta comum
*/

showMessage(price);
let price = 2;

