import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() {
    axios.get("http://localhost:3000/orders/1").then(({data}) => { //desestruturando data do resultado do axios
        setText(JSON.stringify(data))
    });
}

//o then aqui é usado pra caso de sucesso, mas pode 'aninhar' outros then

//primeiro chama uma funcao assíncrona -get
//depois encadeia a funcao then a essa solicitação, apos a conclusao do get executa a funcao then
//promise lida com o evento de conclusão da solicitação assíncrona

export function getCatch() {
    axios.get("http://localhost:3000/orders/123")
        .then(({data}) => { //desestruturando data do resultado do axios
        setText(JSON.stringify(data))
    })
    .catch((error) => setText(error)) //lidando com o erro capturado pela promise
}
//then e catch retornam promises
export function chain() { 
    axios.get("http://localhost:3000/orders/1").then(({data}) => { //primeiro captura o pedido 
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`) //captura o address do pedido atraves do retorno do then que sao os dados do pedido
    })
    .then(({data}) => { //pega os dados do then anterior atraves do return
        setText(`City: ${data.city}`)
    });
}

export function chainCatch() {
    axios
        .get("http://localhost:3000/orders/1")
        .then(({data}) => { //primeiro captura o pedido 
           return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`) //captura o address do pedido atraves do retorno do then que sao os dados do pedido
        })
        .then(({data}) => { //pega os dados do then anterior atraves do return
            setText(`City: ${data.city}`)
        })
        .catch(err => setText(err)); //captura qualquer erro da cadeia de chamadas anteriores
}

export function final() {
    showWaiting() //adiciona uma tela pra mostrar um spinner que mostra a busca dos dados
    axios
        .get("http://localhost:3000/orders/1")
        .then(({data}) => { 
           return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`)
        })
        .then(({data}) => { 
            setText(`City: ${data.city}`)
        })
        .catch(err => setText(err))
        .finally(() => { //funcao que executa apos then e catch 
            setTimeout(() => {
                hideWaiting() //esconde o spinner apos retornar os dados
            }, 1500)
        });
}
