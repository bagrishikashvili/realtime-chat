const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: mongoose.Types.Decimal128,
    },
    inactive_balance: {
        type: mongoose.Types.Decimal128,
    }
});

module.exports = mongoose.model("users", userSchema);