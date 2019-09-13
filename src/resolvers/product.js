export default {
    Query: {
        products: async (parent, args, { models }) => {
            return await models.Product.findAll();
        },
        product: async (parent, { id }, { models }) => {
            return await models.Product.findByPk(id);
        },
    },
    Mutation: {
        createProduct: async (parent, { models }) => {
            try {
                return await models.Product.create({
                    products,
                });
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteProduct: async (parent, { id }, { models }) => {
            return await models.Product.destroy({ where: { id } });
        },
    },
};