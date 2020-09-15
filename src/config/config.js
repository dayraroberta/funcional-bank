module.exports = {
    "development": {
        "username": "root",
        "password": process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : "password",
        "database": "funcional_bank",
        "host": process.env.MYSQL_HOST ? process.env.MYSQL_HOST : "127.0.0.1",
        "dialect": "mysql"
    },
}