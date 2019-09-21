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
  cardColor: Colors
}

input UpdateProductInput {
  id: ID!
  quantityInStock: Int
}

enum Colors {
  Blue
  Black
  Colorless
  White
  Green
  Red
  Gold
}

extend type Mutation {
		createProduct(
		imgUrl: String
		name: String!
		price: Float
		quantityInStock: Int 
		cardType: String
		description: String
    cardColor: Colors
  ): Product!
  updateProduct(input: UpdateProductInput): Product
  deleteProduct(id: ID!): Boolean!
}
`;