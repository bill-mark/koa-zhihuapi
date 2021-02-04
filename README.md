# koa-zhihuapi
zhihu api web by koa

##
1.nodemon
  热更新

2.allowedMethods 支持没有的方法返回405 比如put, 不支持的方法返回501 比如link
app.use(usersRouter.routes()).use(usersRouter.allowedMethods())

3.koa自带错误处理
也可以自定义 ctx.throw(412,'id not exit')

##
mongodb

user
name:laosiji
password:555laosiji

schema
属性设置select:false  find函数不会返回该属性

findById(ctx.params.id).select('location')
可以增加查询范围select:false的location

ObjectId
主键

##
jwt
1.postman 
test 设置全局变量token
var jsonData = pm.response.json()
pm.globals.set("token",jsonData.token)

