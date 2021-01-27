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

mongodb+srv://laosiji:<password>@cluster0.mtzf7.mongodb.net/<dbname>?retryWrites=true&w=majority


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://laosiji:<password>@cluster0.mtzf7.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
