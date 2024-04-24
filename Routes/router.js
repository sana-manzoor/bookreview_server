const express=require('express')

const userController=require('../Controller/userController')
const bookController=require('../Controller/bookController')
const wishController=require('../Controller/wishController')

const router=new express.Router()
const multerConfig=require('../middlewares/bookMiddleware')

const jwtMiddleware=require('../middlewares/jwtMiddleware')


//localhost:3000
router.post('/add-user',userController.userRegisterController)
router.get('/all-books',bookController.getAllBookController)
router.post('/login',userController.userLoginController)
router.post('/addbook',multerConfig.single('b_image'),bookController.addBooks)
router.get('/get-book/:id',bookController.getBookController)
router.post('/addwish',jwtMiddleware,wishController.addToWish)
router.get('/getwish',jwtMiddleware,wishController.getWish)
router.delete('/delwish/:id',jwtMiddleware,wishController.removeFromWish)
router.get('/detbook/:id',bookController.getBookController)
router.put('/updateb/:id',multerConfig.single('b_image'),bookController.updateBook)
router.delete('/deleteb/:id',bookController.deletebook)
router.post('/add-comment/:id',jwtMiddleware,bookController.addBookComment)
router.get('/all-users',userController.getAllusers)



module.exports=router