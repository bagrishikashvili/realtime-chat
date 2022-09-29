const mongoose = require("mongoose");
const { v1: uuidv1 } = require('uuid');

const userSchema = mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        default: uuidv1()
    },
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("rooms", userSchema);