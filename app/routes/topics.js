const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/topics'})
const {find,findById,create,update,checkTopicExist,listTopicFollowers,listQuestions} = require('../controllers/topics')
const {secret} = require('../config')
const auth = jwt({secret})

router.get('/',find)

router.get('/:id',checkTopicExist,findById)

router.post('/',auth, create)

//更新话题 patch部分替换
router.patch('/:id',auth,checkTopicExist,update)

//获取话题关注者
router.get('/:id/followers',checkTopicExist,listTopicFollowers)

//获取话题的问题列表-多对多
router.get('/:id/questions',checkTopicExist,listQuestions)

module.exports = router