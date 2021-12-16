require('dotenv').config();

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

async function startServer() {
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

  await mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@localhost:27017/${process.env.MONGODB_DB_NAME}?authSource=${process.env.MONGODB_AUTH_SOURCE}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  console.log('Mongoose connected');

  app.listen(4000, () => console.log('Listening on port 4000'));
}
startServer();
