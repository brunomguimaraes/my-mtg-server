export default {
	Query: {
		cartProducts: async (parent, args, { models }) => {
			return await models.CartProduct.findAll();
		},
		cartProduct: async (parent, { id }, { models }) => {
			return await models.CartProduct.findByPk(id);
		},
	},
	Mutation: {
		createCartProduct: async (parent, args, { models }) => {
			console.log("args:", args)
			try {
				const cartProduct = { ...args };
				return await models.CartProduct.create(
					cartProduct
				);
			} catch (error) {
				throw new Error(error);
			}
		},
		deleteCartProduct: async (parent, { id }, { models }) => {
			return await models.CartProduct.destroy({ where: { id } });
		},
	},
	CartProduct: {
		product: async (cartProduct, args, { models }) => {
			return await models.Product.findOne({
				where: {
					id: cartProduct.productId,
				},
			});
		},
	},
};