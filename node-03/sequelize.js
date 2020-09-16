(async () => {
    const Sequelize = require('sequelize');
    // 建立连接
    // 数据库 用户名 密码
    const sequelize = new Sequelize("test_db", "root", "123456", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false
    });

    // 定义模型
    const Fruit = sequelize.define("Fruit", {
        name: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });

    // 同步
    let ret = await Fruit.sync();
    console.log('ret', ret);

    // 创建
    ret = await Fruit.create({
        name: '香蕉',
        price: 3.5
    })

    // console.log('create:', ret)

    // 查询 
    ret = await Fruit.findAll();
    console.log('findAll', JSON.stringify(ret));

})()