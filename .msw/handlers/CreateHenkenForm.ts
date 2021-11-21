import { graphql } from "msw";
import {
  CreateHenkenFormCreateHenkenDocument,
  CreateHenkenFormSearchContentDocument,
  CreateHenkenFormSearchUserDocument,
} from "./codegen";

export const queryCreateHenkenFormSearchUser = graphql.query(
  CreateHenkenFormSearchUserDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        searchUser: {
          __typename: "SearchUserPayload",
          results: [],
        },
      }),
    );
  },
);

export const mutationCreateHenkenFormCreateHenken = graphql.mutation(
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

export const queryCreateHenkenFormSearchContent = graphql.query(
  CreateHenkenFormSearchContentDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        searchContent: {
          __typename: "SearchContentPayload",
          results: [],
        },
      }),
    );
  },
);
