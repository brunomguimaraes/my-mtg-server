const order = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    totalOrderValue: {
      type: DataTypes.FLOAT,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
    },
  });
  Order.associate = models => {
    Order.belongsTo(models.User, { onDelete: "CASCADE" });
    Order.hasMany(models.OrderedProduct, { onDelete: "CASCADE" });
  };
  return Order;
};
export default order;
