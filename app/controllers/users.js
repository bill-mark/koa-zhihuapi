const db = [{name:"li lei"}]

class UsersCtl {
   find(ctx){
    //a.b
    ctx.body = db
   }
   findById(ctx){
      if(ctx.params.id *1 > db.length){
         ctx.throw(412)
      }
      ctx.body = [{name:'da bo luo id'},{name:'wu yi fan id'}]
   }
   create(ctx){
      ctx.verifyParams({
         name:{type:'string',required:true},
         age:{type:'number',required:false}
      })
      ctx.body = 'this is users'
   }
   update(ctx){
      ctx.body = 'this is users'
   }
   delete(ctx){
      ctx.body = 'this is users'
   }
}

module.exports = new UsersCtl()