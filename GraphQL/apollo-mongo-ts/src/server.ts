import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
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

    /*
    TypeError: Cannot read property 'constructor' of undefined
    at new ConnectionString (/node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongodb-connection-string-url/src/index.ts:155:94)
    at parseOptions (/node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongodb/src/connection_string.ts:257:15)
    at new MongoClient (/node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongodb/src/mongo_client.ts:337:34)
    at /node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongoose/lib/connection.js:779:16
    at new Promise (<anonymous>)
    at NativeConnection.Connection.openUri (/node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongoose/lib/connection.js:776:19)
    at /node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongoose/lib/index.js:332:10
    at /node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongoose/lib/helpers/promiseOrCallback.js:32:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/node-js-playground/GraphQL/apollo-mongo-ts/node_modules/mongoose/lib/helpers/promiseOrCallback.js:31:10)
    */
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
