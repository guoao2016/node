const http = require('http')
const fs = require('fs');
const server = http.createServer((req, res) => {
    const {url, method, headers} = req;
    console.log('request', url, method)
    if(url === '/' && method === 'GET'){
        fs.readFile('index.html', (err, data)=> {
            if(err){
            //   res.writeHead(500, {'Content-Type': 'text/plain;charset = utf-8'})
              res.writeHead(500, {'Content-Type': 'text/plain;charset = utf-8'})
              res.end('Server Err 服务器错误')
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    }else if(url === '/users' && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({name: 'xiao'}))
    }
    // else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
    //     fs.createReadStream('.' + url).pipe(res)
    // }

// 优化 大段 if else
    const router = []
    router.push({
        url: '/user',
        method: 'GET',
        cb: (req, res) => {

        } 
    })

    for(item in router){

    }

})
server.listen(3000)