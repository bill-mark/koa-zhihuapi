const mongoose = require('mongoose')

const {Schema,model} = mongoose

const questionSchema = new Schema({
    __v:{type:Number,select:false},
    title:{type:String,required:true},
    description:{type:String},//描述
    questioner:{type:Schema.Types.ObjectId,ref:'User',requires:true,select:false},
    //话题对应的问题一般有限 所以问题关联话题
    topics:{
        type:[{type:Schema.Types.ObjectId,ref:'Topic'}], 
        select:false
    }
},{timestamps:true})

module.exports = model('Question',questionSchema)