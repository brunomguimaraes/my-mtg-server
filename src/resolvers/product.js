export default {
	Query: {
		products: async (parent, args, { models }) => {
			return await models.Product.findAll();
		},
		product: async (parent, { id, name }, { models }) => {
			return await models.Product.findByPk(id);
		},
	},
	Mutation: {
		createProduct: async (parent, args, { models }) => {
			try {
				const product = { ...args }
				return await models.Product.create(
					product,
				);
			} catch (error) {
				throw new Error(error);
			}
		},
		updateProduct: async (parent, args, { models }) => {
			try {
				const product = {
					...args.input
				}
				return await models.Product.findByPk(product.id).then((productInstance) => {
					return productInstance.update(product).then((self) => {
						return self
					})
				})
			}
			catch (error) {
				throw new Error(error);
			}
		},
		deleteProduct: async (parent, { id }, { models }) => {
			return await models.Product.destroy({ where: { id } });
		},
	},
};