import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    orders: [Order!]!
    order(id: ID!): Order!
  }

type Order {
  id: ID!
	cartProducts: [CartProduct]
	user: User
	isPaid: Boolean
	totalOrderValue: Float
	productsOrdered: [OrderedProduct]
}

type OrderInput {
   	userId: ID
		totalOrderValue: Float
		isPaid: Boolean
}

extend type Mutation {
	createOrder(
  	userId: ID
		totalOrderValue: Float
		isPaid: Boolean
		orderedProductIds: [ID]
  ): OrderInput
  deleteOrder(id: ID!): Boolean!
}
`;
