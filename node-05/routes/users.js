const Router = require('koa-router');
const router = new Router({
    prefix: '/users'
});

router.get('/', async ctx => {
    // ctx.body = 'user'
    await ctx.render("users", {
        title: "用户列表",
        subTitle: "handlebars语法",
        isShow: true,
        username: "jerry",
        htmlStr: '<h3>html-test</h3>',
        users: [{
            username: "tom",
            age: 20
        }, {
            username: "jerry",
            age: 20
        }]
    })
})

module.exports = router