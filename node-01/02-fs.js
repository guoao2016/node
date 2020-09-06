const fs = require('fs')
// const data = fs.readFileSync('./package.json')
// console.log(data.toString());
const {promisify} = require('util')

// 异步- promies 处理
const readFile = promisify(fs.readFile)

// fs.readFile('./package.json', (err, data)=>{
//     console.log(data.toString('utf-8'));
    
// })

// promise调用
// readFile('./package.json').then(data => {
//     console.log(data.toString());
    
// })


// async/await
const readFileFn = async ()=> {
    const data = await readFile('./package.json');
    console.log(data.toString())
    console.log(`end`);
}

readFileFn();
