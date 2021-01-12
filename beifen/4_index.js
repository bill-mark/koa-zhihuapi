const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const usersRouter = new Router({prefix:'/users'})

app.use((ctx,next)=>{
    console.log(ctx)
    next()
})

const auth = async(ctx,next)=>{
    console.log('auth')
    if(ctx.url !== '/users'){
        ctx.throw(401)
    }
    await next()
}

router.get('/',(ctx)=>{
    ctx.body = 'this is page'
})

usersRouter.get('/', auth, (ctx)=>{
    
    ctx.body = [{name:'da bo luo'},{name:'wu yi fan'}]
})

router.post('/users',(ctx)=>{
    ctx.body = [{name:'da bo luo'}]
})

usersRouter.put('/', (ctx)=>{
    ctx.body = 'this is users'
})

usersRouter.delete('/', (ctx)=>{
    ctx.body = 'this is users'
})



app.use(router.routes())

//allowedMethods 支持没有的方法返回405 比如put, 不支持的方法返回501 比如link
app.use(usersRouter.routes()).use(usersRouter.allowedMethods())

app.listen(3000)