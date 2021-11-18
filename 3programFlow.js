//Fluxo do programa

//usando condicionais - if/se (condicao for true) { executa esse bloco } senão/else { executa esse }

let state = 'DF'
let taxPercent = 0

if (state === 'DF') {
    taxPercent = 7
}

console.log(taxPercent) //7

//o que é verdadeiro ou falso?

// false = false
// false = 0
// "" or '' = false
//nul == false
//undefined = false

//true = tudo o que não é false
//"0" = true

if ("0") {
    console.log(true) //true
}

if(0) {
    console.log(false) //não entrou no bloco
}

if ( state === 'FL') {
    console.log(taxPercent = 7)
} else if (state === 'MT') {
    console.log(taxPercent = 0)
} else {
    console.log(taxPercent = 1) //entrou aqui
}

//diferença entre === e ==

//a diferença é pq === compara exatamente os tipos, se fizer a comparação entre == ele ira converter o tipo pra se igualar

if (1 == "1") {
    console.log('true') //entrou aqui 
} else {
    console.log('false')
}

if (1 === "1") {
    console.log('true') 
} else {
    console.log('false') //entrou aqui 
}

// operador ternário - maneira simplificada ed realizar a condicional if, se chama ternario pois temos 3 declarações, a condição, declaração caso for V e caso for F

const price = 21;
let mess = (price > 10) ? ('expensive') : ('cheap')
console.log(mess) //expensive

//blocos de escopo usando let - let ou const só estara disponivel naquele bloco 

if (true) {
    let value = 'yes'
    console.log(value) //yes
}
//console.log(value) // value is not defined

/* 
a variavel não esta disponivel fora desse bloco de instrução, então, podemos encapsular um codigo e ele não 
vai sair "pra fora" do bloco de codigo. Isso por que a variavel let e const tem escopos locais e não podem ser
usadas fora daquele bloco de escopo 'local'. MAS
caso use a variavel var que tem um escopo global podera usar 
*/

//console.log(valor) //caso use ela antes da declaração sera undefined

if (true) {
    var valor = 'opa'
    console.log(valor)
}

console.log(valor) //opa
//por isso a melhor opção é usar let ou const

// ------------------

//looping com for - repetir o codigo repetidas x

for(let i = 0; i < 3; i++) {
    console.log(i) //0 1 2
}

//primeiro verifica se i é menor que 3, como inicializa com 0, i de fato é menor que 3 então 'printa' o i = 0, depois incrementa +1 no variavel i, e repete
//esse mesmo processo ate chegar i=3 que para o loop


//while loop

let count = 1;
while (count < 5) {
    console.log(count) // 1 2 3 4
    count++
}

//aqui temos uma variavel igual a 1 enquanto ela for menor que 5 então 'printamos' ela, e depois incrementamos +1 a count que ficara 2
//2 é menor que 5 então 'printa' ate chegar em 5 que irá parar o loop


//do while loop - esse loop é usado quando temos a garantia de que o corpo do codigo sera executado pelo menos uma vez

let i = 1;

do {
    console.log(i) //1 2 3 4
    i++
} while(i < 5);

//aqui primeiro 'printa' a variavel i criada e incrementa mais 1, na primeira inicialização temos 1, incrementa +1 então 2
//enquanto i for menor que 5, quando chega em while i não é mais 1, agora é 2, e ainda continua sendo < 5, dps 3 < 5, dps 4<5 e por fim 5 !< 5

