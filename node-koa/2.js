const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

/**
 * x-www-form-urlencoded
 * form-data
 */
const app = new Koa();
const router = new Router();

app.use(koaBody()); //解析post以及form-data传参


app.proxy = true;
// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
})

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})

// middleware的顺序很重要，koa-bodypraser必须在router之前被注册到app对象上

router.get('/', async (ctx, next) => {
    ctx.body = `<h1>Hello, Koa2</h1>`;
});

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}</h1>`
})

router.get('/user/list', async (ctx, next) => {
    let name = ctx.params.name;
    const obj = {
        code: 200,
        data: [
            {
                name: '小王',
                age: '37'
            },
            {
                name: '半城',
                age: '77'
            }

        ]
    }
    ctx.body = obj;
})

router.post('/login', async (ctx, next) => {
    if (ctx.request == null || ctx.request.body == null) {
        ctx.response.body = {
            code: 10001,
            success: false,
            message: 'Login failure, please check form-data type'
        }
        return;
    }

    let {
        username,
        password
    } = ctx.request.body;
    console.log(ctx.request.body)
    console.log(`/login- username: ${username} password: ${password}`);
    if (username == 'koa' && password == '123456') {
        ctx.response.body = {
            code: 20000,
            success: true,
            message: 'Login success.'
        }
    } else {
        ctx.response.body = {
            code: 10017,
            success: false,
            message: 'Login failure, please check username or password'
        }
    }
})


app.use(router.routes())



app.listen(3000);