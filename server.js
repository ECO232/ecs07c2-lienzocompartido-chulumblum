import express from 'express';
import { Server } from 'socket.io';
const PORT = 3000;

const expressApp = express()
const httpServer = expressApp.listen(PORT, () => {
    console.table(
        {
            'Controller:': 'http://localhost:3000/controller',
            'Display:': 'http://localhost:3000/display',
        })
})

expressApp.use('/display', express.static('public-display'))
expressApp.use('/controller', express.static('public-controller'))
expressApp.use(express.json())


const io = new Server(httpServer, {path: '/real-time'});

io.on('connection', (socket) => {
    console.log('Connected', socket.id)
})