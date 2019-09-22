export default {
  Query: {
    creditCardInfos: async (parent, args, { models }) => {
      return await models.PaymentInfo.findAll();
    },
    creditCardInfo: async (parent, { id }, { models }) => {
      return await models.PaymentInfo.findByPk(id);
    },
  },
  Mutation: {
    createCreditCard: async (parent, args, { me, models }) => {
      try {
        return await models.PaymentInfo.create({
          cvv: args.cvv,
          isValid: args.isValid,
          cardNumber: args.cardNumber,
          userId: me.id,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCreditCard: async (parent, { id }, { models }) => {
      return await models.PaymentInfo.destroy({ where: { id } });
    },
  },
  PaymentInfo: {
    user: async (creditCardInfo, args, { models }) => {
      return await models.User.findByPk(creditCardInfo.userId);
    },
  },
};
