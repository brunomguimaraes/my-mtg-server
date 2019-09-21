const shoppingCart = (sequelize, DataTypes) => {
	const ShoppingCart = sequelize.define('shoppingCart', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true
		},
	});
	ShoppingCart.associate = models => {
		ShoppingCart.hasMany(models.CartProduct, { onDelete: 'CASCADE' });
		ShoppingCart.belongsTo(models.User);
	};

	return ShoppingCart;
};
export default shoppingCart;