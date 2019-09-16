const shoppingCart = (sequelize, DataTypes) => {
	const ShoppingCart = sequelize.define('shoppingCart', {});
	ShoppingCart.associate = models => {
		ShoppingCart.hasMany(models.CartProduct, { onDelete: 'CASCADE' });
		ShoppingCart.belongsTo(models.User);
	};

	return ShoppingCart;
};
export default shoppingCart;