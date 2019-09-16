import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    cartProducts: [CartProduct!]!
    cartProduct(id: ID!): CartProduct!
  }

type CartProduct {
  id: ID!
	product: Product
  shoppingCart: ShoppingCart
	quantityOnCart: Int
}

type CartProductInput {
  productId: ID
  quantityOnCart: Int
  shoppingCartId: ID
}

extend type Mutation {
		createCartProduct(
			quantityOnCart: Int
      productId: ID
      shoppingCartId: ID
  ): CartProductInput
  deleteCartProduct(id: ID!): Boolean!
}
`;
