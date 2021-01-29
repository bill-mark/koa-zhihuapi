const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {find,findById,create,update,delete:del,login} = require('../controllers/users')

router.get('/',find)

router.get('/:id',findById)

router.post('/', create)

//更新用户 patch部分替换
router.patch('/:id', update)

router.delete('/:id',del)

router.post('/login',login)

module.exports = router