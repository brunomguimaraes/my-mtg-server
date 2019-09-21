import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    orderedProducts: [OrderedProduct!]!
    orderedProduct(id: ID!): OrderedProduct!
  }

type OrderedProduct {
  id: ID!
  name: String
  order: Order
  price: Float
  quantity: Int
}

input OrderedProductInput {
  orderId: ID
  name: String
  price: Float
  quantity: Int
}

extend type Mutation {
	createOrderedProduct(
    orderId: ID
    name: String
    price: Float
    quantity: Int
  ): OrderedProduct
  deleteOrderedProduct(id: ID!): Boolean!
}
`;
