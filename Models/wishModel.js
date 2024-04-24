const mongoose = require('mongoose')



//define schema
const wishSchema = new mongoose.Schema({

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
    type:String,
    
},
userId:{
    type:String,
    required:true
}

})


const wish = mongoose.model('wish', wishSchema)

module.exports = wish