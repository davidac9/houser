require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env
const ctrl = require('./controller')


const app = express()

app.use(express.json())
// app.use(session({
//     secret: SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false
// }))

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.newHouse)
app.delete('/api/houses/:house_id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log(`can't connect to db`, err)
})
app.listen(SERVER_PORT, ()=> console.log(`eating ${SERVER_PORT} brownies is good for your health`))