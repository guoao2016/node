const http = require('http');
const session = {};
http.createServer((req, res) => {
    const sessionKey = 'sid';
    if(req.url === '/favicon.ico'){
        return
    }else{
        
        const cookie = req.headers.cookie;
        if(cookie&& cookie.indexOf(sessionKey) > -1){
            
            console.log('cookie', req.headers.cookie);
            // cx=abc; sid=72719

            // 正则
            const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
            const sid = pattern.exec(cookie)[1]
            console.log('session:', sid, session, session[sid]);
            res.end(`Come Back ${session[sid]['name']}`);
        }else{
            const sid = (Math.random()*999999).toFixed();
            // res.setHeader('Set-Cookie', 'cx=abc')
            res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
            session[sid] = {name: 'laowang'}
            console.log('session', session)
            res.end('hello cooke')

        }
    }
}).listen(3000)

