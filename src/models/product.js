const product = (sequelize, DataTypes) => {
	const Product = sequelize.define('product', {
		imgUrl: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					args: true,
					msg: 'Product name needed.'
				}
			},
		},
		price: {
			type: DataTypes.FLOAT,
		},
		quantityInStock: {
			type: DataTypes.INTEGER,
		},
		cardType: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
		},
	});
	Product.associate = models => {
		Product.hasOne(models.CartProduct, { onDelete: 'CASCADE' });
	};
	return Product;
};
export default product;
