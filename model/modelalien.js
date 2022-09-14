const mongoose=require('mongoose')
const schema3=new mongoose.Schema({
name:{
    type: String,
    required:true
},
age:{
    type:Number,
    required:true
},
course:{
    type:String,
    required:true,
}
})

module.exports=mongoose.model('schema1',schema3) 