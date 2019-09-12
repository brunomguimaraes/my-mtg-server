import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    creditCardInfos: [PaymentInfo!]!
    creditCardInfo(id: ID!): PaymentInfo!
  }

  type PaymentInfo {
    id: ID!
    user: User!
    cardNumber: Int!
    cvv: Int!
    isValid: Boolean!
  }
`;
