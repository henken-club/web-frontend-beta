import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  // eslint-disable-next-line no-process-env
  process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
);
