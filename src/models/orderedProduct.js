const orderedProduct = (sequelize, DataTypes) => {
  const OrderedProduct = sequelize.define("orderedProduct", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  });
  OrderedProduct.associate = models => {
    OrderedProduct.belongsTo(models.Order, { onDelete: "CASCADE" });
  };
  return OrderedProduct;
};
export default orderedProduct;
