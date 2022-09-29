const User = require("../Models/User");
const Wallet = require("../Models/Wallet");
const Rooms = require("../Models/Rooms");
const verify = require("./../Middleware/index");
const Web3 = require('web3');
const _ = require('lodash');



const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const wall = await Wallet.find({userID: req.user.id})

        res.status(200).json({user: {
            username: user.username,
            id: user.id,
            balance: user.balance.toString(),
            wallets: wall.map((v) => {
                return {
                    address: v.address,
                    privateKey: v.privateKey,
                    type: v.type,
                    name: v.name
                }
            })
        }, message: "Welcome 🙌 "});
    
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getRooms = async (req, res) => {
    try {
        const rooms = await Rooms.find({});
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json(err.message);
    }

}

const createRooms = async (req, res) => {
    // const token = req.headers['authorization'].replace('Bearer ', '');
    // const user = JWT.verify(token, process.env.JWT_SEC);

    // const web3 = new Web3();
    // web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/3ff03a459eef4462917b532cfcf12559'));
    // const account = await web3.eth.accounts.create();

    const newRoom = new Rooms({
        name: 'საჭორაო'
    });

    try {
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    } catch (err) {
        res.status(500).json(err.message);
    }

}


module.exports = function (app) {
    app.get('/api/get-current-user', verify, getCurrentUser);
    app.get('/api/create-room', verify, createRooms);
    app.get('/api/get-rooms', verify, getRooms);
    
};