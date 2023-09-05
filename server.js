// ativar pacote express
const express = require("express")

const app = express()
const porta = 3333 //servidor localhost (numero)
function mostraPorta () {
    console.log('Servidor criado e rodando na porta ', porta)
}
/* chamar a função 
mostraPorta() "desativado"*/

//rodar função para verificar (ouvir) servidor
app.listen(porta, mostraPorta) //primeiro le porta depois mostraPorta

//base servidor