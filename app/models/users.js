const mongoose = require('mongoose')

const {Schema,model} = mongoose

const userSchema = new Schema({
    __v:{type:Number,select:false},
    name:{type:String,required:true},
    password:{type:String,required:true,select:true},
    avatar_url:{type:String},//头像
    gender:{type:String,enum:['male','female'],default:'male',required:true},//性别
    headline:{type:String},//一句话介绍
    locations:{type:[{type:String}],select:false},//地区
    business:{type:String,select:false},//行业
    employments:{
        type:[{
            company:{type:String},
            job:{type:String}
        }],
        select:false
    },//职业经历
    educations:{
        type:[{
            school:{type:String},
            major:{type:String},//专业
            diploma:{type:String,enum:[1,2,3,4,5]},//学历
            entrance_year:{type:String},
            graduation_year:{type:Number},//毕业年份
        }],
        select:false
    },//教育经历
})

module.exports = model('User',userSchema)




