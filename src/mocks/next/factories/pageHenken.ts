import { graphql } from "msw";

import { AllHenkenPagesDocument, HenkenPageDocument } from "../../codegen";

import { henkens } from "./constants";

export const mockAllHenkenPagesQuery = graphql.query(AllHenkenPagesDocument, (req, res, ctx) => {
  return res(
    ctx.data({
      __typename: "Query",
      manyHenkens: {
        __typename: "HenkenConnection",
        edges: henkens.map(({ id }) => ({
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

export const mockHenkenPageQuery = graphql.query(HenkenPageDocument, (req, res, ctx) => {
  const found = henkens.find(({ id }) => id === req.variables.id);
  if (!found) {
    return res(ctx.data({
      __typename: "Query",
      findHenken: {
        __typename: "FindHenkenPayload",
        henken: null,
      },
    }));
  }
  return res(
    ctx.data({
      __typename: "Query",
      findHenken: {
        __typename: "FindHenkenPayload",
        henken: {
          __typename: "Henken",
          ...found,
          postedBy: {
            __typename: "User",
            ...found.postedBy,
          },
          postsTo: {
            __typename: "User",
            ...found.postsTo,
          },
        },
      },
    }),
  );
});
