# koa-zhihuapi
zhihu api web by koa

##
1.nodemon
  热更新

2.allowedMethods 支持没有的方法返回405 比如put, 不支持的方法返回501 比如link
app.use(usersRouter.routes()).use(usersRouter.allowedMethods())