const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    privateKey: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("wallets", userSchema);