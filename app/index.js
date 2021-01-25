const Koa = require('koa');
const bodyParser = require('koa-bodyparser') //获取post请求体
const error = require('koa-json-error')
const app = new Koa();
const routing = require('./routes/index.js')

app.use(error({
    postFormat:(e,{stack,...rest})=>{
       process.env.NODE_ENV === 'production'?rest:{stack,...rest}
    }
}))

app.use(bodyParser())
routing(app)

app.listen(3000,()=>{console.log('koa has start')})