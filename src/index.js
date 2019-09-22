import "dotenv/config";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import uuidv4 from "uuid/v4";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const app = express();

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
});

server.applyMiddleware({ app, path: "/graphql" });

const eraseDatabaseOnSync = false;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithCreditCardInfo();
  }
  app.listen({ port: 8000 }, () => {
    console.log("Apollo Server running");
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
