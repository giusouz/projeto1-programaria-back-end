const express = require ('express') // ativar pacote
const router = express.Router() //2 ativar rota

const app = express() // chamar função express
const server1 = 2023  // definir servidor (numero)
function abrirServer() {
    console.log("Servidor ativo: ", server1)
} // função do servidor

function abrirMulher (request, response) {
    response.json ({
        nome: 'Giuliana Souza',
        imagem: '<iframe src="https://assets.pinterest.com/ext/embed.html?id=687502699389257944" height="560" width="345" frameborder="0" scrolling="no" ></iframe>',
        minibio: 'Dev aprendiz'
    }) //json- varias informações
} //2 definir resposta do serv

app.use(router.get('/mulher', abrirMulher)) // localização da informaçao no servidor localhost:2023/mulher
app.listen(server1, abrirServer) //ler