const express = require('express')
const router = express.Router()
const adminControls=require('../controllers/adminController')
const jwt =require('../utils/jwt')


router.post('/login',adminControls.login)

router.get('/getUsers',jwt.verifyAdminToken,adminControls.getUsers)

router.get('/editUser/:id',jwt.verifyAdminToken,adminControls.fetchUserDetails)

router.patch('/editUser/:id',jwt.verifyAdminToken,adminControls.editUserDetails)

router.post('/searchUser',jwt.verifyAdminToken,adminControls.searchUser)

router.delete('/deleteUsers/:id',jwt.verifyAdminToken,adminControls.deleteUser)

router.post('/addUser',jwt.verifyAdminToken,adminControls.AddUser)

module.exports=router