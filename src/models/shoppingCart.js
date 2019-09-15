const shoppingCart = (sequelize, DataTypes) => {
	const ShoppingCart = sequelize.define('shoppingCart', {});
	ShoppingCart.associate = models => {
		ShoppingCart.belongsTo(models.User);
	};
	ShoppingCart.associate = models => {
		ShoppingCart.hasMany(models.CartProduct, { onDelete: 'CASCADE' });
	};
	return ShoppingCart;
};
export default shoppingCart;