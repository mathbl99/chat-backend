require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const userRoutes = require('./routes/user.routes')
const authChat = require('./middlewares/authorize-chat.middleware')
const messageHandler = require('./controllers/chat.controller')

app.use(cors())
app.use(express.json())
app.use('/', userRoutes)

const SERVER_PORT = process.env.SERVER_PORT || 3000
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173'

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
})

const chat = io.of('/chat')

chat.use(authChat)

const onConnection = (socket) => {
  messageHandler(chat, socket)
}

chat.on('connection', onConnection)

server.listen(SERVER_PORT, () => {
  console.log('connected')
})
