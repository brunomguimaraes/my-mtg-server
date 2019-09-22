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
      try {
        const cartProduct = { ...args.input };
        return await models.CartProduct.create(cartProduct);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateCartProduct: async (parent, args, { models }) => {
      try {
        const cartProduct = {
          ...args.input,
        };
        return await models.CartProduct.findByPk(cartProduct.id).then(
          cartProductInstance => {
            return cartProductInstance
              .update(cartProduct)
              .then(self => {
                return self;
              });
          },
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCartProduct: async (parent, args, { models }) => {
      console.log("args.input", args.input);
      return await models.CartProduct.destroy({
        where: { id: args.input.id },
      });
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
    shoppingCart: async (cartProduct, args, { models }) => {
      return await models.ShoppingCart.findByPk(
        cartProduct.shoppingCartId,
      );
    },
  },
};
