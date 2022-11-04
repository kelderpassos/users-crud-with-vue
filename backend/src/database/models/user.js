const sequelize = require('sequelize');
const database = require('../db');
const Address = require('./address');

class User extends sequelize.Model {}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    CPF: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    tableName: 'UserTable',
  }
);

User.hasMany(Address, { foreignKey: 'id', as: 'address' });

module.exports = User;