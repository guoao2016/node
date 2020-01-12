//  npm i live-server -g
// options

const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const {method, url} = req;
    console.log('cookie', req.headers.cookie)
    console.log(method)
    if(method == "GET" && url =='/'){
        fs.readFile("./index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        })
    }else if(method == 'GET' && url == '/users'){
       cors(res);
       res.end(JSON.stringify([{name: 'tom', age: 20}]))
    }else if(method == 'OPTIONS' && url == '/users'){
        cors(res);
        // res.writeHead(200, {
        //     "Access-Control-Allow-Origin": 'http://127.0.0.1:8080',
        //     "Access-Control-Allow-Headers": 'X-Token,Content-Type'
        //     // "Access-Control-Allow-Methods": 'PUT'
        // })
        res.end();
    }
}).listen(3000)

function cors(res){
    res.setHeader("Set-Cookie", "cookie1=va222")

    // 跨域
    res.setHeader('Content-Type', 'application/json')
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080")
    res.setHeader("Access-Control-Allow-Headers", "X-Token,Content-Type")
    res.setHeader("Access-Control-Allow-Credentials", "true") 
}