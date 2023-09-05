const express = require ('express')
const router = express.Router()

const app = express ()
const server1 = 3333

const mulheres = [
    {
        nome: 'Giuliana Souza',
        imagem: '<iframe src="https://assets.pinterest.com/ext/embed.html?id=5629568276942219" height="445" width="345" frameborder="0" scrolling="no" ></iframe>',
        minibio: 'Dev aprendiz' // para continuar virgula após as propriedades 
    },
    {
        nome: 'Becky Rebecca',
        imagem:'<iframe src="https://assets.pinterest.com/ext/embed.html?id=469078117453282824" height="406" width="345" frameborder="0" scrolling="no" ></iframe>',
        minibio:'Trambiqueira e atriz'
    },
    {
        nome: 'Joana Guerra',
        imagem: '<iframe src="https://assets.pinterest.com/ext/embed.html?id=1829656092454777" height="445" width="345" frameborder="0" scrolling="no" ></iframe>',
        minibio: 'Namorada bonita da Giuliana'
    }
] // constante/variavel de lista [] e dentro do { objetos }

function abrirMulheres (request, response) {
    response.json(mulheres) // variavel da lista
}

function mostrarServer () {
    console.log("Servidor ativo: ", server1) // mostrar se esta ativo no terminal
}

app.use(router.get('/mulheres', abrirMulheres))
app.listen (server1, mostrarServer)

// com o server antigo 2023 nao funcionou, mas o 3333 funcionou ???