'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    table: DataTypes.DECIMAL(10,2),
    client_name: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
Order.hasMany(models.Products_x_Order)
  };
  return Order;
};