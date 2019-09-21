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

input UpdateCartProductInput {
  id: ID!
  quantityOnCart: Int
}

extend type Mutation {
	createCartProduct(input: CreateCartProductInput): CartProduct
  updateCartProduct(input: UpdateCartProductInput): CartProduct
  deleteCartProduct(id: ID!): Boolean!
}
`;
