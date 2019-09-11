require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "tribbler",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.PASSWORD,
    database: "test_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
