const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {find,findById,create,update,delete:del,login,checkOwner,listFollowing,
    follow,unfollow,listFollowers,checkUserExist,followTopic,unfollowTopic,listFollowingTopics
} = require('../controllers/users')

const {checkTopicExist} = require('../controllers/topics')
const {secret} = require('../config')

const auth = jwt({secret})

router.get('/',find)

router.get('/:id',findById)

router.post('/', create)

//更新用户 patch部分替换
router.patch('/:id',auth,checkOwner,update)

router.delete('/:id',auth,checkOwner,del)

router.post('/login',login)

//获取用户关注的用户列表
router.get('/:id/following',listFollowing)

//获取用户的粉丝列表
router.get('/:id/followers',listFollowers)

//关注某人
router.put('/following/:id',auth,checkUserExist,follow)
//取消关注某人
router.delete('/following/:id',auth,checkUserExist,unfollow)

//获取用户关注的话题列表
router.get('/:id/followingTopics',listFollowingTopics)
//关注话题
router.put('/followingTopics/:id',auth,checkTopicExist,followTopic)
//取消关注话题
router.delete('/followingTopics/:id',auth,checkTopicExist,unfollowTopic)

module.exports = router