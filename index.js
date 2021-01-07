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
    console.log(ctx.params.id)
    ctx.body = 'this is users'
})

router.post('/users',(ctx)=>{
    ctx.body = 'this is users post'
})



app.use(router.routes())
app.use(usersRouter.routes()).use(usersRouter.allowedMethods())

app.listen(3000)