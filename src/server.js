const express = require("express")
const server = express()

//pasta public
server.use(express.static("public"))


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

//rota search results
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//iniciar server
server.listen(3000)
