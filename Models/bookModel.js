const mongoose=require('mongoose')
const { array } = require('../middlewares/bookMiddleware')

const bookSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    b_image:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    comment:{
       type:Array,
       default:[]
    }
    // userId:{
    //     type:String,
    //     required:true
    // }


})


const books=mongoose.model('books',bookSchema)
module.exports=books