const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name cannot be empty']
    },
    email:{
        type:String,
        required:[true,'Email Cannot be empty']
    },
    password:{
        type:String,
        required:[true,'Password Cannot be empty']
    },
    profilePic:{
        type:String,
    },
    isDeleted:{
        type:Boolean,
        default: false
    }
})

userSchema.pre('save', async function (next) {
    try {
        hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next();
    } catch (error) {
        console.log(error)
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User