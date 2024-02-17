import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io'
import { createServer } from 'node:http'


const PORT = process.env.PORT || 3000

const app = express()
//aca se crea el servidor http con express para que tenga las funcionalidades del socket.io y este servidor se le pasa al servidor de http

//ahora no escucha listen sino este servidor
const server = createServer(app)

/**
 * al servidor con io se le puede pasar un segundo paramtro 
 * y este es para cunado se desconecte un usuario del servidor
 * 
 * optional
*/
const io = new Server(server ,{
    connectionStateRecovery :{}
})

/**
 * con los eventos le decimos que cuando escuche una conexion se ejecute el codigo 
 * 
 * ¿pero quien escucha?
 * 
 * el que escucha es el cliente en este caso index.html que tiene el scrip
 */
io.on('connection', (socket) => {
    console.log('esta corriendo')

    socket.on('disconnect', () => {
        console.log('se desconectaron')
    })


    /**
     * aca resivimos el evento de chat message
     * 
     * y le decimos que si el socket resive el evento, 
     * que lo emita a los demas servidores
     * 
     * y este lo resive el servidor en index
     */

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })


})

//le decimos al servidor que use el logger, y esto nos da informacion de la pagina
app.use(logger('dev'))

app.get('/', (req, res) => {
    //esta es una variable que brinda node y es el directorio donde nicialicamos (pwd)
    res.sendfile(process.cwd() + '/client/index.html')
})

server.listen(PORT, () => {
    console.log(`server runnning on http://localhost:${PORT}`)
})