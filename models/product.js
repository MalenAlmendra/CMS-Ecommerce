'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description:{
      type:DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type:DataTypes.DECIMAL,
      allowNull: false
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};