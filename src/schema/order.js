import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    orders: [Order!]!
    order(id: ID!): Order!
  }

type Order {
  id: ID!
	user: User
	isPaid: Boolean
	totalOrderValue: Float
	orderedProduct: [OrderedProduct]
}

type CreateOrderInput {
		totalOrderValue: Float
		isPaid: Boolean
		userId: ID
}

extend type Mutation {
	createOrder(
		totalOrderValue: Float
		isPaid: Boolean
		userId: ID
		orderedProduct: [OrderedProductInput]
  ): Order
  deleteOrder(id: ID!): Boolean!
}
`;
