//importar sqlite3
const sqlite3 = require("sqlite3").verbose()

//cria banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize( () => {

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)    
    
//     const insert = `INSERT INTO places (
//         name,
//         image,
//         address,
//         address2,
//         state,
//         city,
//         items
//         ) VALUES ( ?, ?, ?, ?, ?, ?, ? );`
    
//     const values = [
//         "Papersider",
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//         "Guilherme Gamballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(insert, values, afterInsertData)

//     // function deleteRegister(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso")
//     // }

//     // function consultRegister(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
        
//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // }

//     // db.run(`DELETE FROM places WHERE id = ?`, [1], deleteRegister)

//     // db.all(`SELECT name FROM places`, consultRegister)
    
// })