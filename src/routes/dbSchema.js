

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    }
})

module.exports = mongoose.model('User', UserSchema)