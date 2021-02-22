const jwt = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix:'/questions'})
const {find,findById,create,update,checkQuestionExist,checkQuestioner,delete:del} = require('../controllers/questions')
const {secret} = require('../config')
const auth = jwt({secret})

router.get('/',find)

router.get('/:id',checkQuestionExist,findById)

router.post('/',auth, create)

//更新问题 patch部分替换
router.patch('/:id',auth,checkQuestionExist,checkQuestioner,update)

router.delete('/:id',auth,checkQuestionExist,checkQuestioner,del)
module.exports = router