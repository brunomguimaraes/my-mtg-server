export default {
  Query: {
    orderedProducts: async (parent, args, { models }) => {
      return await models.OrderedProduct.findAll();
    },
    orderedProduct: async (parent, { id }, { models }) => {
      return await models.OrderedProduct.findByPk(id);
    },
  },
  Mutation: {
    createOrderedProduct: async (parent, args, { models }) => {
      try {
        const orderedProduct = { ...args };
        return await models.OrderedProduct.create(orderedProduct);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteOrderedProduct: async (parent, { id }, { models }) => {
      return await models.OrderedProduct.destroy({ where: { id } });
    },
  },
  OrderedProduct: {
    order: async (orderedProduct, args, { models }) => {
      return await models.Order.findByPk(shoppingCart.orderedProduct);
    },
  },
};
