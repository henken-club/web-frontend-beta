import { graphql } from "msw";

import { AllUsersPagesDocument } from "~/mocks/codegen";
import { c } from "~/mocks/constraints";

export const queryAllUserPages = graphql.query(AllUsersPagesDocument, (req, res, ctx) => {
  return res(
    ctx.data({
      __typename: "Query",
      manyUsers: {
        __typename: "UserConnection",
        edges: Object.values(c.users).map(({ alias }) => ({
          __typename: "UserEdge",
          node: {
            __typename: "User",
            alias,
          },
        })),
      },
    }),
  );
});
