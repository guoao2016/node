
const koa = require('koa');
const app = new koa();
// 相应时间输出
app.use(async (ctx, next)=> {
    await next()
    const rt = ctx.response.get('X-Response-Time');
    console.log(`输出计时:${ctx.method} ${ctx.url} - ${rt}`);
})

// 响应时间计时
app.use(async (ctx, next) =>{
    const start = Date.now();
    console.log('开始计时');
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`)
    console.log('结束');
})



// 错误处理
app.use(async (ctx, next) =>{
    try{
        await next();
    }catch(error){
        ctx.status = error.statusCode || error.status || 500
        ctx.body = error.message;

        // 触发应用层级的错误事件
        ctx.app.emit('error', error, ctx);
        console.log('中间件捕捉:', error.message);
    }
})

const static = require('koa-static');
app.use(static(__dirname + '/public'))


// cosnt = sleep = time => new Promise(resolve => setTimeout(resolve, time))
//  响应
// app.use(async ctx=>{
//     await sleep(200)
//     ctx.status = 200;
//     ctx.type = 'html';
//     ctx.body = '<h1>Hello koa</h1>'

// })

// 模板
const hbs = require('koa-hbs')
app.use(hbs.middleware({
    viewPath: __dirname + '/views', //视图根目录
    defaultLayout: 'layout', // 默认布局页面
    partialsPath: __dirname+ '/views/partials', // 
    disableCache: true //开发阶段不缓存
}))

const index = require('./routes/index');
const users = require('./routes/users')
app.use(index.routes());
app.use(users.routes());

app.on('error', err => {
    // console.error('app 捕捉到了:', err.message);
    // console.error(err)

    // throw err
    console.log('没得事！');
})


app.listen(3000)
