const userModel =require('../models/user')
const bcrypt = require('bcrypt')
const jwt=require('../utils/jwt')


const SignUp=async(req,res)=>{
const {name,email,password,confPassword}=req.body
  if(!email || !password||!name || !confPassword ){
    return res.json({error: 'Some of the fields are Empty'})
}
const existUser = await userModel.find({ email: req.body.email,isDeleted:false })
if(existUser.length>0){
  return res.json({error: 'User Already Exists'})
}
const user=new userModel({name,email,password})
try{
    await user.save()
    res.json({success:true})
}catch(err){
    console.log(err);
}
}

const Login=async(req,res)=>{
try{
  if(!req.body.email || !req.body.password ){
    return res.json({error: 'Some of the fields are Empty'})
}
    const user = await userModel.find({ email: req.body.email })
  
    if(user.length==0){
        return res.json({error: 'Invalid User'})
      }
      if(user[0].isDeleted){
        return res.json({error:'Sorry You are No Longer a User'})
      }
    const match = await bcrypt.compare(req.body.password, user[0].password)
    if(!match){
        return res.json({error: 'Incorrect password'})
      }
      const token=jwt.createUserToken(user[0])
      res.json({
        success: true,
        token: token,
        user:user[0].name
      })
}catch(err){
console.log(err);
}
}
const userDetails=async(req,res)=>{
  try{
const user=await userModel.findById(req.user.id)
res.json(user)
  }catch(err){
res.status(400).send('user not found')
  }

}

const updateProfile=async(req,res)=>{
  try{
    if(!req.file){
      return res.json({error: 'Image is required'})
    }
    const paths = req.file.path.slice(7)
    const filepath = `http://localhost:5000/${paths}`
await userModel.findByIdAndUpdate(req.user.id,{
      $set: {
        profilePic: filepath
    }})
    const user=await userModel.findById(req.user.id)
    res.json({success:true,url:user.profilePic})
  }catch(err){
console.log(err);
  }
}

module.exports={
    SignUp,
    Login,
    userDetails,
    updateProfile
}