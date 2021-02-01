const path = require('path')
class HomeCtl {
   index(ctx){
       ctx.body = `this is page 2`
   }
   upload(ctx){
       const file = ctx.request.files.file;
       const basename = path.basename(file.path);//绝对路径换相对路径
       ctx.body = {url:`${ctx.origin}/uploads/${basename}`} //生成图片链接
   }
}

module.exports = new HomeCtl()




