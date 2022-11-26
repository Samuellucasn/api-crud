import express from 'express'
import { router } from './routes/router'
import { sequelize } from './models/db'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // midleware do express para ler requisições post
app.use(router)

app.listen(8080, () => {
    sequelize.sync() // para ativar conexão com o banco de dados
    console.log("ativado servidor http://localhost:8080/")
})