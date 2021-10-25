import { graphql } from "msw";

import { AllHenkenPagesDocument } from "~/mocks/codegen";
import { henkens } from "~/mocks/constants";

export const queryAllHenkenPages = graphql.query(AllHenkenPagesDocument, (req, res, ctx) => {
  return res(
    ctx.data({
      __typename: "Query",
      manyHenkens: {
        __typename: "HenkenConnection",
        edges: Object.keys(henkens).map((id) => ({
          __typename: "HenkenEdge",
          node: {
            __typename: "Henken",
            id,
          },
        })),
      },
    }),
  );
});
