var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE mots;'

var seedQuery = 'INSERT INTO motos.mots (title, nick, avatar, about) VALUES ("KTM 125", "ktm_125", "/images/125.jpg", "Характерный мотоцикл KTM 125 EXC построен специально для поклонников эндуро"), ("KTM 250", "ktm_250", "/images/250.jpg", "KTM 250 EXC TPI нового поколения представляет собой идеальное сочетание мощности и управляемости"), ("KTM 300", "ktm_300", "/images/300.jpg", "KTM 300 EXC был в авангарде безумных темпов развития экстремального enduro самого высокого уровня");'
var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : '1234',
    database: 'motos'
    });
    connection.connect()

    console.log("Running SQL seed...")


// Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
// Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })

    