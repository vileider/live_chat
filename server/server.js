import express from 'express'
import mysql from 'mysql'

//Cross-Origin Resource Sharing
//The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()

//Grabs the port from the system environment variables or defaults to 8000 if not set
//An environment variable is a variable whose value is set outside the program
const PORT = process.env.PORT || 8000

//express is using cors(middleware)
//Middleware is software which lies between an operating system and the applications running on it.
app.use(cors())

app.use(express.static('public'))

const connection = mysql.createConnection({
    host: 'sl-eu-gb-p01.dblayer.com',
    port: 20421,
    user: 'admin',
    password: 'DUIFPRLMJCFSJRUY',
    database: 'webchat_1'
});

app.get('/test', (req, res) => {
    connection.query('CALL update_chat_and_get_table(?,?,?)',
    ['dude1','hello from server test3','1970-01-01 00:00:01'],(error, results)=>{
        if (error) return console.log(error)
        res.json(results)
    })
})

app.get('/users', (req, res) => {
    connection.query(
        'SELECT (user_name) FROM users WHERE email = \'email@gmail.com\'', (error, results) => {
            //without return lines after would be still executed
            /*if(error){
                console.error(error)
            }*/
            if (error) return console.log(error)

            console.log('data respond to browser');
            const data = results[0]
            res.json(data);
        }
    )
});


// create http server
const server = http.createServer(app);
// create socket.io server
const io = new Server(server, {
    // allows connection from anywhare ('*') for methods GET and POST
    cors: {
        origin: '*',
        //methods: ['GET', 'POST']
    }
});

// creating event 'connection'
// when is connection get 'socket' and print in console 'id' of each of them 
io.on('connection', (socket) => {
    console.log(`user ${socket.id} is connected.`)

    // creating another event 'message' inside event 'connection'
    // when received 'message' socket, send 'data' to other existing sockets
    // broadcast will send the message to all clients in the current namespace except the sender
    socket.on('messageSentFromClient', data => {

        console.log('sent from client',data)
        connection.query('CALL update_chat_and_get_table(?,?,?)',
        [data.user,data.text,data.date],(error, results)=>{
            if (error) return console.log(error)
            io.emit('messageReceivedFromServer',results[0])
        })
        
    })

    // when connection with sockets is disconested (closed browser, closed browser tab, user logged off) print message in console
    socket.on('disconnect', () => {
        console.log(`user ${socket.id} left.`)
    })
})

// listen to port (port number defined in line 14)
server.listen(PORT, () => {
    console.log(`Chat server is running on ${PORT}`)
})