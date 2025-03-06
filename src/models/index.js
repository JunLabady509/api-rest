const User = require('./user.js');
const Order = require('./order.js');

// Association
User.hasMany(Order, {
  foreignKey: 'user_id', // nom de la colonne sur Order
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Order.belongsTo(User, {
  foreignKey: 'id',
});

module.exports = {
  User,
  Order,
};
