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
        res.end();
    }
}).listen(3000)

function cors(res){
    res.setHeader("Set-Cookie", "cookie1=va222;HttpOnly")
    res.setHeader("Cache-Control", "public; max-age=20000")

    // 跨域
    res.setHeader('Content-Type', 'application/json')
    // 配置了 withCredentials = true时，必须在后端增加 response 头信息Access-Control-Allow-Origin，且必须指定域名，而不能指定为*！！！
    /**
     * (index):1 Access to XMLHttpRequest at 'http://localhost:3000/users' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
     */
    res.setHeader("Access-Control-Allow-Credentials", "true") 
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080")
    // res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "X-Token,x-test,Content-Type")
}
