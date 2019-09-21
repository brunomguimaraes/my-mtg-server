export default {
	Query: {
		orders: async (parent, args, { models }) => {
			return await models.Order.findAll();
		},
		order: async (parent, { id }, { models }) => {
			return await models.Order.findByPk(id);
		},
	},
	Mutation: {
		createOrder: async (parent, args, { models }) => {
			console.log("argsAQUIAQUI:", args)
			try {
				const order = { ...args };
				const orderResult = await models.Order.create(
					order, { include: [models.OrderedProduct] }
				);

				return orderResult
			} catch (error) {
				throw new Error(error);
			}
		},
		deleteOrder: async (parent, { id }, { models }) => {
			return await models.Order.destroy({ where: { id } });
		},
	},
	Order: {
		orderedProduct: async (order, args, { models }) => {
			return await models.OrderedProduct.findAll({
				where: {
					orderId: order.id,
				},
			});
		},
	},
};