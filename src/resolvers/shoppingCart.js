export default {
    Query: {
        shoppingCarts: async (parent, args, { models }) => {
            return await models.ShoppingCart.findAll();
        },
        shoppingCart: async (parent, { id }, { models }) => {
            return await models.ShoppingCart.findByPk(id);
        },
    },
    ShoppingCart: {
        user: async (shoppingCart, args, { models }) => {
            return await models.User.findByPk(shoppingCart.userId);
        },
        cartProducts: async (shoppingCart, args, { models }) => {
            return await models.CartProduct.findByPk(shoppingCart.cartProductIds);
        },
    },
};