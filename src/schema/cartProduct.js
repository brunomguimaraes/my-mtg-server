import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    cartProducts: [CartProduct!]!
    cartProduct(id: ID!): CartProduct!
  }

type CartProduct {
  id: ID!
	product: Product
	quantityOnCart: Int
}

type CartProductInput {
  productId: ID
  quantityOnCart: Int
}

extend type Mutation {
		createCartProduct(
			quantityOnCart: Int
      productId: ID
  ): CartProductInput
  deleteCartProduct(id: ID!): Boolean!
}
`;
