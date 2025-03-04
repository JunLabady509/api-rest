// User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
}, {
  tableName: 'users',
  timestamps: true,
  underscored: true,
});


User.beforeCreate(async (user) => {
  try {
    user.password = await bcrypt.hash(user.password, 12);
    user.email = user.email.toLowerCase();
  } catch (error) {
    console.error("Erreur avant la création de l'utilisateur :", error);
    throw new Error("Erreur avant la création de l'utilisateur");
  }
}
);

User.beforeUpdate(async (user) => {
  try {
    user.password = await bcrypt.hash(user.password, 12);
    user.email = user.email.toLowerCase();
  } catch (error) {
    console.error("Erreur avant la mise à jour de l'utilisateur :", error);
    throw new Error("Erreur avant la mise à jour de l'utilisateur");
  }
}
);

module.exports = User;
