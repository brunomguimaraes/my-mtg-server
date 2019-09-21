const cartProduct = (sequelize, DataTypes) => {
	const CartProduct = sequelize.define('cartProduct', {
		quantityOnCart: {
			type: DataTypes.INTEGER,
		},
	});
	CartProduct.associate = models => {
		CartProduct.belongsTo(models.ShoppingCart);
	};
	return CartProduct;
};
export default cartProduct;