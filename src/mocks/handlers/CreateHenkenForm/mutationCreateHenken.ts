import { graphql } from "msw";

import { CreateHenkenFormCreateHenkenDocument } from "~/mocks/codegen";

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
