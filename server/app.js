const express = require('express')
const app = express()
const http = require('http')

const { Server } = require('socket.io')
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log('A user is connected!')
})

app.get('/', (req, res) => {
    res.send('Car Ordering App!')
})

app.get('/driver', (req, res) => {
    res.sendFile(__dirname + '/driver.html')
})

app.get('/sender', (req, res) => {
    res.sendFile(__dirname + '/sender.html')
})

const PORT = '3000'

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})