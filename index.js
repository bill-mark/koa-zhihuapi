const Koa = require('koa')
const app = new Koa()

app.use((ctx)=>{
    ctx.body = 'hello body777 778899  kkll'
})

app.listen(3000)