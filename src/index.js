import "dotenv/config";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const app = express();
const port = process.env.PORT || 8000;
const force = process.env.FORCE_SYNC === "false";

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    const message = error.message
      .replace("SequelizeValidationError: ", "")
      .replace("Validation error: ", "");
    return {
      ...error,
      message,
    };
  },
  context: async () => ({
    models,
    me: await models.User.findByName("John Doe"),
  }),
  schema: augmentedSchema,
  introspection: true, // enables introspection of the schema on production
  playground: true, // enables the actual playground on production
});

server.applyMiddleware({ app, path: "/graphql" });

sequelize.sync({ force }).then(async () => {
  if (force) {
    createUsersWithCreditCardInfo();
  }
  app.listen(port, () => {
    console.log(`Apollo Server running on port: ${port}`);
  });
});

//adding this here just for simplify the initial user creation on db

const createUsersWithCreditCardInfo = async () => {
  await models.User.create(
    {
      name: "John Doe",
      creditCardInfo: [
        {
          cardNumber: 291032901234,
          cvv: 123,
          isValid: true,
        },
        {
          cardNumber: 473892019999,
          isValid: false,
        },
      ],
    },
    {
      include: [models.PaymentInfo],
    },
  );
};
