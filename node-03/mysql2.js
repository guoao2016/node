(async () => {
    const mysql = require('mysql2/promise')
    const cfg = {
        host: 'localhost',
        user: "root",
        password: "123456", // 修改为你的密码
        database: "test_db" // 请确保数据库存在
    }

    const connection = await mysql.createConnection(cfg);
    // console.log('conn', connection);

    // 创建表  - 直接在命令行执行
//     let ret = await connection.execute(`
//         CREATE TABLE IF NOT EXISTS test (
//           id INT NOT NULL AUTO_INCREMENT,
//           message VARCHAR(45) NULL,
//           PRIMARY KEY (id))
//         `)

    // 插入数据
    ret = await connection.execute(`
        INSERT INTO test(message) VALUE(?)
    `,['ABC'])
    // console.log('insert', ret);


    
    // 查询
    const [rows, fields] = await connection.execute(`
        SELECT * FROM test
    `)
    console.log('select:', JSON.stringify(rows));
})()