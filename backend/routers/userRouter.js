const express = require('express')
const router = express.Router()
const userControls=require('../controllers/userController')
const jwt=require('../utils/jwt')
const {upload} =require('../utils/multer')

router.post('/signup',userControls.SignUp)

router.post('/login',userControls.Login)

router.get('/details',jwt.verifyUserToken,userControls.userDetails)

router.patch('/update',jwt.verifyUserToken,upload.single('image'),userControls.updateProfile)

module.exports=router;