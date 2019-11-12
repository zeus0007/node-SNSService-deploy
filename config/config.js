require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "korea7601!",
    database: "nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: "korea7601!",
    database: "nodebird",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    logging: false
  }
};
