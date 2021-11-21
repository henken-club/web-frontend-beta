import { graphql } from "msw";
import { RegisterUserDocument, RegisterUserIsAliasUniqueDocument } from "./codegen";

export const queryIsAliasUnique = graphql.query(
  RegisterUserIsAliasUniqueDocument,
  (req, res, ctx) => {
    return res(ctx.data({
      __typename: "Query",
      findUser: {
        __typename: "FindUserPayload",
        user: {
          __typename: "User",
          id: "id",
        },
      },
    }));
  },
);

export const mutationRegisterUser = graphql.mutation(
  RegisterUserDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Mutation",
        registerUser: {
          __typename: "RegisterUserPayload",
          user: {
            __typename: "User",
            id: "viewer",
            alias: req.variables.alias,
            displayName: req.variables.displayName,
            avatar: req.variables.avatar,
          },
        },
      }),
    );
  },
);
