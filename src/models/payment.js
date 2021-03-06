const paymentInfo = (sequelize, DataTypes) => {
  const PaymentInfo = sequelize.define("paymentInfo", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    cardNumber: {
      type: DataTypes.BIGINT,
      validate: {
        notEmpty: {
          args: true,
          msg: "Card has to have a number.",
        },
      },
    },
    cvv: {
      type: DataTypes.INTEGER,
    },
    isValid: {
      type: DataTypes.BOOLEAN,
    },
  });
  PaymentInfo.associate = models => {
    PaymentInfo.belongsTo(models.User);
  };
  return PaymentInfo;
};
export default paymentInfo;
