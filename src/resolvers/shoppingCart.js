export default {
  Query: {
    shoppingCarts: async (parent, args, { models }) => {
      return await models.ShoppingCart.findAll();
    },
    shoppingCart: async (parent, { id }, { models }) => {
      return await models.ShoppingCart.findByPk(id);
    },
  },
  Mutation: {
    createShoppingCart: async (parent, args, { me, models }) => {
      try {
        const shoppingCart = { userId: me.id };
        return await models.ShoppingCart.create(shoppingCart);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteShoppingCart: async (parent, { id }, { models }) => {
      return await models.ShoppingCart.destroy({ where: { id } });
    },
  },
  ShoppingCart: {
    user: async (shoppingCart, args, { models }) => {
      return await models.User.findByPk(shoppingCart.userId);
    },
    cartProducts: async (shoppingCart, args, { models }) => {
      return await models.CartProduct.findAll({
        where: {
          shoppingCartId: shoppingCart.id,
        },
      });
    },
  },
};
