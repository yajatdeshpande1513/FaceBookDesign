const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");


const users_schema1=new mongoose.Schema({
    firstname:{
        type:String,
        lowercase:true,
        require:true,
    },
    surname:{
        type:String,
        lowercase:true,
        require:true,
    },
    usermail:{
        type:String,
        required:true,
        unique:true,
    },
    userpassword:{
        type:String,
        required:true,
    },
    userdob:{
        type:Date,
        required:true,
    },
    usergender:{
        type:String,
        required:true,
    }
})

users_schema1.pre('save',async function(next){
    this.userpassword=await bcrypt.hash(this.userpassword,12)
})
const users_collection1=new mongoose.model("user_collection1",users_schema1);
module.exports=users_collection1