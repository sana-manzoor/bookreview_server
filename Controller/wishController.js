const wish = require('../Models/wishModel')

exports.addToWish=async(req,res)=>{
    const {id,title,description,category,author,b_image}=req.body
    const userId=req.payload
    try{
        const excistingBook=await wish.findOne({userId,id})
        if(excistingBook){
            res.status(406).json("Book already excists in wishlist")
        }
        else{
            const newItem=new wish({id,title,description,category,author,userId,b_image})
            newItem.save()
            res.status(201).json(newItem)
        }
    }
    catch(err){
        res.status(404).json(err)
    }

    
}

exports.getWish=async(req,res)=>{
    try{
        const userId=req.payload
        const wishListBooks= await wish.find({userId})
        res.status(200).json(wishListBooks)
    }
    catch(err){
        res.status(401).json(err)
    }
   

}

exports.removeFromWish=async (req,res)=>{
    try{
        const wishId=req.params.id
    const wishDelete=await wish.findOneAndDelete({_id:wishId})
    res.status(200).json(wishDelete)
    }
    catch(err){
        res.status(401).json(err)
    }
    

}
