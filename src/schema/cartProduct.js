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

input CreateCartProductInput {
  productId: ID
  quantityOnCart: Int
  shoppingCartId: ID
}

extend type Mutation {
		createCartProduct(
input: CreateCartProductInput
  ): CartProduct
  deleteCartProduct(id: ID!): Boolean!
}
`;
