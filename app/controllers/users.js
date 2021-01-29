const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/users')
const {secret} = require('../config')

class UsersCtl {
   async find(ctx){
    //a.b
    ctx.body = await User.find()
   }
   async findById(ctx){
      const user = await User.findById(ctx.params.id)
      if(!user){
         ctx.throw(404,'用户不存在')
      }
      ctx.body = user
   }
   async create(ctx){
      ctx.verifyParams({
         name:{type:'string',required:true},
         password:{type:'string',required:true},
      })

      const {name} = ctx.request.body
      const repeatedUser = await User.findOne({name}) //唯一性校验
      if(repeatedUser){
         ctx.throw(409,'用户已经存在')
      }

      const user = await new User(ctx.request.body).save()
      ctx.body = user
   }
   async update(ctx){
      ctx.verifyParams({
         name:{type:'string',required:false},
         password:{type:'string',required:false},
      })

      const user = await User.findByIdAndUpdate(ctx.params.id,ctx.request.body)
      if(!user){
         ctx.throw(404,'用户不存在')
      }
      ctx.body = user
   }
   async delete(ctx){
      const user = await User.findByIdAndRemove(ctx.params.id)
      if(!user){
         ctx.throw(404,'用户不存在')
      }
      ctx.body = user
   }
   async login(ctx){
      ctx.verifyParams({
         name:{type:'string',required:true},
         password:{type:'string',required:true},
      })
      const user = await User.findByIdAndUpdate(ctx.request.body)
      if(!user){
         ctx.throw(401,'用户或密码不正确')
      }
      console.log(user)
      const {_id,name} = user
      const token = jsonwebtoken.sign({_id,name},secret,{expiresIn:'1d'})
      ctx.body = {token}
   }
}

module.exports = new UsersCtl()