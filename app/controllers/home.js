class HomeCtl {
   index(ctx){
       ctx.body = `this is page 2`
   }
}

module.exports = new HomeCtl()