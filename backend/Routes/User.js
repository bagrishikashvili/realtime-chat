const User = require("../Models/User");
const verify = require("./../Middleware/index");
const _ = require('lodash');


const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({user: {
            username: user.username,
            id: user.id,
            balance: user.balance.toString()
        }, message: "Welcome 🙌 "});
    
    } catch (err) {
        res.status(500).json(err.message);
    }
}


module.exports = function (app) {
    app.get('/api/get-current-user', verify, getCurrentUser);
};