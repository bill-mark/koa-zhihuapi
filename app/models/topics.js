const mongoose = require('mongoose')

const {Schema,model} = mongoose

const topicSchema = new Schema({
    __v:{type:Number,select:false},
    name:{type:String,required:true},
    avatar_url:{type:String},//话题图标
    introduction:{type:String,select:false},//话题介绍
},{timestamps:true})

module.exports = model('Topic',topicSchema)