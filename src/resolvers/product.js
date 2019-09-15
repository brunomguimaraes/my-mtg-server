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
                console.log("product arg:", product)
                return await models.Product.create(
                    product,
                );
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteProduct: async (parent, { id }, { models }) => {
            return await models.Product.destroy({ where: { id } });
        },
    },
};