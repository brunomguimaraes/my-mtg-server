import uuidv4 from 'uuid/v4';

export default {
    Query: {
        creditCardInfos: (parent, args, { models }) => {
            return Object.values(models.creditCardInfos);
        },
        creditCardInfo: (parent, { id }, { models }) => {
            return models.creditCardInfos[id];
        },
    },

    PaymentInfo: {
        user: (paymentInfo, args, { models }) => {
            return models.users[paymentInfo.userId];
        },
    },
};