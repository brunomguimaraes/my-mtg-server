const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
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
		User.hasMany(models.PaymentInfo, { onDelete: 'CASCADE' });
	};
	User.findByLogin = async login => {
		let user = await User.findOne({
			where: { name: login },
		});
		return user;
	};
	return User;
};
export default user;