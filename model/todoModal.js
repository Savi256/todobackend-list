const { ObjectID } = require('bson')
const  mongoose  = require('mongoose')


const model=new mongoose.Schema({
   
    list:{
        type:String
    }
})

const Tododocument=mongoose.model('todocluster1',model)

module.exports=Tododocument