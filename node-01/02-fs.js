const fs = require('fs')
// const data = fs.readFileSync('./package.json')
// console.log(data)   // 二进制
// console.log(data.toString('utf-8'))

const {promisify} = require('util');
const readFile = promisify(fs.readFile);

// fs.readFileSync('./package.json', (err, data) => {
//     console.log(data.toString('utf-8'))
// })

readFile('./package.json').then( data => {
    console.log(data.toString())
})

