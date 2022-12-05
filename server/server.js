require('./configs/mongoose.configs');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const app = express();
const port = 8000;
const Truck = require('./models/mongoose.model')

app.use(express.json())
app.use(cors({origin : 'http://localhost:3000', credentials:true}));

require('./routes/mongoose.routes')(app);

const server = app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`)
});

const io = socket(server, {
    cors: {
        origin: '*',

    }
});

io.on("connection", socket => {
    console.log(`socket id: ${socket.id}`);
    socket.on('deleteCrypto', (payload) => {
        Truck.deleteOne({ _id: payload })
          .then((crypto) => io.emit('truckDeleted', payload))
          .catch((err) => console.log('err', err));});

    socket.on("event_from_client", data => {
        socket.broadcast.emit("event", data);
    });
});