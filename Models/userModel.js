const mongoose = require('mongoose')



//define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    }

})

const users = mongoose.model('users', userSchema)

module.exports = users