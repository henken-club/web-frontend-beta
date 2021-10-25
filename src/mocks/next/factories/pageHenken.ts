import { graphql } from "msw";

import { AllHenkenPagesDocument, HenkenPageDocument } from "../../codegen";

import { authors, books, henkens, users } from "./constants";

export const mockAllHenkenPagesQuery = graphql.query(AllHenkenPagesDocument, (req, res, ctx) => {
  return res(
    ctx.data({
      __typename: "Query",
      manyHenkens: {
        __typename: "HenkenConnection",
        edges: Object.keys(henkens).map((id) => ({
          __typename: "HenkenEdge",
          node: { __typename: "Henken", id },
        })),
      },
    }),
  );
});

export const mockHenkenPageQuery = graphql.query(HenkenPageDocument, (req, res, ctx) => {
  const henkenId = req.variables.id;
  if (!(Object.keys(henkens).includes as (k: string) => k is keyof typeof henkens)(henkenId)) {
    return res(ctx.data({ __typename: "Query", findHenken: { __typename: "FindHenkenPayload", henken: null } }));
  }

  const henken = henkens[henkenId];
  return res(
    ctx.data({
      __typename: "Query",
      findHenken: {
        __typename: "FindHenkenPayload",
        henken: {
          __typename: "Henken",
          id: henkenId,
          comment: henken.comment,
          answer: henken.answer
            ? { __typename: "Answer", ...henken.answer }
            : null,
          postedBy: {
            __typename: "User",
            id: henken.postedBy,
            alias: users[henken.postedBy].alias,
            displayName: users[henken.postedBy].displayName,
            avatar: users[henken.postedBy].avatar,
          },
          postsTo: {
            __typename: "User",
            id: henken.postsTo,
            alias: users[henken.postsTo].alias,
            displayName: users[henken.postsTo].displayName,
            avatar: users[henken.postsTo].avatar,
          },
          content: (() => {
            switch (henken.content.type) {
              case "book":
                return {
                  __typename: "Book",
                  id: henken.content.id,
                  title: books[henken.content.id].title,
                  cover: books[henken.content.id].cover,
                  writings: {
                    __typename: "WritingConnection",
                    edges: books[henken.content.id].writings.map(({ authorId }) => ({
                      __typename: "WritingEdge",
                      node: {
                        __typename: "Writing",
                        author: {
                          __typename: "Author",
                          id: authorId,
                          name: authors[authorId].name,
                        },
                      },
                    } as const)),
                  },
                } as const;
            }
          })(),
        },
      },
    }),
  );
});
