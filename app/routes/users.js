const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {find,findById,create,update,delete:del,login,checkOwner,listFollowing,follow,unfollow} = require('../controllers/users')
const {secret} = require('../config')

const auth = jwt({secret})

router.get('/',find)

router.get('/:id',findById)

router.post('/', create)

//更新用户 patch部分替换
router.patch('/:id',auth,checkOwner,update)

router.delete('/:id',auth,checkOwner,del)

router.post('/login',login)

//获取单个用户关注列表
router.get('/:id/following',listFollowing)

//关注某人
router.put('/following/:id',auth,follow)

router.delete('/following/:id',auth,unfollow)

module.exports = router