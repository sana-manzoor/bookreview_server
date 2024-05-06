const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const users = require('../Models/userModel')

exports.userRegisterController = async (req, res) => {

    try {
        console.log(req.body)
        const { username, email, password } = req.body
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            res.status(406).json("Already Existing user.....!")
        }
        else {
            const newUser = new users({
                username, email, password
            })
            newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
}

exports.userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const excistingUser = await users.findOne({ email, password })
        if (excistingUser && excistingUser.isAdmin==true) {
            const token = jwt.sign({ userId: excistingUser._id }, process.env.SECRET_KEY)
            res.status(200).json({ token, excistingUser,role:"admin" })
        } 
        else if(excistingUser){
            const token = jwt.sign({ userId: excistingUser._id }, process.env.SECRET_KEY)
            res.status(200).json({ token, excistingUser,role:"user" })
 
        }
        else {
            res.status(406).json("Invalid username/Password")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}


exports.getAllusers=async(req,res)=>{
    try{
        const result=await users.find({isAdmin:false})
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}