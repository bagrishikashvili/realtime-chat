const JWT = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../Models/User");


const registration = async (req, res) => {
    const newUser = new User({
        username: 'Bacho',
        balance: 0.00,
        password: CryptoJS.AES.encrypt('Grishka22@', process.env.PASS_SEC).toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(500).json({message: "Invalid Credentials"});
        }
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const realPassword = await hashedPassword.toString(CryptoJS.enc.Utf8);
        if (realPassword !== req.body.password) {
            return res.status(500).json({message: "Invalid Credentials"});
        }
        const token = JWT.sign({id: user._id, username: user.username},  process.env.JWT_SEC, { expiresIn: "1d" });
        return res.status(200).json({
            token: token, 
            user: {
                username: user.username,
                id: user.id,
                balance: user.balance.toString()
            }
        });
    } catch (err) {
        return res.status(500).json(err.message);
    }
}




module.exports = function (app) {
    app.get('/api/registration', registration);
    app.post('/api/login', login);
};