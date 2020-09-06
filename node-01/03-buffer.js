// 用于处理二进制数据

const buf1 = Buffer.alloc(10);
console.log(buf1)

const buf2 = Buffer.from([1, 2, 3]);
console.log(buf2)

const buf3 = Buffer.from('Buffer 创建方法')

console.log(buf3.toString());

buf1.write('hello')
console.log('buf1:', buf1);

const buf4 = Buffer.concat([buf1, buf3])
console.log('buf4', buf4.toString());

