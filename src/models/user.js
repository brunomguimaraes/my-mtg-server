const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  User.associate = models => {
    User.hasMany(models.PaymentInfo, { onDelete: "CASCADE" });
    User.hasMany(models.Order, { onDelete: "CASCADE" });
    User.hasOne(models.ShoppingCart, { onDelete: "CASCADE" });
  };
  User.findByName = async name => {
    let user = await User.findOne({
      where: { name: name },
    });
    return user;
  };
  return User;
};
export default user;
