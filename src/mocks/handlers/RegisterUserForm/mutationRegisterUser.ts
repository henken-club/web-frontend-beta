import { graphql } from "msw";

import { RegisterUserDocument } from "~/mocks/codegen";

export const mutationRegisterUser = graphql.mutation(RegisterUserDocument, (req, res, ctx) => {
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
});
