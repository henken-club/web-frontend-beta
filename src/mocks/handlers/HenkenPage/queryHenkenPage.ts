import { graphql } from "msw";

import { HenkenPageDocument } from "~/mocks/codegen";
import { authors, books, henkens, users } from "~/mocks/constants";

export const queryHenkenPage = graphql.query(HenkenPageDocument, (req, res, ctx) => {
  const henkenId = req.variables.id;
  if (!(Object.keys(henkens).includes as (k: string) => k is keyof typeof henkens)(henkenId)) {
    return res(
      ctx.data({
        __typename: "Query",
        findHenken: {
          __typename: "FindHenkenPayload",
          henken: null,
        },
      }),
    );
  }

  const { postsToId, answer, comment, content, postedById } = henkens[henkenId];
  return res(
    ctx.data({
      __typename: "Query",
      findHenken: {
        __typename: "FindHenkenPayload",
        henken: {
          __typename: "Henken",
          id: henkenId,
          comment,
          answer: answer
            ? {
              __typename: "Answer",
              id: answer.id,
              type: answer.type,
              comment: answer.comment,
            }
            : null,
          postedBy: {
            __typename: "User",
            id: postedById,
            alias: users[postedById].alias,
            displayName: users[postedById].displayName,
            avatar: users[postedById].avatar,
          },
          postsTo: {
            __typename: "User",
            id: postsToId,
            alias: users[postsToId].alias,
            displayName: users[postsToId].displayName,
            avatar: users[postsToId].avatar,
          },
          content: (() => {
            switch (content.type) {
              case "book":
                return {
                  __typename: "Book",
                  id: content.id,
                  title: books[content.id].title,
                  cover: books[content.id].cover,
                  writings: {
                    __typename: "WritingConnection",
                    edges: books[content.id].writings.map(({ authorId }) => ({
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
