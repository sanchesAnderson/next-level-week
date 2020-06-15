const express = require("express")
const server = express()
const db = require("./database/db")

//pasta public
server.use(express.static("public"))

//habilitar req body
server.use(express.urlencoded({ extended: true }))


//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//rota index
server.get("/", (req, res) => {
    return res.render("index.html")
})

//rota create point
server.get("/create", (req, res) => {
    
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    const insert = `INSERT INTO places (
        name,
        image,
        address,
        address2,
        state,
        city,
        items
        ) VALUES ( ?, ?, ?, ?, ?, ?, ? );`
    
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            
            return res.render("create-point.html", { errorsave: true })
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(insert, values, afterInsertData)

    console.log(req.body)
    
})

//rota search results
server.get("/search", (req, res) => {

    const search = req.query.search

    function consultRegister(err, rows) {
        if(err) {
            return console.log(err)
        }
        
        const total = rows.length
        return res.render("search-results.html", {places: rows, total: total})
    }

    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, consultRegister)
    
})

//iniciar server
server.listen(3000)
