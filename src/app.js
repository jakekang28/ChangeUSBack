const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const db = require('../src/db/db')
const http = require('http')
const WebSocket = require('ws')
const bodyParser = require('body-parser')
const { clearInterval } = require('timers')
const cookieParser = require('cookie-parser')

const quizRoutes = require('../src/routes/quizRoutes')
const challengeRoutes = require('../src/routes/challengeRoutes')
const uploadRoutes = require('../src/routes/uploadRoutes')
const userRoutes = require('../src/routes/userRoutes')

app.get('/',(req,res)=>{
    res.send('ddd')
});

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/challenges', challengeRoutes)
app.use('/api/quiz', quizRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/users',userRoutes)
app.set('port', process.env.port || 4003)

const server = http.createServer(app).listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
});


const wss = new WebSocket.Server({server})

wss.on('connection', (ws, req) =>{
    console.log('connected to browser')
    ws.on('close', () =>{
        console.log('Disconnected from the browser')
        clearInterval(ws.interval)
    })
    ws.interval = setInterval(() =>{
        if(ws.readyState === ws.OPEN){
           db.query(`SELECT SUM(score) FROM userdb`, (err, rows, fields) =>{
            ws.send(JSON.stringify(rows))
                })
        } 
    },500)
})


