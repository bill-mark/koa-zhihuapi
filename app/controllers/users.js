const db = [{name:"li lei"}]

class UsersCtl {
   find(ctx){
    ctx.body = db
   }
   findById(ctx){
      ctx.body = [{name:'da bo luo id'},{name:'wu yi fan id'}]
   }
   create(ctx){
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