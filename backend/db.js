const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URI)
.then(() => console.log("Database connected successfully..."))
.catch(err => console.log(err))

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 8
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }, 
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    balance: {
        type: Number,
        requried: true
    }
})

const Account = mongoose.model('Account', accountSchema)
const User = mongoose.model('User',userSchema)

module.exports = {
    User, Account
}