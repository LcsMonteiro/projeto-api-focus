const express = require("express")
const app = express()

//Conectar database
const db = (require("./src/data/database"))
db.connect()
// Rotas

// Conexão json
app.use(express.json())

//Servidor
app.listen(3333,() => console.log("Sucesso!"))
