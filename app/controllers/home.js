class HomeCtl {
   index(ctx){
       ctx.body = `this is page 2`
   }
   upload(ctx){
       const file = ctx.request.files.file;
       ctx.body = {path:file.path}
   }
}

module.exports = new HomeCtl()




