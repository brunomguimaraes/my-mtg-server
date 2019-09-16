import { gql } from 'apollo-server-express';

import userSchema from './user';
import paymentSchema from './payment';
import productSchema from './product';
import cartProductSchema from './cartProduct';
import shoppingCartSchema from './shoppingCart';
import orderSchema from './order';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, paymentSchema, productSchema, cartProductSchema, shoppingCartSchema, orderSchema];