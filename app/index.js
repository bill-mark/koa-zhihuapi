const Koa = require('koa');
const bodyParser = require('koa-bodyparser') //获取post请求体
const error = require('koa-json-error')  //统一报错
const parameter = require('koa-parameter')  //校验参数
const app = new Koa();
const routing = require('./routes/index.js')
const mongoose = require('mongoose')  //链接mongodb插件
const {connectionStr} = require('./config')

mongoose.connect(connectionStr,{
    useNewUrlParser: true,//使用新解析字符串工具
    useUnifiedTopology: true,//使用新的服务器发现和监视引擎
},()=> console.log('mongodb line success !'))

mongoose.connection.on('error',console.error)


app.use(error({
    postFormat:(e,{stack,...rest})=>process.env.NODE_ENV === 'production'?rest:{stack,...rest}
}))
app.use(bodyParser())
app.use(parameter(app))
routing(app)

app.listen(3000,()=>{console.log('koa has start')})