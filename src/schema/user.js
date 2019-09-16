import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type User {
    creditCardInfo: [PaymentInfo!]!
    id: ID!
    name: String!
    order: [Order]
    shoppingCart: ShoppingCart
  }
`;
