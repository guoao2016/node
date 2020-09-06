
const koa = require('koa');
const app = new koa()
;

const mid1 = async (ctx, next)=>{
    ctx.body = 'hello';
    await next();
    ctx.body = ctx.body + ' !!!';
}

const mid2 = async (ctx, next)=>{
    ctx.type = 'text/html;charset=utf-8';
    await next();
}

const mid3 = async (ctx, next)=>{
    ctx.body = ctx.body + ' Kaikeba';
    // await next();
}

app.use(mid1);
app.use(mid2);
app.use(mid3);

app.listen(3000)
