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

postmnan 设置环境变量 切换本地host和线上host

##
阿里云
安装git  
apt-get install git

##
nginx
nginx -t  告诉你配置文件在哪

vim /etc/nginx/nginx.conf   //打开配置地址
然后按键盘insert开始编辑 最后按esc退出编辑模式 进入命令行模式

生效
service nginx restart 重启
service nginx reload  重新加载配置


##
PM2 管理进程


##
linux 命令

1.查看当前所有已经使用的端口情况
netstat   -nultp

netstat  -anp  |grep   80  查看80端口情况

2.关闭进程
kill -9 PID" (PID：进程号)
如：    通过"netstat -anp | grep ssh"
有显示：    tcp 0 127.0.0.1:2121 0.0.0.0:* LISTEN 7546/ssh
则：    "kill -9 7546"

https://blog.csdn.net/xad707348125/article/details/46804649?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&dist_request_id=5f99d525-d8a4-44d1-b4c1-1bd027e831ee&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control
