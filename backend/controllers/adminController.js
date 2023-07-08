const adminSchema=require('../models/admin')
const userModel =require('../models/user')
const jwt=require('../utils/jwt')

const login=async(req,res)=>{
    try{
        if(!req.body.email || !req.body.password ){
            return res.json({error: 'Some of the fields are Empty'})
        }
  const user = await adminSchema.find({ email: req.body.email })
    if(user.length==0){
        return res.json({error: 'Invalid User'})
      }
      if(req.body.password!=user[0].password){
        return res.json({error: 'Incorrect Password'})
      }
      const token=jwt.createAdminToken(user[0])
      res.json({
        success: true,
        token: token,
      })
    }catch(err){
console.log(err);
    }
  
}

const getUsers=async(req,res)=>{
    try{
  const user=await userModel.find({isDeleted:false})
res.json({users:user})
    }catch(err){
      console.log(err);
    }

}

const fetchUserDetails=async(req,res)=>{
    try{
        const id=req.params.id
  const user=await userModel.findById(id)
res.json(user)
    }catch(err){
      console.log(err);
    }

}
const editUserDetails=async(req,res)=>{
    try{
const id=req.params.id
const {name,email}=req.body
await userModel.findByIdAndUpdate(id,{
    $set:{
        name,
        email
    }
})
res.json({success:true})
    }catch(err){

    }
}

const searchUser=async(req,res)=>{
 try{
const search=req.body.search
const user=await userModel.aggregate([ 
     {
        '$match': {
          'isDeleted': false,

        }
      },{
        '$match': {
          $or: [
            {email:new RegExp(search,'i')},
            {name:new RegExp(search,'i')}
          ]

        }}
])
res.json({user,success:true})
 }catch(err){
console.log(err);
 }   
}
const AddUser=async(req,res)=>{
    const {name,email,password,confPassword}=req.body
      if(!email || !password||!name || !confPassword ){
        return res.json({error: 'Some of the fields are Empty'})
    }
    const user=new userModel({name,email,password})
    try{
        await user.save()

        const users=await userModel.find({isDeleted:false})
        res.json({success:true,user:users})
    }catch(err){
        console.log(err);
    }
    }

const deleteUser=async(req,res)=>{
    try{
const id=req.params.id

await userModel.findByIdAndUpdate(id,{
    $set:{
        isDeleted:true
    }
})

res.json({success:true})
        }catch(err){
console.log(err);
    }
}
module.exports={
    login,
    getUsers,
    fetchUserDetails,
    editUserDetails,
    searchUser,
    deleteUser,
    AddUser
}