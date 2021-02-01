const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {find,findById,create,update,delete:del,login,checkOwner} = require('../controllers/users')
const {secret} = require('../config')

const auth = jwt({secret})

router.get('/',find)

router.get('/:id',findById)

router.post('/', create)

//更新用户 patch部分替换
router.patch('/:id',auth,checkOwner,update)

router.delete('/:id',auth,checkOwner,del)

router.post('/login',login)

module.exports = router