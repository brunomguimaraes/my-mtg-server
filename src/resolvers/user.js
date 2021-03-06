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

  Mutation: {
    createUser: async (parent, args, { models }) => {
      try {
        const user = { ...args };
        return await models.User.create(user);
      } catch (error) {
        throw new Error(error);
      }
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
