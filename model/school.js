 const mongoose=require('mongoose')


 const school=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String}
 })
// school.

 const schoolname=mongoose.model('schoollist',school)
 module.exports=schoolname