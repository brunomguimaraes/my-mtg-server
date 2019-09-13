import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    products: [Product!]!
    product(id: ID!): Product!
  }

type Product {
  id: ID!
  imgUrl: String
  name: String
  price: Float
  quantityInStock: Int 
  cardType: String
  description: String
}

extend type Mutation {
		createProduct(
		imgUrl: String
		name: String!
		price: Float
		quantityInStock: Int 
		cardType: String
		description: String
  ): Product!
  deleteProduct(id: ID!): Boolean!
}
`;