const Topic = require('../models/topics')

class TopicsCtl {
    //分页查找
    async find(ctx) {  
        const {per_page = 10} = ctx.query
        const page = Math.max(ctx.query.page * 1,1) - 1 //乘1用来转数字  max保证不能小于1
        const perPage = Math.max(per_page * 1,1) //每页多少条
        ctx.body = await Topic
          .find({name:new RegExp(ctx.query.q)})  //带正则表达式为模糊搜索  
          .limit(perPage).skip(page * perPage)
    }
    async findById(ctx) {
        const { fields = '' } = ctx.query
        const selectFields = fields.split(';').filter(f => f).map(f => ' +' + f).join('')  //增加查询范围
        //console.log(selectFields)
        const topic = await Topic.findById(ctx.params.id).select(selectFields)
        if (!topic) {
            ctx.throw(404, '话题不存在')
        }
        ctx.body = topic
    }
    async create(ctx) {
        ctx.verifyParams({
            name: { type: 'string', required: true },
            avatar_url: { type: 'string', required: false },
            introduction: { type: 'string', required: false },
        })

        const { name } = ctx.request.body
        const repeatedTopic = await Topic.findOne({ name }) //唯一性校验
        if (repeatedTopic) {
            ctx.throw(409, '话题已经存在')
        }

        const topic = await new Topic(ctx.request.body).save()
        ctx.body = topic
    }
    async update(ctx){
        ctx.verifyParams({
            name: { type: 'string', required: false },
            avatar_url: { type: 'string', required: false },
            introduction: { type: 'string', required: false },
        })
        const topic = await Topic.findByIdAndUpdate(ctx.params.id,ctx.request.body)
        ctx.body = topic
    }
}

module.exports = new TopicsCtl()