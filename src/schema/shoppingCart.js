import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    shoppingCarts: [ShoppingCart!]!
    shoppingCart(id: ID!): ShoppingCart!
  }

  type ShoppingCart {
    id: ID!
    cartProducts: [CartProduct]
    user: User
  }

  type ShoppingCartInput {
    userId: ID
  }

  extend type Mutation {
    createShoppingCart(userId: ID): ShoppingCartInput
    deleteShoppingCart(id: ID!): Boolean!
  }
`;
