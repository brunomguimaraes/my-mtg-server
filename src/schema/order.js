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

input CreateOrderInput {
		totalOrderValue: Float
		isPaid: Boolean
		orderedProduct: [OrderedProductInput]
}

extend type Mutation {
	createOrder( input: CreateOrderInput
  ): Order
  deleteOrder(id: ID!): Boolean!
}
`;
