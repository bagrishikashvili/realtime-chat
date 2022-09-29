/* global process */
/* global __dirname */
const fs = require('node:fs');
const express = require("express");
const app = express();
const server = require("http").Server(app);
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const io = require("socket.io")(server, { cors: { origin: "http://localhost:3000" } });

// Cors Configuration
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

dotenv.config();
app.use(express.json());
mongoose.connect(process.env.DB_URI, {}).then(() => {
    console.log("Mongodb Connected Successfully");
}).catch((err) => {
    console.log(err);
});

io.on("connection", (socket) => {
    
    socket.on("join-room", (data) => {
        const { userName, roomId} = data;
        socket.join(roomId);
        io.to(roomId).emit('join-user-room', userName);
    });


    socket.on("leave-room", (data) => {
        const { userName, roomId } = data;
        io.to(roomId).emit('leave-user-room', userName);
        socket.leave(roomId);
        
    });
});

server.listen(process.env.PORT, () => {                
    console.log(`server is running on port ${process.env.PORT}`);
});

fs.readdirSync(__dirname + '/Routes').forEach(function (file) {
    require(__dirname + '/Routes/' + file)(app);
});