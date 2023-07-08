const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email Cannot be empty']
    },
    password:{
        type:String,
        required:[true,'Password Cannot be empty']
    }
})


const admin = mongoose.model('admin', adminSchema)
module.exports = admin