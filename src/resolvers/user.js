export default {
	Query: {
		users: (parent, args, { models }) => {
			return Object.values(models.users);
		},
		user: (parent, { id }, { models }) => {
			return models.users[id];
		},
		me: (parent, args, { me }) => {
			return me;
		},
	},

	User: {
		creditCardInfo: (user, args, { models }) => {
			return Object.values(models.creditCardInfos).filter(
				creditCardInfo => creditCardInfo.userId === user.id,
			);
		},
	},
};