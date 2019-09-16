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
            console.log("args:", args)
            try {
                const order = { ...args };
                return await models.Order.create(
                    order
                );
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteOrder: async (parent, { id }, { models }) => {
            return await models.Order.destroy({ where: { id } });
        },
    },
};