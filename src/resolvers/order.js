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
		createOrder: async (parent, args, { me, models }) => {
			try {
				const orderResult = await models.Order.create(
					{
						userId: me.id,
						isPaid: args.input.isPaid,
						totalOrderValue: args.input.totalOrderValue,
					}
				)

				args.input.orderedProduct.map(async product =>
					await models.OrderedProduct.create({
						orderId: orderResult.id,
						name: product.name,
						price: product.price,
						quantity: product.quantity
					})
				)

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