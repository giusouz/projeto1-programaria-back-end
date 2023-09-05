const express = require('express')
const router = express.Router()

const app = express()
const server2 = 3333
function abrirServer2 () {
    console.log('Servidor ativo: ', server2)
}

function abrirHora(require, response){
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

app.listen(server2, abrirServer2)
app.use(router.get('/hora', abrirHora))