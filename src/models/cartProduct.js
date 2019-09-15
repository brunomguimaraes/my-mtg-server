const cartProduct = (sequelize, DataTypes) => {
	const CartProduct = sequelize.define('cartProduct', {
		quantityOnCart: {
			type: DataTypes.INTEGER,
		},
	});
	return CartProduct;
};
export default cartProduct;