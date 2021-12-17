import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function startServer(): Promise<void> {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send('Apollo serv hello msg');
  });

  console.log(
    `DB connection as [${process.env.MONGODB_USER} : ${process.env.MONGODB_PASS}] to ${process.env.MONGODB_DB_NAME}`
  );

  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@localhost:27017/${process.env.MONGODB_DB_NAME}?authSource=${process.env.MONGODB_AUTH_SOURCE}`
    );

    console.log('Mongoose connected');

    app.listen(4000, () => console.log('Listening on port 4000'));
  } catch (err) {
    console.log(err);
  }
}
startServer();
