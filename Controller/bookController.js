
const books=require('../Models/bookModel')


exports.addBooks = async (req, res) => {
    console.log(req.file.filename)
    const {id,title,description,category,author} = req.body
    // const { title,description,category,author, userId} = req.body

     const b_image=req.file.filename
    //  res.send("addfooditems request is hit!!")
    try{
        const excistingBook=await books.findOne({description})
        if(excistingBook){
            res.status(406).json("Excisting book")
        }
        else{
            const newBook=new books({ id,title,description,category,author,b_image})
            await newBook.save()
            res.status(200).json(newBook)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}



exports.getAllBookController=async(req,res)=>{
    try{
        const result=await books.find()
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.getBookController=async(req,res)=>{
    try{
        const result=await books.findOne({id:req.params.id})
        res.status(200).json(result)
        console.log(result)
    }
    catch(err){
        res.status(401).json(err)
    }

}


exports.deletebook= async (req,res)=>{
    const {id}=req.params
    try{
        
        const result=await books.findByIdAndDelete({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }

}


    
exports.updateBook=async (req,res)=>{
    // console.log(req.file.filename)
    const {id,title,description,category,author} = req.body
    // const {_id}=req.params

    //  const b_image=req.file.filename
     const updatedb_image=req.file ? req.file.filename :req.body.b_image

   
    try{
        const result=await books.findByIdAndUpdate({_id:req.params.id},{id,title,description,category,author,b_image:updatedb_image})
             await result.save()
            res.status(200).json(result)
        }
    
    catch(err){
        res.status(401).json(err)
    }
}


exports.addBookComment=async(req,res)=>{
    const {review,usern}=req.body
    const userId=req.payload
    try{
        const result=await books.findByIdAndUpdate({_id:req.params.id},{ $push: {comment:{userId,review,usern}}})
        
        res.status(200).json(result)
        console.log(result)
    }
    catch(err){
        res.status(401).json(err)
    }

}
