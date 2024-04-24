require('dotenv').config()

const express=require('express')

const cors=require('cors')

require('./Connection/db')

const router=require('./Routes/router')

const bookReview=express()

bookReview.use(cors())

bookReview.use(express.json())

bookReview.use(router)




const PORT=3000 || process.env.PORT


//serving upload files
bookReview.use('/upload',express.static('./uploads'))

bookReview.listen(PORT,()=>{
    console.log(`bookReview server started at Port:${PORT}`)
})

bookReview.get('/',(req,res)=>{
    res.send("<h1>Book review started...waiting for client requests..!!</h1>")
})