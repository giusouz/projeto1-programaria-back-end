const express = require("express")
const router = express.Router() // rota da url para servidor

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send ("Olá, mundo!") // resposta enviada
}

function mostraPorta () {
    console.log('Servidor criado e rodando na porta ', porta)
}
/* chamar a função 
mostraPorta() "desativado"*/

app.use(router.get('/ola', mostraOla)) // localização da rota

//rodar função para verificar (ouvir) servidor
app.listen(porta, mostraPorta) //primeiro le porta depois mostraPorta

// servidor localhost:3333/ola