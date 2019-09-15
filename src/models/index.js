import Sequelize from 'sequelize';
const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	{
		dialect: 'postgres',
	},
);
const models = {
	User: sequelize.import('./user'),
	PaymentInfo: sequelize.import('./payment'),
	Product: sequelize.import('./product'),
	CartProduct: sequelize.import('./cartProduct'),
	ShoppingCart: sequelize.import('./shoppingCart'),
};
Object.keys(models).forEach(key => {
	if ('associate' in models[key]) {
		models[key].associate(models);
	}
});
export { sequelize };
export default models;