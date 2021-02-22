const Question = require('../models/questions')

class QuestionsCtl {
    //分页查找
    async find(ctx) {
        const { per_page = 10 } = ctx.query
        const page = Math.max(ctx.query.page * 1, 1) - 1 //乘1用来转数字  max保证不能小于1
        const perPage = Math.max(per_page * 1, 1) //每页多少条
        const q = new RegExp(ctx.query.q)
        ctx.body = await Question
            .find({ $or:[{title:q},{description:q}]} )  //带正则表达式为模糊搜索  
            .limit(perPage).skip(page * perPage)
    }
    async checkQuestionExist(ctx, next) {
        const question = await Question.findById(ctx.params.id).select('+questioner')
        if (!question) { ctx.throw(404, '问题不存在') }
        ctx.state.question = question
        await next()
    }
    async findById(ctx) {
        const { fields = '' } = ctx.query
        const selectFields = fields.split(';').filter(f => f).map(f => ' +' + f).join('')  //增加查询范围
        const question = await Question.findById(ctx.params.id).select(selectFields).populate('questioner topics')
        if (!question) {
            ctx.throw(404, '问题不存在')
        }
        ctx.body = question
    }
    async create(ctx) {
        ctx.verifyParams({
            title: { type: 'string', required: true },
            description: { type: 'string', required: false },
        })

        const question = await new Question({...ctx.request.body,questioner:ctx.state.user._id}).save()
        ctx.body = question
    }
    async checkQuestioner(ctx, next) {
        const { question } = ctx.state;
        //console.log(question)
        if (question.questioner.toString() !== ctx.state.user._id) { ctx.throw(403, '没有权限'); }
        await next();
    }
    async update(ctx) {
        ctx.verifyParams({
            name: { type: 'string', required: false },
            description: { type: 'string', required: false },
        })
        //const question = await Question.findByIdAndUpdate(ctx.params.id, ctx.request.body)
        //ctx.body = question
        await ctx.state.question.update(ctx.request.body)
        ctx.body = ctx.state.question
    }
    async delete(ctx) {
        await Question.findOneAndRemove(ctx.params.id)
        ctx.body = 204
    }
}

module.exports = new QuestionsCtl()