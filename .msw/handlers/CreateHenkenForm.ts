import { graphql } from "msw";
import {
  CreateHenkenFormCreateHenkenDocument,
  CreateHenkenFormSearchContentDocument,
  CreateHenkenFormSearchUserDocument,
} from "./codegen";

export const querySearchUser = graphql.query(
  CreateHenkenFormSearchUserDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        searchUser: {
          __typename: "SearchUserPayload",
          results: generator.pick(searchNodes, generator.integer(0, 4)),
        },
      }),
    );
  },
);

export const mutationCreateHenken = graphql.mutation(
  CreateHenkenFormCreateHenkenDocument,
  (req, res, ctx) => {
    return res(ctx.data({
      __typename: "Mutation",
      createHenken: {
        __typename: "CreateHenkenPayload",
        henken: {
          __typename: "Henken",
          id: "created",
        },
      },
    }));
  },
);

export const querySearchContent = graphql.query(
  CreateHenkenFormSearchContentDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        searchContent: {
          __typename: "SearchContentPayload",
          results: generator.pick(searchNodes, generator.integer(0, 4)),
        },
      }),
    );
  },
);
