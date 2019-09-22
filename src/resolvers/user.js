export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
    me: async (parent, args, { models, me }) => {
      if (!me) {
        return null;
      }
      return await models.User.findByPk(me.id);
    },
  },

  User: {
    creditCardInfo: async (user, args, { models }) => {
      return await models.PaymentInfo.findAll({
        where: {
          userId: user.id,
        },
      });
    },
    order: async (user, args, { models }) => {
      return await models.Order.findAll({
        where: {
          userId: user.id,
        },
      });
    },
    shoppingCart: async (user, args, { models }) => {
      return await models.ShoppingCart.findOne({
        where: {
          userId: user.id,
        },
      });
    },
  },
};
