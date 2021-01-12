const Koa = require('koa');
const bodyParser = require('koa-bodyparser') //获取post请求体
const app = new Koa();
const routing = require('./routes/index.js')

// app.use((ctx,next)=>{
//     console.log(ctx)
//     next()
// })

app.use(bodyParser())
routing(app)

app.listen(3000,()=>{console.log('koa has start')})