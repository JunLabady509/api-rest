const { Sequelize } = require('sequelize');

let sequelize;

sequelize = new Sequelize(
  process.env.DB_NAME,           
  process.env.DB_USER,           
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST || "localhost",  
    dialect: process.env.DB_DIALECT || "mariadb",
    logging: false,
  }
);

module.exports = sequelize;