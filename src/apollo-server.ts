import { ApolloServer } from "apollo-server-lambda";

import { resolvers } from "./resolvers";
import { typeDefs } from "./type-defs";

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  /**
   *　By default, the GraphQL Playground interface and GraphQL introspection
   * 　is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
   *
   * 　If you'd like to have GraphQL Playground and introspection enabled in production,
   * 　the `playground` and `introspection` options must be set explicitly to `true`.
   */
  playground: true,
  introspection: true,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

export const graphqlHandler = apolloServer.createHandler({
  cors: {
    // origin: true,
    origin: "*",
    credentials: true,
  },
});
